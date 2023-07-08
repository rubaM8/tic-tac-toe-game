/*
**const, let
**create a reference object to the elements of html
let heading=document.querySelector('h1')
heading.innerText='hello world'
console.log(document.querySelector('#hello'))
const myobj={
  keyname:1,
	keyname2:3
}
------------------------------------
**manibulating them
const listitem=document.querySelectorAll('ul li')
for(let i=0;i<listitem.length;i++){
	let item=listitem[i]
	console.log(item)
}
let byid=document.querySelector('#logo')
console.log(byid)

let byclass=document.getElementsByClassName("stik")
console.log(byclass)
-------------------------------------------------
**creating an increment button
let butt=document.querySelector('#butt')
let counter=0

function buttcounter(){
const el=document.querySelector('#countnum')
counter++
el.innerText=counter
}

butt.addEventListener('click',buttcounter)
---------------------------------------------------------------
**creating a button that adds elements in a list 
let ulElement=document.querySelector("#randlist")
let counter=0
function addElementList(){
	//increment counter
	counter++
	//create the element
let li=document.createElement('li')
//appened the element
ulElement.appendChild(li)
//add text to it
let textNode=document.createTextNode("sentence "+counter)	

if(counter%2===0){
	const bold=document.createElement('b')
	bold.appendChild(textNode)
	li.appendChild(bold)
}
else{
    const italic=document.createElement('i')
	italic.appendChild(textNode)
	li.appendChild(italic)
}
}
const elbutt=document.querySelector("#butt")
elbutt.addEventListener('click',addElementList)
--------------------------------------
**kind of equivelent but without creating textnodes and too much tags/elements creating
let counter=0
let ulElement=document.querySelector("#randlist")
const elbutt=document.querySelector("#butt")
function addElementList(){
	counter++
	const li=document.createElement("li")
	if(counter%2===0){
	li.innerHTML='<b>sentence </b>'+'<i>'+counter+'</i>'
	}
else{
	li.innerHTML='<i>sentence </i>'+'<b>'+counter+'</b>'	
}
ulElement.appendChild(li)
}

elbutt.addEventListener('click',addElementList)
-----------------------------------------
**manibulating attributes of elements (to create a custom att we name it date-****) in the attributes section alongside id..etc in the html doc

let counter=0
let ulElement=document.querySelector("#randlist")
const elbutt=document.querySelector("#butt")
const elbutt1=document.querySelector("#butt1")
function addElementList(){
	counter++
	const li=document.createElement("li")
	li.innerHTML='<b>sentence </b>'+counter
	//set the attribute data for each new li a new counter value
	li.setAttribute('data-counter',counter)
ulElement.appendChild(li)
}

function deleteElementList(){
//grabs the refernce of the li element of the current counter
const removedLi=ulElement.querySelector('[data-counter="'+counter+'"]')

//if i want to get the attribute value jst bcz :) and parse it to base 10 bcz it's now a string
//cont number= parseInt(removedLi.getAttribute('data-counter', 10))

//delete this li with this counter value
if(counter>0){
removedLi.remove()
//decrement counter for later li or later appropriate use
counter--
}
}

elbutt.addEventListener('click',addElementList)
elbutt1.addEventListener('click',deleteElementList)
-----------------------------------------------
**manibulating css via css class vs directly:
//via css class(create a class in css and call it vintage with its atts and assign it to li)
	li.setAttribute('class','vintage')
//directly in the js file
li.style.background='#FAF0E4'
-------------------------------------------------
//merging arrays without loops
const arr1=[1,2,3,4]
const arr2=[9,68,8]
const arr3=[...arr1,...arr2]
//merging objects works the same but if the keyname is the same for both, the last object mentioned in the merging sentence overrides the rest of keyname values

const obj1={
	name:'raghd',
	age:19
}
const obj2={
	name:'yousef',
	eyecolor:'black'
}
const obj3={
	...obj1,
	...obj2
}
console.log(arr3)
console.log(obj3)
//id the keyname value has a same name as a keyname then:
const keyname=5
const obj={
	name:'jamal',
	keyname,
	blahblah:30
} 
------------------------
//another way of writing a funtion, arrow function
function likethis(){}
const/let afunctionlikethis=()=>{}
//array function
const arr=[1,2,3,5,4,6,9]
const maparray=arr.map(function(el){
return el**2
})
const filterarry=arr.filter(el=>el%2===0)

//find function
const objec=[
	{name:'hanna',
	age:15,
	x:true},
	{name:'lana',
	age:19,
	x:true},
	{name:'khalid',
	age:30,
	x:false,
	y:true}
]
const findX=objec.find(element=>element.x===true)
//foeach loop
objec.forEach(el=>{console.log(el)})
--------------------
//multiline string
const introa='my name is yousef\
\
and my age is 22'

const introb=`my name is raghad
and i'm 22 y.o`

//const intro='characterA: '+introa+', characterB: '+introb
const intro=`characterA: ${introa}, characterB: ${introb}`
--------------------------
//regex
const emailRegExp=new RegExp('^\w+@\w+\.\w+$')
const userinput='g@c.f'
const isValid=emailRegExp.test(userinput)

//another way of creating a regex
/^\w+@\w+\.\w+$/.test('testmh@rmks')
console.log(/[A-Za-z0-9 ]/.test('jhfbc 85jh2 hj'))

//ends with h or j
console.log(/(h|j)$/.test('jhfbc 85jh2 hj'))

//returns 2 to 6 lowercase characters or spaces
console.log(/[a-z ]{2,6}/.exec('jhfbc 85jh2 hj'))

//window.alert('shut up')
//window.open('http://google.com')
--------------
window.scrollBy({
	top:window.innerHeight,
	left:0,
	bahavior:'smooth'
	
})
*/