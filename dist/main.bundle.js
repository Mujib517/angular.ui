webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/shared/lazy.module": [
		"../../../../../src/app/shared/lazy.module.ts",
		"lazy.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>About Page</h1>\r\n\r\n<h3>{{counter}}</h3>\r\n\r\n<button (click)=\"inc()\">Inc</button>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.counter = 10;
    }
    AboutComponent.prototype.inc = function () {
        this.counter++;
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html")
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.barrel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__product_list_product_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__users_users_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__product_product_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__product_detail_product_detail_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_product_new_product_component__ = __webpack_require__("../../../../../src/app/new-product/new-product.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_10__new_product_new_product_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__specs_specs_component__ = __webpack_require__("../../../../../src/app/specs/specs.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_11__specs_specs_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/reviews/reviews.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_12__reviews_reviews_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lazy_lazy_component__ = __webpack_require__("../../../../../src/app/lazy/lazy.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_13__lazy_lazy_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__react_form_react_form_component__ = __webpack_require__("../../../../../src/app/react-form/react-form.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_14__react_form_react_form_component__["a"]; });

















/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Typescript
//CLI setup
//templates
//components
//Data binding
//Pipes and custom pipes
 //es6 module
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: "\n    <app-header></app-header>\n    \n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n    \n    <app-footer></app-footer>\n    \n    "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_router_module__ = __webpack_require__("../../../../../src/app/shared/app.router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_barrel__ = __webpack_require__("../../../../../src/app/app.barrel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__shared_app_router_module__["a" /* AppRouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatProgressSpinnerModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__app_barrel__["b" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["f" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_barrel__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["k" /* ProductListComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["o" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["i" /* ProductComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["e" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["d" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["c" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["j" /* ProductDetailComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["h" /* NewProductComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["n" /* SpecsComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["m" /* ReviewsComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["g" /* LazyComponent */], __WEBPACK_IMPORTED_MODULE_7__app_barrel__["l" /* ReactFormComponent */], __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_barrel__["b" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_console_logger__ = __webpack_require__("../../../../../src/app/shared/console.logger.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(logger) {
        this.logger = logger;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.logger.warn("Test Logging");
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: "\n    <h1>Contact Page</h1>\n\n\n    <mat-toolbar color=\"primary\">My App\n      <button mat-button>Home</button>\n      <button mat-button>About</button>\n      <button mat-button>Contact</button>\n    </mat-toolbar>\n\n    <button mat-raised-button color=\"accent\">Click Me</button>\n    <button mat-fab>+</button>\n    <button mat-mini-fab color=\"primary\">+</button>\n\n    <mat-checkbox>Check me!</mat-checkbox>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Favorite food\">\n        <mat-option>Pizza</mat-option>\n        <mat-option>Subway</mat-option>\n        <mat-option>Biryani</mat-option>\n      </mat-select>\n  </mat-form-field>\n\n  <mat-spinner></mat-spinner>\n\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_console_logger__["a" /* ConsoleLogger */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: "\n  <footer class=\"container\">\n    <span>&copy;2018 myproductsapp.com</span>\n  </footer>\n  "
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userSvc, router) {
        this.userSvc = userSvc;
        this.router = router;
        this.isLoggedin = userSvc.isLoggedin();
    }
    HeaderComponent.prototype.onLogout = function () {
        this.userSvc.logout();
        this.isLoggedin = this.userSvc.isLoggedin();
        this.router.navigate(["/login"]);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: "\n  <header class=\"container\">\n  <div class=\"navbar navbar-inverse\">\n      <div class=\"navbar-brand\">My Products App</div>\n      <ul class=\"navbar-nav nav\">\n          <li><a routerLink=\"/\">Home</a></li>\n          <li><a routerLink=\"/about\">About</a></li>\n          <li><a routerLink=\"/products\">Products</a></li>\n          <li><a routerLink=\"/contact\">Contact</a></li>\n          <li><a routerLink=\"/lazy\">Lazy</a></li>\n      </ul>\n      <div class=\"pull-right\">\n        <a *ngIf=\"!isLoggedin\" routerLink=\"/login\" class=\"btn btn-primary btn-sm\">Login</a>\n        <button *ngIf=\"isLoggedin\" (click)=\"onLogout()\" class=\"btn btn-primary btn-sm\">Logout</button>\n      </div>\n  </div>\n</header>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_console_logger__ = __webpack_require__("../../../../../src/app/shared/console.logger.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//view encapsulation
//shadow dom
var HomeComponent = /** @class */ (function () {
    function HomeComponent(logger, http) {
        this.logger = logger;
        this.http = http;
        this.count = 0;
    }
    HomeComponent.prototype.ngOnChanges = function () {
        console.log("Inside on changes");
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.warn("Component took a lot of time to load");
        this.http.get("https://api.github.com/users")
            .subscribe(function () { return _this.count = 1000; }, function () { return _this.count = 100000; });
    };
    HomeComponent.prototype.ngDoCheck = function () {
        console.log("inside do check");
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("Destoryed");
    };
    HomeComponent.prototype.inc = function () {
        this.count++;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].Emulated,
            template: "\n       <h1>Home Page</h1>\n      \n       <h1>{{count}}</h1>\n       <button (click)=\"inc()\">++</button>\n    ",
            styles: ["h1 \n    {\n        color:red;\n        background-color:yellow\n    }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_console_logger__["a" /* ConsoleLogger */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());

// asynchronous op   events,timers,web svc
//ngIf, ngFor, ngSwitch, ngModel, ngClass ngStyle
// constructor 1
// ngOnChanges @Input x
// ngOninit 1
// ngDoCheck() x
// ngAfterContentInit 
// ngAfterContentChecked
// ngAfterViewInit
// ngAfterViewChecked
// ngOnDestroy 1 


/***/ }),

/***/ "../../../../../src/app/lazy/lazy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LazyComponent = /** @class */ (function () {
    function LazyComponent() {
    }
    LazyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lazy',
            template: "\n  <h1>Lazy Component</h1>\n  "
        })
    ], LazyComponent);
    return LazyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userSvc, router) {
        this.userSvc = userSvc;
        this.router = router;
        this.user = {};
        if (this.userSvc.isLoggedin) {
            this.router.navigate(["/products"]);
        }
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.userSvc.login(this.user)
            .subscribe(function (response) {
            _this.userSvc.saveToken(response.token);
            _this.router.navigate(["/products"]);
        }, function (err) { return console.log(err); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: "\n  <h1>Login</h1>\n  <div class=\"col-md-5\">\n    <div class=\"form-group\">\n      <input type=\"text\" placeholder=\"Username\" class=\"form-control\" [(ngModel)]=\"user.username\"/>\n    </div>\n      <div class=\"form-group\">\n        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [(ngModel)]=\"user.password\"/>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-success\" (click)=\"onLogin()\">Login</button>\n    </div>\n    \n  </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-product/new-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_product_model__ = __webpack_require__("../../../../../src/app/shared/models/product.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//required, minlen, maxlen, pattern
//template driven
// reactive forms
var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(svc, router) {
        this.svc = svc;
        this.router = router;
        this.success = false;
        this.error = false;
        this.product = new __WEBPACK_IMPORTED_MODULE_3__shared_models_product_model__["a" /* Product */]();
    }
    NewProductComponent.prototype.onSave = function () {
        var _this = this;
        this.svc.save(this.product)
            .subscribe(function (response) {
            console.log("Saved Successfully");
            _this.product = new __WEBPACK_IMPORTED_MODULE_3__shared_models_product_model__["a" /* Product */]();
            _this.success = true;
            _this.router.navigate(["/products"]);
        }, function (err) { return _this.error = true; });
    };
    NewProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-product',
            template: "\n   <h1>Add New Product</h1>\n\n\n   <table class=\"table table-bordered\">\n    <tr>\n      <td>Element</td>\n      <td>Errors</td>\n      <td>Invalid</td>\n      <td>Valid</td>\n      <td>Dirty</td>\n      <td>Pristine</td>\n      <td>Touched</td>\n    </tr>\n    <tr>\n      <td>Model</td>\n      <td>{{model.errors | json}}</td>\n      <td>{{model.invalid }}</td>\n      <td>{{model.valid }}</td>\n      <td>{{model.dirty }}</td>\n      <td>{{model.pristine }}</td>\n      <td>{{model.touched }}</td>\n    </tr>\n   </table>\n\n   <div *ngIf=\"success\" class=\"alert alert-success\">\n      Saved Successfully\n   </div>\n\n   <div *ngIf=\"error\" class=\"alert alert-danger\">\n      Failed to save please try again later\n   </div>\n\n  <form novalidate #frm=\"ngForm\">\n   <div class=\"col-md-5\">\n      <div class=\"form-group\">\n      <select class=\"form-control\" #brand=\"ngModel\" required=\"true\" [(ngModel)]=\"product.brand\" name=\"brand\">\n        <option>Apple</option>\n        <option>Sony</option>\n        <option>Samsung</option>\n        <option>Xiomi</option>\n      </select>\n      <span class=\"text-danger\" *ngIf=\"brand.dirty && brand.invalid\">Required</span>\n         \n      </div>\n      <div class=\"form-group\">\n          <input type=\"text\" #model=\"ngModel\" placeholder=\"Model\"  minlength=\"3\" maxlength=\"10\"\n          class=\"form-control\" required=\"true\" name=\"model\" [(ngModel)]=\"product.model\"/>\n          \n          <span class=\"text-danger\" *ngIf=\"model.touched && model.errors?.required\">Required</span>\n          <span class=\"text-danger\" *ngIf=\"model.touched && model.errors?.minlength\">Min 3 chars</span>\n          <span class=\"text-danger\" *ngIf=\"model.touched && model.errors?.maxlength\">Max 10 chars</span>\n      </div>\n      <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Price\" #price=\"ngModel\" \n          class=\"form-control\" required=\"true\" name=\"price\" [(ngModel)]=\"product.price\" pattern=\"[0-9]{3,4}\"/>\n          \n          <span class=\"text-danger\" *ngIf=\"price.touched && price.errors?.required\">Required</span>\n          <span class=\"text-danger\" *ngIf=\"price.touched && price.errors?.pattern\">Invalid price</span>\n      </div>\n      <div class=\"form-group\">\n          InStock: <input type=\"checkbox\" [(ngModel)]=\"product.inStock\" name=\"inStock\"/>\n      </div>\n      <div class=\"form-group\">\n         <button [disabled]=\"frm.invalid\" class=\"btn btn-success\" (click)=\"onSave()\">Save Product</button>\n      </div>\n   </div>\n<form>\n\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(productSvc, route) {
        this.productSvc = productSvc;
        this.route = route;
        this.loading = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var id = this.route.snapshot.params.id;
        this.productSvc.getById(id)
            .subscribe(function (response) {
            _this.productSvc.reviews = response["reviews"];
            _this.product = response;
            _this.loading = false;
        }, function (err) { return console.log(err); });
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-detail',
            template: "\n   <mat-spinner *ngIf=\"loading\"></mat-spinner>\n  \n  <div *ngIf=\"!loading\" >\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          {{product?.brand}} {{product?.model}}\n        </div>\n        <div class=\"panel-body\">\n          InStock: <input type=\"checkbox\" [checked]=\"product?.inStock\" disabled=\"true\"/>\n          <div>{{product?.price|currency}}</div>\n        </div>\n        <div class=\"panel-footer\">\n            {{product?.lastUpdated | time}}\n        </div>\n    </div>\n    <div>\n        <ul class=\"nav-tabs nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"specs\">Specs</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"reviews\">Reviews</a></li>\n        </ul>\n        <div>\n          <router-outlet></router-outlet>\n        </div>\n    </div>\n   </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_console_logger__ = __webpack_require__("../../../../../src/app/shared/console.logger.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListComponent = /** @class */ (function () {
    //dependency injection. constructor injection
    function ProductListComponent(route, svc, logger) {
        this.route = route;
        this.svc = svc;
        this.logger = logger;
        this.products = this.route.snapshot.data.response.data;
    }
    ProductListComponent.prototype.ngDoCheck = function () {
        console.log("Product list change detection ");
    };
    ProductListComponent.prototype.onNotify = function (data) {
        var _this = this;
        this.svc.get().subscribe(function (response) { return _this.products = response["data"]; }, function (err) { return console.log(err); });
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list',
            template: "<h1>Product List</h1>\n    <div class=\"col-md-6\">\n    <a class=\"btn btn-danger\" routerLink=\"/products/new\">New Product</a>\n    <a class=\"btn btn-danger\" routerLink=\"/products/new-reactive\">New Product Reactive</a>\n        <div *ngFor=\"let prod of products\" class=\"well\">\n            <app-product [product]=\"prod\" (notify)=\"onNotify()\"></app-product>\n            <hr/>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__shared_console_logger__["a" /* ConsoleLogger */]])
    ], ProductListComponent);
    return ProductListComponent;
}());

//pipes : uppercase lowerccase titlecase currency date json async 


/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(svc) {
        this.svc = svc;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ProductComponent.prototype.ngOnChanges = function (changes) {
        console.log("inside on changes", changes);
    };
    ProductComponent.prototype.ngDoCheck = function () {
        console.log("Product change detection");
    };
    ProductComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.svc.delete(id)
            .subscribe(function (response) {
            _this.notify.emit();
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], ProductComponent.prototype, "notify", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: "\n    <a [routerLink]=\"'/products/'+product._id\"><h3>{{product.brand | uppercase}}  {{product.model | lowercase}}</h3></a>\n    <div>{{product.price | currency}}</div>\n    <div>InStock: <input [disabled]=\"true\" type=\"checkbox\" [checked]=\"product.inStock\"/>\n    <div>{{product.lastUpdated | date:'MM-dd-yyyy hh:mm'}}</div>\n    <div>{{product.lastUpdated | time}}</div>\n    <div>\n      <button class=\"btn btn-danger btn-sm\" (click)=\"onDelete(product._id)\">Delete</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/react-form/react-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReactFormComponent = /** @class */ (function () {
    function ReactFormComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            brand: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            model: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(3)]],
            price: ['', []],
            inStock: ['', []]
        });
    }
    ReactFormComponent.prototype.onSave = function () {
        if (this.form.valid) {
            console.log(this.form.value);
            this.form.reset();
        }
        else {
            console.log("Validations are failing");
        }
    };
    ReactFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-react-form',
            template: "\n   <h1>Reactive Form</h1>\n\n   <form novalidate [formGroup]=\"form\">\n   <div class=\"col-md-5\">\n      <div class=\"form-group\">\n      <select class=\"form-control\" formControlName=\"brand\" >\n        <option value=\"\">-Select-</option>\n        <option>Apple</option>\n        <option>Sony</option>\n        <option>Samsung</option>\n        <option>Xiomi</option>\n      </select>\n         <span class=\"text-danger\" *ngIf=\"form.controls.brand.touched && form.controls.brand.errors?.required\">Required</span>\n      </div>\n      <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Model\"  minlength=\"3\" maxlength=\"10\"\n          class=\"form-control\" required=\"true\" formControlName=\"model\"/>  \n        </div>\n      <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Price\"\n          class=\"form-control\" required=\"true\" formControlName=\"price\"/>\n      </div>\n      <div class=\"form-group\">\n          InStock: <input type=\"checkbox\" formControlName=\"inStock\"/>\n      </div>\n      <div class=\"form-group\">\n         <button [disabled]=\"form.invalid\" class=\"btn btn-success\" (click)=\"onSave()\">Save Product</button>\n      </div>\n   </div>\n<form>\n\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ReactFormComponent);
    return ReactFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(svc) {
        this.svc = svc;
        this.reviews = svc.reviews;
    }
    ReviewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reviews',
            template: "\n   <h3 *ngIf=\"reviews && reviews.length>0\">Reviews</h3>\n   <h3 *ngIf=\"!reviews||reviews.length==0\">Be the first one to review</h3>\n   <div *ngFor=\"let review of reviews\">\n      <h3>{{review.name}} {{review.rating}} *</h3>\n      <h4>{{review.subject}}</h4>\n      <p>{{review.message}}</p>\n      <hr/>\n   </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/app.router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_product_new_product_component__ = __webpack_require__("../../../../../src/app/new-product/new-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__specs_specs_component__ = __webpack_require__("../../../../../src/app/specs/specs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_resolver__ = __webpack_require__("../../../../../src/app/shared/product.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lazy_lazy_component__ = __webpack_require__("../../../../../src/app/lazy/lazy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__react_form_react_form_component__ = __webpack_require__("../../../../../src/app/react-form/react-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_gaurd__ = __webpack_require__("../../../../../src/app/shared/product.gaurd.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var CHILDREN = [
    { path: 'specs', component: __WEBPACK_IMPORTED_MODULE_8__specs_specs_component__["a" /* SpecsComponent */] },
    { path: 'reviews', component: __WEBPACK_IMPORTED_MODULE_9__reviews_reviews_component__["a" /* ReviewsComponent */] }
];
var ROUTES = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__product_gaurd__["a" /* ProductGaurd */]] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_5__product_list_product_list_component__["a" /* ProductListComponent */], resolve: { response: __WEBPACK_IMPORTED_MODULE_10__product_resolver__["a" /* ProductResolver */] } },
    { path: 'products/new', component: __WEBPACK_IMPORTED_MODULE_7__new_product_new_product_component__["a" /* NewProductComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_14__product_gaurd__["a" /* ProductGaurd */]] },
    { path: 'products/new-reactive', component: __WEBPACK_IMPORTED_MODULE_12__react_form_react_form_component__["a" /* ReactFormComponent */] },
    { path: 'products/:id', component: __WEBPACK_IMPORTED_MODULE_6__product_detail_product_detail_component__["a" /* ProductDetailComponent */], children: CHILDREN },
    { path: 'lazy', component: __WEBPACK_IMPORTED_MODULE_11__lazy_lazy_component__["a" /* LazyComponent */], loadChildren: 'app/shared/lazy.module#LazyModule' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: '' }];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/console.logger.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleLogger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.warn = function (msg) {
        console.warn(msg);
    };
    ConsoleLogger.prototype.error = function (msg) {
        console.error(msg);
    };
    ConsoleLogger.prototype.log = function (msg) {
        console.log(msg);
    };
    ConsoleLogger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ConsoleLogger);
    return ConsoleLogger;
}());



