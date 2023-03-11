
## Table of Contents [![HitCount](https://hits.dwyl.com/WestlyDust/ChoiceScript_Stats_Modifier.svg?style=flat-square&show=unique)](http://hits.dwyl.com/WestlyDust/ChoiceScript_Stats_Modifier)

- [Introduction](#introduction)
- [Usage](#usage)
  - [Cheat Stat Chart](#cheat-stat-chart)
  - [Cheat Selectable](#cheat-selectable)
  - [Cheat Sheets](#cheat-sheets)
- [Credit](#credit)

## Introduction
**Do _NOT_ send feedback or reports to ChoiceOfGames Support if you run into an error or your game crashes while using cheats.** Feedback and reports are intended to debug **REAL** issues with the game, not problems resulting from modified stats and cheating.

*The following cheats allow you to modify a game's stats in ways the author did not intend, meaning it's very easy to break the game. If you do run into an error, simply hit cancel and restart the game from the beginning.*

To avoid running into issues, I highly recommend viewing the game's code before modifying any stats - especially if you plan on using *Load.js - Numbers, Booleans, and Strings*, as it's the most complex option.

## Usage
1. Copy everything from one of the following Load.js options
2. Start the game
     - Make sure you've begun the game and are not on a side page (like the stats page)
3. Open the developer console -> (right click, inspect, console)
4. Paste Load.js code in the console and press enter
5. The Modify Stats button should appear on the game screen
6. Clicking Modify Stats should open the Cheat window where you can now modify the game stats
7. After changing the desired stats, close the window, and click next to progress the game
     - Going to any other page, like the stats page, will undo stats modifications
     
### Cheat Stat Chart
<details>
  <summary>Load.js - Stat Chart</summary>
     <pre>
     <code>
     ///
     </code>
     </pre>
</details>

### Cheat Selectable
<details>
  <summary>Load.js - Selectable</summary>
  * Modify the available options as you play
     <pre>
     <code>
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
     </code>
     </pre>
</details>

### Cheat Sheets
<details>
  <summary>Load.js - Numbers</summary>
  ## (https://raw.githubusercontent.com/WestlyDust/ChoiceScript_Stats_Modifier/Main/CheatNumbers/Load.js)
  * Modify numerical stats
</details>
<details>
  <summary>Load.js - Numbers and Booleans</summary>
  ## [Load.js - Numbers and Booleans](https://raw.githubusercontent.com/WestlyDust/ChoiceScript_Stats_Modifier/Main/CheatNumbers%26Booleans/Load.js)
  * Modify numerical and boolean (true/false) stats
</details>
<details>
  <summary>Load.js - Numbers, Booleans, and Strings</summary>
  ## [Load.js - Numbers, Booleans, and Strings](https://raw.githubusercontent.com/WestlyDust/ChoiceScript_Stats_Modifier/Main/CheatNumbers%26Booleans%26Strings/Load.js)
  * Modify nearly all of the game's stats
</details>

## Credit
Big thanks to JohnTheRedeemer for letting me build off his work - you can find the original code I based this off of here: https://github.com/JohnTheRedeemer/ChoiceScript_Modifier
