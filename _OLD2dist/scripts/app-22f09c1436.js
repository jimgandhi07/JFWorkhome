!function(){"use strict";angular.module("jfsafetyNet",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){return n}var n=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("jfsafetyNet").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var n=this;n.relativeDate=t(n.creationDate).fromNow()}t.$inject=["moment"];var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return n}angular.module("jfsafetyNet").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function n(n,a,e,o){var r,i=t(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(n.extraValues,function(t){i.type(t).pause()["delete"]()}),r=n.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){i.type(t.login).pause()["delete"]()})}),n.$on("$destroy",function(){r()})}function a(t,n){function a(){return e().then(function(){t.info("Activated Contributors View")})}function e(){return n.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],a()}a.$inject=["$log","githubContributor"];var e={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:n,controller:a,controllerAs:"vm"};return e}t.$inject=["malarkey"],angular.module("jfsafetyNet").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,n){function a(a){function o(t){return t.data}function r(n){t.error("XHR Failed for getContributors.\n"+angular.toJson(n.data,!0))}return a||(a=30),n.get(e+"/contributors?per_page="+a).then(o)["catch"](r)}var e="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:e,getContributors:a};return o}t.$inject=["$log","$http"],angular.module("jfsafetyNet").factory("githubContributor",t)}(),function(){"use strict";function t(t,n,a){function e(){r(),t(function(){i.classAnimation="rubberBand"},4e3)}function o(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function r(){i.awesomeThings=n.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1466017543840,i.showToastr=o,e()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("jfsafetyNet").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("jfsafetyNet").run(t)}(),function(){"use strict";function t(t,n){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),n.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("jfsafetyNet").config(t)}(),function(){"use strict";angular.module("jfsafetyNet").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,n){t.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("jfsafetyNet").config(t)}(),angular.module("jfsafetyNet").run(["$templateCache",function(t){t.put("app/main/main.html",'<!--<div class="container">\n\n  <div>\n    <acme-navbar creation-date="main.creationDate"></acme-navbar>\n  </div>\n\n  <div class="jumbotron text-center">\n    <h1>\'Allo, \'Allo!</h1>\n    <p class="lead">\n      <img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>\n      Always a pleasure scaffolding your apps.\n    </p>\n    <p class="animated infinite" ng-class="main.classAnimation">\n      <button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button>\n    </p>\n    <p>\n      With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey>\n    </p>\n  </div>\n\n  <div class="row">\n    <div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'">\n      <div class="thumbnail">\n        <img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}">\n        <div class="caption">\n          <h3>{{ awesomeThing.title }}</h3>\n          <p>{{ awesomeThing.description }}</p>\n          <p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>--><div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div class="jumbotron text-center"><p class=lead><span class=.icon-protractor></span></p><p class="animated infinite" ng-class=main.classAnimation><button type=button class="btn btn-lg btn-success" ng-click=main.showToastr()>Splendid Toastr</button></p></div><div class=row><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class=thumbnail><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class=caption></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-22f09c1436.js.map