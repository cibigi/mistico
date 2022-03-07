function welcome() {
    document.documentElement.style.setProperty("--bgcolor", localStorage.getItem("bgcolor"));
    document.documentElement.style.setProperty("--fgcolor", localStorage.getItem("fgcolor"));
    document.documentElement.style.setProperty("--gcolor1", localStorage.getItem("gcolor1"));
    document.documentElement.style.setProperty("--gcolor2", localStorage.getItem("gcolor2"));
    if (localStorage.getItem("f2") != null) {
        document.body.style.fontFamily = localStorage.getItem("f2");
    }
    if (localStorage.getItem("f1") != null) {
        for (var i = 0; i < document.getElementsByTagName("h1").length; i++) {
            document.getElementsByTagName("h1")[i].style.fontFamily = localStorage.getItem("f1");
        }
    }
    if (localStorage.getItem("sn") != null) {
        document.getElementById("title").innerHTML = localStorage.getItem("sn");
    }
    if (localStorage.getItem("sb") != null) {
        document.getElementById("subtitle").innerHTML = localStorage.getItem("sb");
    }
}

function mistico() {
    function complete() {
        document.getElementById("risorsa").value = "OK!";
        setTimeout(function () {
            document.getElementById("risorsa").value = "";
        }, 250);
    }

    var ris = document.getElementById("risorsa").value;

    if (ris.includes("setbg")) {
        //Background
        ris = ris.replace("setbg", "");
        document.documentElement.style.setProperty("--bgcolor", ris);

        localStorage.setItem("bgcolor", ris);
        complete();
    } else if (ris.includes("setfg")) {
        //Foreground
        ris = ris.replace("setfg", "");
        document.documentElement.style.setProperty("--fgcolor", ris);

        localStorage.setItem("fgcolor", ris);
        complete();
    } else if (ris.includes("setg1")) {
        //Gradient color 1
        ris = ris.replace("setg1", "");
        document.documentElement.style.setProperty("--gcolor1", ris);

        localStorage.setItem("gcolor1", ris);
        complete();
    } else if (ris.includes("setg2")) {
        //Gradient color 2
        ris = ris.replace("setg2", "");
        document.documentElement.style.setProperty("--gcolor2", ris);

        localStorage.setItem("gcolor2", ris);
        complete();
    } else if (ris.includes("setf2")) {
        //Page font
        ris = ris.replace("setf2", "");
        document.body.style.fontFamily = ris;

        localStorage.setItem("f2", ris);
        complete();
    } else if (ris.includes("setf1")) {
        //Titles font
        ris = ris.replace("setf1", "");
        for (var i = 0; i < document.getElementsByTagName("h1").length; i++) {
            document.getElementsByTagName("h1")[i].style.fontFamily = ris;
        }

        localStorage.setItem("f1", ris);
        complete();
    } else if (ris.includes("setn")) {
        //Title
        ris = ris.replace("setn", "");
        document.getElementById("title").innerHTML = ris;

        localStorage.setItem("sn", ris);
        complete();
    } else if (ris.includes("setb")) {
        //Subtitle
        ris = ris.replace("setb", "");
        document.getElementById("subtitle").innerHTML = ris;

        localStorage.setItem("sb", ris);
        complete();
    } else if (ris.includes("light")) {
        //Light mode
        document.documentElement.style.setProperty("--bgcolor", "rgb(255, 255, 235)");
        localStorage.setItem("bgcolor", "rgb(255, 255, 235)");
        document.documentElement.style.setProperty("--fgcolor", "rgb(44, 44, 44)");
        localStorage.setItem("fgcolor", "rgb(44, 44, 44)");
        document.documentElement.style.setProperty("--gcolor1", "rgb(255, 200, 0)");
        localStorage.setItem("gcolor1", "rgb(255, 200, 0)");
        document.documentElement.style.setProperty("--gcolor2", "rgb(255, 0, 0)");
        localStorage.setItem("gcolor2", "rgb(255, 0, 0)");
        complete();
    } else if (ris === "default") {
        //Reset
        localStorage.removeItem("bgcolor");
        localStorage.removeItem("fgcolor");
        localStorage.removeItem("gcolor1");
        localStorage.removeItem("gcolor2");
        localStorage.removeItem("f1");
        localStorage.removeItem("f2");
        localStorage.removeItem("sn");
        localStorage.removeItem("sb");
        location.reload();
    } else if (ris === "") {
        //Empty
    } else {
        //Error
        document.getElementById("risorsa").value = "SYNTAX ERROR";
        setTimeout(function () {
            document.getElementById("risorsa").value = "";
        }, 250);
    }
}

document.addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
        document.getElementById("risorsabutton").click();
    }
});
