const users = document.querySelector('.user-list');
const userName = document.querySelector("#user"); 
const userArr = [];
const getUserData = async () => {
    try {
        const res = await fetch('https://api.github.com/users');
        const data = await res.json();
        if(data) users.innerHTML = "";
        data.map((user) => {
            const li = document.createElement('li');
            userArr.push(li);
            li.insertAdjacentHTML('afterbegin', `
                <div class="user-data">
                    <img src=${user.avatar_url} alt=${user.avatar_url} srcset="">
                    <div>
                        <p>${user.login}</p>
                        <a href=${user.html_url} target="_blank">${user.html_url}</a>
                    </div>
                </div>
            `);
            users.appendChild(li);
        });
    }catch(error){
        console.log(error);
    }
}
getUserData();
userName.addEventListener('input',(event) => {
    const val = event.target.value;
    userArr.filter((currentElement) => {
        currentElement.innerText.toLowerCase().includes(val.toLowerCase()) ?
        currentElement.classList.remove('hide') :
        currentElement.classList.add('hide')
    });
});