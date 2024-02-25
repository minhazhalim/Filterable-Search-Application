const searchFun = () => {
     let input = document.getElementById('myInput').value.toUpperCase();
     let table = document.getElementById('myTable');
     let tableRow = table.getElementsByTagName('tr');
     for(var i = 0;i < tableRow.length;i++){
          let tableDefinition = tableRow[i].getElementsByTagName('td')[0];
          if(tableDefinition){
               let textValue = tableDefinition.textContent || tableDefinition.innerHTML;
               if(textValue.toUpperCase().indexOf(input) > -1){
                    tableRow[i].style.display = '';
               }else{
                    tableRow[i].style.display = 'none';
               }
          }
     }
}
document.addEventListener('keyup',searchFun);