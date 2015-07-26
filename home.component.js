var HomeComponent = ng.

Component({
    viewInjector: [People]
}).
View({
	template: '<div *ng-if="people">Hello {{people.name}}!</div>',
    directives: [ng.NgIf]
}).
Class({
	constructor: [People, function (service) {
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
