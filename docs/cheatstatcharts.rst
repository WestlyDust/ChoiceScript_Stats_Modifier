..  _rest-statchart:

Stat Chart
==========

.. container:: my-container-class

    .. figure:: /images/DemoChart.gif
        :width: 400px
        :figclass: align-left
        :align: left
        :class: my-class


Load.js - Stat Chart
--------------------

This tool creates a popup window that emulates the in-game stats page, allowing you to modify game stats with ease.

After making changes to game stats using the popup window, remember to click the "Next" button to ensure that changes are saved. If you go to a different page, such as the stats page, the game will revert to its previous stats.

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

    injectScript('https://cdn.jsdelivr.net/gh/WestlyDust/ChoiceScript_Stats_Modifier@Main/CheatStatCharts/StatCharts.js')
        .then(() => {
            console.log('Initialized');
        }).catch(error => {
            console.error(error);
    });
