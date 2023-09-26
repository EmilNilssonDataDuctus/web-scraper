// Copy this file and pase into web console and run
// Replace selector with appropriate rule
const classSelector = ".selection_colors_panel--styleRow---AwfB";

const container = document.querySelectorAll(classSelector);

// console.log(container);
// console.log(container[0]);
// console.log(Object.entries(container[0]));
// console.log(container[0].childNodes);
// console.log(container[0].childNodes);
// console.log(container[0].childNodes[0].childNodes[1]);
// console.log(container[0].childNodes[0].childNodes[1].innerText);
// console.log(container[0].childNodes[2].innerText);

const arrOfValues = [];
const myArr = Array.from(container).map((node) => {
  const varName = node?.childNodes[0]?.childNodes[1]?.innerText;
  const varValue = node?.childNodes[2]?.innerText;
  arrOfValues.push({
    cssFormat: cssFormatting(varName, varValue),
  });
});
console.log("arrOfValues");
console.log(arrOfValues);
console.log(arrOfValues[0]);

function cssFormatting(name, value) {
  return `--color-${name
    .replace("/", "-")
    .replace("_", "-")
    .replace(" ", "-")
    .toLowerCase()}: ${value};`;
}
