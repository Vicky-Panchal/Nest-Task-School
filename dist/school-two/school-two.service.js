"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolTwoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const school_two_entity_1 = require("./school-two.entity");
const school_one_entity_1 = require("../school-one/school-one.entity");
let SchoolTwoService = class SchoolTwoService {
    constructor(repo, repo2) {
        this.repo = repo;
        this.repo2 = repo2;
    }
    create(studentName, aadharID, email) {
        const student = this.repo.create({ studentName, aadharID, email });
        if (aadharID == this.repo2.findOne(aadharID)[aadharID]) {
            throw new Error('You are already enrolled in some other school');
        }
        else {
            return this.repo.save(student);
        }
    }
    findOne(aadharID) {
        return this.repo.findOne(aadharID);
    }
    find(studentName) {
        return this.repo.find({ studentName });
    }
    async update(aadharID, attrs) {
        const student = await this.findOne(aadharID);
        if (!student) {
            throw new common_1.NotFoundException('Student not found');
        }
        if (aadharID === this.repo2.findOne(aadharID)[aadharID]) {
            throw new Error('You are already enrolled in some other school');
        }
        Object.assign(student, attrs);
        return this.repo.save(student);
    }
    async remove(aadharID) {
        const student = await this.findOne(aadharID);
        if (!student) {
            throw new common_1.NotFoundException("Student not found");
        }
        return this.repo.remove(student);
    }
};
SchoolTwoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(school_two_entity_1.SchoolTwo)),
    __param(1, (0, typeorm_2.InjectRepository)(school_one_entity_1.SchoolOne)),
    __metadata("design:paramtypes", [typeorm_1.Repository, typeorm_1.Repository])
], SchoolTwoService);
exports.SchoolTwoService = SchoolTwoService;
//# sourceMappingURL=school-two.service.js.map