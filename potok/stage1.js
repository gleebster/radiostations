// node stage1.js > output.txt

// первая строчка из скрипта виджета радиопотока
const RP_RADIO = { }; // { 1: {...}, 2: {...} }

a = []
for (const [id, val] of Object.entries(RP_RADIO)) {
	let name = val['name'];
	let streams = JSON.parse(val['stream']);
	
	// брать только первый поток который скорее всего лучший из них
	a.push([name, streams[0].file])
}

console.log(JSON.stringify(a))