(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\430 G3\Desktop\MyPortfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "9iua":
/*!**********************************************************!*\
  !*** ./src/app/component/projects/projects.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ProjectsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.h4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.p);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProjectsComponent {
    constructor() {
        this.modalOne = false;
        this.modalTwo = false;
        this.modalThree = false;
        this.modalFour = false;
        this.projects = [
            {
                link: 'https://mohhamedhassan.github.io/fakebook/',
                img: 'assets/facebook.png',
                h4: 'FACEBOOK CLONE',
                p: 'Facebook clone by Angular & (NodeJS By another developer)',
            },
            {
                link: 'https://mohhamedhassan.github.io/Restaurant/home',
                img: 'assets/pizzahutLogo-en.png',
                h4: 'PIZZA HUT CLONE',
                p: 'PIZZA HUT clone by Angular & (NodeJS By another developer)',
            },
            {
                link: 'https://mohhamedhassan.github.io/cv-builder/home',
                img: 'assets/logo.png',
                h4: 'CV Builder',
                p: 'CV Builder by Angular ',
            },
            {
                link: 'https://mohhamedhassan.github.io/TheGiftery/home',
                img: 'assets/HEBA-Giftery-New-Website-Layout-2022_pages-to-jpg-0002-272x75.jpg',
                h4: 'The Giftery',
                p: 'E_Commerce by Angular & Firebase ',
            },
            {
                link: 'https://mohhamedhassan.github.io/MoviesApi/home',
                img: 'assets/cinema-logo-with-popcorn_23-2147494040.avif',
                h4: 'MoviesApi',
                p: 'MoviesApi by Angular',
            },
            {
                link: 'https://mohhamedhassan.github.io/foodeology/',
                img: 'assets/Logo_Blanco+-+copia.png',
                h4: 'Foodeology',
                p: 'Restaurant Design by HTML CSS JS',
            },
            {
                link: 'https://mohhamedhassan.github.io/StickyNotes/',
                img: 'assets/logo (1).png',
                h4: 'StickyNotes',
                p: 'StickyNotes by HTML CSS JS',
            },
            {
                link: 'https://mohhamedhassan.github.io/taskTwo/',
                img: 'assets/logo (2).png',
                h4: 'Agencynix',
                p: 'Agencynix by HTML CSS',
            },
            {
                link: 'https://mohhamedhassan.github.io/TemplateOne/',
                img: 'assets/logo (3).png',
                h4: 'The Evenet',
                p: 'HTML CSS',
            },
            {
                link: 'https://mohhamedhassan.github.io/TemplateTwo/',
                img: 'assets/pic2.png',
                h4: 'CODER.BITS',
                p: 'HTML CSS',
            },
            {
                link: 'https://mohhamedhassan.github.io/task/',
                img: 'assets/download.png',
                h4: 'Technical Office',
                p: 'HTML CSS',
            }
        ];
    }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 7, vars: 1, consts: [[1, "pding", "d-flex", "justify-content-center", "align-items-center", "about", 2, "min-height", "100vh"], [1, "w-100"], [1, "mainH2", "text-center", 2, "margin-bottom", "100px"], [1, "container", "text-white"], [1, "row"], ["class", "col-md-12 mb-5", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-5"], [1, "col-lg-3", "mb-2"], [1, "text-center"], ["target", "_blank", 3, "href"], ["alt", "", 2, "width", "100px", "object-fit", "contain", "border-radius", "10px", "height", "100px", 3, "src"], [1, "col-lg-9", "mb-2"], [1, "text-center", "text-lg-left"], ["target", "_blank", 2, "text-decoration", "underline", 3, "href"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectsComponent_div_6_Template, 14, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E8dp":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 0, consts: [[1, "pding", "d-flex", "justify-content-center", "align-items-center", "parent", 2, "min-height", "100vh"], [1, "text-center"], [1, "mainColor"], [1, "d-flex", "justify-content-center"], ["target", "_blank", "href", "https://drive.google.com/file/d/1OafdGRhRhim4fnFSWl8sA11fSqDD2MbU/view?usp=sharing", 1, "button", "text-white"], [1, "fas", "fa-download", "ml-2"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HELLO!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I'm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mohammed Hassan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A Front End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " DOWNLOAD MY CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".parent[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  line-height: 100px;\n  font-size: 60px;\n}\n.parent[_ngcontent-%COMP%]   .mainColor[_ngcontent-%COMP%] {\n  color: #f5b535;\n}\n.parent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  letter-spacing: 5px;\n  font-weight: bold;\n}\n@media only screen and (max-width: 600px) {\n  .parent[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 45px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .parent[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFFSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUdJO0VBQ0c7SUFDSyxlQUFBO0lBQ0EsaUJBQUE7RUFEVjtBQUNGO0FBR0k7RUFBa0U7SUFBRyxlQUFBO0VBQ3ZFO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQge1xyXG4gICAgaDIge1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAubWFpbkNvbG9yIHtcclxuICAgICAgICBjb2xvcjojZjViNTM1XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtoMntmb250LXNpemU6IDQwcHg7fX1cclxufSJdfQ== */"] });


/***/ }),

