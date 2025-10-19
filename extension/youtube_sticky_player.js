(function () {
    const newUi =
        document.getElementsByClassName("ytp-right-controls-left").length > 0;

    // create icon
    const xmlns = "http://www.w3.org/2000/svg";

    const icon = document.createElementNS(xmlns, "svg");
    icon.setAttributeNS(null, "viewBox", "0 0 24 24");

    if (newUi) {
        icon.setAttributeNS(null, "height", "24");
        icon.setAttributeNS(null, "width", "24");
    } else {
        icon.setAttributeNS(null, "height", "100%");
        icon.setAttributeNS(null, "width", "100%");
        icon.setAttributeNS(null, "style", "width:60%");
    }

    const path1 = document.createElementNS(xmlns, "path");
    path1.setAttributeNS(null, "id", "rect");
    path1.setAttributeNS(
        null,
        "d",
        "M21.2,3.01C21.69,3.06 22.15,3.29 22.48,3.65C22.81,4.02 23,4.5 23,5L23,19L22.99,19.2C22.94,19.66 22.73,20.08 22.41,20.41C22.08,20.73 21.66,20.94 21.2,20.98L21,21L3,21L2.79,20.99C2.33,20.94 1.91,20.73 1.58,20.41C1.26,20.08 1.05,19.66 1.01,19.2L1,19L1,5C0.99,4.5 1.18,4.02 1.51,3.65C1.84,3.29 2.3,3.06 2.79,3.01L3,3L21,3L21.2,3.01ZM3,19L21,19L21,5L3,5L3,19Z"
    );
    path1.setAttributeNS(null, "fill", "#fff");

    const path2 = document.createElementNS(xmlns, "path");
    path2.setAttributeNS(null, "id", "arrow");
    path2.setAttributeNS(
        null,
        "d",
        "M8.392,11.988L12,7.014L15.608,11.988L13.804,11.988L13.804,16.986L10.196,16.986L10.196,11.988L8.392,11.988Z"
    );
    path2.setAttributeNS(null, "fill", "#fff");

    icon.appendChild(path1);
    icon.appendChild(path2);

    // create button
    const button = document.createElement("button");
    button.id = "youtube-sticky-player";
    button.classList.add("ytp-button");
    button.setAttribute("aria-label", "YouTube sticky player");
    button.setAttribute("title", "YouTube sticky player");
    button.appendChild(icon);
    button.onclick = function () {
        if (document.body.dataset.ysp) {
            // enable to disable
            delete document.body.dataset.ysp;
            path2.removeAttributeNS(null, "transform");
        } else {
            // disable to enable
            path2.setAttributeNS(null, "transform", "rotate(-180 12,12)");
            document.body.dataset.ysp = "enable";
        }
    };

    // insert button
    const observer = new MutationObserver((mutations) => {
        const controls = document.querySelector(
            "#content ytd-watch-flexy .ytp-right-controls"
        );
        if (controls) {
            controls.insertBefore(button, controls.firstChild);
            observer.disconnect();
        }
    });
    observer.observe(document, { childList: true, subtree: true });
})();
