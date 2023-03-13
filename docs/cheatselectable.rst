..  _rest-selectable:

Selectable
==========

.. container:: my-container-class

    .. figure:: /images/HeaderSelect.jpg
        :width: 800px
        :figclass: align-left
        :align: left
        :class: my-class

This tool allows you to select which game data types you want to modify during gameplay. You can select the "cheat sheet" that corresponds to the data type you want to modify using the dropdown menu.

After making changes to game stats using the popup window, remember to click the "Next" button to ensure that changes are saved. If you go to a different page, such as the stats page, the game will revert to its previous stats.

Load.js - Selectable
--------------------

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
            var btns = document.getElementById("buttons");
            btns.innerHTML = btns.innerHTML + "<button id='cheatButton' class='spacedLink' onclick='loadCheats()'>Modify Stats</button>";
        }).catch(error => {
            console.error(error);
    });