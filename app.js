'use strict';

(function (ng, ngRouter, app) {

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

})(window.ng, window.ngRouter, window.app);