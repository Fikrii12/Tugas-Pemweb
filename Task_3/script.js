//Menambahkan atribut class di masing masing judul section
const tentang = document.getElementById('tentang');
tentang.setAttribute('class', 'tentang-judul');
const pengalaman = document.getElementById('pengalaman');
pengalaman.setAttribute('class', 'pengalaman-judul');
const hubungi = document.getElementById('hubungi');
hubungi.setAttribute('class', 'hubungi-judul');

//menambahkan paragraf pada section tentang saya
const paragraf = document.createElement('p');
const teskParagraf = document.createTextNode("Status saya sekarang adalah seorang mahasiswa di salah satu perguruan tinggi di indonesia yakni Institut Teknologi Sumatra program studi Teknik Informatika. Bidang yang saya sukai dan yang saya kuasai sekarang adalah programing");
paragraf.appendChild(teskParagraf);
tentang.after(paragraf);
paragraf.setAttribute('class', 'tentang-paragraf');


//membuat tombol untuk merubah warna
//letak tombol dibagian section hubungi saya
const warnaAcak = document.createElement('button');
const namaTombol = document.createTextNode('Ubah Warna');
warnaAcak.appendChild(namaTombol);
warnaAcak.setAttribute('type', 'button');
const tombol = document.getElementById('tombolKirim');
tombol.after(warnaAcak);

const ubahBackground = document.getElementsByTagName('main')[0];
warnaAcak.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    ubahBackground.style.background = 'rgb('+ r +', '+ g +', '+ b +')';
});

