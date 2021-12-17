const arrForCateg: string[] = [];
for (let i = 0; i < 63; i += 1) {
  if (i < 8) {
    arrForCateg.push("Action(setA)");
  }
  if (i < 16 && i > 7) {
    arrForCateg.push("Action(setB)");
  }
  if (i < 24 && i > 15) {
    arrForCateg.push("Appliances");
  }
  if (i < 31 && i > 22) {
    arrForCateg.push("Body parts");
  }
  if (i < 39 && i > 30) {
    arrForCateg.push("Animal(set A)");
  }
  if (i < 47 && i > 38) {
    arrForCateg.push("Animal(set B)");
  }
  if (i < 55 && i > 46) {
    arrForCateg.push("Clothes");
  }
  if (i < 63 && i > 54) {
    arrForCateg.push("Emotion");
  }
}
export default arrForCateg;
