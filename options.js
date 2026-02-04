// 语言包字典
const i18n = {
  "zh-CN": {
    nav_general: "常规设置",
    nav_rules: "分类规则",
    btn_import: "导入配置",
    btn_export: "导出配置",
    btn_save: "保存所有",
    section_unmatched: "未匹配文件处理",
    desc_unmatched: "当下载的文件不符合任何分类规则时，该如何处理？",
    label_action: "处理方式",
    opt_root: "保留在下载根目录",
    opt_folder: "移动到指定文件夹",
    label_folder_name: "文件夹名称",
    desc_rules: "点击卡片编辑规则。未匹配的文件将按常规设置处理。",
    btn_add_rule: "新增分类",
    modal_edit_title: "编辑分类",
    modal_add_title: "新增分类",
    label_name: "分类名称 (显示用)",
    label_folder: "文件夹名称 (实际路径)",
    label_exts: "扩展名 (英文逗号分隔)",
    tip_folder: "文件将保存在 Downloads/此文件夹/",
    tip_exts: "例如: jpg, png, gif",
    btn_delete: "删除分类",
    btn_cancel: "取消",
    btn_confirm: "确定",
    msg_saved: "规则已保存，下次下载时生效",
    msg_imported: "配置导入成功",
    msg_import_err: "导入失败，格式错误",
    rule_Images: "图片",
    rule_Documents: "文档",
    rule_Videos: "视频",
    rule_Audio: "音乐",
    rule_Archives: "压缩包",
    rule_Apps: "应用安装包"
  },
  "en": {
    nav_general: "General",
    nav_rules: "Rules",
    btn_import: "Import",
    btn_export: "Export",
    btn_save: "Save All",
    section_unmatched: "Unmatched Files",
    desc_unmatched: "How to handle files that don't match any rules?",
    label_action: "Action",
    opt_root: "Stay in Root Folder",
    opt_folder: "Move to Folder",
    label_folder_name: "Folder Name",
    desc_rules: "Click cards to edit. Unmatched files follow General settings.",
    btn_add_rule: "Add Category",
    modal_edit_title: "Edit Category",
    modal_add_title: "Add Category",
    label_name: "Label Name",
    label_folder: "Folder Path",
    label_exts: "Extensions (comma separated)",
    tip_folder: "Saved to Downloads/ThisFolder/",
    tip_exts: "e.g. jpg, png, gif",
    btn_delete: "Delete",
    btn_cancel: "Cancel",
    btn_confirm: "Confirm",
    msg_saved: "Settings Saved",
    msg_imported: "Imported Successfully",
    msg_import_err: "Import Failed",
    rule_Images: "Images",
    rule_Documents: "Documents",
    rule_Videos: "Videos",
    rule_Audio: "Music",
    rule_Archives: "Archives",
    rule_Apps: "Applications"
  },
  "ja": {
    nav_general: "一般設定",
    nav_rules: "分類ルール",
    btn_import: "インポート",
    btn_export: "エクスポート",
    btn_save: "すべて保存",
    section_unmatched: "未分類ファイル",
    desc_unmatched: "ルールに一致しないファイルをどう処理しますか？",
    label_action: "処理方法",
    opt_root: "ダウンロードフォルダに保存",
    opt_folder: "指定フォルダに移動",
    label_folder_name: "フォルダ名",
    desc_rules: "カードをクリックして編集。未分類は一般設定に従います。",
    btn_add_rule: "カテゴリ追加",
    modal_edit_title: "カテゴリ編集",
    modal_add_title: "カテゴリ追加",
    label_name: "表示名",
    label_folder: "フォルダパス",
    label_exts: "拡張子 (カンマ区切り)",
    tip_folder: "保存先: Downloads/フォルダ名/",
    tip_exts: "例: jpg, png, gif",
    btn_delete: "削除",
    btn_cancel: "キャンセル",
    btn_confirm: "確定",
    msg_saved: "設定を保存しました",
    msg_imported: "インポート成功",
    msg_import_err: "インポート失敗",
    rule_Images: "画像",
    rule_Documents: "ドキュメント",
    rule_Videos: "動画",
    rule_Audio: "音楽",
    rule_Archives: "圧縮ファイル",
    rule_Apps: "アプリ"
  },
  "ko": {
    nav_general: "일반 설정",
    nav_rules: "분류 규칙",
    btn_import: "가져오기",
    btn_export: "내보내기",
    btn_save: "모두 저장",
    section_unmatched: "미분류 파일",
    desc_unmatched: "규칙과 일치하지 않는 파일은 어떻게 처리합니까?",
    label_action: "처리 방식",
    opt_root: "다운로드 폴더에 유지",
    opt_folder: "지정 폴더로 이동",
    label_folder_name: "폴더 이름",
    desc_rules: "카드를 클릭하여 편집하세요. 미분류 파일은 일반 설정을 따릅니다.",
    btn_add_rule: "카테고리 추가",
    modal_edit_title: "카테고리 편집",
    modal_add_title: "카테고리 추가",
    label_name: "표시 이름",
    label_folder: "폴더 경로",
    label_exts: "확장자 (쉼표로 구분)",
    tip_folder: "저장 위치: Downloads/폴더명/",
    tip_exts: "예: jpg, png, gif",
    btn_delete: "삭제",
    btn_cancel: "취소",
    btn_confirm: "확인",
    msg_saved: "설정이 저장되었습니다",
    msg_imported: "가져오기 성공",
    msg_import_err: "가져오기 실패",
    rule_Images: "이미지",
    rule_Documents: "문서",
    rule_Videos: "동영상",
    rule_Audio: "음악",
    rule_Archives: "압축 파일",
    rule_Apps: "애플리케이션"
  },
  "fr": {
    nav_general: "Général",
    nav_rules: "Règles",
    btn_import: "Importer",
    btn_export: "Exporter",
    btn_save: "Enregistrer",
    section_unmatched: "Fichiers non classés",
    desc_unmatched: "Comment gérer les fichiers sans règle correspondante ?",
    label_action: "Action",
    opt_root: "Laisser dans le dossier racine",
    opt_folder: "Déplacer vers un dossier",
    label_folder_name: "Nom du dossier",
    desc_rules: "Cliquez pour éditer. Les fichiers non classés suivent les règles générales.",
    btn_add_rule: "Ajouter une catégorie",
    modal_edit_title: "Modifier la catégorie",
    modal_add_title: "Ajouter une catégorie",
    label_name: "Nom d'affichage",
    label_folder: "Chemin du dossier",
    label_exts: "Extensions (séparées par des virgules)",
    tip_folder: "Enregistré dans : Downloads/Dossier/",
    tip_exts: "ex : jpg, png, gif",
    btn_delete: "Supprimer",
    btn_cancel: "Annuler",
    btn_confirm: "Confirmer",
    msg_saved: "Paramètres enregistrés",
    msg_imported: "Importation réussie",
    msg_import_err: "Échec de l'importation",
    rule_Images: "Images",
    rule_Documents: "Documents",
    rule_Videos: "Vidéos",
    rule_Audio: "Musique",
    rule_Archives: "Archives",
    rule_Apps: "Applications"
  },
  "es": {
    nav_general: "General",
    nav_rules: "Reglas",
    btn_import: "Importar",
    btn_export: "Exportar",
    btn_save: "Guardar",
    section_unmatched: "Archivos sin clasificar",
    desc_unmatched: "¿Cómo manejar archivos que no coinciden con ninguna regla?",
    label_action: "Acción",
    opt_root: "Mantener en carpeta raíz",
    opt_folder: "Mover a carpeta",
    label_folder_name: "Nombre de la carpeta",
    desc_rules: "Haga clic para editar. Los archivos no coincidentes siguen la configuración general.",
    btn_add_rule: "Añadir categoría",
    modal_edit_title: "Editar categoría",
    modal_add_title: "Añadir categoría",
    label_name: "Nombre visible",
    label_folder: "Ruta de la carpeta",
    label_exts: "Extensiones (separadas por comas)",
    tip_folder: "Guardado en: Downloads/Carpeta/",
    tip_exts: "ej: jpg, png, gif",
    btn_delete: "Eliminar",
    btn_cancel: "Cancelar",
    btn_confirm: "Confirmar",
    msg_saved: "Configuración guardada",
    msg_imported: "Importación exitosa",
    msg_import_err: "Error en la importación",
    rule_Images: "Imágenes",
    rule_Documents: "Documentos",
    rule_Videos: "Vídeos",
    rule_Audio: "Música",
    rule_Archives: "Archivos",
    rule_Apps: "Aplicaciones"
  },
  "ar": {
    nav_general: "إعدادات عامة",
    nav_rules: "قواعد التصنيف",
    btn_import: "استيراد",
    btn_export: "تصدير",
    btn_save: "حفظ الكل",
    section_unmatched: "الملفات غير المصنفة",
    desc_unmatched: "كيف يتم التعامل مع الملفات التي لا تطابق أي قاعدة؟",
    label_action: "الإجراء",
    opt_root: "إبقاء في المجلد الرئيسي",
    opt_folder: "نقل إلى مجلد",
    label_folder_name: "اسم المجلد",
    desc_rules: "انقر للتعديل. الملفات غير المطابقة تتبع الإعدادات العامة.",
    btn_add_rule: "إضافة فئة",
    modal_edit_title: "تعديل الفئة",
    modal_add_title: "إضافة فئة",
    label_name: "اسم العرض",
    label_folder: "مسار المجلد",
    label_exts: "الامتدادات (مفصولة بفواصل)",
    tip_folder: "مكان الحفظ: Downloads/Folder/",
    tip_exts: "مثال: jpg, png, gif",
    btn_delete: "حذف",
    btn_cancel: "إلغاء",
    btn_confirm: "تأكيد",
    msg_saved: "تم حفظ الإعدادات",
    msg_imported: "تم الاستيراد بنجاح",
    msg_import_err: "فشل الاستيراد",
    rule_Images: "صور",
    rule_Documents: "مستندات",
    rule_Videos: "فيديو",
    rule_Audio: "صوتيات",
    rule_Archives: "أرشيف",
    rule_Apps: "تطبيقات"
  }
};

