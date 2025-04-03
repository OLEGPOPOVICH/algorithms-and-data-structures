const GraphVertex = require('./graphVertex');
const GraphEdge = require('./graphEdge');

/** Граф */
class Graph {
  constructor(directed = false) {
    /** Вершины */
    this.vertices = new Map();
    /** Ребра */
    this.edges = new Map();
    /** Список смежности */
    this.adjacencyList = new Map();
    /** Флаг ориентированности графа */
    this.directed = directed;
  }

  /** Добавляет вершину */
  addVertex(id, value) {
    if (this.vertices.has(id)) {
      throw new Error(`Вершина с id ${id} уже существует.`);
    }

    const vertex = new GraphVertex(id, value);

    this.vertices.set(id, vertex);
    this.adjacencyList.set(id, []);

    return vertex;
  }

  /** Удаляет вершину */
  removeVertex(id) {
    if (!this.vertices.has(id)) {
      throw new Error(`Вершина с id ${id} не существует.`);
    }

    /** Ребра из списка смежности удаляемой вершины */
    const vertexEdges = this.adjacencyList.get(id) || [];

    vertexEdges.forEach((edge) => {
      const edgeKey = `${edge.source.id}-${edge.target.id}`;
      /** Удаляем ребро удаляемой вершины из списка ребер */
      this.edges.delete(edgeKey);

      /** Для неориентированного графа */
      /** Удаляем обратное ребро */
      if (!this.directed) {
        /** Ребро из списка смежности вершины */
        const targetEdges = this.adjacencyList.get(edge.target.id);
        /** Индекс ребра вершины */
        const targetEdgeIndex = targetEdges.findIndex((targetEdge) =>
          (targetEdge.source.id === edge.target.id && targetEdge.target.id === edge.source.id)
        );

        if (targetEdgeIndex !== -1) {
          /** Удаляем ребро из списка смежности вершины */
          targetEdges.splice(targetEdgeIndex, 1);

          const targetEdgeKey = `${edge.target.id}-${edge.source.id}`;
          /** Удаляем ребро из списка ребер */
          this.edges.delete(targetEdgeKey);
        }
      }
    });

    /** Для ориентированного графа */
    /** Удаляем остальные ребра у которых есть связь с удаляемой вершиной */
    if (this.directed) {
      this.vertices.forEach((_, vertexId) => {
        if (vertexId === id) {
          return;
        }

        /** Ребра вершины */
        const vertexEdges = this.adjacencyList.get(vertexId);

        if (!vertexEdges) {
          return
        }

        vertexEdges.forEach((vertexEdge, index) => {
          if (vertexEdge.target.id === id) {
            /** Удаляем ребро из списка смежности вершины */
            vertexEdges.splice(index, 1);

            const edgeKey = `${vertexEdge.source.id}-${vertexEdge.target.id}`;
            /** Удаляем ребро из списка ребер */
            this.edges.delete(edgeKey);
          }
        });
      });
    }

    /** Удаляем вершину из списка вершин */
    this.vertices.delete(id);
    /** Удаляем смежности удаляемой вершины */
    this.adjacencyList.delete(id);
  }

  /** Добавляет ребро */
  addEdge(sourceId, targetId, weight = 1) {
    const source = this.vertices.get(sourceId);
    const target = this.vertices.get(targetId);

    if (!source || !target) {
      throw new Error('Одна из вершин не существует.');
    }

    const edgeKey = `${sourceId}-${targetId}`;
    const edge = new GraphEdge(source, target, weight, this.directed);

    this.edges.set(edgeKey, edge);
    this.adjacencyList.get(sourceId).push(edge);

    if (!this.directed) {
      const reverseEdgeKey = `${targetId}-${sourceId}`;
      const reverseEdge = new GraphEdge(target, source, weight, this.directed);

      this.edges.set(reverseEdgeKey, reverseEdge);
      this.adjacencyList.get(targetId).push(reverseEdge);
    }
  }

  /** Удаляет ребро */
  removeEdge(sourceId, targetId) {
    const source = this.vertices.get(sourceId);
    const target = this.vertices.get(targetId);

    if (!source || !target) {
      throw new Error('Одна из вершин не существует.');
    }

    const edgeKey = `${sourceId}-${targetId}`;
    const edge = this.edges.get(edgeKey);

    if (!edge) {
      throw new Error('Ребро не существует.');
    }

    /** Удаляем ребро */
    this.edges.delete(edgeKey);

    const sourceEdges = this.adjacencyList.get(sourceId);
    sourceEdges.splice(sourceEdges.findIndex((sourceEdge) => sourceEdge === edge), 1);

    /** Для неориентированного графа */
    /** Удаляем обратное ребро */
    if (!this.directed) {
      const reverseKey = `${targetId}-${sourceId}`;
      const reverseEdge = this.edges.get(reverseKey);

      if (reverseEdge) {
        this.edges.delete(reverseKey);

        const targetEdges = this.adjacencyList.get(targetId);
        targetEdges.splice(targetEdges.findIndex((targetEdge) => targetEdge === edge), 1);
      }
    }
  }

  /** Выводит все ребра */
  listEdges() {
    const edgeList = [];

    this.edges.forEach(edge => {
      edgeList.push({
        source: edge.source.id,
        target: edge.target.id,
        weight: edge.weight,
        directed: edge.directed
      });
    });

    return edgeList;
  }
}

module.exports = Graph;

const graph = new Graph();

graph.addVertex('A', 'Москва');
graph.addVertex('B', 'Санкт-Петербург');
graph.addVertex('C', 'Новосибирск');

graph.addEdge('A', 'B', 700); // Москва — Санкт-Петербург (700 км)
graph.addEdge('B', 'C', 3500); // Санкт-Петербург — Новосибирск (3500 км)
graph.addEdge('C', 'A', 4200); // Новосибирск — Москва (4200 км)

// graph.removeVertex('A');
// graph.removeEdge('A', 'C');

console.log("Все ребра:", graph.listEdges());
