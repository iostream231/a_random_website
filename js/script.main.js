function changeTheme(alr) {
    let r = document.querySelector(":root");
    let stl = getComputedStyle(r);
    switch(stl.getPropertyValue("--bcolor").toString()) {
        case "rgb(40, 40, 40)" :
            r.style.setProperty("--bcolor" , "rgb(255, 255, 255)");
            r.style.setProperty("--inbcolor" , "rgb(185, 185, 185)");
            r.style.setProperty("--txtcolor", "rgb(0, 0, 0)");
            document.querySelector(".them-dev a i").className = "fas fa-moon";
            document.getElementById("myCanvas").style.display = "none";
            sessionStorage.setItem("theme" , "light");
            break;
        case "rgb(255, 255, 255)" :
            r.style.setProperty("--bcolor" , "rgb(40, 40, 40)");
            r.style.setProperty("--inbcolor" , "rgb(10, 10, 10)");
            r.style.setProperty("--txtcolor", "#fff");
            document.querySelector(".them-dev a i").className = "fas fa-sun";
            sessionStorage.setItem("theme" , "dark");
            document.getElementById("myCanvas").style.display = "block";
            break;
    }
}