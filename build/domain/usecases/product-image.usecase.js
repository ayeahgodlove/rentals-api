"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImageUseCase = void 0;
class ProductImageUseCase {
    productImageRepository;
    /**
     *
     */
    constructor(productImageRepository) {
        this.productImageRepository = productImageRepository;
    }
    async createProductImage(productImage) {
        const existingProductImage = await this.productImageRepository.findByName(productImage.productName);
        if (existingProductImage) {
            throw new Error("ProductImage already exists");
        }
        // const _productImage = new ProductImage({productImage});
        //because it's already done in the Repository
        return this.productImageRepository.create(productImage);
    }
    async getAll(page, pageSize) {
        return this.productImageRepository.getAll(page, pageSize);
    }
    async getProductImageById(id) {
        return this.productImageRepository.findById(id);
    }
    async updateProductImage(productImage) {
        return this.productImageRepository.update(productImage);
    }
    async deleteProductImage(id) {
        return this.productImageRepository.delete(id);
    }
}
exports.ProductImageUseCase = ProductImageUseCase;
