const btn = document.getElementById("criar_sala")
const input = document.getElementById("nome_sala")
const select = document.getElementById("select_room")

btn.addEventListener('click', (event) => {
    let salaNova = document.createElement("option")
    salaNova.value = `${input.value}`
    salaNova.textContent = input.value

    select.appendChild(salaNova)
})

