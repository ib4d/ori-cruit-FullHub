const translations = {
    en: {
        brandName: 'ORI-CRUIT.HUB',
        navDashboard: 'Dashboard',
        navCandidates: 'Candidates',
        navPipeline: 'Pipeline',
        navLegal: 'Legal',
        navAnalytics: 'Analytics',
        searchPlaceholder: 'SEARCH DATABASE...',
        systemHealth: 'System Health',
        nodesSynchronized: 'Nodes Synchronized',
        legalAlerts: 'Legal Alerts',
        critical: 'Critical',
        recentImports: 'Recent Imports',
        plusTwelve: '+12%',
        last24Hours: 'Last 24 Hours',
        candidatesNeedingReview: 'Candidates Needing Review',
        viewAll: 'View All',
        pipelineSummary: 'Pipeline Summary',
        operations: 'Operations',
        systemStatus: 'System Status',
        loginBtn: 'Log In',
        getStartedBtn: 'Get Started',
        southWest: 'South West'
    },
    es: {
        brandName: 'ORI-CRUIT.HUB',
        navDashboard: 'Panel',
        navCandidates: 'Candidatos',
        navPipeline: 'Pipeline',
        navLegal: 'Legal',
        navAnalytics: 'Analítica',
        searchPlaceholder: 'BUSCAR BASE DE DATOS...',
        systemHealth: 'Salud del Sistema',
        nodesSynchronized: 'Nodos Sincronizados',
        legalAlerts: 'Alertas Legales',
        critical: 'Crítico',
        recentImports: 'Importaciones Recientes',
        plusTwelve: '+12%',
        last24Hours: 'Últimas 24 horas',
        candidatesNeedingReview: 'Candidatos para Revisar',
        viewAll: 'Ver Todo',
        pipelineSummary: 'Resumen del Pipeline',
        operations: 'Operaciones',
        systemStatus: 'Estado del Sistema',
        loginBtn: 'Iniciar Sesión',
        getStartedBtn: 'Comenzar'
    },
    pl: {
        brandName: 'ORI-CRUIT.HUB',
        navDashboard: 'Panel',
        navCandidates: 'Kandydaci',
        navPipeline: 'Pipeline',
        navLegal: 'Prawo',
        navAnalytics: 'Analityka',
        searchPlaceholder: 'WYSZUKAJ BAZĘ DANYCH...',
        systemHealth: 'Stan Systemu',
        nodesSynchronized: 'Węzły Zsynchronizowane',
        legalAlerts: 'Alerty Prawne',
        critical: 'Krytyczny',
        recentImports: 'Niedawne Importy',
        plusTwelve: '+12%',
        last24Hours: 'Ostatnie 24 godzin',
        candidatesNeedingReview: 'Kandydaci do Przeglądu',
        viewAll: 'Pokaż Wszystko',
        pipelineSummary: 'Podsumowanie Pipeline',
        operations: 'Operacje',
        systemStatus: 'Status Systemu',
        loginBtn: 'Zaloguj się',
        getStartedBtn: 'Rozpocznij'
    }
};

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
        const key = el.dataset.i18nKey;
        if (!key) return;
        const text = (translations[lang] && translations[lang][key]) || translations.en[key] || '';
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
        } else {
            el.textContent = text;
        }
    });
    const select = document.getElementById('lang-select');
    if (select) select.value = lang;
}

function setTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.classList.add('dark');
        localStorage.setItem('ori_cruit_theme', 'dark');
    } else {
        root.classList.remove('dark');
        localStorage.setItem('ori_cruit_theme', 'light');
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
}

function initControls() {
    const savedLang = localStorage.getItem('ori_cruit_lang') || 'en';
    applyLanguage(savedLang);

    const selectedTheme = localStorage.getItem('ori_cruit_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(selectedTheme);

    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            const lang = e.target.value;
            localStorage.setItem('ori_cruit_lang', lang);
            applyLanguage(lang);
        });
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

window.addEventListener('DOMContentLoaded', initControls);
