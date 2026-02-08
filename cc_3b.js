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

console.log("\n")
// Added a new procuduct to inventory

inventory.push({
    SKU: "F890769",
    name: "USB-C Charger",
    price: 29.99,
    stock: 38
})

// Removed the last item from inventory and displayed in console. 

removedItem = inventory.pop();
console.log("Removed Item: ", removedItem);

console.log("\n")

// Creating a sales dicount variable for a 15% discount.
var salesDiscount = 0.15;

// Updated the price of the laptop to reflect the 15% discount. 
inventory[1].price = (inventory[1].price * (1 - salesDiscount)).toFixed(2)  ;

// Updated the stock quantity of the smart watch to reflect a sale of 5 units.
inventory[2].stock -= 5;

// Displayed the updated inventory in a readable summary with SKU, product name, price, and stock quantity.
inventory.forEach(item => {
    console.log(`SKU-${item.SKU} | ${item.name} | $${item.price} | ${item.stock}`)
});


