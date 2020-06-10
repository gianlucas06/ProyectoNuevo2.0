(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@base/alert-modal/alert-modal.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@base/alert-modal/alert-modal.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\n<h4 class=\"modal-title\">{{title}}</h4>\n\n<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n\n<span aria-hidden=\"true\">&times;</span>\n\n</button>\n\n</div>\n\n<div class=\"modal-body\">\n\n<span [innerHTML]=\"message\"></span>\n\n</div>\n\n<div class=\"modal-footer\">\n\n<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Cerrar</button>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Produccion/panela-consulta/panela-consulta.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Produccion/panela-consulta/panela-consulta.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"StyleSheet\" href=\"panela-consulta.component.css\" type=\"text/css\">\n<div class=\"rowConsulta\">\n  <div class=\"col-6\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\" placeholder=\"Type to filter\">\n  </div>\n </div>\n   \n  \n  <table class=\"table table-striped\" *ngIf='panelas && panelas.length'>\n    <thead>\n      <tr>\n        <th scope=\"col\">No.</th>\n        <th scope=\"col\">Codigo Registro</th>\n        <th scope=\"col\">Fecha de ingreso</th>\n        <th scope=\"col\">Numero de lote </th>\n        <th scope=\"col\">Numero de lote Agricola</th>\n        <th scope=\"col\">Etapas de procesamiento</th>\n        <th scope=\"col\">Cantidad obtenida</th>\n        <th scope=\"col\">Responsable</th>\n        \n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let panela of panelas|filtroProducto:searchText;index as i\">\n        <th scope=\"row\">{{ i + 1 }}</th>\n        <td>{{panela.idregistro}}</td>\n        <td>{{panela.fechaIngreso | date: 'dd/MM/yyyy'}}</td>\n        <td>{{panela.numeroLote}}</td>\n        <td>{{panela.numeroLoteAgricola}}</td>\n        <td>{{panela.etapas}}</td>\n        <td>{{panela.cantidad}}</td>\n        <td>{{panela.responsable}}</td>\n        <td> \n          <button class=\"btn btn-danger\" title=\"Eliminar panela\"\n          (click)=\"delete(panela.idregistro)\">Eliminar</button>\n      </td>\n      </tr>\n    </tbody>\n  </table>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Produccion/panela-registro/panela-registro.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Produccion/panela-registro/panela-registro.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n\n<head>\n         <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1.0\">\n        <link rel=\"StyleSheet\" href=\"panela-registro.component.css\" type=\"text/css\">\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n        </head>\n        \n\n<body>\n    <div class=\"container\">\n        <div class=\"row\">\n            \n                <h2 class=\"form-tittle\">REGISTRO DE PRODUCCION DE <span>PANELA</span></h2> \n                <form [formGroup]=\"formGroup\">\n\n                    <div class=\"form-group\">\n                        <label for=\"Codigo\" class=\"form-label\">Codigo Registro</label>\n                        \n                        <input type=\"text\" name=\"idregistro\" formControlName=\"idregistro\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid':  control.idregistro.errors }\"/>\n                        <div *ngIf=\" control.idregistro.errors\" class=\"invalid-feedback\">\n                            <div class=\"mensaje-error\" *ngIf=\"control.idregistro.errors.required\">*La Identificación es requerida*</div>\n                        </div>\n                        \n                        \n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"fecha\" class=\"form-label\">Fecha de ingreso</label>\n                        <input type=\"date\"  name=\"fechaIngreso\" formControlName=\"fechaIngreso\" class=\"form-control\" \n                        [ngClass]=\"{ 'is-invalid':  control.fechaIngreso.errors }\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"NumeroLote\" class=\"form-label\" >Numero de lote</label>\n                        <input type=\"text\"  name=\"numeroLote\" formControlName=\"numeroLote\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid':  control.numeroLote.errors }\"  />\n                        <div *ngIf=\" control.numeroLote.errors\" class=\"invalid-feedback\">\n                            <div class=\"mensaje-error\" *ngIf=\"control.numeroLote.errors.required\">*Numero de Lote es requerido*</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"NumeroLoteAgricola\" class=\"form-label\">Numero de lote Agricola</label>\n                        <input type=\"text\"  name=\"numeroLoteAgricola\" formControlName=\"numeroLoteAgricola\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid':  control.numeroLoteAgricola.errors }\"  />\n                        <div *ngIf=\" control.numeroLoteAgricola.errors\" class=\"invalid-feedback\">\n                            <div class=\"mensaje-error\" *ngIf=\"control.numeroLoteAgricola.errors.required\">*Numero de Lote Agricola es requerido*</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"Etapas\" class=\"form-label\">Etapas</label>\n                        <select name=\"etapas\" formControlName=\"etapas\" class=\"form-control\" \n                         [ngClass]=\"{ 'is-invalid':  control.etapas.errors }\" > \n                            <option>Filtrado</option>\n                            <option>Evaporacion</option>\n                            <option>Punteo</option>\n                            <option>Moldeo</option>                       \n                         </select>\n                         <div *ngIf=\" control.etapas.errors\" class=\"invalid-feedback\">\n                            <div class=\"mensaje-error\" *ngIf=\"control.etapas.errors.required\">*Etapa es requerida*</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for= \"Cantidad\"  class=\"form-label\">Cantidad obtenida</label>\n                        <input type=\"text\"   name=\"cantidad\" formControlName=\"cantidad\" class=\"form-control\" \n                        [ngClass]=\"{ 'is-invalid':  control.cantidad.errors }\" />\n                        <div *ngIf=\" control.cantidad.errors\" class=\"invalid-feedback\">\n                            <div class=\"mensaje-error\" *ngIf=\"control.cantidad.errors.required\">*Cantidad es requerida*</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"Responsable\" class=\"form-label\">Responsable</label>\n                        <input type=\"text\"   name=\"responsable\" formControlName=\"responsable\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid':  control.responsable.errors }\"/>\n                        <div *ngIf=\" control.responsable.errors\" class=\"invalid-feedback\">\n                            <div class=\"mensaje-error\" *ngIf=\"control.responsable.errors.required\">*Responsable es requerido*</div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button class=\" btn btn-success mr-1\" (click)=\"add()\">Registrar</button>\n                        <button class=\"btn btn-danger\" type=\"reset\">Cancel</button>\n                    </div>\n                </form>\n            \n        </div>\n    </div>\n    <script src=\"https://code.jquery.com/jquery-3.4.1.slim.min.js\" integrity=\"sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js\" integrity=\"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6\" crossorigin=\"anonymous\"></script>\n\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Productor/productor-consulta/productor-consulta.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Productor/productor-consulta/productor-consulta.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>productor-consulta works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Productor/productor-registro/productor-registro.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Productor/productor-registro/productor-registro.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <div id=\"stepper1\" class=\"bs-stepper\">\n    <div class=\"bs-stepper-header\">\n      <div class=\"step\" data-target=\"#test-l-1\">\n        <button class=\"step-trigger\">\n          <span class=\"bs-stepper-circle\">1</span>\n          <span class=\"bs-stepper-label\">Registro De Productores</span>\n        </button>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"step\" data-target=\"#test-l-2\">\n        <button class=\"step-trigger\">\n          <span class=\"bs-stepper-circle\">2</span>\n          <span class=\"bs-stepper-label\">Registro De Predios</span>\n        </button>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"step\" data-target=\"#test-l-3\">\n        <button class=\"step-trigger\">\n          <span class=\"bs-stepper-circle\">3</span>\n          <span class=\"bs-stepper-label\">Datos Familiares</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"bs-stepper-content\">\n      <form (ngSubmit)=\"onSubmit()\">\n        <div id=\"test-l-1\" class=\"content\">\n          \n          <div class=\"form-group\">\n            <label id=\"NumerodeCedulaLabel\">Número de Cedula</label>\n            <input type=\"text\" id=\"cedulaProductores\" name=\"cedula\"class=\"form-control\"  placeholder=\"Digita tu cedula\" />\n          </div>\n          <div class=\"form-group\">\n            <label id=\"NombreProductoresLabel\">Nombre Completo</label>\n            <input type=\"text\" id=\"NombreProductores\" name=\"nombre\" class=\"form-control\"  placeholder=\"Nombre Completo\" />\n          </div>\n          <div class=\"form-group\">\n            <label id=\"CodigoProductoresLabel\">Código Productor</label>\n            <input type=\"text\" id=\"CodigoProductores\" name=\"codigoProductor\"class=\"form-control\"  placeholder=\"Digite codigo\" />\n          </div>\n          <div class=\"form-group\">\n            <label id=\"NumeroLabel\">Número Telefónico</label>\n            <input type=\"text\" id=\"Numero\" name=\"numero\" class=\"form-control\"  placeholder=\"Digite numero telefonico\" />\n          </div>\n          <div class=\"form-group\">\n            <label id=\"AfiliacionLabel\">Afiliciacion a Salud</label>\n            <input type=\"text\" id=\"Afiliacion\" name=\"Afiliacion\" class=\"form-control\"  placeholder=\"\" />\n          </div>\n          <div class=\"form-group\">\n            <label id=\"ActividadLabel\">Actividad Principal de Ingreso</label>\n            <input type=\"text\" id=\"Actividad\" name=\"Actividad\" class=\"form-control\"  placeholder=\"Campo requerido\" />\n          </div>\n          <button id=\"btnnext\" (click)=\"next()\" class=\"btn btn-primary\">Next</button>\n        \n        </div>\n        <div id=\"test-l-2\" class=\"content\">\n          <div class=\"form-group\">\n            <label >Codigo del predio</label>\n            <input type=\"text\"  class=\"form-control\" id=\"CodigoPredio\" placeholder=\"Digite codigo\" />\n          </div>\n          <div class=\"form-group\">\n            <label id=\"NombrePredioLabel\" >Nombre del predio</label>\n            <input type=\"text\"  class=\"form-control\" id=\"NombrePredio\" placeholder=\"Digite Nombre\" />\n          </div>\n          <div class=\"form-group\">\n            <label id=\"CodigoICALabel\">Codigo de ICA</label>\n            <input type=\"text\"  class=\"form-control\" id=\"CodigoICA\" placeholder=\"Digite codigo ICA\" />\n          </div>\n          <div class=\"form-group\">\n            <label id=\"MunicipioLabel\">Municipio</label>\n            <input type=\"text\"  class=\"form-control\" id=\"Municipio\" placeholder=\"Municipio\" />\n          </div>\n          <div class=\"form-group\">\n            <label id=\"VeredaLabel\">Vereda</label>\n            <input type=\"text\"  class=\"form-control\" id=\"Vereda\" placeholder=\"Vereda\" />\n          </div>\n          <button id=\"btnnext-2\" (click)=\"next()\" class=\"btn btn-primary\">Next</button>\n        </div>\n        <div id=\"test-l-3\" class=\"content text-center\">\n          <h2>Datos Familiares</h2>\n          \n          <button id=\"btnsubmit\" type=\"submit\" (click)=\"add()\"class=\"btn btn-primary mt-5\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n  <app-nav-menu></app-nav-menu>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/conocenos/conocenos.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conocenos/conocenos.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<p ALIGN=center>\n    <img src=\"assets\\imagenes\\quienes_somos.JPG\" alt=\"quienes_somos\">\n  </p>\n\n  <p ALIGN=center>\n    <img src=\"assets\\imagenes\\barra.jpg\" alt=\"barra\">\n  </p>\n  \n  <p ALIGN=\"center\" style=\"font-family: Arial; size: 4;\"> Somos una organización de pequeños productores indígenas legalmente constituida </p>\n  <p ALIGN=\"center\" style=\"font-family: Arial; size: 4;\">que se destacan por cultivar sus fincas en forma tradicional con especial cuidado por el medio ambiente, </p>\n  <p ALIGN=\"center\" style=\"font-family: Arial; size: 4;\"> producimos el café de alta calidad orgánico Flo Seynekun certificada como orgánica desde el 2008 y </p>\n    <p ALIGN=\"center\" style=\"font-family: Arial; size: 4;\">Comercio Justo desde el 2009.</p>\n    <p ALIGN=center>\n      <img src=\"assets\\imagenes\\barra.jpg\" alt=\"barra\">\n    </p>\n\n    \n      \n      <h3 ><span style=\"color: rgb(0, 182, 9);\" >Nuestra Mision</span></h3>\n        \n        <p id=\"text\" style=\"float:right;\">\nSomos una organización sostenible de pequeños productores que busca satisfacer necesidades de todos los asociados, a través de alternativas de producción ecológica y el desarrollo de la comunidad.\nAsumimos el compromiso de promover, en todos nuestros programas y productos la sostenibilidad social, económica y ambiental.\n</p>\n<h3 aling=\"center\"><span style=\"color:  rgb(0, 182, 9);\" >Nuestra Visión</span></h3>\n\n<p>\nQueremos ser reconocidos como un a organización de productores indígenas, ecológicos que trabaja por el desarrollo de las comunidades, la autonomía alimentaria y la conservación de la Sierra Nevada de Santa Marta.\nConsolidar un desarrollo productivo entorno al cultivo del café, que permita el mejoramiento de los ingresos y el bienestar de las familias asociadas.\n      </p>\n    \n    <p ALIGN=center>\n      <img src=\"assets\\imagenes\\barra.jpg\" alt=\"barra\">\n    </p>\n    <div class=\"contactenos\">\n      <h3 ><span name=\"contacto\" style=\"color: black;\">Contacto</span></h3>\n      <div class=\"custom\">\n        <p><span style=\"font-size: 10pt; color: black;\">Siempre estamos disponibles para usted!</span></p>\n      <div><span style=\"color: black;\"><strong>Dirección:</strong> CL 19B N° 7A-15 </span></div>\n      <div><span style=\"color: black;\">Valledupar, Colombia </span></div>\n      <div><span style=\"color: black;\"><strong>Teléfonos:</strong> +57 318 3987735 - +57 318 3623373</span></div>\n      </div>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\n\n<p>This is a simple example of an Angular component.</p>\n\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\n\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\n\n<p>This component demonstrates fetching data from the server.</p>\n\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\n\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\n  <thead>\n    <tr>\n      <th>Date</th>\n      <th>Temp. (C)</th>\n      <th>Temp. (F)</th>\n      <th>Summary</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let forecast of forecasts\">\n      <td>{{ forecast.date }}</td>\n      <td>{{ forecast.temperatureC }}</td>\n      <td>{{ forecast.temperatureF }}</td>\n      <td>{{ forecast.summary }}</td>\n    </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"contenedorMenu\">\n<div class=\"slider\">\n  <ul>\n    <li><img src=\"assets\\ImagenesCarousel\\seynekun-sierra-nevada.jpg\" alt=\"\"></li>\n    <li><img src=\"assets\\ImagenesCarousel\\seynekun-sierra-nevada2.jpg\" alt=\"\"></li>\n    <li><img src=\"assets\\ImagenesCarousel\\seynekun-sierra-nevada3.jpg\" alt=\"\"></li>\n    <li><img src=\"assets\\ImagenesCarousel\\seynekun-sierra-nevada4.jpg\" alt=\"\"></li>\n  </ul>\n</div>\n</div>\n<div class=\"parrafo\">\n<p ALIGN=center>\"La madre tierra a quien SERANKUA entregó la semilla para organizar </p> \n<p ALIGN=center>la tierra y todo cuando existe; con su herencia étnica espiritual y paisajística, </p>\n<p ALIGN=center>hizo la Sierra Nevada de Santa Marta un hogar sagrado, origen de la</p>\n<p ALIGN=center>raza humana escenario ancestral y natural, del cual germina un Café</p>\n<p ALIGN=center>orgánico que a través de su sabor y aroma, materializa el mensaje espiritual</p>\n<p ALIGN=center>que nos recuerda el compromiso universal de cuidar nuestra madre tierra\"</p>\n</div>\n<p ALIGN=center>\n  <img src=\"assets\\imagenes\\barra.jpg\" alt=\"barra\">\n</p>\n<div class=\"contactenos\">\n<h3 ><span name=\"contacto\" style=\"color: black;\">Contacto</span></h3>\n<div class=\"custom\">\n\t<p><span style=\"font-size: 10pt; color: black;\">Siempre estamos disponibles para usted!</span></p>\n<div><span style=\"color: black;\"><strong>Dirección:</strong> CL 19B N° 7A-15 </span></div>\n<div><span style=\"color: black;\">Valledupar, Colombia </span></div>\n<div><span style=\"color: black;\"><strong>Teléfonos:</strong> +57 318 3987735 - +57 318 3623373</span></div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggin/loggin.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggin/loggin.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Login</h2>\n\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n        <label for=\"userName\" class=\"form-label\">userName</label>\n        \n        <input type=\"userName\"  formControlName=\"userName\" class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid':  submitted && f.userName.errors }\"/>\n        <div *ngIf=\"  submitted && f.userName.errors\" class=\"invalid-feedback\">\n            <div class=\"mensaje-error\" *ngIf=\"f.userName.errors.required\">*userName is required*</div>\n        </div>\n        \n        \n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\" class=\"form-label\">password</label>\n        \n        <input type=\"password\"  formControlName=\"password\" class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted &&  f.password.errors }\"/>\n        <div *ngIf=\"  submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div class=\"mensaje-error\" *ngIf=\"f.password.errors.required\">*password is required*</div>\n        </div>\n        \n        \n    </div>\n\n<div class=\"form-group\">\n\n<button [disabled]=\"loading\" class=\"btn btn-primary\">\n\n<span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n\nLogin\n\n</button>\n\n</div>\n</form>\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<header>\n\n  <nav\n  class=\"navbar-1 navbar-fixed-top navbar-expand-sm navbar-toggleable-sm navbar  caja-shadow mb-3 \"\n>\n  <div class=\"container\">\n    \n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\".navbar-collapse\"\n      aria-label=\"Toggle navigation\"\n      [attr.aria-expanded]=\"isExpanded\"\n      (click)=\"toggle()\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div\n      class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\n      [ngClass]=\"{ show: isExpanded }\"\n    >\n      <ul class=\"navbar-nav flex-grow\">\n        <li\n        class=\"nav-item\"\n        [routerLinkActive]=\"['link-active']\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n      >\n       <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\" *ngIf=\"currentUser\">\n                    <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n                  </li>\n        \n        <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\" *ngIf=\"!currentUser\">\n          <a class=\"nav-link \" [routerLink]=\"['/loggin']\"\n            >ACCEDER</a\n          >\n      </ul>\n    </div>\n  </div>\n</nav>\n\n  <p ALIGN=center>\n    <img src=\"assets\\imagenes\\barra2.jpg\" alt=\"barra2\">\n  </p>\n  <nav\n    class=\"navbar navbar-fixed-top navbar-expand-sm navbar-toggleable-sm navbar   box-shadow mb-3 \"\n  >\n    <div class=\"container\">\n      <a id=\"SEYNEKUN\" class=\"navbar-brand\"  [routerLink]=\"['/']\">SEYNEKUN</a>\n      <a id=\"INICIO\" class=\"navbar-brand \"  [routerLink]=\"['/']\">INICIO</a> \n      <li li class=\"nav-item\" [routerLinkActive]=\"['link-active']\" *ngIf=\"currentUser\">\n      <a id=\"CONOCENOS\" class=\"navbar-brand\"  [routerLink]=\"['/productorRegistro']\" > REGISTRAR PRODUCTORES</a>\n    </li>\n      <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\".navbar-collapse\"\n        aria-label=\"Toggle navigation\"\n        [attr.aria-expanded]=\"isExpanded\"\n        (click)=\"toggle()\"\n      >\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\n        [ngClass]=\"{ show: isExpanded }\"\n      >\n        <ul class=\"navbar-nav flex-grow\">\n          <li\n            class=\"nav-item\"\n            [routerLinkActive]=\"['link-active']\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n          >\n        \n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\" *ngIf=\"currentUser\">\n            <a class=\"nav-link \" [routerLink]=\"['/panelaRegistro']\"\n            >Registro de produccion</a\n            >\n          </li>\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\" *ngIf=\"currentUser\">\n            <a class=\"nav-link \" [routerLink]=\"['/panelaConsulta']\"\n            >Consultar produccion</a\n            >\n          </li>\n          \n        </ul>\n      </div>\n    </div>\n  </nav>\n \n</header>\n\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/@base/alert-modal/alert-modal.component.css":
/*!*************************************************************!*\
  !*** ./src/app/@base/alert-modal/alert-modal.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BiYXNlL2FsZXJ0LW1vZGFsL2FsZXJ0LW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/@base/alert-modal/alert-modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/@base/alert-modal/alert-modal.component.ts ***!
  \************************************************************/
/*! exports provided: AlertModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModalComponent", function() { return AlertModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let AlertModalComponent = class AlertModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
};
AlertModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], AlertModalComponent.prototype, "title", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], AlertModalComponent.prototype, "message", void 0);
AlertModalComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-alert-modal',
        template: __importDefault(__webpack_require__(/*! raw-loader!./alert-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@base/alert-modal/alert-modal.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./alert-modal.component.css */ "./src/app/@base/alert-modal/alert-modal.component.css")).default]
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
], AlertModalComponent);



