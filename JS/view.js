export default class View {
  constructor() {
    this.model = null
    this.table = document.getElementById('table')
    const btn = document.getElementById('add')
    btn.onclick = () => this.addToDo('Titulo', 'Desc')
  }

  setModel(model) {
    this.model = model
  }

  addToDo(title, description) {
    this.model.addToDo(title, description)
  }
}