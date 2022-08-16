// Маємо масив який складеється з певних елементів в цьому випадку це будуть строки

// Отримати масив строк які потоврються декілька раз

// Можна вирішити за допомгою двох алгоритмів перший буде мати складність O(n^2) другий набагато ефективніший та матиме складність O(n)

const arr = ['pear', 'apple', 'watermelon', 'watermelon', 'strawbery', 'pear', 'apple'];

function searchCouple(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let a = 0; a < arr.length; a++) {
      if (arr[i] === arr[a]) {
        count++;
      }
    }
    if (count > 1) {
      result.push(arr[i]);
    }
  }
  return result;
}

function linearSearchCouple(arr) {
  const result = [];
  const count = {};

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = count[arr[i]] ? 'reapet' : 'uniqe';
  }
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] !== 'uniqe') {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(linearSearchCouple(arr));
