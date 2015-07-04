function getDependencies(tree, current) {
	// SOLUTION GOES HERE
	// Note: Feel free to add additional arguments
	// to this function for use with recursive calls.
	// Or not! There are many ways to recurse.
	//console.log(tree);
	//console.log(tree['name'], tree['version'], tree['dependencies']);
	var name = tree['name'] || 'default';
	var version = tree['version'];
	var dependencies = tree['dependencies'];

	var complete = name + '@' + version;

	var pippo = current.push(complete) || [];

	if(dependencies != undefined){
		getDependencies(dependencies, current)
	}else{
		return current;
	}
	
}

module.exports = getDependencies;