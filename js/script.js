
// CREATED BY WAHYU 
// HELLO


//ini jika mau pop up dalam emmberikan kata sambutan 

// window.addEventListener('DOMContentLoaded', () => {
//     setTimeout(() => {
//         document.getElementById('selamat_datang').classList.remove('opacity-0');
//     }, 1000);
// });


//ini jika mau memberikan kata sambutan dengan cara di ketik biar agak estetik wkwk

const kata_sambutan = "Hi Wahyu, Welcome To Website";
const kata_tentang = "Ini adalah website latihan pertama";

let sambutan = 0;
let tentang = 0;

function typeMain() {
    if (sambutan < kata_sambutan.length) {
      document.getElementById("sambutan").innerHTML += kata_sambutan.charAt(sambutan);
      sambutan++;
      setTimeout(typeMain, 80); 
    } else {
      setTimeout(typeSub, 800); 
    }
}

function typeSub() {
    if (tentang < kata_tentang.length) {
      document.getElementById("tentang").innerHTML += kata_tentang.charAt(tentang);
      tentang++;
      setTimeout(typeSub, 80);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    typeMain();
});


//ini untuk form ygy

const submitForm = document.getElementById('form-pesan');
submitForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const tanggal_lahir = document.getElementById('tanggal_lahir').value;
    const jenis_kelamin = document.querySelector('input[id="jenis_kelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    const now = new Date();
    const waktu = now.toString().split(' (')[0];

    const output = `
        <br><p>&nbsp;&nbsp;<strong>Current time</strong> : ${waktu}</p><br>
        <p>&nbsp;&nbsp;<strong>Nama</strong> : ${nama}</p>
        <p>&nbsp;&nbsp;<strong>Tanggal Lahir</strong> : ${tanggal_lahir}</p>
        <p>&nbsp;&nbsp;<strong>Jenis Kelamin</strong> : ${jenis_kelamin}</p>
        <p>&nbsp;&nbsp;<strong>Pesan</strong> : ${pesan}</p>
    `;

    document.getElementById('pesan_masuk').innerHTML = output;
});