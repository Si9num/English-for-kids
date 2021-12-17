const arrForName = [
  `Action(set A)`,
  `Action(set B)`,
  `Appliances`,
  `Body parts`,
  `Animal(set A)`,
  `Animal(set B)`,
  `Clothes`,
  `Emotions`,
];
const arrForClassName = [
  `ActionA`,
  `ActionB`,
  `Appliances`,
  `Body parts`,
  `AnimalA`,
  `AnimalB`,
  `Clothes`,
  `Emotions`,
];
const arrForImg = [
  `dance`,
  `swim`,
  `dishwasher`,
  `finger`,
  `cat`,
  `bird`,
  `blouse`,
  `angry`,
];

const arrForPages: string[] = [];
for (let i = 0; i < arrForName.length; i += 1) {
  const elem = `<div class="category-card ${arrForClassName[i]}">
      <img class="${arrForClassName[i]}" src="../../../public/assets/img/${arrForImg[i]}.jpg" alt="${arrForName[i]}" />
      <p>${arrForName[i]}</p>
    </div>`;
  arrForPages.push(elem);
}
export default arrForPages.join("");
