$(document).ready(function(){
	console.log('main.js loaded');

	window.collections.articles = new Puls3.Collections.Articles();
	
	window.collections.articles.on('add', function (model){
		//agregamos nuevas vistas aqui...
		var view = new Puls3.Views.Article( {model: model})
		view.render();
		view.$el.appendTo('.posts');

	} );


	window.collections.articles.fetch();
});
