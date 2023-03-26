
const form = document.querySelector('form');


const storageKey = 'user_data';


function storeData(regusername, regpassword, regemail) {

    const data = JSON.parse(localStorage.getItem(storageKey)) || [];


    data.push({ regusername, regpassword, regemail });

    localStorage.setItem(storageKey, JSON.stringify(data));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nama = form.regusername.value;
    const email = form.regpassword.value;
    const password = form.regemail.value;

    storeData(nama, email, password);

    alert('Registrasi berhasil!');

    form.reset();
});