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

function getVisibleState() {
    return visibleStateofTab;
}
