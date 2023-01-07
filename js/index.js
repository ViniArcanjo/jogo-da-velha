const turn = document.getElementById('vez')
const playerField = document.getElementById('jogador')

const field1 = document.querySelector('[data-i="1"]')
const field2 = document.querySelector('[data-i="2"]')
const field3 = document.querySelector('[data-i="3"]')
const field4 = document.querySelector('[data-i="4"]')
const field5 = document.querySelector('[data-i="5"]')
const field6 = document.querySelector('[data-i="6"]')
const field7 = document.querySelector('[data-i="7"]')
const field8 = document.querySelector('[data-i="8"]')
const field9 = document.querySelector('[data-i="9"]')
const fields = [
  field1,
  field2,
  field3,
  field4,
  field5,
  field6,
  field7,
  field8,
  field9
]

const button = document.getElementById('start')

let selected
let player = 'X'

let winnerPositions = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9]
]

function restart() {
  selected = []
  playerField.innerHTML = `${player}`

  turn.classList.add('hide')
  button.classList.remove('hide')

  fields.forEach(field => {
    field.innerHTML = ''
    field.classList.add('disabled')
  })
}

function check() {
  let playerLastMove = player === 'X' ? 'O' : 'X'

  const items = selected
    .map((item, i) => [item, i])
    .filter(item => item[0] === playerLastMove)
    .map(item => item[1])

  for (pos of winnerPositions) {
    if (pos.every(item => items.includes(item))) {
      alert("O JOGADOR '" + playerLastMove + "' GANHOU!")
      restart()
      return
    }
  }

  if (selected.filter(item => item).length === 9) {
    alert('DEU VELHA!')
    restart()
    return
  }
}

function move(e) {
  const index = e.target.getAttribute('data-i')

  player === 'X'
    ? (e.target.innerHTML = "<img src='../assets/icons/x.svg'/>")
    : (e.target.innerHTML = "<img src='../assets/icons/o.svg'/>")

  e.target.classList.add('disabled')

  selected[index] = player

  setTimeout(() => {
    check()
  }, [100])

  player = player === 'X' ? 'O' : 'X'
  playerField.innerHTML = `${player}`
}

function init() {
  selected = []

  playerField.innerHTML = `${player}`
  turn.classList.remove('hide')

  fields.forEach(field => {
    field.classList.remove('disabled')
    field.addEventListener('click', move)
  })
}

button.addEventListener('click', () => {
  button.classList.add('hide')
  init()
})
