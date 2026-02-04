// 多语言字典
const i18n = {
  "zh-CN": {
    app_name: "下载自动归类",
    status_on: "正在运行",
    status_off: "已暂停",
    title_settings: "打开设置"
  },
  "en": {
    app_name: "TidyDownload",
    status_on: "Running",
    status_off: "Paused",
    title_settings: "Settings"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const els = {
    toggle: document.getElementById('toggle'),
    status: document.getElementById('statusText'),
    btnSettings: document.getElementById('btnSettings'),
    appName: document.querySelector('[data-i18n="app_name"]')
  };

  // 1. 获取配置 (开关状态 + 语言设置)
  chrome.storage.local.get(['autoClassifyEnabled', 'rulesConfig'], (result) => {
    // 获取语言：优先取 rulesConfig.language，没有则默认 zh-CN
    const lang = (result.rulesConfig && result.rulesConfig.language) || 'zh-CN';
    
    // 初始化界面语言
    updateLanguage(lang);

    // 获取开关状态：默认为 true
    const enabled = result.autoClassifyEnabled !== false;
    els.toggle.checked = enabled;
    updateStatusText(enabled, lang);
  });

  // 2. 监听开关切换
  els.toggle.addEventListener('change', () => {
    const enabled = els.toggle.checked;
    
    // 保存状态
    chrome.storage.local.set({ autoClassifyEnabled: enabled });
    
    // 重新获取语言以更新状态文本（防止闭包里的 lang 过期）
    chrome.storage.local.get(['rulesConfig'], (res) => {
       const lang = (res.rulesConfig && res.rulesConfig.language) || 'zh-CN';
       updateStatusText(enabled, lang);
    });
  });

  // 3. 点击设置图标 -> 打开 Options 页面
  els.btnSettings.addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
  });

  // --- 辅助函数 ---

  function updateLanguage(lang) {
    const t = i18n[lang] || i18n['en']; // 回退到英文
    els.appName.textContent = t.app_name;
    els.btnSettings.title = t.title_settings;
  }

  function updateStatusText(enabled, lang) {
    const t = i18n[lang] || i18n['en'];
    if (enabled) {
      els.status.textContent = t.status_on;
      els.status.className = 'status-text active'; // 添加绿色样式
    } else {
      els.status.textContent = t.status_off;
      els.status.className = 'status-text'; // 灰色默认样式
    }
  }
});