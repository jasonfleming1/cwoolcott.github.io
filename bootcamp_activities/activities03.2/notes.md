***Chris' Most Awesome JS Notes***

---

**Basic JSFiddle:**
[https://jsfiddle.net/kzm58djd/4/]()

---

**How To set/get the HTML content of an element:**

**innerText**

https://www.w3schools.com/jsref/prop_node_innertext.asp

**innerHTML**

https://www.w3schools.com/jsref/prop_html_innerhtml.asp

**textContent**

https://www.w3schools.com/jsref/prop_node_textcontent.asp

---

**How to Randomize value in an array**

[https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array]()

`fastFoodJoints = ["Sonic", "McDonalds", "White Castle", "Arbys"];`

`//Picks out a Random Index using the length of the array (fyi: random gives us 0 through 1 in tiny increments, never being 0 or 1. Floor gives us the integer lowerest, 2.234235 is 2)`

`todayIWillEat = fastFoodJoints[Math.floor(Math.random()*fastFoodJoints.length)];`

`alert("Today I will eat " + todayIWillEat);`

---

**Use charAt()**

The charAt() method returns the character at the specified index in a string.

[https://www.w3schools.com/jsref/jsref_charat.asp]()

`var name = "Chris";`

`alert(name.charAt(0)); //Alerts C`

---

**Use onkeyup event**

onkeyup is an event we can hook onto. It will trigger when a key is pressed(technically...when a key is released)

[https://www.w3schools.com/jsref/event_onkeyup.asp]()

`<script>`

`document.onkeyup = function(event) {`

` // Determines which key was pressed.`
      
`      var keyPress = event.key;`
      
` }`

</script>

      


---
**Basic for loop**

[https://www.w3schools.com/js/js_loop_for.asp]()

`for (var i = 0; i < 5; i++) {`

`  document.write(i + "<br>");`

`}`

--

**Array for loop**

[https://www.w3schools.com/js/js_loop_for.asp]()

`var cars = ['Mazda', 'Ford', 'Audi'];`

`for (var i = 0; i < cars.length; i++) { `

`  document.write(cars[i] + "<br>");`
  
`}`















