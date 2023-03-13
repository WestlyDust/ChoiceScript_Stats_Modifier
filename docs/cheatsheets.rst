..  _rest-cheatsheets:

Sheets
======

.. container:: my-container-class

    .. figure:: /images/HeaderButton.jpg
        :width: 800px
        :figclass: align-left
        :align: left
        :class: my-class

This tool creates a popup window that displays modifiable cheat sheets for various game data types.

After making changes to game stats using the popup window, remember to click the "Next" button to ensure that changes are saved. If you go to a different page, such as the stats page, the game will revert to its previous stats.

..  _rest-cheatsheets-n:

Load.js - Numbers
-----------------

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

    injectScript('https://raw.githubusercontent.com/WestlyDust/ChoiceScript_Stats_Modifier/Main/CheatNumbers/Cheat.js')
        .then(() => {
            console.log('Initialized');
            var btns = document.getElementById("buttons");
            btns.innerHTML = btns.innerHTML + "<button id='cheatButton' class='spacedLink' onclick='loadCheats()'>Modify Stats</button>";
        }).catch(error => {
            console.error(error);
    });

..  _rest-cheatsheets-nb:

Load.js - Numbers and Booleans
------------------------------

This cheat sheet allows you to modify numerical and boolean game data.

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

    injectScript('https://raw.githubusercontent.com/WestlyDust/ChoiceScript_Stats_Modifier/Main/CheatNumbers%26Booleans/Cheat.js')
        .then(() => {
            console.log('Initialized');
            var btns = document.getElementById("buttons");
            btns.innerHTML = btns.innerHTML + "<button id='cheatButton' class='spacedLink' onclick='loadCheats()'>Modify Stats</button>";
        }).catch(error => {
            console.error(error);
    });

..  _rest-cheatsheets-nbs:

Load.js - Numbers, Booleans, and Strings
----------------------------------------

This cheat sheet allows you to modify numerical, boolean, and string game data.

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

    injectScript('https://raw.githubusercontent.com/WestlyDust/ChoiceScript_Stats_Modifier/Main/CheatNumbers%26Booleans%26Strings/Cheat.js')
        .then(() => {
            console.log('Initialized');
            var btns = document.getElementById("buttons");
            btns.innerHTML = btns.innerHTML + "<button id='cheatButton' class='spacedLink' onclick='loadCheats()'>Modify Stats</button>";
        }).catch(error => {
            console.error(error);
    });