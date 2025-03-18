/** Ребро графа */
class GraphEdge {
  constructor(source, target, weight = 1, directed = false) {
    /** Исходная вершина */
    this.source = source;
    /** Целевая вершина */
    this.target = target;
    /** Вес ребра */
    this.weight = weight;
    /** Ориентированность ребра */
    this.directed = directed;
  }
}

module.exports = GraphEdge;
