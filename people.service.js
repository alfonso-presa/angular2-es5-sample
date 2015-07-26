var People = ng.

Class({
	constructor: [ng.Http, function (http) {
		this.http = http;
	}],
	getPeople: function () {
		return this.http.get('people.json').toRx().map(function (res) {
			return res.json();
		});
	}
});