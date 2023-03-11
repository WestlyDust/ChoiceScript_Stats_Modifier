.. raw:: html

   <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>

Table of Contents |HitCount|
----------------------------

-  `Introduction <#introduction>`__
-  `Usage <#usage>`__

   -  `Cheat Stat Chart <#cheat-stat-chart>`__
   -  `Cheat Selectable <#cheat-selectable>`__
   -  `Cheat Sheets <#cheat-sheets>`__

-  `Credit <#credit>`__

Introduction
------------

**Do NOT send feedback or reports to ChoiceOfGames Support if you run
into an error or your game crashes while using cheats.** Feedback and
reports are intended to debug **REAL** issues with the game, not
problems resulting from modified stats and cheating.

*The following cheats allow you to modify a game’s stats in ways the
author did not intend, meaning it’s very easy to break the game. If you
do run into an error, simply hit cancel and restart the game from the
beginning.*

To avoid running into issues, I highly recommend viewing the game’s code
before modifying any stats - especially if you plan on using *Load.js -
Numbers, Booleans, and Strings*, as it’s the most complex option.

Usage
-----

1. Copy everything from one of the following Load.js options
2. Start the game

   -  Make sure you’ve begun the game and are not on a side page (like
      the stats page)

3. Open the developer console -> (right click, inspect, console)
4. Paste Load.js code in the console and press enter
5. The Modify Stats button should appear on the game screen
6. Clicking Modify Stats should open the Cheat window where you can now
   modify the game stats
7. After changing the desired stats, close the window, and click next to
   progress the game

   -  Going to any other page, like the stats page, will undo stats
      modifications

Cheat Stat Chart
~~~~~~~~~~~~~~~~

.. raw:: html

   <details>

.. raw:: html

   <summary>

Load.js - Stat Chart

.. raw:: html

   </summary>

.. container::
   :name: my-code-block1

   \```javascript ///

.. raw:: html

   <button class="btn" data-clipboard-target="#my-code-block code1">

Copy

.. raw:: html

   </button>

.. raw:: html

   </details>

Cheat Selectable
~~~~~~~~~~~~~~~~

.. raw:: html

   <details>

.. raw:: html

   <summary>

Load.js - Selectable

.. raw:: html

   </summary>

-  Modify the available options as you play

   .. container::
      :name: my-code-block2

      \```javascript function injectScript(src) { return new
      Promise((resolve, reject) => { const script =
      document.createElement(‘script’); script.src = src;
      script.addEventListener(‘load’, resolve);
      script.addEventListener(‘error’, e => reject(e.error));
      document.head.appendChild(script); }); }

      injectScript(‘https://cdn.jsdelivr.net/gh/WestlyDust/ChoiceScript_Stats_Modifier@Main/CheatSelectable/InitCheats.js’)
      .then(() => { console.log(‘Initialized’); }).catch(error => {
      console.error(error); });

   .. raw:: html

      <button class="btn" data-clipboard-target="#my-code-block code2">

   Copy

   .. raw:: html

      </button>

.. raw:: html

   </details>

Cheat Sheets
~~~~~~~~~~~~

.. raw:: html

   <details>

.. raw:: html

   <summary>

Load.js - Numbers

.. raw:: html

   </summary>

(https://raw.githubusercontent.com/WestlyDust/ChoiceScript_Stats_Modifier/Main/CheatNumbers/Load.js)
----------------------------------------------------------------------------------------------------

-  Modify numerical stats

.. raw:: html

   </details>

.. raw:: html

   <details>

.. raw:: html

   <summary>

Load.js - Numbers and Booleans

.. raw:: html

   </summary>

`Load.js - Numbers and Booleans <https://raw.githubusercontent.com/WestlyDust/ChoiceScript_Stats_Modifier/Main/CheatNumbers%26Booleans/Load.js>`__
--------------------------------------------------------------------------------------------------------------------------------------------------

-  Modify numerical and boolean (true/false) stats

.. raw:: html

   </details>

.. raw:: html

   <details>

.. raw:: html

   <summary>

Load.js - Numbers, Booleans, and Strings

.. raw:: html

   </summary>

`Load.js - Numbers, Booleans, and Strings <https://raw.githubusercontent.com/WestlyDust/ChoiceScript_Stats_Modifier/Main/CheatNumbers%26Booleans%26Strings/Load.js>`__
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

-  Modify nearly all of the game’s stats

.. raw:: html

   </details>

Credit
------

Big thanks to JohnTheRedeemer for letting me build off his work - you
can find the original code I based this off of here:
https://github.com/JohnTheRedeemer/ChoiceScript_Modifier

.. raw:: html

   <script>
     new ClipboardJS('#my-code-block button', {
       text: function() {
         return document.querySelector('#my-code-block code').innerText;
       }
     });
   </script>

.. |HitCount| image:: https://hits.dwyl.com/WestlyDust/ChoiceScript_Stats_Modifier.svg?style=flat-square&show=unique
   :target: http://hits.dwyl.com/WestlyDust/ChoiceScript_Stats_Modifier
