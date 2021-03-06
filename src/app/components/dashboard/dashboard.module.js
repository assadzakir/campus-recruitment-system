"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var auth_guard_service_1 = require("../auth/auth-guard.service");
var dashboard_routing_1 = require("./dashboard.routing");
var dashboard_component_1 = require("./dashboard.component");
var child_component_1 = require("./child.component");
var DashModule = (function () {
    function DashModule() {
    }
    return DashModule;
}());
DashModule = __decorate([
    core_1.NgModule({
        imports: [
            dashboard_routing_1.dashRouting,
            forms_1.FormsModule,
            common_1.CommonModule
        ],
        providers: [auth_guard_service_1.AuthGuard],
        declarations: [
            dashboard_component_1.DashboardComponent,
            child_component_1.AccountComponent,
            child_component_1.ProfileComponent,
            child_component_1.SettingsComponent
        ]
    })
], DashModule);
exports.DashModule = DashModule;
//# sourceMappingURL=dashboard.module.js.map