/***/ }),

/***/ "../../../../../src/app/shared/file.logger.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileLogger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileLogger = /** @class */ (function () {
    function FileLogger() {
    }
    FileLogger.prototype.warn = function (msg) {
        console.warn("File: " + msg);
    };
    FileLogger.prototype.error = function (msg) {
        console.error("File: " + msg);
    };
    FileLogger.prototype.log = function (msg) {
        console.log("File: " + msg);
    };
    FileLogger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], FileLogger);
    return FileLogger;
}());



/***/ }),

/***/ "../../../../../src/app/shared/if.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IfDirective = /** @class */ (function () {
    function IfDirective(template, container) {
        this.template = template;
        this.container = container;
    }
    Object.defineProperty(IfDirective.prototype, "if", {
        set: function (val) {
            if (val) {
                this.container.createEmbeddedView(this.template);
            }
            else {
                this.container.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    IfDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[if]',
            inputs: ['if']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */]])
    ], IfDirective);
    return IfDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/shared/product.gaurd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGaurd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductGaurd = /** @class */ (function () {
    function ProductGaurd(userSvc, router) {
        this.userSvc = userSvc;
        this.router = router;
    }
    ProductGaurd.prototype.canDeactivate = function () {
        return confirm("Are you sure you want to leave unsaved changes");
    };
    ProductGaurd.prototype.canActivate = function () {
        console.log("Checking gaurd");
        var isLoggedin = this.userSvc.isLoggedin();
        if (!isLoggedin) {
            this.router.navigate(["/"]);
        }
        return isLoggedin;
    };
    ProductGaurd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProductGaurd);
    return ProductGaurd;
}());