/***/ }),

/***/ "./src/app/@base/handle-http-error.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@base/handle-http-error.service.ts ***!
  \****************************************************/
/*! exports provided: HandleHttpErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleHttpErrorService", function() { return HandleHttpErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_base_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@base/alert-modal/alert-modal.component */ "./src/app/@base/alert-modal/alert-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let HandleHttpErrorService = class HandleHttpErrorService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            //console.error(error);
            console.error('status', error.status);
            if (error.status == "500") {
                //this.mostrarError500(error);
                this.mostrarError500(error);
            }
            else if (error.status == "400") {
                this.mostrarError400(error);
            }
            else if (error.status == "401") {
                this.mostrarError401(error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    log(message) {
        const messageBox = this.modalService.open(src_app_base_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__["AlertModalComponent"]);
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = message;
    }
    mostrarError500(error) {
        console.error(error);
        const modalRef = this.modalService.open(src_app_base_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__["AlertModalComponent"]);
        modalRef.componentInstance.title = 'Ha ocurrido un error inesperado';
        modalRef.componentInstance.message = "Error de la aplicación, vuela a intentarlo más tarde.";
    }
    mostrarError401(error) {
        const modalRef = this.modalService.open(src_app_base_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__["AlertModalComponent"]);
        modalRef.componentInstance.titulo = 'Acceso denegado';
        modalRef.componentInstance.mensaje = "No encontramos registros de su usuario en nuestro sistema";
    }
    mostrarError400(error) {
        console.error(error);
        let contadorValidaciones = 0;
        let mensajeValidaciones = `Señor(a) usuario(a), se han presentado algunos errores de validación, por favor revíselos y vuelva a realizar la operación.<br/><br/>`;
        for (const prop in error.error.errors) {
            contadorValidaciones++;
            mensajeValidaciones += `<strong>${contadorValidaciones}. ${prop}:</strong>`;
            error.error.errors[prop].forEach(element => {
                mensajeValidaciones += `<br/> - ${element}`;
            });
            mensajeValidaciones += `<br/>`;
        }
        const modalRef = this.modalService.open(src_app_base_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__["AlertModalComponent"]);
        modalRef.componentInstance.titulo = 'Ha ocurrido un error';
        modalRef.componentInstance.mensaje = mensajeValidaciones;
    }
};
HandleHttpErrorService.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
HandleHttpErrorService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], HandleHttpErrorService);



