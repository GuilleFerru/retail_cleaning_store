import Variation from "../models/Variation.js";
import VariationOption from "../models/VariationOption.js";

export const getAllWithOptions = async () => {
    return await Variation.findAll({
        include: VariationOption,
        order: [['id', 'ASC']]
    });
};

export const getByIdWithOptions = async (id) => {
    return await Variation.findByPk(id, {
        include: VariationOption
    });
}

