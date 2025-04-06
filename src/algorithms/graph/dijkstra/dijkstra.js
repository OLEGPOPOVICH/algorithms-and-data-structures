const Graph = require('../../../data-structures/graph/graph');

/** Алгоритм Дейкстры */
Graph.prototype.dijkstra = function (startId) {
  if (!this.vertices.has(startId)) {
    throw new Error(`Вершина с id ${startId} не существует.`);
  }

  /** Расстояния до каждой вершины */
  const distances = {};
  /** Предки для восстановления пути */
  const previous = {};
  /** Очередь с приоритетом */
  const queue = [];

  /** Инициализация расстояний и предков */
  for (const vertexId of this.vertices.keys()) {
    distances[vertexId] = vertexId === startId ? 0 : Infinity;
    previous[vertexId] = null;
    queue.push(vertexId);
  }

  while (queue.length > 0) {
    /** Находим вершину с минимальным расстоянием */
    queue.sort((a, b) => distances[a] - distances[b]);

    const currentNode = queue.shift();

    /** Обходим всех соседей текущей вершины */
    const vertexEdges = this.adjacencyList.get(currentNode) || [];

    for (const edge of vertexEdges) {
      const vertexId = edge.target.id;
      const newDistance = distances[currentNode] + edge.weight;

      /** Если найдено более короткое расстояние */
      if (newDistance < distances[vertexId]) {
        distances[vertexId] = newDistance;
        previous[vertexId] = currentNode;
      }
    }
  }

  return { distances, previous };
}

/** Восстанавливает кратчайший путь до целевой вершины */
Graph.prototype.findShortestPath = function (startId, targetId) {
  const { distances, previous } = this.dijkstra(startId);

  if (!this.vertices.has(targetId) || distances[targetId] === Infinity) {
    return null;
  }

  const path = [];
  let current = targetId;

  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }

  return path;
}

const graph = new Graph();

graph.addVertex('A', 'Value A');
graph.addVertex('B', 'Value B');
graph.addVertex('C', 'Value C');
graph.addVertex('D', 'Value D');
graph.addVertex('E', 'Value E');
graph.addVertex('F', 'Value F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 5);
graph.addEdge('B', 'D', 10);
graph.addEdge('C', 'E', 3);
graph.addEdge('D', 'E', 4);
graph.addEdge('E', 'F', 7);

console.log("Кратчайшие расстояния:", graph.dijkstra('A'));
console.log("Кратчайший путь из A в E:", graph.findShortestPath('A', 'F'));