/***/ }),

/***/ "./src/app/Produccion/models/panela.ts":
/*!*********************************************!*\
  !*** ./src/app/Produccion/models/panela.ts ***!
  \*********************************************/
/*! exports provided: Panela */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panela", function() { return Panela; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class Panela {
}


/***/ }),

/***/ "./src/app/Produccion/panela-consulta/panela-consulta.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Produccion/panela-consulta/panela-consulta.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*CSS DE CONSULTA PANELA*/\n.rowConsulta{\n    margin: 100px 30px;\n   padding: 0;\n }\n.table {\n    margin: 10px auto;\n    color: black;\n    background-color:rgb(228, 204, 204);\n    font-family: Roboto ;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvZHVjY2lvbi9wYW5lbGEtY29uc3VsdGEvcGFuZWxhLWNvbnN1bHRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCO0FBQ3pCO0lBQ0ksa0JBQWtCO0dBQ25CLFVBQVU7Q0FDWjtBQUNBO0lBQ0csaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLGdEQUFnRDtBQUNwRCIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y2Npb24vcGFuZWxhLWNvbnN1bHRhL3BhbmVsYS1jb25zdWx0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypDU1MgREUgQ09OU1VMVEEgUEFORUxBKi9cbi5yb3dDb25zdWx0YXtcbiAgICBtYXJnaW46IDEwMHB4IDMwcHg7XG4gICBwYWRkaW5nOiAwO1xuIH1cbiAudGFibGUge1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMjgsIDIwNCwgMjA0KTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvIDtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59Il19 */");

/***/ }),

/***/ "./src/app/Produccion/panela-consulta/panela-consulta.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Produccion/panela-consulta/panela-consulta.component.ts ***!
  \*************************************************************************/
/*! exports provided: PanelaConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelaConsultaComponent", function() { return PanelaConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_panela_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/panela.service */ "./src/app/services/panela.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let PanelaConsultaComponent = class PanelaConsultaComponent {
    constructor(panelaService) {
        this.panelaService = panelaService;
    }
    ngOnInit() {
        this.panelaService.get().subscribe(result => {
            this.panelas = result;
        });
    }
    delete(panela) {
        var validar = confirm('Desea elimiar?');
        if (validar == true) {
            this.panelas = this.panelas.filter(h => h !== panela);
            this.panelaService.delete(panela).subscribe();
            this.ngOnInit();
        }
    }
    buscar(id) {
        if (id != "") {
        }
    }
};
PanelaConsultaComponent.ctorParameters = () => [
    { type: src_app_services_panela_service__WEBPACK_IMPORTED_MODULE_1__["PanelaService"] }
];
PanelaConsultaComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-panela-consulta',
        template: __importDefault(__webpack_require__(/*! raw-loader!./panela-consulta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Produccion/panela-consulta/panela-consulta.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./panela-consulta.component.css */ "./src/app/Produccion/panela-consulta/panela-consulta.component.css")).default]
    }),
    __metadata("design:paramtypes", [src_app_services_panela_service__WEBPACK_IMPORTED_MODULE_1__["PanelaService"]])
], PanelaConsultaComponent);



/***/ }),

