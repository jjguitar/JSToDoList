import AddTodo from './components/add-todo.js'
import Modal from './components/modal.js'
export default class View {
  constructor() {
    this.model = null
    this.table = document.getElementById('table')
    this.addTodoForm = new AddTodo()
    this.modal = new Modal()

    this.addTodoForm.onClick((title, description) => this.addToDo(title,description))
    this.modal.onClick((id, values) => this.editToDo(id, values))
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
    toDos.forEach((toDo) => this.createRow(toDo))
  }

  addToDo(title, description) {
    const toDo = this.model.addToDo(title, description)
    this.createRow(toDo)
  }

  toggleCompleted(id) {
    this.model.toggleCompleted(id)
  }
  
  editToDo(id, values) {
    this.model.editToDo(id, values)
    const row =document.getElementById(id)
    row.children[0].innerHTML = values.title
    row.children[1].innerHTML = values.description
    row.children[2].children[0].checked = values.completed
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
        
      </td>
    `

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = toDo.completed
    checkbox.onclick = () => this.toggleCompleted(toDo.id)
    row.children[2].appendChild(checkbox)

    const editBtn = document.createElement('button')
    editBtn.classList.add('btn', 'btn-primary', 'mb-1')
    editBtn.innerHTML = '<i class="fa fa-pencil"></i>'
    //console.log(toDo.id)
    editBtn.setAttribute('data-toggle', 'modal')
    editBtn.setAttribute('data-target', '#modal')
    editBtn.onclick = () => this.modal.setValues(toDo)
      //console.log(e.target.parentNode)
    row.children[3].appendChild(editBtn)

    const removeBtn = document.createElement('button')
    removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1')
    removeBtn.innerHTML = '<i class="fa fa-trash"></i>'
    //console.log(toDo.id)
    removeBtn.onclick = () => this.removeToDo(toDo.id)
      //console.log(e.target.parentNode)
    row.children[3].appendChild(removeBtn)
  }
}