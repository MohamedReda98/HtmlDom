let myp = document.createElement('p'),
    myptext = document.createTextNode("Hello Alprof From js");
myp.appendChild(myptext);
document.body.appendChild(myp);

document.getElementById('test').innerHTML = "this is modulated by js";
let myEl = document.getElementsByTagName('p');
console.log(myEl.length)
console.log(document.lastModified);
console.log(document.URL);
console.log(document.inputEncoding);
let main =  document.createElement('ol'),
    fragment = document.createDocumentFragment(),
    firstAttr = document.createAttribute('class'),
    secondAttr = document.createAttribute('id');
for (let i =0;i < 20; i++){
    let firstComm = document.createComment(`This is my the start li number : ${i+1}`),
        li = document.createElement('li'),
        liContent = document.createTextNode(`Number ${i+1}`),
        brk = document.createElement('br'),
        lastComm = document.createComment(`This is my the End li number : ${i+1}`);
    fragment.appendChild(firstComm);
    fragment.appendChild(li.appendChild(liContent));
    fragment.appendChild(lastComm);
    fragment.appendChild(brk)
}
main.appendChild(fragment)
document.body.appendChild(main);
firstAttr.value = 'order-list';
secondAttr.value = 'order';
main.setAttributeNode(firstAttr);
main.setAttributeNode(secondAttr);