// 默认数据
const defaultRules = [
  { 
    id: "Images", 
    label: "Images", 
    folder: "Images", 
    exts: ["png", "jpg", "jpeg", "webp", "gif", "svg", "ico", "heic"], 
    builtin: true 
  },
  { 
    id: "Documents", 
    label: "Documents", 
    folder: "Documents", 
    exts: ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "md", "csv"], 
    builtin: true 
  },
  { 
    id: "Videos", 
    label: "Videos", 
    folder: "Videos", 
    exts: ["mp4", "mov", "mkv", "webm", "avi"], 
    builtin: true 
  },
  { 
    id: "Audio", 
    label: "Music", 
    folder: "Music", 
    exts: ["mp3", "wav", "ogg", "flac", "m4a"], 
    builtin: true 
  },
  { 
    id: "Archives", 
    label: "Archives", 
    folder: "Archives", 
    exts: ["zip", "rar", "7z", "tar", "gz", "iso"], 
    builtin: true 
  },
  { 
    id: "Apps", 
    label: "Applications", 
    folder: "Apps", 
    exts: ["exe", "dmg", "pkg", "msi", "apk", "deb"], 
    builtin: true 
  }
];

let currentConfig = {
  version: 1,
  language: "zh-CN", // 默认中文
  rules: JSON.parse(JSON.stringify(defaultRules)),
  unmatchedAction: "others",
  unmatchedFolder: "Others"
};

