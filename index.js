// Add your functions and code here
function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var kittens = [...kittens, name];
  return kittens;
}

function prependKitten(name){
  var kittens = [name, ...kittens];
  return kittens;
}

function removeLastKitten(){
  var kittens = kittens.slice(-1)
  kittens
}

function removeFirstKitten(){
  var kittens = kittens.slice(1)
  return kittens
}