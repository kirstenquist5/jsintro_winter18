var pDemo = document.getElementById("demo")
var imageSrc = document.getElementById("img")

  pDemo.innerHTML = "hello world"
  // document.getElementsByClassName("demo2").innerHTML = "HAHAHA"
  // document.getElementsByTagName("p")

  imageSrc.src = "https://images.unsplash.com/photo-1544264883-8decbfc368de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  pDemo.style.color = "red"

  var colors = ["red", "green", "blue", "orange"]
  var btn = document.getElementById("btn")

  btn.addEventListener("click", changeColor)
  function changeColor() {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  }

  // event handlers
  // onclick=js
  // element.addEventListener(event, function, useCapture)

  // element.addEventListener("click" function() {
  //   do something
  // })


// element.addEventListener("click", myFunction)

//     function myFunction() {
//       do something
//     }

// Scope

var foo = 'bar'; //global

function someFunction(params1, params2) { // params1 and 2 are local
  var bar = 'foo' //local
}

function myFunction() {
  // debugger
  console.log(bar) // error
  console.log(foo) //'bar'
}

function whatIsThis() {
  baz = "what varialbe is this?"
}

// console.log(baz)

whatIsThis()

console.log(baz)

myFunction()

object

// datatypes
// string, booleans, numbers, null, undefined, symbol

// arrays, hashes, functions, classes

// window object - what the user sees
  // window
      // global
      // fucntion calls

var num = 23
console.log(this.num)      
console.log(this)

var person = {
  firstName: 'bob',
  lastName: 'smith',
  func: function() {
    return this.firstName + " " + this.lastName
  }
}

console.log(person.func())

