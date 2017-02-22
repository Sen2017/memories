console.log ("app.js linked!"); 

function turnCard(id) {
	console.log("clicked", id);
	document.getElementById(id).style.transform = 'rotateY(180deg)';
	if (document.getElementById(id).style.transform === 'rotateY(180deg)'){
		setTimeout(function() {
			document.getElementById(id).style.transform = 'rotateY(0deg)';
		},1000);
	}
	console.log("end");
}
