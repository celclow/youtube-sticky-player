(function() {
    // create icon
    const xmlns = "http://www.w3.org/2000/svg";

    var icon = document.createElementNS(xmlns, "svg");
    icon.setAttributeNS(null, "viewBox", "0 0 36 36");
    icon.setAttributeNS(null, "height", "100%");
    icon.setAttributeNS(null, "width", "100%");

    var path1 = document.createElementNS(xmlns, "path");
    path1.setAttributeNS(null, "id", "rect");
    path1.setAttributeNS(
        null,
        "d",
        "m29,25l0,-14.02c0,-1.1 -0.9,-1.98 -2,-1.98l-18,0c-1.1,0 -2,0.88 -2,1.98l0,14.02c0,1.1 0.9,2 2,2l18,0c1.1,0 2,-0.9 2,-2l0,0zm-2,0.02l-18,0l0,-14.05l18,0l0,14.05l0,0z"
    );
    path1.setAttributeNS(null, "fill", "#fff");

    var path2 = document.createElementNS(xmlns, "path");
    path2.setAttributeNS(null, "id", "arrow");
    path2.setAttributeNS(
        null,
        "d",
        "m14.39175,17.98803l3.60825,-4.9745l3.60825,4.9745l-1.80412,0l0,4.99844l-3.60825,0l0,-4.99844l-1.80412,0l-0.00001,0z"
    );
    path2.setAttributeNS(null, "fill", "#fff");

    icon.appendChild(path1);
    icon.appendChild(path2);

    // create button
    var button = document.createElement("button");
    button.id = "youtube-sticky-player";
    button.classList.add("ytp-button");
    button.setAttribute("aria-label", "YouTube sticky player");
    button.setAttribute("title", "YouTube sticky player");
    button.appendChild(icon);

    // insert button
    var controls = document.querySelector(".ytp-right-controls");
    controls.insertBefore(button, controls.firstChild);

    // clicked button
    button.onclick = function() {
        if (document.body.dataset.ysp) {
            // enable to disable
            delete document.body.dataset.ysp;
            path2.removeAttributeNS(null, "transform");
        } else {
            // disable to enable
            path2.setAttributeNS(null, "transform", "rotate(-180 18,18)");
            document.body.dataset.ysp = "enable";
        }
    };

})();
