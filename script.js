const b1=document.getElementById('b1')
const b2=document.getElementById('b2')
const b3=document.getElementById('b3')
const b4=document.getElementById('b4')
const b5=document.getElementById('b5')
const b6=document.getElementById('b6')
const b7=document.getElementById('b7')
const b8=document.getElementById('b8')
const b9=document.getElementById('b9')

let x='X'
let y='O'
let s
function func_one(){
    if(!b1.disabled){
b1.children[0].innerHTML=x
b1.disabled=true
s=x
x=y
y=s
if(!check())
document.getElementById('comment').innerHTML=`continue with ${x}`
}
}

function func_two(){
      if(!b2.disabled){
b2.children[0].innerHTML=x
b2.disabled=true
s=x
x=y
y=s
if(!check())
document.getElementById('comment').innerHTML=`continue with ${x}`
}
}

function func_three(){
      if(!b3.disabled){
b3.children[0].innerHTML=x
b3.disabled=true
s=x
x=y
y=s
if(!check())
document.getElementById('comment').innerHTML=`continue with ${x}`
}
}

function func_four(){
      if(!b4.disabled){
b4.children[0].innerHTML=x
b4.disabled=true
s=x
x=y
y=s
if(!check())
document.getElementById('comment').innerHTML=`continue with ${x}`
}}

function func_five(){
      if(!b5.disabled){
b5.children[0].innerHTML=x
b5.disabled=true
s=x
x=y
y=s
if(!check())
document.getElementById('comment').innerHTML=`continue with ${x}`
}}

function func_six(){
      if(!b6.disabled){
b6.children[0].innerHTML=x
b6.disabled=true
s=x
x=y
y=s
if(!check())
document.getElementById('comment').innerHTML=`continue with ${x}`
}}

function func_seven(){
      if(!b7.disabled){
b7.children[0].innerHTML=x
b7.disabled=true
s=x
x=y
y=s
if(!check())
document.getElementById('comment').innerHTML=`continue with ${x}`
}}

function func_eight(){
      if(!b8.disabled){
b8.children[0].innerHTML=x
b8.disabled=true
s=x
x=y
y=s
if(!check())
document.getElementById('comment').innerHTML=`continue with ${x}`
}}

function func_nine(){
      if(!b9.disabled){
b9.children[0].innerHTML=x
b9.disabled=true
s=x
x=y
y=s
if(!check())
document.getElementById('comment').innerHTML=`continue with ${x}`
}}


function check() {
  if (
    (b1.children[0].textContent == 'X' && b2.children[0].textContent == 'X' && b3.children[0].textContent == 'X') ||
    (b4.children[0].textContent == 'X' && b5.children[0].textContent == 'X' && b6.children[0].textContent == 'X') ||
    (b7.children[0].textContent == 'X' && b8.children[0].textContent == 'X' && b9.children[0].textContent == 'X') ||
    (b1.children[0].textContent == 'X' && b4.children[0].textContent == 'X' && b7.children[0].textContent == 'X') ||
    (b2.children[0].textContent == 'X' && b5.children[0].textContent == 'X' && b8.children[0].textContent == 'X') ||
    (b3.children[0].textContent == 'X' && b6.children[0].textContent == 'X' && b9.children[0].textContent == 'X') ||
    (b1.children[0].textContent == 'X' && b5.children[0].textContent == 'X' && b9.children[0].textContent == 'X') ||
    (b3.children[0].textContent == 'X' && b5.children[0].textContent == 'X' && b7.children[0].textContent == 'X')
  ) {
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    document.getElementById('comment').innerHTML = 'player X wins!';
    return true;
  } else if (
    (b1.children[0].textContent == 'O' && b2.children[0].textContent == 'O' && b3.children[0].textContent == 'O') ||
    (b4.children[0].textContent == 'O' && b5.children[0].textContent == 'O' && b6.children[0].textContent == 'O') ||
    (b7.children[0].textContent == 'O' && b8.children[0].textContent == 'O' && b9.children[0].textContent == 'O') ||
    (b1.children[0].textContent == 'O' && b4.children[0].textContent == 'O' && b7.children[0].textContent == 'O') ||
    (b2.children[0].textContent == 'O' && b5.children[0].textContent == 'O' && b8.children[0].textContent == 'O') ||
    (b3.children[0].textContent == 'O' && b6.children[0].textContent == 'O' && b9.children[0].textContent == 'O') ||
    (b1.children[0].textContent == 'O' && b5.children[0].textContent == 'O' && b9.children[0].textContent == 'O') ||
    (b3.children[0].textContent == 'O' && b5.children[0].textContent == 'O' && b7.children[0].textContent == 'O')
  ) {
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
    document.getElementById('comment').innerHTML = 'player O wins!';
    return true;
  } else if (b1.disabled && b2.disabled && b3.disabled && b4.disabled && b5.disabled && b6.disabled && b7.disabled && b8.disabled && b9.disabled) {
    document.getElementById('comment').innerHTML = 'Game Over';
    return true;
  } else {
    return false;
  }
}

function tryAgain() {
  let x = 'X';
  let y = 'O';

  b1.children[0].textContent = '';
  b2.children[0].textContent = '';
  b3.children[0].textContent = '';
  b4.children[0].textContent = '';
  b5.children[0].textContent = '';
  b6.children[0].textContent = '';
  b7.children[0].textContent = '';
  b8.children[0].textContent = '';
  b9.children[0].textContent = '';

  b1.disabled = false;
  b2.disabled = false;
  b3.disabled = false;
  b4.disabled = false;
  b5.disabled = false;
  b6.disabled = false;
  b7.disabled = false;
  b8.disabled = false;
  b9.disabled = false;

  document.getElementById('comment').innerHTML = 'Start with X';
}