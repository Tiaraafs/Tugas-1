// Kelas induk
class Karyawan {
    constructor(nama, gaji) {
        this.nama = nama;
        this.gaji = gaji;
    }

    // Method untuk menghitung bonus (akan dioverride di subclass)
    hitungBonus() {
        return 0;
    }
}

// Kelas turunan untuk Karyawan Tetap
class KaryawanTetap extends Karyawan {
    hitungBonus() {
        return this.gaji * 0.10; // Bonus 10%
    }
}

// Kelas turunan untuk Karyawan Kontrak
class KaryawanKontrak extends Karyawan {
    hitungBonus() {
        return this.gaji * 0.05; // Bonus 5%
    }
}

// Membuat objek dari masing-masing jenis karyawan
const budi = new KaryawanTetap("Budi", 8000000);
const sita = new KaryawanKontrak("Sita", 6000000);

// Menghitung total bonus secara dinamis (polymorphism)
const daftarKaryawan = [budi, sita];
let totalBonus = 0;

daftarKaryawan.forEach(karyawan => {
    console.log(`Bonus ${karyawan.nama}: Rp ${karyawan.hitungBonus().toLocaleString()}`);
    totalBonus += karyawan.hitungBonus();
});

console.log(`\nTotal Bonus Seluruh Karyawan: Rp ${totalBonus.toLocaleString()}`);