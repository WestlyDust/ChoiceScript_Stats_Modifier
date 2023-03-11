Cheat Sheets
============

This section contains cheat sheets for various game data types.

Load.js - Numbers
-----------------

This cheat sheet allows you to modify numerical game data.
.. details::
   :summary: Load.js

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

    injectScript('https://raw.githubusercontent.com/WestlyDust/ChoiceScript_Stats_Modifier/Main/CheatNumbers/Load.js')
        .then(() => {
            console.log('Initialized');
        }).catch(error => {
            console.error(error);
    });

Load.js - Numbers and Booleans
------------------------------

This cheat sheet allows you to modify numerical and boolean game data.
.. details::
   :summary: Load.js

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

    injectScript('https://raw.githubusercontent.com/WestlyDust/ChoiceScript_Stats_Modifier/Main/CheatNumbers%26Booleans/Load.js')
        .then(() => {
            console.log('Initialized');
        }).catch(error => {
            console.error(error);
    });

Load.js - Numbers, Booleans, and Strings
----------------------------------------

This cheat sheet allows you to modify numerical, boolean, and string game data.
.. details::
   :summary: Load.js

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

    injectScript('https://raw.githubusercontent.com/WestlyDust/ChoiceScript_Stats_Modifier/Main/CheatNumbers%26Booleans%26Strings/Load.js')
        .then(() => {
            console.log('Initialized');
        }).catch(error => {
            console.error(error);
    });