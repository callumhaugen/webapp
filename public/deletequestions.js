let arr = [];
let l = document.getElementById('quizzes').getElementsByTagName('a');
for(var i=0; i<l.length; i++) {
  arr.push(l[i].href);
}
console.log(arr);

let temparr=[];
for(let i=0; i<arr.length; i++){
  let parts= arr[i].split('/');
  let x=parts.pop()
  temparr.push(x);
}
console.log(temparr);

/*for(let i=0; i<temparr.length; i++){
  document.getElementById(`${temparr[i]}`).addEventListener("click", function(){
  let xhr =new XMLHttpRequest();
  let temp=temparr[i];
console.log(temparr[i]);
let sender={
  url:temparr[i]
}
let urlJson=JSON.stringify(sender);
  xhr.open("DELETE", 'http://localhost:3000/quizzes');
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(urlJson);
  console.log(xhr);
  window.location.reload(false);
  });
}*/


for(let i=0; i<temparr.length; i++){
  let playButtonid=`${temparr[i]}`+"undefined";

  document.getElementById(`${playButtonid}`).addEventListener("click", function(){
    let URL="/playquiz/"+`${temparr[i]}`
window.location.href =URL;
});
}
