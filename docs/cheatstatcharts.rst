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

This tool creates a popup window that emulates the in-game stats page, allowing you to modify game stats with ease. It also includes options to edit numerical, boolean, and string stats.

After making changes to game stats using the popup window, remember to click the "Next" button to ensure that changes are saved. If you go to a different page, such as the stats page, the game will revert to its previous stats.

.. literalinclude:: /_static/code/CheatMaster/CheatMaster.js
    :class: myCodeBlock
    :language: javascript

