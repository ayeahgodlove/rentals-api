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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRequestDto = void 0;
const class_validator_1 = require("class-validator");
const product_1 = require("../../domain/models/product");
const nanoid_1 = require("nanoid");
class ProductRequestDto {
    name;
    description;
    longDescription;
    amount;
    durationOfRentage;
    condition;
    availabilityStartDate;
    availabilityEndDate;
    availabilityStartTime;
    availabilityEndTime;
    constructor(data) {
        this.name = data.name;
        this.description = data.description;
        this.longDescription = data.longDescription;
        this.condition = data.condition;
        this.amount = data.amount;
        this.durationOfRentage = data.durationOfRentage;
        this.availabilityStartDate = data.availabilityStartDate;
        this.availabilityEndDate = data.availabilityEndDate;
        this.availabilityEndTime = data.availabilityEndTime;
        this.availabilityStartTime = data.availabilityStartTime;
    }
    toData() {
        return {
            ...product_1.emptyProduct,
            id: (0, nanoid_1.nanoid)(10),
            name: this.name,
            description: this.description,
            longDescription: this.longDescription,
            amount: this.amount,
            durationOfRentage: this.durationOfRentage,
            condition: this.condition,
            availabilityEndDate: this.availabilityEndDate,
            availabilityEndTime: this.availabilityEndTime,
            availabilityStartDate: this.availabilityStartDate,
            availabilityStartTime: this.availabilityStartTime,
        };
    }
    toUpdateData(data) {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            longDescription: data.longDescription,
            amount: data.amount,
            durationOfRentage: data.durationOfRentage,
            condition: data.condition,
            availabilityEndDate: data.availabilityEndDate,
            availabilityEndTime: data.availabilityEndTime,
            availabilityStartDate: data.availabilityStartDate,
            availabilityStartTime: data.availabilityStartTime,
        };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(4, 128),
    __metadata("design:type", String)
], ProductRequestDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductRequestDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductRequestDto.prototype, "longDescription", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductRequestDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductRequestDto.prototype, "durationOfRentage", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductRequestDto.prototype, "condition", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], ProductRequestDto.prototype, "availabilityStartDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], ProductRequestDto.prototype, "availabilityEndDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], ProductRequestDto.prototype, "availabilityStartTime", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], ProductRequestDto.prototype, "availabilityEndTime", void 0);
exports.ProductRequestDto = ProductRequestDto;
