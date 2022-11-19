// Constants
const GOTYTimer = new Date("December 9, 2022");

window.onload = function() {
    console.log("Webpage Loaded Up...");

    let isHoveringChildren = false;

    //Get Elements
    let app = document.getElementById("app");
    let ThemeButton = document.getElementById("ThemeChange");

    let dropdown  = document.getElementById("dropbtn");
    let dropdownE = document.getElementById("myDropdown");

    let countdownTimer = document.getElementById("cdt");


    // Has Loaded The Document & Got All Elements Needed
    let _Theme = "Dark";

    function changeTheme(){
        if(_Theme == "Dark") _Theme = "Light";
        else _Theme = "Dark";

        app.setAttribute('data-theme', _Theme.toLowerCase());
        ThemeButton.innerHTML = _Theme == "Dark" ? "☀️" : "🌙";
        document.cookie = "theme="+_Theme;
    }

    function getGameOfTheYearDay(){
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const today = new Date();

        const diffDays = Math.round(Math.abs((GOTYTimer - today) / oneDay));

        let MSG = "";
        if(diffDays <= 0){
            MSG = "It's Game Of The Year Time";
        }
        else{
            MSG = diffDays + " Days Until Game Of The Year";
        }

        countdownTimer.innerHTML = MSG;
    }

    //Every 1 Second, Count Down
    setInterval(getGameOfTheYearDay,1000);
    getGameOfTheYearDay();


    //Add Event Listeners For The Code To Run Functions
    ThemeButton.addEventListener('click',changeTheme);
}