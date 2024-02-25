const filterInput = document.getElementById('filterInput');
function filterNames(){
     let filterValue = document.getElementById('filterInput').value;
     let unorderedList = document.getElementById('names');
     let list = unorderedList.querySelectorAll('.collection-item');
     for(let i=0;i<list.length;i++){
          let a = list[i].getElementsByTagName('a')[0];
          if(a.innerHTML.indexOf(filterValue)>-1){
               list[i].style.display = '';
          }else{
               list[i].style.display = 'none';
          }
     }
}
filterInput.addEventListener('keyup',filterNames);