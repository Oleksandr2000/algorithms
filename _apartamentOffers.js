// В базі данних нового ЖК є певні варінти квартири деякі з них були повінстю продані.

//Виведіть варіанти квартир які залишились в продажу та відсортуйте їх за зростанням ціни.

//Складність алгоритму буде O(n*log2n)

const apartaments = [
  {
    name: '1r66sqa',
    price: 70000,
    square: 66,
    rooms: 1,
    dwellingPlace: 30,
    sold: false,
  },
  {
    name: '2r88sqa',
    price: 90000,
    square: 88,
    rooms: 2,
    dwellingPlace: 30,
    sold: false,
  },
  {
    name: '1r46sqa',
    price: 50000,
    square: 46,
    rooms: 1,
    dwellingPlace: 30,
    sold: false,
  },
  {
    name: '2r76sqa',
    price: 80000,
    square: 76,
    rooms: 2,
    dwellingPlace: 30,
    sold: true,
  },
];

function latestApartamentOffers(arr) {
  return arr.filter((obj) => !obj.sold).sort((a, b) => (a.price > b.price ? 1 : -1));
}

console.log(latestApartamentOffers(apartaments));