/***/ "./src/app/Produccion/panela-registro/panela-registro.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Produccion/panela-registro/panela-registro.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\n    background-repeat: no-repeat;\n    position: relative;\n    width: 100%;\n    margin: 20px;\n    padding: 5% 5% 5% 5%; \n    background-size: 100% 100%;\n    max-width: 100%;\n    box-sizing: border-box;\n    background-attachment: fixed;\n   \n}\n.form-tittle{\n    \n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n   color:white;\n   text-align: center;\n   font-weight: bold;\n   \n}\n.container {\n   background: rgba(0, 0, 0, .6);\n   width: 100%;\n   max-width: 600px;\n   margin: auto;\n   padding: 15px 45px;\n   border-radius: 3px;\n   \n}\nspan{\n\n   color: lightgoldenrodyellow;\n   font-weight: bold;\n}\n.form-label{\n   width: 100%;\n   display: block;\n   color: rgb(252, 252, 252);\n   font-size: 16px;\n   font-family:Verdana, Geneva, Tahoma, sans-serif;\n   position: relative;\n   \n}\n.form-control{\n   \n   position: relative;\n   background: rgba(0, 0, 0, .7);\n   border: none;\n   outline: none;\n   border-bottom: 2px solid rgb(249, 250, 248) ;\n   color: white;\n   font-family: Verdana, Geneva, Tahoma, sans-serif;\n   margin-bottom: 20px;\n   border-radius: 2px;\n   width: 500px;\n}\n.text-center{\n    text-align: center;\n\n}\n.mensaje-error{\n   font-size: 17px ;\n   font-family: Arial, Helvetica, sans-serif;\n   font-weight: bold;\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvZHVjY2lvbi9wYW5lbGEtcmVnaXN0cm8vcGFuZWxhLXJlZ2lzdHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixlQUFlO0lBR2Ysc0JBQXNCO0lBQ3RCLDRCQUE0Qjs7QUFFaEM7QUFDQTs7SUFFSSxnREFBZ0Q7R0FDakQsV0FBVztHQUNYLGtCQUFrQjtHQUNsQixpQkFBaUI7O0FBRXBCO0FBQ0E7R0FDRyw2QkFBNkI7R0FDN0IsV0FBVztHQUNYLGdCQUFnQjtHQUNoQixZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLGtCQUFrQjs7QUFFckI7QUFDQTs7R0FFRywyQkFBMkI7R0FDM0IsaUJBQWlCO0FBQ3BCO0FBRUE7R0FDRyxXQUFXO0dBQ1gsY0FBYztHQUNkLHlCQUF5QjtHQUN6QixlQUFlO0dBQ2YsK0NBQStDO0dBQy9DLGtCQUFrQjs7QUFFckI7QUFDQTs7R0FFRyxrQkFBa0I7R0FDbEIsNkJBQTZCO0dBQzdCLFlBQVk7R0FDWixhQUFhO0dBQ2IsNENBQTRDO0dBQzVDLFlBQVk7R0FDWixnREFBZ0Q7R0FDaEQsbUJBQW1CO0dBQ25CLGtCQUFrQjtHQUNsQixZQUFZO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjs7QUFFdEI7QUFDQTtHQUNHLGdCQUFnQjtHQUNoQix5Q0FBeUM7R0FDekMsaUJBQWlCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y2Npb24vcGFuZWxhLXJlZ2lzdHJvL3BhbmVsYS1yZWdpc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogNSUgNSUgNSUgNSU7IFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgIFxufVxuLmZvcm0tdGl0dGxle1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgIGNvbG9yOndoaXRlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBcbn1cbi5jb250YWluZXIge1xuICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNik7XG4gICB3aWR0aDogMTAwJTtcbiAgIG1heC13aWR0aDogNjAwcHg7XG4gICBtYXJnaW46IGF1dG87XG4gICBwYWRkaW5nOiAxNXB4IDQ1cHg7XG4gICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICBcbn1cbnNwYW57XG5cbiAgIGNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1sYWJlbHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgZGlzcGxheTogYmxvY2s7XG4gICBjb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xuICAgZm9udC1zaXplOiAxNnB4O1xuICAgZm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBcbn1cbi5mb3JtLWNvbnRyb2x7XG4gICBcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjcpO1xuICAgYm9yZGVyOiBub25lO1xuICAgb3V0bGluZTogbm9uZTtcbiAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjQ5LCAyNTAsIDI0OCkgO1xuICAgY29sb3I6IHdoaXRlO1xuICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgIHdpZHRoOiA1MDBweDtcbn1cbi50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi5tZW5zYWplLWVycm9ye1xuICAgZm9udC1zaXplOiAxN3B4IDtcbiAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Produccion/panela-registro/panela-registro.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Produccion/panela-registro/panela-registro.component.ts ***!
  \*************************************************************************/
