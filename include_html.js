
function MakeNavBarBold() {
    var main_nav = document.getElementById("main-nav-bar").childNodes;
    var hr_list = window.location.toString().split("/");
    var hr = hr_list[hr_list.length - 1];

    for (var i = 0; main_nav.length > i; i++) {

        var li = main_nav[i];
        if (li.nodeName != 'LI') continue;

        var a = li.childNodes[0];
        if (a.getAttribute("href") == hr) {
            a.setAttribute("class", "nav-link active");
        }
    }
}

function includeHTML(cb) {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-navbar");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    MakeNavBarBold();
                    return ;
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            cb();
            return;
        }
    }
}
