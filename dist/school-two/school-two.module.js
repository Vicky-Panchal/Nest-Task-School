"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolTwoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const school_two_controller_1 = require("./school-two.controller");
const school_two_service_1 = require("./school-two.service");
const school_two_entity_1 = require("./school-two.entity");
const school_one_entity_1 = require("../school-one/school-one.entity");
let SchoolTwoModule = class SchoolTwoModule {
};
SchoolTwoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([school_two_entity_1.SchoolTwo]), typeorm_1.TypeOrmModule.forFeature([school_one_entity_1.SchoolOne])],
        controllers: [school_two_controller_1.SchoolTwoController],
        providers: [school_two_service_1.SchoolTwoService]
    })
], SchoolTwoModule);
exports.SchoolTwoModule = SchoolTwoModule;
//# sourceMappingURL=school-two.module.js.map