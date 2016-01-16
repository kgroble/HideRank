function remove(){
	try {
		document.getElementById('rank').style.display = 'none';
		ranks = document.getElementsByClassName('column-rank');
		for (i=0; i<ranks.length; i++) {
			ranks[i].style.display = 'none';
		}
	} catch(e) {
		// there was no rank information
	}
}
remove();