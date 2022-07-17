function toggle(id) {
  document.getElementById('drinkContent').style.display = 'none'
  document.getElementById('eatContent').style.display = 'none'
  document.getElementById('eat').style.backgroundColor = 'white'
  document.getElementById('drink').style.backgroundColor = 'white'
  document.getElementById('eat').style.color = 'black'
  document.getElementById('drink').style.color = 'black'
  document.getElementById(id).style.backgroundColor = 'grey'
  document.getElementById(id).style.color = 'white'
  if (id === 'eat') {
    document.getElementById('eatContent').style.display = 'initial'
  } else {
    document.getElementById('drinkContent').style.display = 'initial'
  }
}
