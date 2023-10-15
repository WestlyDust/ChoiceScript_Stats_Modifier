..  _rest-cheatmaster:

Cheat Master
============

.. container:: my-container-class

    .. figure:: /images/CheatMaster.png
        :width: 800px
        :figclass: align-left
        :align: left
        :class: my-class

Load.js - Cheat Master
----------------------

This tool creates a popup window that emulates the in-game stats page, allowing you to modify game stats with ease. It also includes options to edit numerical, boolean, and string stats.

After making changes to game stats using the popup window, remember to click the "Next" button to ensure that changes are saved. If you go to a different page, such as the stats page, the game will revert to its previous stats.

You can add this code to your game in two ways:

Method One
----------

Copy and paste the following into the browser console:

.. literalinclude:: /_static/code/Inject/InjectCheats.js
    :class: myCodeBlock
    :language: javascript

Method Two
----------

If the first method fails, copy and paste the full code into the browser console:

.. literalinclude:: /_static/code/CheatMaster/CheatMaster.js
    :class: myCodeBlock
    :language: javascript
