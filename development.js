const characterList = document.getElementById('characterList');
const searchBar = document.getElementById('searchBar');
let harryPotterCharacters = [];
searchBar.addEventListener('keyup',(event) => {
     const searchString = event.target.value.toLowerCase();
     const filteredCharacters = harryPotterCharacters.filter((character) => {
          return (character.name.toLowerCase().includes(searchString) || character.house.toLowerCase().includes(searchString));
     });
     displayCharacters(filteredCharacters);
});
const loadCharacters = async () => {
     try {
          const response = await fetch('https://hp-api.herokuapp.com/api/characters');
          harryPotterCharacters = await response.json();
          displayCharacters(harryPotterCharacters);
     }catch(error){
          console.log(error);
     }
};
const displayCharacters = (characters) => {
     const htmlString = characters.map((character) => {
          return `
               <li class="character">
                    <h2>${character.name}</h2>
                    <p>House: ${character.house}</p>
                    <img src="${character.image}">
               </li>
          `;
     }).join('');
     characterList.innerHTML = htmlString;
};
loadCharacters();