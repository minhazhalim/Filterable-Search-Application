function filterProducts(){
     while(grid.childNodes.length > 1){
          grid.removeChild(gird.lastChild);
     }
     fetch('./store.json')
          .then(res => res.json())
          .then(json => {
               let filterValue = filterInput.value.toUpperCase();
               let filterData = match(json,'title',filterValue);
               for(const value of filterData){
                    addElement(grid,value);
               }
          });
}
const match = (values,filterBy,input) => {
     const p = Array.from(input).reduce((a,v,i) => `${a}[^${input.substr(i)}]*?${v}`,"");
     const regularExpression = RegExp(p);
     return values.filter(t => t[filterBy].toUpperCase().match(regularExpression));
}