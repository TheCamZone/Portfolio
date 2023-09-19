let darkMode = false;

if(!localStorage.getItem("darkMode")) {
    localStorage.setItem("darkMode", darkMode);
} else {
    darkMode = (localStorage.getItem("darkMode") === "true");
}

if(darkMode) {
    enableDarkMode(false);
}

document.getElementById('dark-mode').onclick = (element) => {
    darkMode = !darkMode;

    if(darkMode) {
        enableDarkMode(true);
    } else {
        disableDarkMode(true);
    }

    localStorage.setItem("darkMode", darkMode);
}

function enableDarkMode(animation) {
    document.body.classList.add("dark-mode");
    document.getElementById('dark-mode-icon').src="resources/sun.png";
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    document.getElementById('dark-mode-icon').src="resources/moon-20.png";
}