export default class Model {
  constructor() {
    this.view = null
    this.toDos = JSON.parse(localStorage.getItem('toDos'))
    if(!this.toDos || this.toDos.length < 1) {
      this.toDos = [
        {
          id: 0,
          title: 'Learn JS',
          description: 'Watch Javascript tutorials on YouTube',
          completed: false,
        }
      ]
      this.currentId = 1
    } else {
      this.currentId = this.toDos[this.toDos.length -1].id + 1
    }
  }

  setView(view) {
    this.view = view
  }

  save() {
    localStorage.setItem('toDos', JSON.stringify(this.toDos))
  }

  getToDos() {
    // console.log(this.toDos)
    return this.toDos
  }

  findToDo(id) {
    return this.toDos.findIndex((toDo) => toDo.id === id)
  }
  toggleCompleted(id) {
    const index = this.findToDo(id)
    const toDo = this.toDos[index]
    toDo.completed = !toDo.completed
    // console.log(this.toDos)
  }

  addToDo(title, description) {
    //console.log(title, description)
    const toDo = {
      id: this.currentId++,
      title,
      description,
      completed: false,
    }

    //console.log(toDo)
    this.toDos.push(toDo)
    console.log(this.toDos)

    this.save()

    return {...toDo}
  }

  removeToDo(id) {
    // console.log(id)
    const index = this.findToDo(id)
    // console.log(this.toDos[index])
    this.toDos.splice(index, 1)
    this.save()
  }
}