sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("opensap.movies.controller.App", {
		onInit: function () {

		},
		onImagePress: function(){
			window.open("https://www.imdb.com/");
		}
	});
});