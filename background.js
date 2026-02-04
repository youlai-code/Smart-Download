// 默认分类逻辑，当 storage 为空时使用
const defaultRules = {
  "Images": ["jpg", "jpeg", "png", "gif", "webp", "svg"],
  "Documents": ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt"],
  "Videos": ["mp4", "mkv", "avi", "mov"],
  "Archives": ["zip", "rar", "7z", "tar", "gz"]
};

// 监听下载文件名确定事件
chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
  // 从本地存储获取用户自定义规则
  chrome.storage.local.get(['userRules'], (result) => {
    const rules = result.userRules || defaultRules;
    // 获取扩展名 (处理没有扩展名的情况)
    const filenameParts = item.filename.split('.');
    const extension = filenameParts.length > 1 ? filenameParts.pop().toLowerCase() : '';
    
    let subFolder = "Others";

    // 匹配规则：优先匹配扩展名
    if (extension) {
      for (const [folder, exts] of Object.entries(rules)) {
        if (exts.includes(extension)) {
          subFolder = folder;
          break;
        }
      }
    }

    // 构造最终保存路径
    // 注意：Chrome 扩展下载 API 不允许绝对路径，也不允许 '..'
    // 路径分隔符标准化为 forward slash
    const cleanFilename = item.filename.replace(/\\/g, '/');
    const finalPath = `${subFolder}/${cleanFilename}`;

    suggest({
      filename: finalPath,
      conflictAction: "uniquify"
    });
  });

  // 必须返回 true 以表示我们将异步调用 suggest
  return true;
});
