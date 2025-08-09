let visibleStateofTab = false;

var GLOBAL = {};
GLOBAL.DotNetReference = null;

GLOBAL.SetDotnetReference = function (pDotNetReference) {
    GLOBAL.DotNetReference = pDotNetReference;
};
function isVisible() {
    window.addEventListener("visibilitychange", function () {
        visibleStateofTab = document.visibilityState === "visible";
        GLOBAL.DotNetReference.invokeMethodAsync('setTabActive', visibleStateofTab);
    });

}

window.themeManager = {
    init: function () {
        // Letzte Einstellung aus LocalStorage laden
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            document.documentElement.setAttribute('data-bs-theme', storedTheme);
        }
    },
    toggle: function () {
        const html = document.documentElement;
        const currentTheme = html.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        html.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem('theme', newTheme);
    }
};

window.initThemeToggle = () => {
    const btn = document.getElementById("themeToggle");
    if (!btn) return; // Falls Button nicht da ist

    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const icon = this.querySelector("i");
        if (document.body.classList.contains("dark-mode")) {
            icon.classList.replace("bi-moon-stars", "bi-brightness-high");
        } else {
            icon.classList.replace("bi-brightness-high", "bi-moon-stars");
        }
    });
};


function getVisibleState() {
    return visibleStateofTab;
}
