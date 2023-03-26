
const form = document.querySelector('form');


const storageKey = 'user_data';


function login(regusername, regpassword) {

    const data = JSON.parse(localStorage.getItem(storageKey));


    const user = data.find((user) => user.nama === regusername && user.password === regpassword);


    if (user) {
        alert('Login berhasil!');
        window.location.href = "Halaman Utama.html";

    } else {
        alert('Username atau password salah!');
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();


    const nama = form.regusername;
    const password = form.regpassword;


    login(nama, password);

    form.reset();
});
