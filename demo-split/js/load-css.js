function init() {

    let smallLoaded = false;
    let mediumLoaded = false;
    let largeLoaded = false;

    const atomicSmall = document.querySelector("#atomic-small");
    const atomicMedium = document.querySelector("#atomic-medium");
    const atomicLarge = document.querySelector("#atomic-large");

    function injectStyle(size) {
        const dataHref = size.getAttribute("data-href");
        size.href = dataHref;
    }

    function windowTest() {
        const viewport = document.documentElement.clientWidth;

        if (viewport >= 482 && viewport < 701 && !smallLoaded) {
            smallLoaded = true;
            injectStyle(atomicSmall);
        }
        if (viewport >= 701 && viewport < 1026 && !mediumLoaded) {
            mediumLoaded = true;
            injectStyle(atomicMedium);
        }
        if (viewport > 1026 && !largeLoaded) {
            largeLoaded = true;
            injectStyle(atomicLarge);
        }

        if ( smallLoaded && mediumLoaded && largeLoaded) {
            window.removeEventListener("resize", windowTest);
        }
    }

    window.addEventListener("resize", windowTest);
    windowTest();
}

init();
