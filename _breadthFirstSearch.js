// Маємо граф з вершинами A B C D E P X R T Y U I

// Найти чи існує шлях від точки A в точку I

// Для зручності у програмуванні данний граф буде краще за все представити у вигляді обьекта

// Ключами будуть вершини, а значенням вершини в які ми можемо потрапити

// Загальний алгоритм вирішення такої задачі в контексті графів називається пошук в ширину

// Складність алгоритму O(N);

const graph = {
  A: ['B', 'C', 'D'],
  B: ['E'],
  C: ['D', 'R'],
  D: ['P'],
  E: ['X'],
  X: ['I'],
  P: ['T'],
  R: ['Y'],
  T: ['U', 'I'],
  Y: ['U'],
  U: ['I'],
};

function searchMinPath(graph, start, end) {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    const currentItem = queue.shift();
    if (!graph[currentItem]) {
      graph[currentItem] = [];
    }
    if (graph[currentItem].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[currentItem]];
    }
  }
}

console.log(searchMinPath(graph, 'A', 'I'));
