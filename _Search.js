//Маємо масив нулів довжиною в 10000 та містить одну одиницю нам потрібно знайти на якій позиції знаходиться елемент.

// Задача доволі проста, але на її прикладі можна чудово зрозуміти як працює лінійний пошук та бінарний пошук.

// Складність лінійного пошуку буде O(N) та якщо елемент буде на 1000 позиції ми знайдем його за 1000 кроків

// Складність бінарного пошуку буде O(logN) і ми зможемо знайти цей самий елемент за 13 кроків.

const arr = [];

let step = 0;

for (let i = 1; i < 10000; i++) {
  arr.push(0);
}

arr[600] = 1;

function linearSearch(arr, item) {
  for (let i = 0; i < sqare.length; i++) {
    step++;
    if (arr[i] === item) {
      console.log(`${step} кроків потрібно для пошуку`);
    }
  }
}

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  let position = -1;
  let found = false;
  while (found === false && start <= end) {
    step++;
    middle = Math.floor((start + end) / 2);
    if (arr[middle === item]) {
      found = true;
      position = middle;
      return position;
    }
    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  console.log(`${step} кроків потрібно для пошуку`);
}

binarySearch(arr, 1);
