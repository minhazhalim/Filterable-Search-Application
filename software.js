const dataUserTemplate = document.querySelector('[data-user-template]');
const dataUserCardsContainer = document.querySelector('[data-user-cards-container]');
const dataSearch = document.querySelector('[data-search]');
let users = [];
dataSearch.addEventListener('input',event => {
     const value = event.target.value.toLowerCase();
     users.forEach(user => {
          const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value);
          user.element.classList.toggle('hide',!isVisible);
     });
});
fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
     users = data.map(user => {
          const card = dataUserTemplate.content.cloneNode(true).children[0];
          const header = card.querySelector('[data-header]');
          const body = card.querySelector('[data-body]');
          header.textContent = user.name;
          body.textContent = user.email;
          dataUserCardsContainer.append(card);
          return {
               name: user.name,
               email: user.email,
               element: card,
          };
     });
});