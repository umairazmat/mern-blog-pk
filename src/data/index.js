const fs = require("fs");

// Read the contents of the JSON file
const data = fs.readFileSync("blogData.json");
// Parse the JSON data into a JavaScript object
const jsonData = JSON.parse(data);

console.log("Before Adding data", JSON.stringify(jsonData, null, 4));

// Modify the JavaScript object by adding new data
jsonData.push({
  id: 3,
  image:
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  title: "About Macbook",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  tags: ["#Iphone", "#Macbook", "#Watch"],
});

// Convert the JavaScript object back into a JSON string
const jsonString = JSON.stringify(jsonData);

fs.writeFileSync("blogData.json", jsonString, "utf-8", (err) => {
  if (err) throw err;
  console.log("Data added to file");
});

const updateData = fs.readFileSync("blogData.json");
const updatedJsonData = JSON.parse(updateData);
console.log("After Adding data", JSON.stringify(updatedJsonData, null, 4));
