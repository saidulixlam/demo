// var second=document.querySelector('.list-group-item:nth-child(2)');
    // second.style.color='green';
    // // var third=document.querySelector('.list-group-item:nth-child(3)');
    // // third.style.display='none';
    // var list=document.querySelectorAll('li:nth-child(odd)');
    // for(var i=0;i<list.length;i++){
    //   list[i].style.backgroundColor='green';
    // }
    var itemlist = document.querySelector('#items');
    //to access parentnode or parent element
    //console.log(itemlist.parentNode);
   // console.log(itemlist.parentElement);
    //to access children
    //console.log(itemlist.childNodes);//it gives all the nodes
    //console.log(itemlist.children);//it gives elements
    //firstchild
    const first =itemlist.children[0];//from array of elemnts
    first.textContent="Hello 1";
    //console.log(first);
    //console.log(itemlist.firstChild);//return the first node 
    //firstElementchild
    // console.log(itemlist.firstElementChild);//return first element
    // console.log(itemlist.lastElementChild);//return last elemnt
    // console.log(itemlist.lastChild);//return last node
    //sibling is kinda same as child to access
    //create child
    //ne div
    var newDiv=document.createElement('div');
    //adding class & id
    newDiv.className="hello";
    newDiv.id='hello1';
    newDiv.setAttribute('title','Hello Dear');
    var textNod=document.createTextNode('Hello World !');
    // 
    newDiv.appendChild(textNod);
    //console.log(newDiv);
    newDiv.style.fontWeight='bold';
    newDiv.style.fontSize='28px';
    //now inserting new div tomactual content
     var container=document.querySelector('header .container');
     //console.log(container);
     var hope=document.querySelector('header h1');
     //console.log(hope);
    container.insertBefore(newDiv, hope);