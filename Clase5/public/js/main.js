$(document).ready(function(){
	console.log('main.js loaded');

	window.collections.articles = new Puls3.Collections.Articles();
	
	window.collections.articles.on('add', function (model){
		console.log('Se ha agregado', model.toJSON() );
	} );


	window.collections.articles.fetch();
});
