let bott=document.createElement("button");
bott.innerText="Click me!";
console.log(bott);

let boddy=document.querySelector("body");
boddy.append(bott);
bott.style.backgroundColor="red";
bott.style.color="white";
bott.style.fontFamily="times new roman";
bott.style.fontSize="20px";
bott.style.margin="10rem 40px";
bott.style.fontWeight="bolder";

let para=document.querySelector("p");
para.classList.add("newclass");





/**---------------------------------------------------------------------------
 * This is an example of How to use classList method
 * ---------------------------------------------------------------------------
 
const div = document.createElement("div");
div.className = "foo";
boddy.append(div);
div.innerText = "bar";
// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
let i=0;
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(cls);
div.classList.remove(cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");

-----------------------------------------------------------------------------------
-----------------------------------------------------------------------------------
*/