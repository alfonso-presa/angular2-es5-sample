'use stict';

(function (app) {

document.addEventListener('DOMContentLoaded', function () {

	ng.bootstrap(app.Main , [

		[ng.bind(ngHttp.ConnectionBackend).toClass(ngHttp.XHRBackend), ngHttp.BrowserXhr, ng.bind(ngHttp.RequestOptions).toClass(ngHttp.BaseRequestOptions), ng.bind(ngHttp.ResponseOptions).toClass(ngHttp.BaseResponseOptions), ngHttp.Http],
		//TODO: Replace the above with the following when this is resolved: https://github.com/angular/angular/issues/3898
		//ngHttp.HTTP_BINDINGS,
		ng.bind(ngRouter.Router).toFactory(
			function (registry, pipeline, location, appRoot) {
			    return new ngRouter.RootRouter(registry, pipeline, location, appRoot);
			}, [
			    ngRouter.RouteRegistry,
			    ngRouter.Pipeline,
			    ngRouter.Location,
			    app.Main
			]
		),
		ngRouter.routerInjectables,
		ng.bind(ngRouter.LocationStrategy).toClass(ngRouter.HashLocationStrategy)
	]);
});

})(this.app);