/***/ "Fut9":
/*!****************************************************!*\
  !*** ./src/app/component/about/about.component.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 32, vars: 0, consts: [[1, "pding", "d-flex", "justify-content-center", "align-items-center", "about", 2, "min-height", "100vh"], [1, "w-100"], [1, "mainH2", "text-center", 2, "margin-bottom", "100px"], [1, "container", "text-white"], [1, "row"], [1, "col-md-12", "mb-4"], [1, "col-lg-3", "mb-3"], [1, "text-center"], ["src", "assets/prosft.jpg", "alt", "", 2, "width", "100px", "object-fit", "cover", "border-radius", "10px", "height", "100px"], [1, "col-lg-9", "mb-3"], [1, "text-center", "text-lg-left"], ["src", "assets/advertleap.jpg", "alt", "", 2, "width", "100px", "object-fit", "cover", "border-radius", "10px", "height", "100px"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Front End Angular Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SHProsoft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "February 2022 - till now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Front End Angular Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Advert Leap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "May 2021 - October 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n.about[_ngcontent-%COMP%]   .gry[_ngcontent-%COMP%] {\n  color: gray;\n  transition: 0.5s;\n}\n.about[_ngcontent-%COMP%]   .gry[_ngcontent-%COMP%]:hover {\n  color: #f5b535;\n}\n.about[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  font-size: 25px;\n}\n.about[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  color: #f5b535;\n}\n.about[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 400px;\n}\n.about[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  display: inline-block;\n  width: 65px;\n}\n.about[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  display: inline-block;\n  width: 250px;\n}\n.about[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\na.button[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\na.button[_ngcontent-%COMP%]:hover {\n  color: #f5b535 !important;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFHLFlBQUE7QUFDUDtBQUFJO0VBSUksV0FBQTtFQUNBLGdCQUFBO0FBRFI7QUFIUTtFQUNJLGNBQUE7QUFLWjtBQUFJO0VBRUksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFDSTtFQUNHLFlBQUE7QUFDUDtBQUVRO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBQVo7QUFHQztFQUNPLHFCQUFBO0VBQ0EsWUFBQTtBQURSO0FBSUE7RUFBUyxtQkFBQTtBQURUO0FBTUE7RUFBVSxnQkFBQTtBQUZWO0FBR0E7RUFBZSx5QkFBQTtFQUF5QixxQkFBQTtBQUV4QyIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XHJcbiAgICBhIHtjb2xvcjpibGFja31cclxuICAgIC5ncnkge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjojZjViNTM1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xvcjpncmF5O1xyXG4gICAgICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIH1cclxuICAgIC5jb21wbGV0ZWRcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnllbGxvdyB7XHJcbiAgICAgICAgY29sb3I6I2Y1YjUzNTtcclxuICAgIH1cclxuICAgIC5idXR0b24ge1xyXG4gICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpcnN0ICB7XHJcbiAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBcclxufVxyXG4uZC1mbGV4IHttYXJnaW4tYm90dG9tOiAyMHB4O31cclxuICAgIH1cclxuXHJcblxyXG59XHJcbmEuYnV0dG9uIHt0cmFuc2l0aW9uOiAuNXM7fVxyXG5hLmJ1dHRvbjpob3Zlcntjb2xvcjojZjViNTM1ICFpbXBvcnRhbnQ7dGV4dC1kZWNvcmF0aW9uOiBub25lO30iXX0= */"] });


/***/ }),

/***/ "Q0eT":
/*!**********************************************************!*\
  !*** ./src/app/component/notfound/notfound.component.ts ***!
  \**********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(); };
NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 2, vars: 0, consts: [[1, "text-white", "pt-5", "text-center", 2, "min-height", "100vh"]], template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ERROR 404 NOT FOUNd\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rmb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/home/home.component */ "E8dp");
/* harmony import */ var _component_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/projects/projects.component */ "9iua");
/* harmony import */ var _component_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/skills/skills.component */ "VkeS");
/* harmony import */ var _component_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/contacts/contacts.component */ "zVwx");