/***/ }),

/***/ "../../../../../src/app/shared/product.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProductInterceptor = /** @class */ (function () {
    function ProductInterceptor() {
    }
    ProductInterceptor.prototype.intercept = function (req, next) {
        var token = localStorage.getItem("token");
        if (token) {
            var newReq = req.clone({ headers: req.headers.set("authorization", token) });
            return next.handle(newReq)
                .do(function (response) {
                console.log("In response interceptor");
                return response;
            })
                .catch(function (err) {
                console.log("In Error");
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
            });
        }
        return next.handle(req);
    };
    ProductInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ProductInterceptor);
    return ProductInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/product.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductResolver = /** @class */ (function () {
    function ProductResolver(svc) {
        this.svc = svc;
    }
    ProductResolver.prototype.resolve = function () {
        return this.svc.get();
    };
    ProductResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]])
    ], ProductResolver);
    return ProductResolver;
}());



/***/ }),

/***/ "../../../../../src/app/shared/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.get = function () {
        return this.http.get("https://rest-node-api.herokuapp.com/api/products");
    };
    ProductService.prototype.getById = function (id) {
        return this.http.get("https://rest-node-api.herokuapp.com/api/products/" + id);
    };
    ProductService.prototype.delete = function (id) {
        return this.http.delete("https://rest-node-api.herokuapp.com/api/products/" + id);
    };
    ProductService.prototype.save = function (product) {
        return this.http.post("https://rest-node-api.herokuapp.com/api/products", product);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__console_logger__ = __webpack_require__("../../../../../src/app/shared/console.logger.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__file_logger__ = __webpack_require__("../../../../../src/app/shared/file.logger.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__time_pipe__ = __webpack_require__("../../../../../src/app/shared/time.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_resolver__ = __webpack_require__("../../../../../src/app/shared/product.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_interceptor__ = __webpack_require__("../../../../../src/app/shared/product.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_gaurd__ = __webpack_require__("../../../../../src/app/shared/product.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__show_directive__ = __webpack_require__("../../../../../src/app/shared/show.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__if_directive__ = __webpack_require__("../../../../../src/app/shared/if.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__time_pipe__["a" /* TimePipe */], __WEBPACK_IMPORTED_MODULE_10__show_directive__["a" /* ShowDirective */], __WEBPACK_IMPORTED_MODULE_11__if_directive__["a" /* IfDirective */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_6__product_resolver__["a" /* ProductResolver */], __WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__product_gaurd__["a" /* ProductGaurd */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_7__product_interceptor__["a" /* ProductInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_3__console_logger__["a" /* ConsoleLogger */], useClass: __WEBPACK_IMPORTED_MODULE_4__file_logger__["a" /* FileLogger */] }],
            exports: [__WEBPACK_IMPORTED_MODULE_5__time_pipe__["a" /* TimePipe */], __WEBPACK_IMPORTED_MODULE_10__show_directive__["a" /* ShowDirective */], __WEBPACK_IMPORTED_MODULE_11__if_directive__["a" /* IfDirective */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/show.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//attribute directive

var ShowDirective = /** @class */ (function () {
    function ShowDirective(el, render) {
        this.el = el;
        this.render = render;
    }
    Object.defineProperty(ShowDirective.prototype, "show", {
        set: function (val) {
            this.render.setElementStyle(this.el.nativeElement, "display", val ? "block" : "none");
            // this.el.nativeElement.style.display = val ? "block" : "none";
        },
        enumerable: true,
        configurable: true
    });
    ShowDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[show]',
            inputs: ['show']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]])
    ], ShowDirective);
    return ShowDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/time.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimePipe = /** @class */ (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (date) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(date).fromNow();
    };
    TimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'time'
        })
    ], TimePipe);
    return TimePipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (user) {
        return this.http.post("https://rest-node-api.herokuapp.com/api/users/signin", user);
    };
    UserService.prototype.saveToken = function (token) {
        localStorage.setItem("token", token);
    };
    UserService.prototype.isLoggedin = function () {
        return localStorage.getItem("token") ? true : false;
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem("token");
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/specs/specs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpecsComponent = /** @class */ (function () {
    function SpecsComponent() {
    }
    SpecsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-specs',
            template: "\n    <h3>More Specs..</h3>\n  "
        })
    ], SpecsComponent);
    return SpecsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(http) {
        var _this = this;
        this.http = http;
        http.get("https://api.github.com/users")
            .subscribe(function (response) {
            console.log(response);
            _this.users = response;
        }, function (err) { return console.log(err); });
    }
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: "\n        <div class=\"col-md-5\">\n            <div class=\"well\" *ngFor=\"let user of users\">\n                <h3>{{user.login}}</h3>\n                <img class=\"img img-circle\" [src]=\"user.avatar_url\" \n                width=\"100\" height=\"100\"/>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map