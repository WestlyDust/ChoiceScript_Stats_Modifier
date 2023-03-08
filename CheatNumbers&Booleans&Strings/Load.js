function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('https://cdn.jsdelivr.net/gh/WestlyDust/ChoiceScript_Stats_Modifier@Main/CheatNumbers%26Booleans%26Strings/Cheat.js')
    .then(() => {
        console.log('Script loaded!');
        var btns = document.getElementById("buttons");
        btns.innerHTML = btns.innerHTML + "<button id='cheatButton' class='spacedLink' onclick='loadCheats()'>Cheats</button>";
        btns.innerHTML = btns.innerHTML + "<button id='reloadButton' class='spacedLink' onclick='location.reload()'>Reload</button>";
    }).catch(error => {
        console.error(error);
    });
