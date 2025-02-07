const kartochki = document.getElementById('kartochki');
const btn = document.getElementById('kechki');
const searchInput = document.querySelector("input");
const sortBy = document.getElementById('sortBy')
const searchButton = document.getElementById('searchButton')

let users = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        users = data;
        kartochkanichiqar(users);
    });

    function kartochkanichiqar(users) {
        kartochki.innerHTML = '';
        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${user.name}</h3>
                <p>📧Email: ${user.email}</p>
                <p>📞Telefon: ${user.phone}</p> <!-- Telefon raqamini qo'shdim -->
            `;
            kartochki.appendChild(card);
        });
    }
    
    
    
    
    


function searchProduct() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card =>{
        const name = card.querySelector('h3').textContent.toLowerCase();
        if(name.includes(searchValue)){
            card.style.display = "";
        } else{
            card.style.display = 'none';
        }
    });
    searchProduct();
  }



searchInput.addEventListener('keyup', searchProduct)
searchButton.addEventListener("click", filter)
sortBy.addEventListener("change", filter);

