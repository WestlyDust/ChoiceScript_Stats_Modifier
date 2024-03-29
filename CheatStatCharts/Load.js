function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('https://cdn.jsdelivr.net/gh/WestlyDust/ChoiceScript_Stats_Modifier@latest/CheatStatCharts/CheatStatCharts.js')
    .then(() => {
        console.log('Cheats loaded!');
        var btns = document.getElementById("buttons");
        if (document.getElementById("cheatButton") != null) {
            btns.innerHTML = btns.innerHTML + "<button id='cheatButton' class='spacedLink' onclick='loadCheats()'>Modify Stats</button>";
        }
    }).catch(error => {
        console.error(error);
    });