window.onload = function() {
    console.log("Webpage Loaded Up...");

    //Get Elements
    let app = document.getElementById("app");
    let ThemeButton = document.getElementById("ThemeChange");


    // Has Loaded The Document & Got All Elements Needed
    let _Theme = "Dark";


    function changeTheme(){
        if(_Theme == "Dark") _Theme = "Light";
        else _Theme = "Dark";

        app.setAttribute('data-theme', _Theme.toLowerCase());
        ThemeButton.innerHTML = _Theme == "Dark" ? "☀️" : "🌙";
    }


    //Add Event Listeners For The Code To Run Functions
    ThemeButton.addEventListener('click',changeTheme);
}