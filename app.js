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

ng.router.RouteConfig([
	{ path: '/', redirectTo: '/home'},
	{ path: '/home', component: app.HomeComponent, as: 'home'},
	{ path: '/test', component: app.TestComponent, as: 'test'}
])(app.Main);

})(app);