/*! exports provided: PanelaRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelaRegistroComponent", function() { return PanelaRegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_panela__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/panela */ "./src/app/Produccion/models/panela.ts");
/* harmony import */ var src_app_services_panela_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/panela.service */ "./src/app/services/panela.service.ts");
/* harmony import */ var src_app_base_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@base/alert-modal/alert-modal.component */ "./src/app/@base/alert-modal/alert-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let PanelaRegistroComponent = class PanelaRegistroComponent {
    constructor(panelaService, formBuilder, modalService) {
        this.panelaService = panelaService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.panela = new _models_panela__WEBPACK_IMPORTED_MODULE_1__["Panela"]();
        this.buildForm();
    }
    buildForm() {
        this.panela = new _models_panela__WEBPACK_IMPORTED_MODULE_1__["Panela"]();
        this.panela.idregistro = '';
        this.panela.fechaIngreso = new Date();
        this.panela.numeroLote = '';
        this.panela.numeroLoteAgricola = '';
        this.panela.etapas = '';
        this.panela.cantidad = '';
        this.panela.responsable = '';
        this.formGroup = this.formBuilder.group({
            idregistro: [this.panela.idregistro, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            fechaIngreso: [this.panela.fechaIngreso, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            numeroLote: [this.panela.numeroLote, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]],
            numeroLoteAgricola: [this.panela.numeroLoteAgricola, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]],
            etapas: [this.panela.etapas, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cantidad: [this.panela.cantidad, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]],
            responsable: [this.panela.responsable, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    get control() {
        return this.formGroup.controls;
    }
    onSubmit() {
        if (this.formGroup.invalid) {
            return;
        }
        this.add();
    }
    add() {
        this.panela = this.formGroup.value;
        this.panelaService.post(this.panela).subscribe(p => {
            if (p != null) {
                const messageBox = this.modalService.open(src_app_base_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__["AlertModalComponent"]);
                messageBox.componentInstance.title = "Resultado Operación";
                messageBox.componentInstance.message = 'Producto creado!!! :-)';
                this.panela = p;
            }
        });
    }
};
PanelaRegistroComponent.ctorParameters = () => [
    { type: src_app_services_panela_service__WEBPACK_IMPORTED_MODULE_2__["PanelaService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
PanelaRegistroComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-panela-registro',
        template: __importDefault(__webpack_require__(/*! raw-loader!./panela-registro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Produccion/panela-registro/panela-registro.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./panela-registro.component.css */ "./src/app/Produccion/panela-registro/panela-registro.component.css")).default]
    }),
    __metadata("design:paramtypes", [src_app_services_panela_service__WEBPACK_IMPORTED_MODULE_2__["PanelaService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], PanelaRegistroComponent);



/***/ }),

/***/ "./src/app/Productor/productor-consulta/productor-consulta.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/Productor/productor-consulta/productor-consulta.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y3Rvci9wcm9kdWN0b3ItY29uc3VsdGEvcHJvZHVjdG9yLWNvbnN1bHRhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/Productor/productor-consulta/productor-consulta.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Productor/productor-consulta/productor-consulta.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductorConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductorConsultaComponent", function() { return ProductorConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ProductorConsultaComponent = class ProductorConsultaComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductorConsultaComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-productor-consulta',
        template: __importDefault(__webpack_require__(/*! raw-loader!./productor-consulta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Productor/productor-consulta/productor-consulta.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./productor-consulta.component.css */ "./src/app/Productor/productor-consulta/productor-consulta.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], ProductorConsultaComponent);



/***/ }),

/***/ "./src/app/Productor/productor-registro/productor-registro.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/Productor/productor-registro/productor-registro.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n.bs-stepper-circle{\n    background : rgb(71, 165, 42);\n}\n.bs-stepper-label{\n    color: rgb(71, 165, 42);\n}\n.bs-stepper-circle:hover:not(.active) {\n    background : rgb(61, 233, 9);\n}\n.bs-stepper-label:hover:not(.active) {\n    color: rgb(61, 233, 9);\n}\n.caja{\n    \n    \n    background: rgba(234, 245, 232, 0.7);\n    border: none;\n    outline: none;\n    border-bottom: 2px solid rgb(51, 235, 5) ;\n    color: white;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    margin-bottom: 20px;\n    border-radius: 2px;\n    width: 400px;\n    position: absolute;\n    transform: translate(0%, 20%);\n }\n.form-control{\n    \n    background: rgba(234, 245, 232, 0.7);\n    border: none;\n    outline: none;\n    border-bottom: 2px solid rgb(51, 235, 5) ;\n    color: rgb(0, 0, 0);\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    margin-bottom: 20px;\n    border-radius: 2px;\n    width: 300px;\n    position: absolute;\n    transform: translate(0%, 20%);\n }\n/*productores*/\n#NombreProductoresLabel{\n    position:relative;\n    transform: translate(250%, -200%);\n }\n#NombreProductores{\n    position:relative;\n    transform: translate(110%, -108%);\n }\n#CodigoProductoresLabel{\n    position:relative;\n    transform: translate(526%, -580%);\n }\n#CodigoProductores{\n    position:relative;\n    transform: translate(220%, -348%);\n }\n#NumeroLabel{\n   position:relative;\n   transform: translate(0%, -400%);\n}\n#Numero{\n   position:relative;\n   transform: translate(0%, -218%);\n}\n#AfiliacionLabel{\n   position:relative;\n   transform: translate(252%, -779%);\n}\n#Afiliacion{\n   position:relative;\n   transform: translate(110%, -456%);\n}\n#ActividadLabel{\n   position:relative;\n   transform: translate(317%, -1153%);\n}\n#Actividad{\n   position:relative;\n   transform: translate(220%, -695%);\n}\n/*predios*/\n#NombrePredioLabel{\n    position:relative;\n    transform: translate(246%, -200%);\n }\n#NombrePredio{\n    position:relative;\n    transform: translate(110%, -108%);\n }\n#CodigoICALabel{\n    position:relative;\n    transform: translate(646%, -580%);\n }\n#CodigoICA{\n    position:relative;\n    transform: translate(220%, -348%);\n }\n#MunicipioLabel{\n    position:relative;\n    transform: translate(0%, -400%);\n }\n#Municipio{\n    position:relative;\n    transform: translate(0%, -218%);\n }\n#VeredaLabel{\n    position:relative;\n    transform: translate(678%, -790%);\n }\n#Vereda{\n    position:relative;\n    transform: translate(110%, -458%);\n }\n#btnnext{\n     background-color: rgb(71, 165, 42);\n     border-color:rgb(71, 165, 42); \n    position: relative;\n    transform: translate(820%, -600%);\n }\n#btnnext-2{\n   background-color: rgb(71, 165, 42);\n   border-color:rgb(71, 165, 42); \n  position: relative;\n  transform: translate(820%, -350%);\n}\n#btnsubmit{\n    background-color: rgb(71, 165, 42);\n    border-color:rgb(71, 165, 42);\n }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvZHVjdG9yL3Byb2R1Y3Rvci1yZWdpc3Ryby9wcm9kdWN0b3ItcmVnaXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBOzs7SUFHSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGdEQUFnRDtJQUNoRCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0NBQ2hDO0FBQ0E7O0lBRUcsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixnREFBZ0Q7SUFDaEQsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtDQUNoQztBQUNBLGNBQWM7QUFFZDtJQUNHLGlCQUFpQjtJQUNqQixpQ0FBaUM7Q0FDcEM7QUFDQTtJQUNHLGlCQUFpQjtJQUNqQixpQ0FBaUM7Q0FDcEM7QUFDQTtJQUNHLGlCQUFpQjtJQUNqQixpQ0FBaUM7Q0FDcEM7QUFDQTtJQUNHLGlCQUFpQjtJQUNqQixpQ0FBaUM7Q0FDcEM7QUFDQTtHQUNFLGlCQUFpQjtHQUNqQiwrQkFBK0I7QUFDbEM7QUFDQTtHQUNHLGlCQUFpQjtHQUNqQiwrQkFBK0I7QUFDbEM7QUFDQTtHQUNHLGlCQUFpQjtHQUNqQixpQ0FBaUM7QUFDcEM7QUFDQTtHQUNHLGlCQUFpQjtHQUNqQixpQ0FBaUM7QUFDcEM7QUFDQTtHQUNHLGlCQUFpQjtHQUNqQixrQ0FBa0M7QUFDckM7QUFDQTtHQUNHLGlCQUFpQjtHQUNqQixpQ0FBaUM7QUFDcEM7QUFDQyxVQUFVO0FBQ1Y7SUFDRyxpQkFBaUI7SUFDakIsaUNBQWlDO0NBQ3BDO0FBQ0E7SUFDRyxpQkFBaUI7SUFDakIsaUNBQWlDO0NBQ3BDO0FBQ0E7SUFDRyxpQkFBaUI7SUFDakIsaUNBQWlDO0NBQ3BDO0FBQ0E7SUFDRyxpQkFBaUI7SUFDakIsaUNBQWlDO0NBQ3BDO0FBQ0E7SUFDRyxpQkFBaUI7SUFDakIsK0JBQStCO0NBQ2xDO0FBQ0E7SUFDRyxpQkFBaUI7SUFDakIsK0JBQStCO0NBQ2xDO0FBQ0E7SUFDRyxpQkFBaUI7SUFDakIsaUNBQWlDO0NBQ3BDO0FBQ0E7SUFDRyxpQkFBaUI7SUFDakIsaUNBQWlDO0NBQ3BDO0FBQ0E7S0FDSSxrQ0FBa0M7S0FDbEMsNkJBQTZCO0lBQzlCLGtCQUFrQjtJQUNsQixpQ0FBaUM7Q0FDcEM7QUFDQTtHQUNFLGtDQUFrQztHQUNsQyw2QkFBNkI7RUFDOUIsa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQztBQUNDO0lBQ0csa0NBQWtDO0lBQ2xDLDZCQUE2QjtDQUNoQyIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y3Rvci9wcm9kdWN0b3ItcmVnaXN0cm8vcHJvZHVjdG9yLXJlZ2lzdHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4uYnMtc3RlcHBlci1jaXJjbGV7XG4gICAgYmFja2dyb3VuZCA6IHJnYig3MSwgMTY1LCA0Mik7XG59XG4uYnMtc3RlcHBlci1sYWJlbHtcbiAgICBjb2xvcjogcmdiKDcxLCAxNjUsIDQyKTtcbn1cblxuLmJzLXN0ZXBwZXItY2lyY2xlOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgYmFja2dyb3VuZCA6IHJnYig2MSwgMjMzLCA5KTtcbn1cbi5icy1zdGVwcGVyLWxhYmVsOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgY29sb3I6IHJnYig2MSwgMjMzLCA5KTtcbn1cbi5jYWphe1xuICAgIFxuICAgIFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyNDUsIDIzMiwgMC43KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDUxLCAyMzUsIDUpIDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDIwJSk7XG4gfVxuIC5mb3JtLWNvbnRyb2x7XG4gICAgXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDI0NSwgMjMyLCAwLjcpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoNTEsIDIzNSwgNSkgO1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDIwJSk7XG4gfVxuIC8qcHJvZHVjdG9yZXMqL1xuXG4gI05vbWJyZVByb2R1Y3RvcmVzTGFiZWx7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjUwJSwgLTIwMCUpO1xuIH1cbiAjTm9tYnJlUHJvZHVjdG9yZXN7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgLTEwOCUpO1xuIH1cbiAjQ29kaWdvUHJvZHVjdG9yZXNMYWJlbHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MjYlLCAtNTgwJSk7XG4gfVxuICNDb2RpZ29Qcm9kdWN0b3Jlc3tcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAtMzQ4JSk7XG4gfVxuICNOdW1lcm9MYWJlbHtcbiAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC00MDAlKTtcbn1cbiNOdW1lcm97XG4gICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMjE4JSk7XG59XG4jQWZpbGlhY2lvbkxhYmVse1xuICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNTIlLCAtNzc5JSk7XG59XG4jQWZpbGlhY2lvbntcbiAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgLTQ1NiUpO1xufVxuI0FjdGl2aWRhZExhYmVse1xuICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMTclLCAtMTE1MyUpO1xufVxuI0FjdGl2aWRhZHtcbiAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgLTY5NSUpO1xufVxuIC8qcHJlZGlvcyovXG4gI05vbWJyZVByZWRpb0xhYmVse1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0NiUsIC0yMDAlKTtcbiB9XG4gI05vbWJyZVByZWRpb3tcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAtMTA4JSk7XG4gfVxuICNDb2RpZ29JQ0FMYWJlbHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2NDYlLCAtNTgwJSk7XG4gfVxuICNDb2RpZ29JQ0F7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgLTM0OCUpO1xuIH1cbiAjTXVuaWNpcGlvTGFiZWx7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC00MDAlKTtcbiB9XG4gI011bmljaXBpb3tcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTIxOCUpO1xuIH1cbiAjVmVyZWRhTGFiZWx7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjc4JSwgLTc5MCUpO1xuIH1cbiAjVmVyZWRhe1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIC00NTglKTtcbiB9XG4gI2J0bm5leHR7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMTY1LCA0Mik7XG4gICAgIGJvcmRlci1jb2xvcjpyZ2IoNzEsIDE2NSwgNDIpOyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODIwJSwgLTYwMCUpO1xuIH1cbiAjYnRubmV4dC0ye1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCAxNjUsIDQyKTtcbiAgIGJvcmRlci1jb2xvcjpyZ2IoNzEsIDE2NSwgNDIpOyBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4MjAlLCAtMzUwJSk7XG59XG4gI2J0bnN1Ym1pdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDE2NSwgNDIpO1xuICAgIGJvcmRlci1jb2xvcjpyZ2IoNzEsIDE2NSwgNDIpO1xuIH1cbiAiXX0= */");

/***/ }),

/***/ "./src/app/Productor/productor-registro/productor-registro.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Productor/productor-registro/productor-registro.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductorRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductorRegistroComponent", function() { return ProductorRegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var bs_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs-stepper */ "./node_modules/bs-stepper/dist/js/bs-stepper.js");
/* harmony import */ var bs_stepper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs_stepper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_productor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productor.service */ "./src/app/services/productor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ProductorRegistroComponent = class ProductorRegistroComponent {
    constructor(productorService, _formBuilder) {
        this.productorService = productorService;
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.stepper = new bs_stepper__WEBPACK_IMPORTED_MODULE_2___default.a(document.querySelector('#stepper1'), {
            linear: false,
            animation: true
        });
    }
    next() {
        this.stepper.next();
    }
    onSubmit() {
        return false;
    }
    add() {
        this.productorService.post(this.productor).subscribe(p => {
            if (p != null) {
                alert('Persona creada!');
                this.productor = p;
            }
        });
    }
};
ProductorRegistroComponent.ctorParameters = () => [
    { type: src_app_services_productor_service__WEBPACK_IMPORTED_MODULE_3__["ProductorService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
ProductorRegistroComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-productor-registro',
        template: __importDefault(__webpack_require__(/*! raw-loader!./productor-registro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Productor/productor-registro/productor-registro.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./productor-registro.component.css */ "./src/app/Productor/productor-registro/productor-registro.component.css")).default]
    }),
    __metadata("design:paramtypes", [src_app_services_productor_service__WEBPACK_IMPORTED_MODULE_3__["ProductorService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], ProductorRegistroComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _Produccion_panela_registro_panela_registro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Produccion/panela-registro/panela-registro.component */ "./src/app/Produccion/panela-registro/panela-registro.component.ts");
/* harmony import */ var _Produccion_panela_consulta_panela_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Produccion/panela-consulta/panela-consulta.component */ "./src/app/Produccion/panela-consulta/panela-consulta.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loggin_loggin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loggin/loggin.component */ "./src/app/loggin/loggin.component.ts");
/* harmony import */ var _conocenos_conocenos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conocenos/conocenos.component */ "./src/app/conocenos/conocenos.component.ts");
/* harmony import */ var _Productor_productor_registro_productor_registro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Productor/productor-registro/productor-registro.component */ "./src/app/Productor/productor-registro/productor-registro.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









const routes = [
    {
        path: 'productorRegistro',
        component: _Productor_productor_registro_productor_registro_component__WEBPACK_IMPORTED_MODULE_7__["ProductorRegistroComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
    },
    {
        path: 'panelaRegistro',
        component: _Produccion_panela_registro_panela_registro_component__WEBPACK_IMPORTED_MODULE_2__["PanelaRegistroComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
    },
    {
        path: 'panelaConsulta',
        component: _Produccion_panela_consulta_panela_consulta_component__WEBPACK_IMPORTED_MODULE_3__["PanelaConsultaComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
    },
    {
        path: 'loggin',
        component: _loggin_loggin_component__WEBPACK_IMPORTED_MODULE_5__["LogginComponent"]
    },
    {
        path: 'conocenos',
        component: _conocenos_conocenos_component__WEBPACK_IMPORTED_MODULE_6__["ConocenosComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_panela_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/panela.service */ "./src/app/services/panela.service.ts");
/* harmony import */ var _pipe_filtro_producto_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipe/filtro-producto.pipe */ "./src/app/pipe/filtro-producto.pipe.ts");
/* harmony import */ var _loggin_loggin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loggin/loggin.component */ "./src/app/loggin/loggin.component.ts");
/* harmony import */ var _base_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./@base/alert-modal/alert-modal.component */ "./src/app/@base/alert-modal/alert-modal.component.ts");
/* harmony import */ var _conocenos_conocenos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./conocenos/conocenos.component */ "./src/app/conocenos/conocenos.component.ts");
/* harmony import */ var _Productor_productor_consulta_productor_consulta_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Productor/productor-consulta/productor-consulta.component */ "./src/app/Productor/productor-consulta/productor-consulta.component.ts");
/* harmony import */ var _Productor_productor_registro_productor_registro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Productor/productor-registro/productor-registro.component */ "./src/app/Productor/productor-registro/productor-registro.component.ts");
/* harmony import */ var _services_productor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/productor.service */ "./src/app/services/productor.service.ts");
/* harmony import */ var _services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/jwt-interceptor.service */ "./src/app/services/jwt-interceptor.service.ts");
/* harmony import */ var _Produccion_panela_registro_panela_registro_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Produccion/panela-registro/panela-registro.component */ "./src/app/Produccion/panela-registro/panela-registro.component.ts");
/* harmony import */ var _Produccion_panela_consulta_panela_consulta_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Produccion/panela-consulta/panela-consulta.component */ "./src/app/Produccion/panela-consulta/panela-consulta.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};























