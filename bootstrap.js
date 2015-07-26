document.addEventListener('DOMContentLoaded', function () {

	ng.bootstrap(App, [
		ng.httpInjectables,
		ng.bind(ng.router.Router).toFactory(
			function (registry, pipeline, location, appRoot) {
			    return new ng.router.RootRouter(registry, pipeline, location, appRoot);
			}, [
			    ng.router.RouteRegistry,
			    ng.router.Pipeline,
			    ng.router.Location,
			    App
			]
		),
		ng.router.routerInjectables,
		ng.bind(ng.router.LocationStrategy).toClass(ng.router.HashLocationStrategy),
	]);
});