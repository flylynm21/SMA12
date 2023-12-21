function tampilkanHalaman(namaHalaman) {
    fetch(namaHalaman)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;

            // var namaHalamanTanpaEkstensi = namaHalaman.replace(/\.[^/.]+$/, '');

            // namaHalamanTanpaEkstensi = namaHalamanTanpaEkstensi.charAt(0).toUpperCase() + namaHalamanTanpaEkstensi.slice(1);

            // if (namaHalamanTanpaEkstensi.toLowerCase() === 'tp') {
            //     namaHalamanTanpaEkstensi = namaHalamanTanpaEkstensi.toUpperCase();
            // }

            if (namaHalaman === "materi.html"){
                materiSaatIni = 1;
                document.getElementById('group-nav-arrow').classList.add('active');
            } else {
                document.getElementById('group-nav-arrow').classList.remove('active');
            }
            // if (namaHalamanTanpaEkstensi == "Materi"){
            //     document.getElementById('group-nav-arrow').classList.add('active');
            //     document.getElementById('arrow-left').classList.remove('active');
            // } else {
            //     document.getElementById('group-nav-arrow').classList.remove('active');
            // }

            document.title = namaHalaman; 
        })
        .catch(error => console.error('Gagal memuat konten:', error));
}

function sisipkanKontenAwal() {
    tampilkanHalaman('beranda.html');
}
window.onload = sisipkanKontenAwal;