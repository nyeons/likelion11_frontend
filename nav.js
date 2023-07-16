const navbarMenu = document.querySelector('.navbar__menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const btn = document.getElementById('btn');
const word = document.getElementById('word');

navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});
btn.addEventListener('click', () => {
    getWord();
});

const getWord = () => {
    axios.get('https://random-word-api.herokuapp.com/word?number=3')
        .then(response => {
            console.log(response);
            console.log(response.data[0]);
            console.log(response.data[1]);
            console.log(response.data[2]);
            word1.innerText=response.data[0];
            word2.innerText=response.data[1];
            word3.innerText=response.data[2];
        })
}