class AppComponent {
    constructor() {
        this.title = 'myPortfolio';
        this.showNavBar = false;
        this.currentTab = 1;
    }
    scroll(el, currenttab) {
        this.currentTab = currenttab;
        this.showNavBar = !this.showNavBar;
        el.scrollIntoView();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 41, vars: 12, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top"], [1, "container"], [1, "font-weight-bold", "navbar-brand", "mainh11", "mb-0", 2, "cursor", "pointer", 3, "click"], [1, "text-warning", 2, "font-size", "small"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], ["target", "_blank", "href", "https://mohhamedhassan.github.io/MyPortfolio/", 1, "nav-link", "text-white"], ["home", ""], ["projects", ""], ["skills", ""], ["contacts", ""], [1, "contaienr", "text-center", "text-white", "py-4", 2, "border-top", "1px solid #4f4c4c"], [1, "m-0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_h2_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return ctx.scroll(_r0, 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MOHAMMED HASSAN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.showNavBar = !ctx.showNavBar; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return ctx.scroll(_r0, 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx.scroll(_r1, 6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx.scroll(_r2, 3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Skils");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); return ctx.scroll(_r3, 5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Copyright \u00A92020 All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showNavBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentTab == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentTab == 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentTab == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentTab == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentTab == 5);
    } }, directives: [_component_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _component_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _component_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _component_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"]], styles: ["nav[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #4f4c4c;\n  background-color: black;\n}\nnav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: white;\n  font-size: 15px;\n  padding: 10px 20px;\n  transition: 0.5s;\n  margin: 10px 0;\n  border-bottom: 1px solid transparent;\n}\nnav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #f5b535;\n  border-bottom: 1px solid #f5b535;\n}\nnav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #f5b535 !important;\n  border-bottom: 1px solid #f5b535;\n}\nfooter[_ngcontent-%COMP%] {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZ0NBQUE7RUFDQSx1QkFBQTtBQUNMO0FBQUk7RUFNSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0FBSFI7QUFSUTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtBQVVaO0FBQ0k7RUFDSSx5QkFBQTtFQUNJLGdDQUFBO0FBQ1o7QUFHQTtFQUFRLHVCQUFBO0FBQ1IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRmNGM0YztcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIC5uYXYtbGluayAge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjojZjViNTM1O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQjZjViNTM1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiNmNWI1MzUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkI2Y1YjUzNTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbmZvb3RlciB7YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7fVxyXG4iXX0= */"] });


/***/ }),

