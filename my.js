const form=document.getElementById('addForm');
const list=document.getElementById('items');
form.addEventListener('submit',addItem);
function addItem(e){//adding elements to the list
    e.preventDefault();
    // console.log(1);
    const input=document.getElementById('item');
    const inputValue=input.value;
    //console.log(inputValue);
    const li = document.createElement('li');
    li.className='list-group-item';
    
    li.appendChild(document.createTextNode(inputValue));
    //console.log(li);
    const btn=document.createElement('button');
    btn.className='btn btn-danger float-right delete';
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
    list.appendChild(li);

    //creating edit button for new listitem
    const edtbtn=document.createElement('button');
    edtbtn.className='btn btn-primary mx-2 float-right edit';
    edtbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(edtbtn);
    list.appendChild(li);
}//add element complete
//creating delete element
list.addEventListener('click',removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        list.removeChild(li);
      }
    }
  }
