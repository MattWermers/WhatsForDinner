const initQueryButton = document.querySelector("#init-search");
initQueryButton.addEventListener('click', () => {
    console.log("Debug: Init first query");
    const landing = document.getElementById("landing-box");
    landing.style.display = "none";
    document.getElementById("running-box").style.display = "flex";
})