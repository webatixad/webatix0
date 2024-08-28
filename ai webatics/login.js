function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function checkCookie() {
    var user = getCookie("username");
    if (user != null) {
        alert("Welcome back, " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
            alert("Welcome, " + user);
        }
    }
}

document.getElementById("accept-cookies").addEventListener("click", function() {
    setCookie("cookieAccepted", "true", 365);
    alert("Cookies accepted!");
});

window.onload = function() {
    if (!getCookie("cookieAccepted")) {
        alert("This website uses cookies to enhance your experience. Please accept cookies to continue.");
    } else {
        checkCookie();
    }
};