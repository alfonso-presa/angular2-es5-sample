'use stict';

(function (ngRouter, app) {

ngRouter.RouteConfig([
	{ path: '/', redirectTo: '/home'},
	{ path: '/home', component: app.HomeComponent, as: 'home'},
	{ path: '/test', component: app.TestComponent, as: 'test'}
])(app.Main);

})(window.ngRouter, window.app);