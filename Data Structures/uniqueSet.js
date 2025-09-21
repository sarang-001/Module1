// Generate 10 random mobile numbers
let mobileNumbers = [];
for (let i = 0; i < 10; i++) {
  // Generate a random 10-digit number starting with 9, 8, or 7
  let num = Math.floor(7000000000 + Math.random() * 3000000000);
  mobileNumbers.push(num);
}

// Add duplicates manually
mobileNumbers.push(mobileNumbers[2]); // duplicate
mobileNumbers.push(mobileNumbers[5]); // duplicate
mobileNumbers.push(mobileNumbers[7]); // duplicate

console.log("Numbers with duplicates:");
console.log(mobileNumbers);

// Put numbers into a Set (removes duplicates)
let uniqueNumbers = new Set(mobileNumbers);

console.log("\nUnique Numbers:");
console.log(uniqueNumbers);

// Print final size
console.log("\nFinal size of the Set:", uniqueNumbers.size);
