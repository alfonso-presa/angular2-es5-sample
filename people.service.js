'use stict';

(function (app) {

app.People = ng.

Class({
	constructor: [ngHttp.Http, function (http) {
		this.http = http;
	}],
	getPeople: function () {
		return this.http.get('people.json').toRx().map(function (res) {
			return res.json();
		});
	}
});

})(this.app);
