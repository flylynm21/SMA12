var materiSaatIni = 1; // Materi awal yang ditampilkan

function tampilkanMateriSebelumnya() {

    if (materiSaatIni > 1) {
        gantiTampilanMateri(--materiSaatIni);
    }
}

function tampilkanMateriSelanjutnya() {
    if (materiSaatIni < 3) {
        gantiTampilanMateri(++materiSaatIni);
    }
}

function gantiTampilanMateri(nomorMateri) {
// Menonaktifkan semua materi
    var semuaMateri = document.querySelectorAll('.materi');
        
    for (var i = 0; i < semuaMateri.length; i++) {
        semuaMateri[i].classList.remove('active');
    }

    // Mengaktifkan materi yang dipilih
    var materiYangDipilih = document.getElementById('materi-' + nomorMateri);
    if (materiYangDipilih) {
        materiYangDipilih.classList.add('active');
    }
}