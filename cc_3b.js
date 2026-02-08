// Created the initial invenory for an electronics store. Each item has a SKU, name, price, and stock quantity.

let inventory = [
    {
        SKU: "F890765",
        name: "Smart Phone", 
        price: 599.99 ,
        stock: 70
    },
    {
        SKU: "F890766",
        name: "Laptop",
        price: 899.99 ,
        stock: 50
    },
    {
        SKU: "F890767",
        name: "Smart Watch",
        price: 299.99,
        stock: 30
    },
    {
        SKU: "F890768",
        name: "Tablet",
        price: 159.99,
        stock: 20
    }
]

// Displayed the inventory in a readable summry with SKU, product name, price, and stock quantity.

inventory.forEach(item => {
    console.log(`SKU-${item.SKU} | ${item.name} | $${item.price} | ${item.stock}`)
});

