const root = document.documentElement;
const themeBtn = document.getElementById("theme");
const body = document.body;
let theme = "light";

// changing theme
function changeTheme() {
    if (theme == "light") {
        theme = "dark";

        root.style.setProperty("--bg-white", "rgb(50, 87, 99)");
        root.style.setProperty("--color-brand", "white");
        root.style.setProperty("--color-text","white");
        body.style.backgroundColor = "#2C2D2D";

    } else if (theme == "dark") {
        theme = "light";

        root.style.setProperty("--bg-white", "whitesmoke");
        root.style.setProperty("--color-brand", "darkcyan");
        root.style.setProperty("--color-text","black");
        body.style.backgroundColor = "#FFFFFF";
    }
}

