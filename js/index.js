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
for (city of cities) {
  let fragment = new DocumentFragment();
  let theCity = document.createElement("li");
  theCity.setAttribute("class", "city");
  theCity.innerText = city;
  orderedList.appendChild(theCity);
  fragment.appendChild(orderedList);
  mainSection.appendChild(fragment);
}
