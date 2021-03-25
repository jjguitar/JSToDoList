import AddTodo from './components/add-todo.js'
export default class View {
  constructor() {
    this.model = null
    this.table = document.getElementById('table')
    this.addTodoForm = new AddTodo()

    this.addTodoForm.onClick((title, description) => this.addToDo(title,description))
  }

  setModel(model) {
    this.model = model
  }

  render() {
    const toDos = this.model.getToDos()
    // console.log(toDos)
    // for (let toDo of toDos) {
    //   this.createRow(toDo)
    // }
  }

  addToDo(title, description) {
    const toDo = this.model.addToDo(title, description)
    this.createRow(toDo)
  }

  toggleCompleted(id) {
    this.model.toggleCompleted(id)
  }

  removeToDo(id) {
    // console.log(id)
    this.model.removeToDo(id)
    document.getElementById(id).remove()
  }

  createRow(toDo) {
    const row = table.insertRow()
    row.setAttribute('id', toDo.id)
    row.innerHTML = `
      <td>${toDo.title}</td>
      <td>${toDo.description}</td>
      <td class="text-center">
        
      </td>
      <td class="text-right">
        <button class="btn btn-primary mb-1">
          <i class="fa fa-pencil"></i>
        </button>
      </td>
    `

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = checkbox.completed
    checkbox.onclick = () => this.toggleCompleted(toDo.id)
    row.children[2].appendChild(checkbox)

    const removeBtn = document.createElement('button')
    removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1')
    removeBtn.innerHTML = '<i class="fa fa-trash"></i>'
    //console.log(toDo.id)
    removeBtn.onclick = () => this.removeToDo(toDo.id)
      //console.log(e.target.parentNode)
    row.children[3].appendChild(removeBtn)
  }
}