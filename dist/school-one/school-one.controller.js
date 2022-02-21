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
exports.SchoolOneController = void 0;
const common_1 = require("@nestjs/common");
const create_student_dto_1 = require("./dtos/create-student.dto");
const update_student_dto_1 = require("./dtos/update-student.dto");
const school_one_service_1 = require("./school-one.service");
let SchoolOneController = class SchoolOneController {
    constructor(schoolOneService) {
        this.schoolOneService = schoolOneService;
    }
    createStudent(body) {
        this.schoolOneService.create(body.studentName, body.aadharID, body.email);
    }
    async findStudent(rollNo) {
        const student = await this.schoolOneService.findOne(parseInt(rollNo));
        if (!student) {
            throw new common_1.NotFoundException('Student not found');
        }
        return student;
    }
    findAllStudents(studentName) {
        return this.schoolOneService.find(studentName);
    }
    removeStudent(rollNo) {
        return this.schoolOneService.remove(parseInt(rollNo));
    }
    updateStudent(rollNo, body) {
        return this.schoolOneService.update(parseInt(rollNo), body);
    }
};
__decorate([
    (0, common_1.Post)('/addStudent'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", void 0)
], SchoolOneController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Get)('/:rollNo'),
    __param(0, (0, common_1.Param)('rollNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SchoolOneController.prototype, "findStudent", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('studentName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SchoolOneController.prototype, "findAllStudents", null);
__decorate([
    (0, common_1.Delete)('/:rollNo'),
    __param(0, (0, common_1.Param)('rollNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SchoolOneController.prototype, "removeStudent", null);
__decorate([
    (0, common_1.Patch)('/:rollNo'),
    __param(0, (0, common_1.Param)('rollNo')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", void 0)
], SchoolOneController.prototype, "updateStudent", null);
SchoolOneController = __decorate([
    (0, common_1.Controller)('school-one'),
    __metadata("design:paramtypes", [school_one_service_1.SchoolOneService])
], SchoolOneController);
exports.SchoolOneController = SchoolOneController;
//# sourceMappingURL=school-one.controller.js.map