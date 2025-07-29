// Simulated inventory database
const inventory = {
  'laptop': { price: 999, stock: 5 },
  'mouse': { price: 25, stock: 10 },
  'keyboard': { price: 75, stock: 0 }, // Out of stock
  'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            for(const item of items)
            {
                let currItemStock = inventory[item].stock;
                if(currItemStock < 1)
                {
                   reject(new Error(`Item "${item}" is out of stock`));
                }
            }

            resolve(items);
        }, 500)
    })
  // TODO: Return a promise that:
  // 1. Waits 500ms (simulating database check)
  // 2. Checks if all items are in stock
  // 3. Resolves with items if all available
  // 4. Rejects with specific item that's out of stock
}

function calculateTotal(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const subtotal = items.reduce((sum, item) =>
        sum + inventory[item].price
      , 0);
      const tax   = parseFloat((subtotal * 0.08).toFixed(2));
      const total = parseFloat((subtotal + tax).toFixed(2));
      resolve({ subtotal, tax, total });
    }, 200);
  });
}


function processPayment(amount) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>
        {
            if (Math.random() > 0.1) 
            {
                const transactionId = "t" + Date.now();
                resolve({transactionId, amount, status: "success"});
            }
            else
            {
                reject(new Error('Payment failure'));
            }

        }, 1500)
    })
  // TODO: Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
}

function updateInventory(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      items.forEach(item => inventory[item].stock--);
      resolve(inventory);  
    }, 300);
  });
}
  // TODO: Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(items) {
  return checkInventory(items)
    .then(availableItems => calculateTotal(availableItems))
    .then(({ subtotal, tax, total }) =>
      processPayment(total).then(paymentInfo => ({ paymentInfo, subtotal, tax, total }))
    )
    .then(({ paymentInfo, subtotal, tax, total }) =>
      updateInventory(items).then(updatedInventory => ({
        paymentInfo,
        order: { items, subtotal, tax, total },
        inventory: updatedInventory
      }))
    );
}

// Test cases:
// checkout(['laptop', 'mouse'])           // Should succeed
//   .then(result => console.log('Order success:', result))
//   .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

// checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
//   .then(result => console.log('Order success:', result))
//   .catch(error => console.log('Order failed:', error.message));
