const dataContainer = document.querySelector('#data tbody');
const storedData = JSON.parse(sessionStorage.getItem('form_data'));

if (storedData) {
    storedData.forEach((data) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.nama}</td>
            <td>${data.email}</td>
            <td>${data.jenisKelamin}</td>
            <td>${data.keluhan}</td>
            <td>${data.layanan}</td>
            <td>${data.syaratKetentuan ? 'Ya' : 'Tidak'}</td>
        `;
        dataContainer.appendChild(row);
    });
} else {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="6">Tidak ada data yang tersimpan</td>';
    dataContainer.appendChild(row);
}
