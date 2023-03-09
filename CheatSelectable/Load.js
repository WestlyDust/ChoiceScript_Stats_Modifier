function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('https://cdn.jsdelivr.net/gh/WestlyDust/ChoiceScript_Stats_Modifier@Main/CheatSelectable/Initialize.js')
    .then(() => {
        console.log('Initialized');
    }).catch(error => {
        console.error(error);
    });
