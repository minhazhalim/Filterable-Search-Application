const database = [
     {
          carName: "Ford",
          carPrice: 17000,
          carCode: "FD",
     },
     {
          carName: "Toyota",
          carPrice: 17000,
          carCode: "TY",
     },
     {
          carName: "Honda",
          carPrice: 17000,
          carCode: "HD",
     },
     {
          carName: "Nissan",
          carPrice: 17000,
          carCode: "NS",
     },
     {
          carName: "Tesla",
          carPrice: 17000,
          carCode: "TSL",
     },
];
function selectElement(selector){
     return document.querySelector(selector);
}
function clearResults(){
     selectElement('.search-results').innerHTML = '';
}
function getResults(){
     const search = selectElement('.searchBar').value;
     clearResults();
     if(search.length > 0){
          for(let i = 0;i < database.length;i++){
               if(database[i].carName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || database[i].carCode.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                    selectElement('.search-results').innerHTML += `
                         <div class="search-results-item">
                              <span class="search-item">${database[i].carName}</span>
                              <span class="search-item">${database[i].carPrice}</span>
                              <span class="search-item">${database[i].carCode}</span>
                         </div>
                    `;
               }
          }
     }
}
selectElement('.searchBar').addEventListener("keyup",getResults);