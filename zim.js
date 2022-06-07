let filteredProducts = [...products];
const productsContainer = document.querySelector('.products-container');
const inputForm = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const companies = document.querySelector('.companies');
const displayProducts = () => {
     if(filteredProducts.length < 1){
          productsContainer.innerHTML = '<h6>sorry, no products matched your search</h6>';
          return;
     }
     productsContainer.innerHTML = filteredProducts.map((product) => {
          const {id,title,image,price} = product;
          return `
               <article class="product" data-id="${id}">
                    <img src="${image}" class="image product-image" alt=""/>
                    <footer>
                         <h5 class="product-name">${title}</h5>
                         <span class="product-price">${price}</span>
                    </footer>
               </article>
          `;
     }).join('');
};
displayProducts();
const displayButtons = () => {
     const buttons = ['all',...new Set(products.map((product) => product.company))];
     companies.innerHTML = buttons.map((company) => {
          return `<button class='company-button' data-id="${company}">${company}</button>`;
     }).join('');
};
displayButtons();
inputForm.addEventListener('keyup',() => {
     const inputValue = searchInput.value;
     filteredProducts = products.filter((product) => {
          return product.title.toLowerCase().includes(inputValue);
     });
     displayProducts();
});
companies.addEventListener('click',(event) => {
     const element = event.target;
     if(element.classList.contains('company-button')){
          if(element.dataset.id === 'all'){
               filteredProducts = [...products];
          }else{
               filteredProducts = products.filter((product) => {
                    return product.company === element.dataset.id;
               });
          }
          searchInput.value = "";
          displayProducts();
     }
});