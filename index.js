//Compare Two JSON Objects Without Considering Order
function compareJSON(obj1, obj2) {
  const obj1Keys = Object.keys(obj1).sort();
  const obj2Keys = Object.keys(obj2).sort();

  if (obj1Keys.length !== obj2Keys.length) return false;

  return obj1Keys.every((key) => obj1[key] === obj2[key]);
}

// Example usage
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

console.log(compareJSON(obj1, obj2));

// Fetch and Display Country Flags

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(
        `Country: ${country.name.common}, Flag: ${country.flags.png}`
      );
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

//Print All Country Names, Regions, Sub-regions, and Populations
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(
        `Name: ${country.name.common}, Region: ${country.region}, Sub-region: ${country.subregion}, Population: ${country.population}`
      );
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
