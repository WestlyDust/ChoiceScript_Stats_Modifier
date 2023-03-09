let sceneList = stats.scene.nav._sceneList;

let url = window.location.href;
let baseURL = url.replace(/(index\.html$|mygame\/$)/, '');

let stringValues = {};

let currentLine = "";

let sceneFiles = sceneList.map(function (sceneName) {
	return sceneName + ".txt";
});

// Iterate through each scene file
for (let i = 0; i < sceneFiles.length; i++) {
	let sceneFile = sceneFiles[i];

	// Load the scene file content
	let sceneURL = baseURL + "mygame/scenes/" + sceneFile;

	fetch(sceneURL)
		.then(response => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.text();
		})
		.then(text => {
			// Split the scene file content into lines
			let sceneLines = text.split("\n");

			// Iterate through each line of the scene file
			for (let j = 0; j < sceneLines.length; j++) {
				let line = sceneLines[j].trim();
				currentLine = line;

				// Check if the line starts with *create or *temp or *set
				if ((line.startsWith("*create") || line.startsWith("*temp") || line.startsWith("*set")) && line.split(" ").length > 2) {
					if (line.split(" ")[2].startsWith('"')) {
						// Extract the name of the string
						let name = line.split(" ")[1].toLowerCase();
						// Extract the value of the string
						let value = line.split('"')[1];

						stringValues[name] = stringValues[name] || [];

						if (!stringValues[name].includes(value)) {
							// Add the value to the stringValues object
							stringValues[name].push(value);
						}
					}
				}
			}
		})
		.catch(error => {
			console.error("Error:", error);
		});
}

// Define the callback function to call when a change occurs
function handleStatsChange() {
	updateStats();
}

// Create a Proxy object to listen for changes to the stats object
const statsProxy = new Proxy(stats, {
	set: function (target, property, value) {
		target[property] = value;
		handleStatsChange();
		return true;
	},
});

// Replace the original stats object with the Proxy object
stats = statsProxy;

let modifiableStats = [];
let statModifiers = [];

// Create the dropdown and load button
const dropdown = document.createElement('select');
dropdown.innerHTML = `
    <option value="https://cdn.jsdelivr.net/gh/WestlyDust/ChoiceScript_Stats_Modifier@Main/CheatSelectable/Cheats/CheatN.js">Nums</option>
    <option value="https://cdn.jsdelivr.net/gh/WestlyDust/ChoiceScript_Stats_Modifier@Main/CheatSelectable/Cheats/CheatNB.js">Nums&Bools</option>
    <option value="https://cdn.jsdelivr.net/gh/WestlyDust/ChoiceScript_Stats_Modifier@Main/CheatSelectable/Cheats/CheatNBS.js">Nums&Bools&Strs</option>
`;
const loadButton = document.createElement('button');
loadButton.textContent = 'Select';
dropdown.style.height = '1.8em';
dropdown.style.marginLeft = '1.5em';
dropdown.classList.add('spacedLink', 'spacedLink--left');
loadButton.classList.add('spacedLink', 'spacedLink--right');
const btns = document.getElementById('buttons');
btns.appendChild(dropdown);
btns.appendChild(loadButton);

// Add event listeners to the dropdown and load button
let scriptElement = null;
dropdown.addEventListener('change', () => {
    // Remove the previously injected script, if there is one
    if (scriptElement) {
        scriptElement.remove();
        scriptElement = null;
    }
    // Remove the cheat button, if it exists
    if (cheatButton) {
        cheatButton.remove();
        cheatButton = null;
    }
});
loadButton.addEventListener('click', () => {
    // Get the selected script from the dropdown
    const selectedScript = dropdown.value;
    // Inject the selected script
    injectScript(selectedScript).then(() => {
        console.log(`Injected ${selectedScript}`);
        // Save a reference to the injected script element
        scriptElement = document.querySelector(`script[src="${selectedScript}"]`);
        // Check if the cheat button already exists
        if (!cheatButton) {
            // Create the cheat button if it doesn't exist
            cheatButton = document.createElement('button');
            cheatButton.textContent = 'Modify Stats';
            cheatButton.classList.add('spacedLink');
            cheatButton.addEventListener('click', () => {
                console.log(`Running ${selectedScript}`);
            });
            btns.appendChild(cheatButton);
        }
    }).catch(error => {
        console.error(error);
    });
});