// DOM 元素引用
const els = {
  tabs: document.querySelectorAll('.nav-item'),
  sections: document.querySelectorAll('.tab-content'),
  pageTitle: document.getElementById('pageTitle'),
  langSelect: document.getElementById('languageSelect'),
  unmatchedAction: document.getElementById('unmatchedAction'),
  unmatchedFolderRow: document.getElementById('unmatchedFolderRow'),
  unmatchedFolder: document.getElementById('unmatchedFolder'),
  rulesGrid: document.getElementById('rulesGrid'),
  modal: document.getElementById('editModal'),
  modalTitle: document.getElementById('modalTitle'),
  inputs: {
    id: document.getElementById('editId'),
    label: document.getElementById('editLabel'),
    folder: document.getElementById('editFolder'),
    exts: document.getElementById('editExts')
  },
  btns: {
    save: document.getElementById('saveBtn'),
    import: document.getElementById('importBtn'),
    export: document.getElementById('exportBtn'),
    addRule: document.getElementById('addRuleBtn'),
    closeModal: document.getElementById('closeModal'),
    cancelModal: document.getElementById('cancelModalBtn'),
    confirmModal: document.getElementById('confirmModalBtn'),
    deleteRule: document.getElementById('deleteRuleBtn')
  }
};

document.addEventListener('DOMContentLoaded', init);

