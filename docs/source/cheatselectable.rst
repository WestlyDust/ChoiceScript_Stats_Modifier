Cheat Selectable
================

This does stuff.

Load.js - Selectable
--------------------

This cheat sheet allows you to modify numerical game data.
   .. code-block:: javascript

    function injectScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', resolve);
            script.addEventListener('error', e => reject(e.error));
            document.head.appendChild(script);
        });
    }

    injectScript('https://cdn.jsdelivr.net/gh/WestlyDust/ChoiceScript_Stats_Modifier@Main/CheatSelectable/InitCheats.js')
        .then(() => {
            console.log('Initialized');
        }).catch(error => {
            console.error(error);
    });