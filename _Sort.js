// Задачі з алгоритмом сортування дуже часто використовуються
// Розгляну декілька алгоритмів сортування та визначимо складність кожного з них

const array = [3, 4, 5, 6, 7, 1, 2, 100, 12, 14, -1, -2, -3, -100, 1000, -1000, 400, -456, -346];

let step = 0;

// Сортировка вибором складність такого алгоритму O(N^2)

function sortSelect(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      step += 1;
    }
    let tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}

// Сортировка бульшками складність такого алгоритму O(N^2);

function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      step += 1;
    }
  }

  return arr;
}

// Сортування Хоара або швидке сортування його складність О(N*log2n)

function quickSort(arr) {
  if (arr.length < 1) {
    return arr;
  }

  let middleIndex = Math.floor(arr.length / 2);
  let middle = arr[middleIndex];
  let smaller = [];
  let over = [];

  for (let i = 0; i < arr.length; i++) {
    step += 1;
    if (i === middleIndex) continue;
    if (arr[i] < middle) {
      smaller.push(arr[i]);
    } else {
      over.push(arr[i]);
    }
  }
  return [...quickSort(smaller), middle, ...quickSort(over)];
}

console.log(quickSort(array));
console.log('step:', step);
