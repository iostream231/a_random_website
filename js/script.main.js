const themes = {
    light:{
        bcolor:"#fff",
        inbcolor:"#ddd",
        txtcolor:"#4D46B9",
        inttxtcolor:"#4679B9",
        oppositecolor:"#000",
    },
    dark:{
        bcolor:"#00001C",
        inbcolor:"#00000D",
        txtcolor:"#9796FF",
        inttxtcolor:"#C4C4FF",
        oppositecolor:"#fff",
    },
};


function changeTheme(alr) {
    let r = document.querySelector(":root");
    let stl = getComputedStyle(r);
    switch(stl.getPropertyValue("--oppcolor").toString()) {
        case "#fff" :
            r.style.setProperty("--bcolor" , themes.light.bcolor);
            r.style.setProperty("--inbcolor" , themes.light.inbcolor);
            r.style.setProperty("--txtcolor", themes.light.txtcolor);
            r.style.setProperty("--inttxtcolor", themes.light.inttxtcolor);
            r.style.setProperty("--oppcolor" , themes.light.oppositecolor);
            document.querySelector(".fas.fa-sun").className = "fas fa-moon";
            document.getElementById("myCanvas").style.display = "none";
            sessionStorage.setItem("theme" , "light");
            break;
        case "#000" :
            r.style.setProperty("--bcolor" , themes.dark.bcolor);
            r.style.setProperty("--inbcolor" , themes.dark.inbcolor);
            r.style.setProperty("--txtcolor", themes.dark.txtcolor);
            r.style.setProperty("--inttxtcolor", themes.dark.inttxtcolor);
            r.style.setProperty("--oppcolor" , themes.dark.oppositecolor);
            document.querySelector(".fas.fa-moon").className = "fas fa-sun";
            sessionStorage.setItem("theme" , "dark");
            document.getElementById("myCanvas").style.display = "block";
            break;
    }
}

let counter = 0;
function showOtherLinks() {
    if(counter % 2 == 0) {
        document.querySelectorAll(".link").forEach(value => value.style.display = "block");
        
    } else {
        document.querySelectorAll(".link").forEach(value => value.style.display = 'none');
    }
    counter++;
}