// Function to update the modifiableStats and statModifiers arrays
function updateStats() {
	// Clear the modifiableStats and statModifiers arrays
	modifiableStats = [];
	statModifiers = [];
	// compile all the stats
	for (const [key, value] of Object.entries(stats)) {
		try {
			if (typeof value == "boolean") {
				// variable is a boolean
			}
			let val = parseInt(value);
			if (Number.isNaN(val) == false) {
				// variable is a number
			}
			else {
				let val = value;
				if (typeof val == "string") {
					// variable is a string
					if (typeof stringValues[key] != "undefined" && stringValues[key].length > 1) {
						modifiableStats.push({ key: key, value: val, type: "string" });
					}
				}
			}
		} catch (err) {
			console.log(`Error! ${key}: ${value}`);
		}
	}
}

function loadCheats() {
	// open a new pop up window to put all the stats and give it a title
	childWindow = window.open('', '47288', 'width=1280,height=720,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizeable=0,left=0,top=0');
	childWindow.document.title = 'ChoiceScript Editor';

	// Call updateStats once at the start to initialize the arrays
	updateStats();

	// this will create the javscript that is used for updating values with stats in-game, passing values back and forth, and adding limits
	let scriptHtml = "function changeValue(key){ let newVal = document.getElementById(key).value; console.log('val', newVal); console.log('Changing ', key, ' in parent'); console.log('stat', window.opener.stats[key], newVal); window.opener.stats[key] = newVal; } ";

	// todo, update existing values to selected range
	scriptHtml += "function modifyString(key) { let val = document.getElementById(key).value; window.opener.stats[key] = val; console.log(val, window.opener.stats[key])}";
	scriptHtml += "";

	// attach script to windows
	let scriptTag = childWindow.document.createElement('script');
	let inlineScript = childWindow.document.createTextNode(scriptHtml);
	scriptTag.appendChild(inlineScript);
	childWindow.document.body.appendChild(scriptTag);

	// create a simple table to display the names, values, and inputs
	let wrapperDiv = childWindow.document.createElement('div');
	wrapperDiv.innerHTML = '<p>This is a <b>test</b></p>'
	childWindow.document.body.appendChild(wrapperDiv);

	let html = '<p>This is a <b>test</b></p>';

	html = '<style>';
	html += 'body { background-color: #222; color: rgba(255,255,255,.85); }';
	html += 'table { font-family: Arial, Helvetica, sans-serif; border-collapse: collapse; width: 100%; }';
	//html += 'tr:hover { background-color: #555; }';
	html += 'th { padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #1E0022; color: #ddd; }';
	html += 'td { border: 1px solid #ddd; padding: 8px; }';
	html += 'input[type=range] {height: 4px;-webkit-appearance: none;margin: 10px 0;width: 75%; background-color:#222;padding-right: 4px; vertical-align: middle;}';
	html += 'input[type=range]:focus {outline: none;}';
	html += 'input[type=range]::-webkit-slider-runnable-track {width: 100%;height: 13px;cursor: pointer;animate: 0.2s;box-shadow: 0px 0px 0px #000000;background: #AC51B5;border-radius: 25px;border: 0px solid #000101;}';
	html += 'input[type=range]::-webkit-slider-thumb {box-shadow: 0px 0px 0px #000000;border: 0px solid #000000;height: 20px;width: 39px;border-radius: 7px;background: #65001C;cursor: pointer;-webkit-appearance: none;margin-top: -3.5px;}';
	html += 'input[type=range]:focus::-webkit-slider-runnable-track {background: #AC51B5;}';
	html += 'input[type=range]::-moz-range-track {width: 100%;height: 13px;cursor: pointer;animate: 0.2s;box-shadow: 0px 0px 0px #000000;background: #AC51B5;border-radius: 25px;border: 0px solid #000101;}';
	html += 'input[type=range]::-moz-range-thumb {box-shadow: 0px 0px 0px #000000;border: 0px solid #000000;height: 20px;width: 39px;border-radius: 7px;background: #65001C;cursor: pointer;}';
	html += 'input[type=range]::-ms-track {width: 100%;height: 13px;cursor: pointer;animate: 0.2s;background: transparent;border-color: transparent;color: transparent;}';
	html += 'input[type=range]::-ms-fill-lower {background: #AC51B5;border: 0px solid #000101;border-radius: 50px;box-shadow: 0px 0px 0px #000000;}';
	html += 'input[type=range]::-ms-fill-upper {background: #AC51B5;border: 0px solid #000101;border-radius: 50px;box-shadow: 0px 0px 0px #000000;}';
	html += 'input[type=range]::-ms-thumb {margin-top: 1px;box-shadow: 0px 0px 0px #000000;border: 0px solid #000000;height: 20px;width: 39px;border-radius: 7px;background: #65001C;cursor: pointer;}';
	html += 'input[type=range]:focus::-ms-fill-lower {background: #AC51B5;}';
	html += 'input[type=range]:focus::-ms-fill-upper {background: #AC51B5;}';

	html += '</style>';

	html += '<table>';
	html += '<tr><th>Skill</th>';
	html += '<th>Limits</th>';
	//html += '<th>Linked</th>';
	html += '<th>Value</th>';
	html += '</tr>';

	for (let index = 0; index < modifiableStats.length; index++) {

		let key = modifiableStats[index].key;
		let value = modifiableStats[index].value;
		let type = modifiableStats[index].type;

		html += '<tr>';
		html += '<td>' + key + '</td>';

		if (type == "string") {
			html += '<td><span>String Value</span></td>';
			html += '<td><select name="' + key + '" id="' + key + '" onchange="modifyString(\'' + key + '\')">';
			let currentValue = value;
			html += '<option value="' + value + '">' + value + '</option>';
			for (let i = 0; i < stringValues[key].length; i++) {
				value = stringValues[key][i];
				if (value != currentValue) {
					html += '<option value="' + value + '">' + value + '</option>';
                }
			}
			html += '</select></td>';
        }
		html += '</tr>';

		//TODO: Add matching pairs to update in sync 
		// html += '<td>Select a value that this will effect (like an opposed pair [good/evil, feared/loved])</td>';
	}

	html += '</table>';

	wrapperDiv.innerHTML = html;
}

