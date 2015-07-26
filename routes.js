'use stict';

(function (app) {

ng.router.RouteConfig([
	{ path: '/', redirectTo: '/home'},
	{ path: '/home', component: app.HomeComponent, as: 'home'},
	{ path: '/test', component: app.TestComponent, as: 'test'}
])(app.Main);

})(app);