// let todovalues=document.querySelector('.enterList');
// let clicked=document.querySelector('.addButton');
// let displayList=document.querySelector('.listDisplay');
//
// let listArray=[];
//
// clicked.addEventListener('click',function(event){
//   event.preventDefault();
//   listArray.push(todovalues.value);
//
//   displayList.innerHTML=listArray.map(function(each){
//     console.log(each);
//     return `<li value="${each}">${each} <a style="color:red" value="${each}">(X)</a></li>`;
//   }).join('');
//
//
// });
// document.querySelector('ul').addEventListener('click',function(event){
//   event.preventDefault();
//   console.log(event.currentTarget.innerText);
//
//
// })


let outArray=[];
document.querySelector('form').addEventListener('submit',function(event){
  event.preventDefault();
   outArray.push(document.querySelector('.enterList').value);
   document.querySelector('form').reset();

   document.querySelector('.list').innerHTML=outArray.map(function(each){
     return `<li>${each}</li>`;
   }).join('');

});



console.log(outArray);
