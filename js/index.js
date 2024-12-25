let mainSection = document.querySelector(".main-section");
let orderedList = document.createElement("ol");
let cities = [
  "Warsaw",
  "Berlin",
  "Paris",
  "London",
  "New York",
  "Tokyo",
  "Moscow",
];
let fragment = new DocumentFragment();
for (let city of cities) {
  let theCity = document.createElement("li");
  theCity.setAttribute("class", "city");
  theCity.innerText = city;
  fragment.appendChild(theCity);
}
orderedList.appendChild(fragment);
mainSection.appendChild(orderedList);
