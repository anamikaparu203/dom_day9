var heading=document.getElementById('head1');
heading.style.color='blue';
heading.style.backgroundColor='pink';
 

 var para=document.getElementById('para');
//  para.innerHTML=`<b>Iam bold</b>`;


 var listitem=document.getElementsByClassName('lists')
 //listitem[0].backgroundColor='yellow';
listitem[0].style.backgroundColor='yellow';

var h2t=document.getElementsByTagName('h2');
h2t[0].style.color='red';
h2t[0].innerText='I am here';

var p1=document.querySelector('#para');
// p1.innerText='iam styled by query selector';

var h2t=document.getElementsByTagName('h2');
var p1=document.querySelector('#para');
// p1.innerText='i am styled by querySelector';
var text=document.querySelector('input[type="submit"]');

var sec_item=document.querySelector('.lists:nth-child(2)');
sec_item.style.color='red';

function show() {

    alert('I am clicked');
    
}
function change() {
    var title=document.getElementById('name');
    title.style.color='brown';

    
}
function capture(event) {
    
    console.log(event.target.value);
}

var keyp=document.getElementById('txtf')
keyp.addEventListener('keypress',function capture(event) {
    console.log(event.target.value);
})