function init() {
  loadConfig();
  setupEventListeners();
}

function loadConfig() {
  chrome.storage.local.get(['rulesConfig'], (result) => {
    if (result.rulesConfig) {
      currentConfig = { ...currentConfig, ...result.rulesConfig };
    }
    applyLanguage(currentConfig.language);
    renderUI();
  });
}

function setupEventListeners() {
  // Tab 切换
  els.tabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  // 语言切换
  els.langSelect.addEventListener('change', (e) => {
    currentConfig.language = e.target.value;
    applyLanguage(currentConfig.language);
  });

  // 常规设置联动
  els.unmatchedAction.addEventListener('change', toggleUnmatchedFolder);

  // 按钮事件
  els.btns.save.addEventListener('click', saveConfig);
  els.btns.addRule.addEventListener('click', () => openModal()); // 空参数表示新增
  els.btns.closeModal.addEventListener('click', closeModal);
  els.btns.cancelModal.addEventListener('click', closeModal);
  els.btns.confirmModal.addEventListener('click', saveRuleFromModal);
  els.btns.deleteRule.addEventListener('click', deleteRuleFromModal);
  
  // 导入导出
  els.btns.export.addEventListener('click', exportRules);
  els.btns.import.addEventListener('click', () => document.getElementById('importFile').click());
  document.getElementById('importFile').addEventListener('change', importRules);
}

// --- UI 渲染逻辑 ---

function renderUI() {
  // 填充常规设置
  els.langSelect.value = currentConfig.language;
  els.unmatchedAction.value = currentConfig.unmatchedAction || "others";
  els.unmatchedFolder.value = currentConfig.unmatchedFolder || "Others";
  toggleUnmatchedFolder();

  // 渲染规则网格
  els.rulesGrid.innerHTML = '';
  currentConfig.rules.forEach((rule, index) => {
    const card = document.createElement('div');
    card.className = 'rule-card';
    card.onclick = () => openModal(index);
    
    // 获取多语言标签
    const t = i18n[currentConfig.language];
    const ruleLabel = (rule.builtin && t[`rule_${rule.id}`]) ? t[`rule_${rule.id}`] : rule.label;

    // 关键修改：不再截取前6个，而是映射所有后缀 
    // 如果后缀实在太多（比如超过20个），可以考虑切片，但一般情况下全部显示更好 
    const tags = rule.exts.map(ext => `<span class="ext-tag">.${ext}</span>`).join(''); 
    
    // 移除 "more" 变量，因为我们现在全展示了 
    
    card.innerHTML = ` 
      <div class="rule-card-header"> 
        <span class="rule-name">${ruleLabel}</span> 
        <span class="rule-folder">/${rule.folder}</span> 
      </div> 
      <div class="rule-tags">${tags}</div> 
    `;
    els.rulesGrid.appendChild(card);
  });
}

