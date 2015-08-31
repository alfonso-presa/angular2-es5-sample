'use strict';

//TODO: Remove when this is resolved: https://github.com/angular/angular/issues/3890
window.assert= function () {return true;};

(function (ng, ngRouter, ngHttp, app) {
  document.addEventListener('DOMContentLoaded', function () {
    ng.bootstrap(app.Main , [
    ngRouter.routerInjectables,
    ng.bind(ngRouter.LocationStrategy).toClass(ngRouter.HashLocationStrategy),
    [ng.bind(ngHttp.ConnectionBackend).toClass(ngHttp.XHRBackend), ngHttp.BrowserXhr, ng.bind(ngHttp.RequestOptions).toClass(ngHttp.BaseRequestOptions), ng.bind(ngHttp.ResponseOptions).toClass(ngHttp.BaseResponseOptions), ngHttp.Http],
    app.People
   ]);
 });
})(window.ng, window.ngRouter, window.ngHttp, window.app);