let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__["FetchDataComponent"],
            _Produccion_panela_consulta_panela_consulta_component__WEBPACK_IMPORTED_MODULE_22__["PanelaConsultaComponent"],
            _Produccion_panela_registro_panela_registro_component__WEBPACK_IMPORTED_MODULE_21__["PanelaRegistroComponent"],
            _pipe_filtro_producto_pipe__WEBPACK_IMPORTED_MODULE_13__["FiltroProductoPipe"],
            _loggin_loggin_component__WEBPACK_IMPORTED_MODULE_14__["LogginComponent"],
            _base_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_15__["AlertModalComponent"],
            _conocenos_conocenos_component__WEBPACK_IMPORTED_MODULE_16__["ConocenosComponent"],
            _Productor_productor_consulta_productor_consulta_component__WEBPACK_IMPORTED_MODULE_17__["ProductorConsultaComponent"],
            _Productor_productor_registro_productor_registro_component__WEBPACK_IMPORTED_MODULE_18__["ProductorRegistroComponent"],
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__["FetchDataComponent"] },
            ]),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
        ],
        entryComponents: [_base_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_15__["AlertModalComponent"]],
        providers: [_services_panela_service__WEBPACK_IMPORTED_MODULE_12__["PanelaService"], _services_productor_service__WEBPACK_IMPORTED_MODULE_19__["ProductorService"], [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_20__["JwtInterceptorService"], multi: true },],],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/conocenos/conocenos.component.css":
/*!***************************************************!*\
  !*** ./src/app/conocenos/conocenos.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm9jZW5vcy9jb25vY2Vub3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/conocenos/conocenos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/conocenos/conocenos.component.ts ***!
  \**************************************************/
/*! exports provided: ConocenosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConocenosComponent", function() { return ConocenosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ConocenosComponent = class ConocenosComponent {
    constructor() { }
    ngOnInit() {
    }
};
ConocenosComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-conocenos',
        template: __importDefault(__webpack_require__(/*! raw-loader!./conocenos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/conocenos/conocenos.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./conocenos.component.css */ "./src/app/conocenos/conocenos.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], ConocenosComponent);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/home/estiloHome.css":
