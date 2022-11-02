const warnaAcak = document.createElement('button');
const namaTombol = document.createTextNode('Ubah Warna');
warnaAcak.appendChild(namaTombol);
warnaAcak.setAttribute('type', 'button');
const tombolKirim = document.getElementsByClassName('hubungi-kirim');
tombolKirim.setAttribute('id', 'mbolKirim');
// const tombol = document.getElementById('tombolKirim');
// tombol.after(warnaAcak);

// const ubahBackground = document.getElementsByTagName('main')[0];
// warnaAcak.addEventListener('click', function(){
//     const r = Math.round(Math.random() * 255 + 1);
//     const g = Math.round(Math.random() * 255 + 1);
//     const b = Math.round(Math.random() * 255 + 1);
//     ubahBackground.style.background = 'rgb('+ r +', '+ g +', '+ b +')';
// });