/***/ "VkeS":
/*!******************************************************!*\
  !*** ./src/app/component/skills/skills.component.ts ***!
  \******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function SkillsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](skill_r1 == null ? null : skill_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", skill_r1 == null ? null : skill_r1.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class SkillsComponent {
    constructor() {
        this.skills = [
            {
                name: 'HTML',
                icon: 'fab fa-html5'
            },
            {
                name: 'CSS',
                icon: 'fab fa-css3-alt'
            },
            {
                name: 'SCSS',
                icon: 'fab fa-sass'
            },
            {
                name: 'Bootstrap',
                icon: 'fab fa-bootstrap'
            },
            {
                name: 'JAVASCRIPT/<br>TYPESCRIPT',
                icon: 'fab fa-js-square'
            },
            {
                name: 'ANGULAR +2',
                icon: 'fab fa-angular'
            },
            {
                name: 'JQUERY',
                icon: 'fas fa-code'
            },
            {
                name: 'GIT/GITHUB',
                icon: 'fab fa-github'
            }
        ];
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 6, vars: 1, consts: [[1, "skils", "pding", "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "100vh"], [1, "container"], [1, "mainH2", "text-center", "mb-5"], [1, "row"], ["class", "col-md-3 text-center text-white mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-3", "text-center", "text-white", "mb-4"], [1, "fa-7x", 2, "color", "#f5b535"], [1, "my-3", 3, "innerHtml"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Skils");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillsComponent_div_5_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".skils[_ngcontent-%COMP%]   .progres[_ngcontent-%COMP%] {\n  background: #1a1a1a;\n  height: 13px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.skils[_ngcontent-%COMP%]   .progres[_ngcontent-%COMP%]   .progres-width[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  background: #f5b535;\n  display: block;\n}\n.skils[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: white;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxza2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQVA7QUFDTztFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ1Q7QUFDSztFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ1AiLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxzIHtcclxuICAgIC5wcm9ncmVzIHtcclxuICAgICAgIGJhY2tncm91bmQ6ICMxYTFhMWE7XHJcbiAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgICAgICAucHJvZ3Jlcy13aWR0aCB7XHJcbiAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6ICNmNWI1MzU7XHJcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgfVxyXG4gICAgIHN0cm9uZyB7XHJcbiAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICBwYWRkaW5nOiAxNXB4OyB9XHJcbiAgIH1cclxuICAgICAiXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/home/home.component */ "E8dp");
/* harmony import */ var _component_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/notfound/notfound.component */ "Q0eT");
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/about/about.component */ "Fut9");
/* harmony import */ var _component_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/skills/skills.component */ "VkeS");
/* harmony import */ var _component_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/projects/projects.component */ "9iua");
/* harmony import */ var _component_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/contacts/contacts.component */ "zVwx");
/* harmony import */ var _component_freelance_freelance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/freelance/freelance.component */ "zD+c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _component_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"],
        _component_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _component_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
        _component_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
        _component_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"],
        _component_freelance_freelance_component__WEBPACK_IMPORTED_MODULE_9__["FreelanceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
                scrollPositionRestoration: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zD+c":
/*!************************************************************!*\
  !*** ./src/app/component/freelance/freelance.component.ts ***!
  \************************************************************/
/*! exports provided: FreelanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelanceComponent", function() { return FreelanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FreelanceComponent {
    constructor() {
        this.modalOne = false;
    }
    ngOnInit() {
    }
}
FreelanceComponent.ɵfac = function FreelanceComponent_Factory(t) { return new (t || FreelanceComponent)(); };
FreelanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FreelanceComponent, selectors: [["app-freelance"]], decls: 34, vars: 0, consts: [[1, "pding", "d-flex", "justify-content-center", "align-items-center", "about", 2, "min-height", "100vh"], [1, "w-100"], [1, "mainH2", "text-center", 2, "margin-bottom", "100px"], [1, "container", "text-white"], [1, "row"], [1, "col-md-12", "mb-4"], [1, "col-lg-3", "mb-3"], [1, "text-center"], ["href", " https://join.com.kw/", "target", "_blank"], ["src", "assets/default.jpg", "alt", "", 2, "width", "100px", "object-fit", "cover", "border-radius", "10px", "height", "100px", "background-color", "white"], [1, "col-lg-9", "mb-3"], [1, "text-center", "text-lg-left"], ["href", " https://join.com.kw/", "target", "_blank", 2, "text-decoration", "underline"], ["href", "https://drastiiq8.com/", "target", "_blank"], ["src", "assets/DIRASATI-1707x2048.png", "alt", "", 2, "width", "100px", "object-fit", "cover", "border-radius", "10px", "height", "100px", "background-color", "white"], ["href", "https://drastiiq8.com/", "target", "_blank", 2, "text-decoration", "underline"]], template: function FreelanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Freelance Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "JOIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "E Commerce for a Kuwaiti company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "LIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "DRASTI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "An online educational platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "LIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".projects[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\n.projects[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.projects[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.projects[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]   .over[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -100%;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background: #f5b535;\n  opacity: 0.8;\n  transition: 0.5s;\n  border-radius: 20px;\n}\n.projects[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]:hover   .over[_ngcontent-%COMP%] {\n  left: 0;\n  border-radius: 20px;\n}\n.projects[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 0.5s 0.5s;\n  border-radius: 20px;\n  object-fit: cover;\n}\n.projects[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.5);\n  border-radius: 20px;\n}\n.projects[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.5s;\n  color: black !important;\n}\n.projects[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%]:hover {\n  color: white !important;\n}\n.popupone[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: #f5b535;\n  opacity: 0.95;\n  z-index: 11111;\n  overflow: auto;\n  \n  \n  \n  \n}\n.popupone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 30px;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n.popupone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  font-size: 25px;\n  top: 15px;\n  border: 2px solid black;\n  border-radius: 6px;\n  padding: 5px;\n  cursor: pointer;\n}\n.popupone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n.popupone[_ngcontent-%COMP%]   .scrl[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.popupone[_ngcontent-%COMP%]   .scrl[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n.popupone[_ngcontent-%COMP%]   .scrl[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f5b535;\n  border-radius: 10px;\n}\n.popupone[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #f5b535;\n}\n@media (max-width: 768px) {\n  .popupone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .popupone[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .popupone[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: small;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmcmVlbGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQUcsWUFBQTtBQUdQO0FBRkk7RUFDRSxtQkFBQTtBQUlOO0FBSEk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFLTjtBQUZJO0VBQ0UsT0FBQTtFQUFTLG1CQUFBO0FBS2Y7QUFKTTtFQUFJLHFCQUFBO0VBQW1CLG1CQUFBO0VBQW9CLGlCQUFBO0FBU2pEO0FBUk07RUFDRSxxQkFBQTtFQUFzQixtQkFBQTtBQVc5QjtBQVZRO0VBSUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFTVjtBQWRVO0VBQ0UsdUJBQUE7QUFnQlo7QUFUVTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFzQkUsVUFBQTtFQUtkLFVBQUE7RUFNQSxXQUFBO0VBTUEsb0JBQUE7QUF2QkE7QUFmWTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBZ0JkO0FBZFk7RUFNRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVdkO0FBdkJjO0VBRUksaUJBQUE7RUFDQSxZQUFBO0FBd0JsQjtBQVpBO0VBQ0UsV0FBQTtBQWNGO0FBVkE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FBWUY7QUFSQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFVRjtBQU5BO0VBQ0UsbUJBQUE7QUFRRjtBQUxVO0VBQ0U7SUFDRSxlQUFBO0VBUVo7O0VBUFU7SUFDRSxnQkFBQTtFQVVaO0FBQ0YiLCJmaWxlIjoiZnJlZWxhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIGgze2NvbG9yOiB3aGl0ZTt9XHJcbiAgICAucG9zaXRpb24tcmVsYXRpdmUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgLm92ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNWI1MzU7XHJcbiAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgLnBvc2l0aW9uLXJlbGF0aXZlOmhvdmVyIC5vdmVyIHtcclxuICAgICAgbGVmdDogMDsgYm9yZGVyLXJhZGl1czogMjBweDt9XHJcbiAgICAgIGltZ3t0cmFuc2l0aW9uOi41cyAuNXM7Ym9yZGVyLXJhZGl1czogMjBweDtvYmplY3QtZml0OiBjb3Zlcjt9XHJcbiAgICAgIC5wb3NpdGlvbi1yZWxhdGl2ZTpob3ZlciBpbWcge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtib3JkZXItcmFkaXVzOiAyMHB4OyB9XHJcbiAgICAgICAgLmdyYXkge1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IC41cztcclxuICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvcHVwb25lIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWI1MzU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IC45NTtcclxuICAgICAgICAgICAgei1pbmRleDogMTExMTE7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7IFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8qIHdpZHRoICovXHJcbi5zY3JsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbi5zY3JsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5OyBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiBcclxuLyogSGFuZGxlICovXHJcbi5zY3JsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2Y1YjUzNTs7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjViNTM1O1xyXG59XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLnBvcHVwb25lIGkge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDsgfVxyXG4gICAgICAgICAgICAucG9wdXBvbmUgLmlubmVyIHAsIC5wb3B1cG9uZSAuaW5uZXIgaDMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7IH0gfVxyXG5cclxuICAgXHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zVwx":
/*!**********************************************************!*\
  !*** ./src/app/component/contacts/contacts.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 35, vars: 0, consts: [[1, "contact", "text-white", "pding", 2, "min-height", "100vh"], [1, "container"], [1, "mainH2", "pb-5", "text-center"], [1, "row"], [1, "col-md-12", "mb-2"], ["href", "https://github.com/MohhamedHassan", "target", "_blank", 1, "contact-hover", "d-flex"], [1, "fab", "fa-github"], [1, "mx-2"], [1, ""], ["href", "https://www.linkedin.com/in/mohamed-hassan-851277189/", "target", "_blank", 1, "contact-hover", "d-flex"], [1, "fab", "fa-linkedin-in"], ["href", "mailto:fed.mohamed.hassan@gmail.com", 1, "contact-hover", "d-flex"], [1, "fab", "fa-google"], [2, "word-break", "break-all"], [1, "contact-hover", "d-flex"], [1, "fas", "fa-phone-volume"], ["href", "https://api.whatsapp.com/send/?phone=201110848124&text&type=phone_number&app_absent=0", "target", "_blank", 1, "contact-hover", "d-flex"], [1, "fab", "fa-whatsapp"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "fed.mohamed.hassan@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "02 37031456 / +20 111-084-8124 / +20 101-416-7486 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "+20 111-084-8124");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.contact[_ngcontent-%COMP%]   .contact-hover[_ngcontent-%COMP%]:hover {\n  color: #f5b535 !important;\n}\n\n.contact[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBREU7RUFDRSxlQUFBO0FBSUoiLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuLmNvbnRhY3QgLmNvbnRhY3QtaG92ZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmNWI1MzUgIWltcG9ydGFudDsgfVxyXG4gIC5jb250YWN0IGkge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map