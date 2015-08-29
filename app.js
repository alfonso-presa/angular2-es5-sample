'use stict';

//TODO: Remove when this is resolved: https://github.com/angular/angular/issues/3890
window.assert= function () {return true;};

(function (app) {

app.Main = ng.

Component({
    selector: 'my-app'
}).
View({
	templateUrl: 'main.html',
    directives: [ngRouter.routerDirectives]
}).
Class({
	constructor: function () {}
});

})(app);
