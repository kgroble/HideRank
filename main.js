function remove(){
	console.log('I found a gradebook page!');
	document.getElementById('rank').style.display = 'none';
	ranks = document.getElementsByClassName('column-rank');
	for (i=0; i<ranks.length; i++) {
		ranks[i].style.display = 'none';
	}
}
remove();