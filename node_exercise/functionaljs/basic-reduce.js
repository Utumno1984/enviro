function countWords(inputWords) {
	obj = {};
/*
  	inputWords.reduce(function(prev, current, index, array){
		obj[current] = 0;
  	})
*/
	return inputWords.reduce(function(prev, current, index, array){
		if (index == 1){
			obj[prev] = 1;
		}
		
		if(obj[current] >= 1){
			obj[current]++;
		}

		if ( !(obj[current] >= 1) ){
			obj[current] = 1;
		}
		console.log(obj[current]);
		return obj;
	});
}

module.exports = countWords;