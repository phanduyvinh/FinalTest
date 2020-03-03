const root = document.querySelector(':root');

function compare(a, b){
 let comparison = 0;
 
 if (a > b) {
   comparison = 1;
 } else if (b > a) {
   comparison = -1;
 }
 
 return comparison;
}

function create(){
	const n = document.getElementById('item1').value;
	const m = document.getElementById('item2').value;
	root.style.setProperty('--columns-grid', m);
	//lay phan tu tu html
	let data = document.getElementById('data');

	// Tao header
	let data_header = [];
	for(let i = 1; i <= m; i++){
		data_header.push("<div id='header' class='title'>"+i+"</div>");
	}

	// Show du lieu
	let data_create = [];
	let data_create2 = [];
	let random = 0;
	for(let i = 0; i < n*m; i++){
		random = Math.floor(Math.random() * 1001);
		data_create.push("<div>"+random+"</div>");
		data_create2.push(random);
	}

	const totaldata = data_header.concat(data_create);
	data.innerHTML = totaldata.join(' ');
	// Sort
	document.getElementById("data").addEventListener('click', function() {
		data_create2.sort(compare);
		let sort_data = [];
		for(let i = 0; i < data_create2.length;i++){
			sort_data.push("<div >"+data_create2[i]+"</div>");
		}
		sort_data = data_header.concat(sort_data);
		data.innerHTML = sort_data.join(' ');
	});

}

