let smallLoaded = false;
let mediumLoaded = false;
let largeLoaded = false;

function injectStyle(size) {
    const head = document.head;
    const link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "css/atomic-" + size + ".css";

    head.appendChild(link);
}

function windowTest() {
    const viewport = document.documentElement.clientWidth;

    if (viewport >= 482 && !smallLoaded) {
        smallLoaded = true;
        injectStyle("small");
    }
    if (viewport >= 701 && !mediumLoaded) {
        mediumLoaded = true;
        injectStyle("medium");
    }
    if (viewport > 1026 && !largeLoaded) {
        largeLoaded = true;
        injectStyle("large");
    }

    if ( smallLoaded && mediumLoaded && largeLoaded) {
        window.removeEventListener("resize");
    }
}

window.addEventListener("resize", windowTest, false);
windowTest();