/*!*************************************!*\
  !*** ./src/app/home/estiloHome.css ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n  /*CSS DE Home*/\n.containerMenu{\n    margin: 50px ;\n}\n/*CSS DE Home*/\n.slider{\n    width: 100%;\n    margin: auto;\n    overflow: hidden;\n}\n.slider ul{\n    display: flex;\n    padding: 0%;\n    width: 400%;\n    -webkit-animation: cambio 15s infinite alternate;\n            animation: cambio 15s infinite alternate;\n    \n}\n.slider li{\n    width: 100%;\n    list-style: none;\n}\n.slider img{\n    width: 100%;\n}\n@-webkit-keyframes cambio{\n    0%{margin-left: 0;}\n    20%{margin-left: 0;}\n\n    25%{margin-left: -100%;}\n    45%{margin-left: -100%;}\n\n    50%{margin-left: -200%;}\n    70%{margin-left: -200%;}\n\n    75%{margin-left: -300%;}\n    100%{margin-left: -300%;}\n}\n@keyframes cambio{\n    0%{margin-left: 0;}\n    20%{margin-left: 0;}\n\n    25%{margin-left: -100%;}\n    45%{margin-left: -100%;}\n\n    50%{margin-left: -200%;}\n    70%{margin-left: -200%;}\n\n    75%{margin-left: -300%;}\n    100%{margin-left: -300%;}\n}\n.contenedorMenu{\n    padding: 10px 0px 0px 0px;\n    margin-right: 70;\n}\n/* CSS DELL HOME PARTE DEL PARRAFO*/\n.parrafo{\n    padding-top: 50px;\n}\n/*CSS DE PARRAFO AL LADO DE LA IMAGEN*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9lc3RpbG9Ib21lLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUVFLGNBQWM7QUFDaEI7SUFDSSxhQUFhO0FBQ2pCO0FBRUEsY0FBYztBQUNkO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLGdEQUF3QztZQUF4Qyx3Q0FBd0M7O0FBRTVDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLEdBQUcsY0FBYyxDQUFDO0lBQ2xCLElBQUksY0FBYyxDQUFDOztJQUVuQixJQUFJLGtCQUFrQixDQUFDO0lBQ3ZCLElBQUksa0JBQWtCLENBQUM7O0lBRXZCLElBQUksa0JBQWtCLENBQUM7SUFDdkIsSUFBSSxrQkFBa0IsQ0FBQzs7SUFFdkIsSUFBSSxrQkFBa0IsQ0FBQztJQUN2QixLQUFLLGtCQUFrQixDQUFDO0FBQzVCO0FBWkE7SUFDSSxHQUFHLGNBQWMsQ0FBQztJQUNsQixJQUFJLGNBQWMsQ0FBQzs7SUFFbkIsSUFBSSxrQkFBa0IsQ0FBQztJQUN2QixJQUFJLGtCQUFrQixDQUFDOztJQUV2QixJQUFJLGtCQUFrQixDQUFDO0lBQ3ZCLElBQUksa0JBQWtCLENBQUM7O0lBRXZCLElBQUksa0JBQWtCLENBQUM7SUFDdkIsS0FBSyxrQkFBa0IsQ0FBQztBQUM1QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUVBLG1DQUFtQztBQUNuQztJQUNJLGlCQUFpQjtBQUNyQjtBQUNBLHNDQUFzQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZXN0aWxvSG9tZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAvKkNTUyBERSBIb21lKi9cbi5jb250YWluZXJNZW51e1xuICAgIG1hcmdpbjogNTBweCA7XG59XG5cbi8qQ1NTIERFIEhvbWUqL1xuLnNsaWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zbGlkZXIgdWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICB3aWR0aDogNDAwJTtcbiAgICBhbmltYXRpb246IGNhbWJpbyAxNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIFxufVxuLnNsaWRlciBsaXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnNsaWRlciBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5Aa2V5ZnJhbWVzIGNhbWJpb3tcbiAgICAwJXttYXJnaW4tbGVmdDogMDt9XG4gICAgMjAle21hcmdpbi1sZWZ0OiAwO31cblxuICAgIDI1JXttYXJnaW4tbGVmdDogLTEwMCU7fVxuICAgIDQ1JXttYXJnaW4tbGVmdDogLTEwMCU7fVxuXG4gICAgNTAle21hcmdpbi1sZWZ0OiAtMjAwJTt9XG4gICAgNzAle21hcmdpbi1sZWZ0OiAtMjAwJTt9XG5cbiAgICA3NSV7bWFyZ2luLWxlZnQ6IC0zMDAlO31cbiAgICAxMDAle21hcmdpbi1sZWZ0OiAtMzAwJTt9XG59XG4uY29udGVuZWRvck1lbnV7XG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDcwO1xufVxuXG4vKiBDU1MgREVMTCBIT01FIFBBUlRFIERFTCBQQVJSQUZPKi9cbi5wYXJyYWZve1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLypDU1MgREUgUEFSUkFGTyBBTCBMQURPIERFIExBIElNQUdFTiovXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./estiloHome.css */ "./src/app/home/estiloHome.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/loggin/loggin.component.css":
/*!*********************************************!*\
  !*** ./src/app/loggin/loggin.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nbody {\n    margin: 0;\n    padding: 0;\n    background: url(src\\assets\\ImagenesCarousel\\seynekun-sierra-nevada2.jpg) no-repeat center top;\n    background-size: cover;\n    font-family: sans-serif;\n    height: 100vh;\n  }\n  \n  .login-box {\n    width: 320px;\n    height: 420px;\n    background:rgba(0, 0, 0, .7);\n    color: #fff;\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    transform: translate(-50%, 20%);\n    box-sizing: border-box;\n    padding: 70px 30px;\n  }\n  \n  .login-box .avatar {\n    width: 120px;\n    height: 100px;\n    border-radius: 60%;\n    position: absolute;\n    top: -50px;\n    left: calc(45% - 50px);\n  }\n  \n  .login-box h1 {\n    margin: 0;\n    padding: 0 0 20px;\n    text-align: center;\n    font-size: 22px;\n  }\n  \n  .login-box label {\n    margin: 0;\n    padding: 0;\n    font-weight: bold;\n    display: block;\n  }\n  \n  .login-box input {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  \n  .login-box input[type=\"text\"], .login-box input[type=\"password\"] {\n    border: none;\n    border-bottom: 1px solid #fff;\n    background: transparent;\n    outline: none;\n    height: 40px;\n    color: #fff;\n    font-size: 16px;\n  }\n  \n  .login-box input[type=\"submit\"] {\n    border: none;\n    outline: none;\n    height: 40px;\n    background: rgba(29, 99, 15, 0.7);\n    color: #fff;\n    font-size: 18px;\n    border-radius: 20px;\n  }\n  \n  .login-box input[type=\"submit\"]:hover {\n    cursor: pointer;\n    background: #ffc107;\n    color: #000;\n  }\n  \n  .login-box a {\n    text-decoration: none;\n    font-size: 12px;\n    line-height: 20px;\n    color: darkgrey;\n  }\n  \n  .login-box a:hover {\n    color: #fff;\n  }\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nZ2luL2xvZ2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1RkMiLCJmaWxlIjoic3JjL2FwcC9sb2dnaW4vbG9nZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogdXJsKHNyY1xcYXNzZXRzXFxJbWFnZW5lc0Nhcm91c2VsXFxzZXluZWt1bi1zaWVycmEtbmV2YWRhMi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgLmxvZ2luLWJveCB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogNDIwcHg7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIC43KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA3MHB4IDMwcHg7XG4gIH1cbiAgXG4gIC5sb2dpbi1ib3ggLmF2YXRhciB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNjAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01MHB4O1xuICAgIGxlZnQ6IGNhbGMoNDUlIC0gNTBweCk7XG4gIH1cbiAgXG4gIC5sb2dpbi1ib3ggaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDAgMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIFxuICAubG9naW4tYm94IGxhYmVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmxvZ2luLWJveCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLmxvZ2luLWJveCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgLmxvZ2luLWJveCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgXG4gIC5sb2dpbi1ib3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjksIDk5LCAxNSwgMC43KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICBcbiAgLmxvZ2luLWJveCBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmYzEwNztcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICBcbiAgLmxvZ2luLWJveCBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiBkYXJrZ3JleTtcbiAgfVxuICBcbiAgLmxvZ2luLWJveCBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuKi8iXX0= */");

/***/ }),

/***/ "./src/app/loggin/loggin.component.ts":
/*!********************************************!*\
  !*** ./src/app/loggin/loggin.component.ts ***!
  \********************************************/
