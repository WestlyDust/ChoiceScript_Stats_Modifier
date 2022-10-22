
function loadCheats() {
	// open a new pop up window to put all the stats and give it a title
	childWindow = window.open('', '47288', 'width=1280,height=720,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizeable=0,left=0,top=0');
	childWindow.document.title = 'ChoiceScript Editor';

	modifiableStats = [];
	statModifiers = [];

	// show the stats available (including non-numeric ones)
	console.log('stats', stats);

	// compile all the numeric stats
	for (const [key, value] of Object.entries(stats)) {
		try {
			if (typeof value == "boolean") {
				// variable is a boolean
				let val = value;
				console.log(`${key}: ${val}: ${typeof val}`);
				modifiableStats.push({ key: key, value: val, type: "boolean" });
			}
			let val = parseInt(value);
			if (Number.isNaN(val) == false) {
				// variable is a number
				console.log(`${key}: ${val}: ${typeof val}`);
				modifiableStats.push({ key: key, value: val, type: "number" });
				statModifiers[key] = { value: { min: 0, max: 100 } };
			}
		} catch (err) {
			console.log(`Error! ${key}: ${value}`);
		}
	}

	console.log('Number stats processed');

	// this will create the javscript that is used for updating values with stats in-game, passing values back and forth, and adding limits
	console.log('Creating script tag to hold dynamic javascript');
	let scriptHtml = "function changeValue(key){ let newVal = document.getElementById(key).value; console.log('val', newVal); console.log('Changing ', key, ' in parent'); console.log('stat', window.opener.stats[key], newVal); window.opener.stats[key] = newVal; } ";

	// todo, update existing values to selected range
	scriptHtml += "function changeValueBoolean(key) { let val = document.getElementById(key).value; if (val == 'true') { window.opener.stats[key] = false; } else { window.opener.stats[key] = true; } console.log(val, window.opener.stats[key])}";
	scriptHtml += "function modifyStatMin(key){ console.log('key', key, window.opener.statModifiers[key]); let newVal = parseInt(document.getElementById(key+'Min').value); document.getElementById(key).min = newVal; window.opener.statModifiers[key]['value']['min'] = newVal; }";
	scriptHtml += "function modifyStatMax(key){ console.log('key', key, window.openr.statModifiers[key]); let newVal = parseInt(document.getElementById(key+'Max').value); document.getElementById(key).max = newVal; window.opener.statModifiers[key]['value']['max'] = newVal; }";
	scriptHtml += "";

	// attach script to windows
	let scriptTag = childWindow.document.createElement('script');
	let inlineScript = childWindow.document.createTextNode(scriptHtml);
	scriptTag.appendChild(inlineScript);
	childWindow.document.body.appendChild(scriptTag);

	// create a simple table to display the names, values, and inputs
	console.log('Creating ui');
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

		if (type == "boolean") {
			html += '<td><span>True/False</span></td>';
			html += '<td><input type="checkbox" id="' + key + '" name="' + key + '" value="' + value + '" onchange="changeValueBoolean(\'' + key + '\')"/><span id="bool-' + key + '">True</span></td>';
		}
		if (type == "number") {
			html += '<td><span>Min: </span> <input id="' + key + 'Min" type="number" value="' + statModifiers[key]['value']['min'] + '" style="width:25%" onchange="modifyStatMin(\'' + key + '\');" /> <span>Max: </span> <input id="' + key + 'Max" type="number" value="' + statModifiers[key]['value']['max'] + '" style="width:25%" onchange="modifyStatMax(\'' + key + '\');" /></td>';
			html += '<td><input type="range" id="' + key + '" name="' + key + '" min="' + statModifiers[key]['value']['min'] + '" max="' + statModifiers[key]['value']['max'] + '" value="' + value + '" onchange="changeValue(\'' + key + '\')"/><span id="text-' + key + '">' + value + '</span></td>';
		}
		html += '</tr>';

		//TODO: Add matching pairs to update in sync 
		// html += '<td>Select a value that this will effect (like an opposed pair [good/evil, feared/loved])</td>';
	}

	html += '</table>';

	wrapperDiv.innerHTML = html;

	// every 2.5 seconds, update the existing table with the values found in the game stats. 
	// Sometimes the game will reset the stats, so this ensures the player always sees the latest values
	setInterval(function () {
		for (const [key, value] of Object.entries(stats)) {
			try {
				if (typeof value == "boolean") {
					let val = value;
					//console.log(`${key}: ${val}: ${typeof val}`);
					modifiableStats.push({ key: key, value: val, type: "boolean" });
				}
				let val = parseInt(value);
				if (Number.isNaN(val) == false) {
					//console.log(`${key}: ${val}: ${typeof val}`);
					modifiableStats.push({ key: key, value: val, type: "number" });
					statModifiers[key] = { value: { min: 0, max: 100 } };
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
				if (type == "number") {
					childWindow.document.getElementById('text-' + key).innerText = value;
				}
				if (type == "boolean") {
					childWindow.document.getElementById(key).checked = value;
				}
			}
			catch (err) {
				console.log(err, key, value);
			}
		}
	}, 2500);
}
