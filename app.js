var App = ng.

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
	{ path: '/', component: HomeComponent},
	{ path: '/home', component: HomeComponent, as: 'home'},
	{ path: '/test', component: TestComponent, as: 'test'}
])(App);
