let darkMode = false;

if(!localStorage.getItem("darkMode")) {
    localStorage.setItem("darkMode", darkMode);
} else {
    darkMode = (localStorage.getItem("darkMode") === "true");
}

if(darkMode) {
    document.body.classList.add("dark-mode-no-transition");
}

document.getElementById('dark-mode').onclick = (element) => {
    darkMode = !darkMode;

    if(darkMode) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    
    localStorage.setItem("darkMode", darkMode);
}

function enableDarkMode() {
    document.body.classList.add("dark-mode");
    document.getElementById('dark-mode-icon').src="resources/sun.png";
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    document.getElementById('dark-mode-icon').src="resources/moon-20.png";
}