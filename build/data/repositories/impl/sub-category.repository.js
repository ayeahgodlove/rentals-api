"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryRepository = void 0;
const sub_category_1 = require("../../entities/sub-category");
const not_found_exception_1 = require("../../../shared/exceptions/not-found.exception");
class SubCategoryRepository {
    /**
     *
     */
    constructor() { }
    /**
     * Receives a SubCategory as parameter
     * @Subcategory
     * returns void
     */
    async create(Subcategory) {
        try {
            return await sub_category_1.SubCategory.create({ ...Subcategory });
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Receives a String as parameter
     * @id
     * returns SubCategory
     */
    async findById(id) {
        try {
            const SubcategoryItem = await sub_category_1.SubCategory.findByPk(id);
            if (!SubcategoryItem) {
                throw new not_found_exception_1.NotFoundException("SubCategory", id);
            }
            return SubcategoryItem;
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Receives a String as parameter
     * @name
     * returns SubCategory
     */
    async findByName(name) {
        try {
            const SubcategoryItem = await sub_category_1.SubCategory.findOne({ where: { name } });
            return SubcategoryItem;
        }
        catch (error) {
            throw error;
        }
    }
    /*
     * Returns an array of SubCategory
     */
    async getAll(page, pageSize) {
        const offset = (page - 1) * pageSize;
        try {
            const categories = await sub_category_1.SubCategory.findAndCountAll({ limit: pageSize, offset });
            return categories;
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Receives a SubCategory as parameter
     * @Subcategory
     * returns void
     */
    async update(Subcategory) {
        const { id } = Subcategory;
        try {
            const SubcategoryItem = await sub_category_1.SubCategory.findByPk(id);
            if (!SubcategoryItem) {
                throw new not_found_exception_1.NotFoundException("SubCategory", id.toString());
            }
            return await SubcategoryItem?.update({ ...Subcategory });
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Receives a string as parameter
     * @id
     * returns void
     */
    async delete(id) {
        try {
            const SubcategoryItem = await sub_category_1.SubCategory.findByPk(id);
            if (!SubcategoryItem) {
                throw new not_found_exception_1.NotFoundException("SubCategory", id);
            }
            await SubcategoryItem?.destroy({
                force: true,
            });
        }
        catch (error) {
            throw error;
        }
    }
}
exports.SubCategoryRepository = SubCategoryRepository;
