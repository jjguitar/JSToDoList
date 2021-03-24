export default class Model {
  constructor() {
    this.view = null
    this.toDos = []
  }

  setView(view) {
    this.view = view
  }

  getToDos() {
    return this.ToDos
  }

  addToDo(title, description) {
    console.log(title, description)
  }
}