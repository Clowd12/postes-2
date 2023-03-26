const form = document.querySelector('form');

const storageKey = 'form_data';

function storeData(nama, email, jenisKelamin, keluhan, layanan, syaratKetentuan) {
    const data = JSON.parse(sessionStorage.getItem(storageKey)) || [];

    data.push({
        nama,
        email,
        jenisKelamin,
        keluhan,
        layanan,
        syaratKetentuan,
    });

    sessionStorage.setItem(storageKey, JSON.stringify(data));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nama = form.nama.value;
    const email = form.email.value;
    const jenisKelamin = form.querySelector('input[name="jenis-kelamin"]:checked').value;
    const keluhan = form.keluhan.value;
    const layanan = Array.from(form.querySelectorAll('input[name="syarat-ketentuan"]:checked')).value;
    const syaratKetentuan = form.syarat_ketentuan;

    storeData(nama, email, jenisKelamin, keluhan, layanan, lampiran, syaratKetentuan);


    alert('Data formulir berhasil disimpan!');
    window.location.href = "input.html";
    form.reset();
});
