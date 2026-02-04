document.addEventListener('DOMContentLoaded', () => {
  renderDownloads();
  setupEventListeners();
});

let currentFilter = 'all';
let currentSearch = '';

function setupEventListeners() {
  // 搜索框事件
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderDownloads();
  });

  // 分类按钮事件
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 移除旧的 active 类
      document.querySelector('.filter-btn.active').classList.remove('active');
      // 添加新的 active 类
      btn.classList.add('active');
      
      currentFilter = btn.dataset.type;
      renderDownloads();
    });
  });
}

async function renderDownloads() {
  // 获取全量下载记录
  const items = await chrome.downloads.search({
    orderBy: ['-startTime']
  });

  // 更新今日统计
  updateStats(items);

  const listContainer = document.getElementById('downloadList');
  listContainer.innerHTML = ''; // 清空当前列表

  // 过滤逻辑
  const filteredItems = items.filter(item => {
    // 搜索过滤
    const matchesSearch = item.filename.toLowerCase().includes(currentSearch.toLowerCase()) || 
                          item.url.toLowerCase().includes(currentSearch.toLowerCase());
    
    // 分类过滤
    let matchesFilter = true;
    if (currentFilter !== 'all') {
      // 简单判断：检查文件路径是否包含分类文件夹名
      // 注意：这里假设 background.js 已经按文件夹归类
      // 在 Windows 上可能是反斜杠，所以统一检查
      const normalizedPath = item.filename.replace(/\\/g, '/');
      matchesFilter = normalizedPath.includes(`/${currentFilter}/`) || 
                      normalizedPath.startsWith(`${currentFilter}/`);
      
      // 如果文件没有被归类（旧文件），可能不在文件夹里，这里只显示明确匹配的
    }

    return matchesSearch && matchesFilter;
  });

  // 空状态处理
  if (filteredItems.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🍃</span>
        <p>没有找到相关文件</p>
      </div>
    `;
    return;
  }

  // 渲染卡片
  filteredItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'download-card';
    
    // 计算显示信息
    const shortName = item.filename.split(/[\\/]/).pop();
    const fileSize = formatFileSize(item.fileSize);
    const dateStr = new Date(item.startTime).toLocaleString();
    const typeClass = getFileTypeClass(shortName);
    const ext = shortName.split('.').pop().toUpperCase();
    const category = getCategoryFromItem(item);
    const urlText = item.url || '';
    const urlShort = shortenUrl(urlText);

    card.innerHTML = `
      <div class="card-top">
        <div class="file-icon ${typeClass}">${ext}</div>
        <div class="file-info">
          <div class="file-name" title="${item.filename}">${shortName}</div>
          <div class="file-meta">${fileSize} · ${dateStr} · <span class="file-category">${category}</span></div>
          <div class="file-url" title="${urlText}">${urlShort}</div>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn btn-open" data-id="${item.id}">打开</button>
        <button class="btn btn-folder" data-id="${item.id}">文件夹</button>
      </div>
    `;

    // 绑定事件
    card.querySelector('.btn-open').onclick = () => chrome.downloads.open(item.id);
    card.querySelector('.btn-folder').onclick = () => chrome.downloads.showDefault(item.id);

    listContainer.appendChild(card);
  });
}

function updateStats(items) {
  const today = new Date().toDateString();
  const todayCount = items.filter(item => new Date(item.startTime).toDateString() === today).length;
  document.getElementById('todayCount').textContent = todayCount;
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getFileTypeClass(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const types = {
    'type-image': ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'],
    'type-doc': ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt'],
    'type-video': ['mp4', 'mkv', 'avi', 'mov'],
    'type-archive': ['zip', 'rar', '7z', 'tar', 'gz']
  };

  for (const [cls, exts] of Object.entries(types)) {
    if (exts.includes(ext)) return cls;
  }
  return 'type-other';
}

function getCategoryFromItem(item) {
  if (!item.filename) return 'Others';
  const normalizedPath = item.filename.replace(/\\/g, '/');
  const firstSegment = normalizedPath.split('/')[0];
  return firstSegment ? firstSegment : 'Others';
}

function shortenUrl(url) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    const host = parsed.host;
    return url.length > 60 ? `${host}…` : url;
  } catch {
    return url.length > 60 ? `${url.slice(0, 57)}…` : url;
  }
}
