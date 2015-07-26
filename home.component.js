'use stict';

(function (app) {

app.HomeComponent = ng.

Component({
    viewInjector: [app.People]
}).
View({
	template: '<div *ng-if="people">Hello {{people.name}}!</div>',
    directives: [ng.NgIf]
}).
Class({
	constructor: [app.People, function (service) {
		this.service = service;
		this.loadPeople();
	}],

	loadPeople: function () {
		var self = this;
		this.service.getPeople().subscribe(function (data) {
			self.people = data;
		});
	}
});

})(this.app);
