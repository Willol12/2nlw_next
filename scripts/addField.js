document.querySelector("#add-time")
.addEventListener('click', cloneField)
//executa uma ação
function cloneField() {
  //duplicar campos
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean true or false



const fields = newFieldContainer.querySelectorAll('input') 
//para cada campo, limpar
fields.forEach(function(field) {
console.log(field) 
//pega o field do momento e limpa ele
field.value = ""

})
//colocar na pagina
document.querySelector('#schedule-items').appendChild(newFieldContainer)
}