"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolOneModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const school_one_controller_1 = require("./school-one.controller");
const school_one_service_1 = require("./school-one.service");
const school_one_entity_1 = require("./school-one.entity");
const school_two_entity_1 = require("../school-two/school-two.entity");
let SchoolOneModule = class SchoolOneModule {
};
SchoolOneModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([school_one_entity_1.SchoolOne]), typeorm_1.TypeOrmModule.forFeature([school_two_entity_1.SchoolTwo])],
        controllers: [school_one_controller_1.SchoolOneController],
        providers: [school_one_service_1.SchoolOneService]
    })
], SchoolOneModule);
exports.SchoolOneModule = SchoolOneModule;
//# sourceMappingURL=school-one.module.js.map