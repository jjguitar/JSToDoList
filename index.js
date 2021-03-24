document.addEventListener('DOMContentLoaded', function() {
  const title = document.getElementById('title')
  const description = document.getElementById('description')
  const table = document.getElementById('table')
  const alert = document.getElementById('alert')
  const btn = document.getElementById('add')

  btn.onclick = addTodo

  function addTodo() {
    if(title.value === '' || description.value === '') {
      //console.error('Title and description are required')
      alert.classList.remove('d-none')
      alert.innerText = 'Title and description are required'
      return
    } //else {
      //console.log('ok')

    //}
  }
})

