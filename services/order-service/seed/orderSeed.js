import { v4 as uuidv4 } from 'uuid';

export const orderSeeds = [
    {
        id: uuidv4(),
        product_item_id: "947186d8-96d9-4fb8-9550-6fe8277d43ce",
        product_name: "Lavandina Clorox",
        sku: "CLX-1L",
        quantity: 2,
        unit_price: 9.99,
        total: 19.98,
        payment_method: "credit_card",
        status: "pending"
    },
    {
        id: uuidv4(),
        product_item_id: "947186d8-96d9-4fb8-9550-6fe8277d43ce",
        product_name: "Lavandina Clorox",
        sku: "CLX-5L",
        quantity: 3,
        unit_price: 5.99,
        total: 17.97,
        payment_method: "debit_card",
        status: "pending"
    }
];
