/** Вершина графа */
class GraphVertex {
  constructor(id, value) {
    /** Уникальный идентификатор вершины */
    this.id = id;
    /** Значение вершины */
    this.value = value;
  }
}

module.exports = GraphVertex;
