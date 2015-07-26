'use stict';

(function (app) {

app.Main = ng.

Component({
    selector: 'my-app'
}).
View({
	templateUrl: 'main.html',
    directives: [ng.router.routerDirectives]
}).
Class({
	constructor: function () {}
});

})(app);
