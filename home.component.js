'use stict';

(function (app) {

app.HomeComponent = ng.

Component({}).
View({
	template: '<div>Hello {{name}}!</div>',
}).
Class({
	constructor: [app.People ,function (people) {
	  people.getPeople().subscribe(function (data) {
			this.name = data.name;
		}.bind(this));
	}]
});

})(this.app);