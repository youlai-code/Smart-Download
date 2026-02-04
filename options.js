const defaultRules = {
  "Images": ["jpg", "jpeg", "png", "gif", "webp", "svg"],
  "Documents": ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt"],
  "Videos": ["mp4", "mkv", "avi", "mov"],
  "Archives": ["zip", "rar", "7z", "tar", "gz"]
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('saveBtn').addEventListener('click', saveOptions);

function restoreOptions() {
  chrome.storage.local.get(['userRules'], (result) => {
    const rules = result.userRules || defaultRules;
    const container = document.getElementById('rulesContainer');
    
    container.innerHTML = '';
    
    for (const [folder, exts] of Object.entries(rules)) {
      const div = document.createElement('div');
      div.className = 'rule-group';
      div.innerHTML = `
        <h3>${folder}</h3>
        <textarea class="rule-textarea" id="rule-${folder}">${exts.join(', ')}</textarea>
      `;
      container.appendChild(div);
    }
  });
}

function saveOptions() {
  const newRules = {};
  const groups = document.querySelectorAll('.rule-group');
  
  groups.forEach(group => {
    const folder = group.querySelector('h3').textContent;
    const text = group.querySelector('textarea').value;
    // Clean up input: split by comma, trim whitespace, remove empty strings
    const exts = text.split(',').map(e => e.trim()).filter(e => e);
    newRules[folder] = exts;
  });

  chrome.storage.local.set({ userRules: newRules }, () => {
    const status = document.getElementById('status');
    status.style.display = 'inline';
    setTimeout(() => {
      status.style.display = 'none';
    }, 2000);
  });
}
