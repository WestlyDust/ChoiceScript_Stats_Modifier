.. ChoiceScriptStats documentation master file, created by
   sphinx-quickstart on Sat Mar 11 16:54:07 2023.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

ChoiceScript Stats Modifier
===========================


Important Notes
---------------
**Do NOT send feedback or reports to ChoiceOfGames Support if you run into an error or your game crashes while using cheats.** Feedback and reports are intended to debug **REAL** issues with the game, not problems resulting from modified stats and cheating.

*The following cheats allow you to modify a game's stats in ways the author did not intend, meaning it's very easy to break the game. If you do run into an error, simply hit cancel and restart the game from the beginning.*

To avoid running into issues, I highly recommend viewing the game's code before modifying any stats. This will give you a better idea of what you can and can't modify, and how to modify them.


Getting Started
---------------

..  sidebar::

    1. Copy everything from one of the following modifier options

    2. Start the game
        - Make sure you've begun the game and are not on a side page (like the stats page)

    3. Open the developer console -> (right click, inspect, console)

    4. Paste the Load.js code from one of the modifier options in the console, and then press enter

    5. The Modify Stats button should appear on the game screen

    6. Clicking Modify Stats opens the Cheat window, where you can now modify the game stats

    7. After changing the desired stats, close the window, and click next to progress the game
        - Going to any other page, like the stats page, will undo stats modifications


Stat Modifier Tools
-------------------

..  sidebar::

	:ref:`Cheat Master <rest-cheatmaster>` - Modify stats using an interface similar to the one in-game in addition to numerical, boolean, and string stats. The most comprehensive stat modifier.

    :ref:`Sheets <rest-cheatsheets>` - Modify specific stat types using a spreadsheet-like interface. Offers limited stat modification.
        * :ref:`Numbers <rest-cheatsheets-n>` - Modify numerical stats.
        * :ref:`Booleans <rest-cheatsheets-b>` - Modify boolean stats.
        * :ref:`Strings <rest-cheatsheets-s>` - Modify string stats.

    :ref:`Stat Chart <rest-statchart>` - Modify stats using an stat view similar to the one in-game. Useful for complex games with a large number of stats.

.. toctree::
   :maxdepth: 2
   :hidden:

   intro.rst
   cheatmaster.rst
   savemanager.rst
   cheatstatcharts.rst
   cheatsheets.rst
   feedback.rst
   changelog.rst

Credit
------
Big thanks to JohnTheRedeemer for letting me build off his work - you can find his original code here_.

.. _here: https://github.com/JohnTheRedeemer/ChoiceScript_Modifier