// every 2.5 seconds, update the existing table with the values found in the game stats. 
// Sometimes the game will reset the stats, so this ensures the player always sees the latest values
setInterval(function () {
	// Clear the modifiableStats and statModifiers arrays
	modifiableStats = [];
	statModifiers = [];
	for (const [key, value] of Object.entries(stats)) {
		try {
			if (typeof value == "boolean") {
				// variable is a boolean
			}
			let val = parseInt(value);
			if (Number.isNaN(val) == false) {
				// variable is a number
			}
			else {
				let val = value;
				if (typeof val == "string") {
					// variable is a string
					if (typeof stringValues[key] != "undefined") {
						if (stringValues[key].length > 1) {
							modifiableStats.push({ key: key, value: val, type: "string" });
						}
					}
				}
			}
		} catch (err) {
			console.log(`Error! ${key}: ${value}`);
		}
	}

	for (let index = 0; index < modifiableStats.length; index++) {

		let key = modifiableStats[index].key;
		let value = modifiableStats[index].value;
		let type = modifiableStats[index].type;

		try {
			childWindow.document.getElementById(key).value = value;
			if (type == "string") {
				let selectElement = childWindow.document.getElementById(key);
				let val = selectElement.value;
				let options = selectElement.options;

				for (let i = 0; i < options.length; i++) {
					let option = options[i];

					if (option.value != val) {
						option.removeAttribute("selected");
					} else {
						option.setAttribute("selected", "");
					}
				}
			}
		} catch (error) {
			if (error instanceof ReferenceError) {
				// Error: childWindow is not defined
			} else {
				// Other errors
				console.log(error);
			}
		}
	}
}, 3000);