/*! exports provided: LogginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogginComponent", function() { return LogginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/autenticacion.service */ "./src/app/services/autenticacion.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _base_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@base/alert-modal/alert-modal.component */ "./src/app/@base/alert-modal/alert-modal.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let LogginComponent = class LogginComponent {
    constructor(formBuilder, route, router, authenticationService, modalService) {
        // redirect to home if already logged in
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.modalService = modalService;
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.userName.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            const modalRef = this.modalService.open(_base_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_5__["AlertModalComponent"]);
            modalRef.componentInstance.title = 'Acceso Denegado';
            modalRef.componentInstance.message = error.error;
            this.loading = false;
        });
    }
};
LogginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacionService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
LogginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-loggin',
        template: __importDefault(__webpack_require__(/*! raw-loader!./loggin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggin/loggin.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./loggin.component.css */ "./src/app/loggin/loggin.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacionService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], LogginComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#SEYNEKUN{\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n  color:rgb(214, 33, 9);\n  font-weight: bold;\n  margin: 0;\n  padding: 6px;\n  overflow: hidden;\n background-color: rgb(227, 236, 227);\n}\n#SEYNEKUN:hover:not(.active) {\n  color:rgb(245, 13, 13)\n  \n}\n#INICIO  {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n  color: rgb(16, 214, 9);\n  font-weight: bolder;\n  \n   margin: 0;\n  padding: 6px;\n  overflow: hidden;\n  background-color: rgb(227, 236, 227);\n}\n#INICIO:hover:not(.active) {\n  color:white;\n  \n}\n#CONOCENOS {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n  list-style-type: none;\n  color: rgb(16, 214, 9);\n  font-weight: bolder;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  margin: 0;\n  padding: 6px;\n  overflow: hidden;\n  background-color: rgb(227, 236, 227);\n}\n#CONOCENOS:hover:not(.active) {\n  color:white;\n  \n}\nhtml {\n  font-size: 14px;\n}\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n.box-shadow {\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\n}\n.navbar-nav .nav-item .nav-link{\n  list-style-type: none;\n  margin: 0;\n  padding: 12px;\n  overflow: hidden;\n  background-color: rgb(38, 165, 70);\n  \n}\n.nav-item .nav-link  {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  \n}\n.nav-item .nav-link:hover:not(.active) {\n  background-color: rgb(74, 252, 4);\n  color:black;\n  \n}\n.nav-item{\n  color: white;\n}\n.navbar{\n  background-color:rgb(193, 245, 145);\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color:white;\n    \n    top: 0;\n    list-style-type: none;\n    margin: 0;\n    padding: 3px;\n    width: 100%;\n   overflow: hidden;\n\n}\n.navbar-1{\n  background-color:rgba(190, 61, 61, 0.788);\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color:white;\n    \n    top: 0;\n    list-style-type: none;\n    margin: 0;\n    padding: 3px;\n    width: 100%;\n   overflow: hidden;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7Q0FDakIsb0NBQW9DO0FBQ3JDO0FBQ0E7RUFDRTs7QUFFRjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG1CQUFtQjs7R0FFbEIsU0FBUztFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxXQUFXOztBQUViO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnREFBZ0Q7RUFDaEQsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxXQUFXOztBQUViO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0UsOENBQThDO0FBQ2hEO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0NBQWtDOztBQUVwQztBQUdBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjs7QUFFdkI7QUFHQTtFQUNFLGlDQUFpQztFQUNqQyxXQUFXOztBQUViO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxnREFBZ0Q7SUFDOUMsV0FBVzs7SUFFWCxNQUFNO0lBQ04scUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztHQUNaLGdCQUFnQjs7QUFFbkI7QUFDQTtFQUNFLHlDQUF5QztFQUN6QyxnREFBZ0Q7SUFDOUMsV0FBVzs7SUFFWCxNQUFNO0lBQ04scUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztHQUNaLGdCQUFnQjs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI1NFWU5FS1VOe1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgY29sb3I6cmdiKDIxNCwgMzMsIDkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjM2LCAyMjcpO1xufVxuI1NFWU5FS1VOOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIGNvbG9yOnJnYigyNDUsIDEzLCAxMylcbiAgXG59XG4jSU5JQ0lPICB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBjb2xvcjogcmdiKDE2LCAyMTQsIDkpO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBcbiAgIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyMzYsIDIyNyk7XG59XG4jSU5JQ0lPOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIGNvbG9yOndoaXRlO1xuICBcbn1cbiNDT05PQ0VOT1Mge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjb2xvcjogcmdiKDE2LCAyMTQsIDkpO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyMzYsIDIyNyk7XG59XG4jQ09OT0NFTk9TOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIGNvbG9yOndoaXRlO1xuICBcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xufVxuXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5re1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCAxNjUsIDcwKTtcbiAgXG59XG5cblxuLm5hdi1pdGVtIC5uYXYtbGluayAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBcbn1cblxuXG4ubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NCwgMjUyLCA0KTtcbiAgY29sb3I6YmxhY2s7XG4gIFxufVxuXG4ubmF2LWl0ZW17XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5uYXZiYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDE5MywgMjQ1LCAxNDUpO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgXG4gICAgdG9wOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuLm5hdmJhci0xe1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTkwLCA2MSwgNjEsIDAuNzg4KTtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIFxuICAgIHRvcDogMDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG5cbn0iXX0= */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/autenticacion.service */ "./src/app/services/autenticacion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let NavMenuComponent = class NavMenuComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.isExpanded = false;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
};
NavMenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _services_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacionService"] }
];
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _services_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacionService"]])
], NavMenuComponent);



/***/ }),

/***/ "./src/app/pipe/filtro-producto.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipe/filtro-producto.pipe.ts ***!
  \**********************************************/
/*! exports provided: FiltroProductoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroProductoPipe", function() { return FiltroProductoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FiltroProductoPipe = class FiltroProductoPipe {
    transform(panela, searchText) {
        if (searchText == null) {
            return panela;
        }
        return panela.filter(p => p.responsable.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
            p.idregistro.indexOf(searchText) !== -1);
    }
};
FiltroProductoPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'filtroProducto'
    })
], FiltroProductoPipe);



/***/ }),

/***/ "./src/app/services/autenticacion.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/autenticacion.service.ts ***!
  \***************************************************/
/*! exports provided: AutenticacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacionService", function() { return AutenticacionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_handle_http_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@base/handle-http-error.service */ "./src/app/@base/handle-http-error.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let AutenticacionService = class AutenticacionService {
    constructor(http, baseUrl, handleErrorService) {
        this.http = http;
        this.handleErrorService = handleErrorService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.baseUrl = baseUrl;
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(nombreUsuario, contrasena) {
        return this.http.post(`${this.baseUrl}api/Login`, { nombreUsuario, contrasena })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            if (user && user.token) {
                // store user and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AutenticacionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _base_handle_http_error_service__WEBPACK_IMPORTED_MODULE_3__["HandleHttpErrorService"] }
];
AutenticacionService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_handle_http_error_service__WEBPACK_IMPORTED_MODULE_3__["HandleHttpErrorService"]])
], AutenticacionService);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autenticacion.service */ "./src/app/services/autenticacion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AuthGuardService = class AuthGuardService {
    constructor(router, autenticacionServicio) {
        this.router = router;
        this.autenticacionServicio = autenticacionServicio;
    }
    canActivate(route, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/loggin'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _autenticacion_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacionService"] }
];
AuthGuardService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _autenticacion_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacionService"]])
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/jwt-interceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/jwt-interceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: JwtInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function() { return JwtInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _autenticacion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autenticacion.service */ "./src/app/services/autenticacion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let JwtInterceptorService = class JwtInterceptorService {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptorService.ctorParameters = () => [
    { type: _autenticacion_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacionService"] }
];
JwtInterceptorService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacionService"]])
], JwtInterceptorService);



/***/ }),

/***/ "./src/app/services/panela.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/panela.service.ts ***!
  \********************************************/
/*! exports provided: PanelaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelaService", function() { return PanelaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _base_handle_http_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@base/handle-http-error.service */ "./src/app/@base/handle-http-error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let PanelaService = class PanelaService {
    constructor(http, baseUrl, handleErrorService) {
        this.http = http;
        this.handleErrorService = handleErrorService;
        this.baseUrl = baseUrl;
    }
    get() {
        return this.http.get(this.baseUrl + 'api/Panela')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.handleErrorService.log('datos enviados')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrorService.handleError('Consulta Panela', null)));
    }
    post(panela) {
        return this.http.post(this.baseUrl + 'api/Panela', panela)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.handleErrorService.log('datos enviados')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrorService.handleError('Registrar Panela', null)));
    }
    /** DELETE: delete the hero from the server */
    delete(panela) {
        const id = typeof panela === 'string' ? panela : panela.idregistro;
        const url = `${'api/panela'}/${id}`;
        return this.http.delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.handleErrorService.log('datos eliminados')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrorService.handleError('Eliminar Produccion', null)));
    }
};
PanelaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _base_handle_http_error_service__WEBPACK_IMPORTED_MODULE_3__["HandleHttpErrorService"] }
];
PanelaService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _base_handle_http_error_service__WEBPACK_IMPORTED_MODULE_3__["HandleHttpErrorService"]])
], PanelaService);



/***/ }),

/***/ "./src/app/services/productor.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/productor.service.ts ***!
  \***********************************************/
/*! exports provided: ProductorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductorService", function() { return ProductorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _base_handle_http_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@base/handle-http-error.service */ "./src/app/@base/handle-http-error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ProductorService = class ProductorService {
    constructor(http, baseUrl, handleErrorService) {
        this.http = http;
        this.handleErrorService = handleErrorService;
        this.baseUrl = baseUrl;
    }
    get() {
        return this.http.get(this.baseUrl + 'api/Productor')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.handleErrorService.log('datos enviados')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrorService.handleError('Consulta Productor', null)));
    }
    post(productor) {
        return this.http.post(this.baseUrl + 'api/Productor', productor)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.handleErrorService.log('datos enviados')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrorService.handleError('Registrar Productor', null)));
    }
};
ProductorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _base_handle_http_error_service__WEBPACK_IMPORTED_MODULE_3__["HandleHttpErrorService"] }
];
ProductorService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _base_handle_http_error_service__WEBPACK_IMPORTED_MODULE_3__["HandleHttpErrorService"]])
], ProductorService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gian Lucas\Desktop\webProyecto-master\seynekun\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map