function switchTab(tabName) {
  // 更新侧边栏
  els.tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
  // 更新内容区
  els.sections.forEach(s => s.classList.toggle('active', s.id === `tab-${tabName}`));
  
  // 更新标题
  const lang = currentConfig.language;
  const titleKey = tabName === 'general' ? 'nav_general' : 'nav_rules';
  els.pageTitle.textContent = i18n[lang][titleKey];
}

function toggleUnmatchedFolder() {
  const show = els.unmatchedAction.value === 'others';
  els.unmatchedFolderRow.style.display = show ? 'block' : 'none';
}

// --- 多语言逻辑 ---

function applyLanguage(lang) {
  const t = i18n[lang] || i18n['en'];
  
  // RTL support for Arabic
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  // 更新 placeholder
  if(lang === 'zh-CN') {
     els.inputs.label.placeholder = "例如：设计素材";
     els.inputs.folder.placeholder = "Design/Assets";
  } else {
     els.inputs.label.placeholder = "e.g. Design Assets";
     els.inputs.folder.placeholder = "Design/Assets";
  }
}

// --- Modal 逻辑 ---

function openModal(ruleIndex = null) {
  const isEdit = ruleIndex !== null;
  const lang = currentConfig.language;
  const t = i18n[lang];

  els.modal.classList.remove('hidden');
  els.modalTitle.textContent = isEdit ? t.modal_edit_title : t.modal_add_title;
  
  if (isEdit) {
    const rule = currentConfig.rules[ruleIndex];
    els.inputs.id.value = ruleIndex; // 临时存索引
    els.inputs.label.value = rule.label;
    els.inputs.folder.value = rule.folder;
    els.inputs.exts.value = rule.exts.join(', ');
    els.btns.deleteRule.style.display = 'block';
  } else {
    els.inputs.id.value = "new";
    els.inputs.label.value = "";
    els.inputs.folder.value = "";
    els.inputs.exts.value = "";
    els.btns.deleteRule.style.display = 'none';
  }
}

function closeModal() {
  els.modal.classList.add('hidden');
}

function saveRuleFromModal() {
  const index = els.inputs.id.value;
  const newRule = {
    id: index === "new" ? `custom_${Date.now()}` : currentConfig.rules[index].id,
    label: els.inputs.label.value.trim() || "未命名",
    folder: els.inputs.folder.value.trim() || "Unsorted",
    exts: els.inputs.exts.value.split(/[,，]/).map(s => s.trim().toLowerCase()).filter(Boolean),
    builtin: false // 编辑后视为自定义
  };

  if (index === "new") {
    currentConfig.rules.push(newRule);
  } else {
    currentConfig.rules[index] = newRule;
  }
  
  closeModal();
  renderUI();
  // 注意：这里只是更新了内存和UI，用户需要点“保存所有”才会持久化，或者你可以这里自动保存
  saveConfig(true); 
}

function deleteRuleFromModal() {
  const index = els.inputs.id.value;
  if (index !== "new") {
    currentConfig.rules.splice(index, 1);
    closeModal();
    renderUI();
    saveConfig(true);
  }
}

// --- 核心功能 ---

function saveConfig(silent = false) {
  // 收集常规设置
  currentConfig.unmatchedAction = els.unmatchedAction.value;
  currentConfig.unmatchedFolder = els.unmatchedFolder.value;

  chrome.storage.local.set({ rulesConfig: currentConfig }, () => {
    if (!silent) showToast(i18n[currentConfig.language].msg_saved);
  });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.opacity = '1';
  t.style.top = '40px';
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.top = '20px';
  }, 2000);
}

function exportRules() {
  const blob = new Blob([JSON.stringify(currentConfig, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'smart-dl-config.json';
  a.click();
}

function importRules(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (parsed.rules && Array.isArray(parsed.rules)) {
        currentConfig = { ...currentConfig, ...parsed };
        // 保持语言设置不变，除非你想覆盖
        applyLanguage(currentConfig.language);
        renderUI();
        saveConfig();
        showToast(i18n[currentConfig.language].msg_imported);
      }
    } catch (e) {
      showToast(i18n[currentConfig.language].msg_import_err);
    }
  };
  reader.readAsText(file);
}