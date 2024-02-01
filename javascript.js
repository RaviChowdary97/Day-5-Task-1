const jsonObject = {
  name: "Peter",
  age: 30,
  city: "New York",
  hobbies: ["reading", "coding", "running"],
};

// FOR LOOP

let a = 1;
for (let b = 0; b > a; b++) {
  console.log(key, jsonObject[key]);
}

//FOR IN LOOP

console.log("Using for...in loop:");
for (let key in jsonObject) {
  console.log(key, jsonObject[key]);
}

// FOR OF LOOP

console.log("Using for...of loop:");
for (let hobby of jsonObject.hobbies) {
  console.log(hobby);
}

//FPREACH LOOP

console.log("Using forEach loop for arrays:");
jsonObject.hobbies.forEach((hobby) => {
  console.log(hobby);
});
