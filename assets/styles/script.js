const navItems = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

function changeActiveNav() {
  let sectionNow = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
      sectionNow = section.getAttribute("id");
    }
  });

  // Tambah atau hapus class "nActive" dari navbar sesuai section yang aktif
  navItems.forEach((item) => {
    item.classList.remove("nActive");
    if (item.getAttribute("href").substring(1) === sectionNow) {
      item.classList.add("nActive");
    }
  });
}

// Jalankan fungsi saat scroll terjadi
window.addEventListener("scroll", changeActiveNav);

const kategoriItems = document.querySelectorAll(".kategoriTp li");
const diamondList = document.getElementById("diamond");
const wedepeList = document.getElementById("wedepe");
const twilightList = document.getElementById("twilight");

// Menyembunyikan semua ul
function sembunyikanUl() {
  diamondList.style.display = "none";
  wedepeList.style.display = "none";
  twilightList.style.display = "none";
}

function hapusClassAktif() {
  kategoriItems.forEach((item) => item.classList.remove("active"));
}

function tampilkanKategoriTp(category) {
  sembunyikanUl();

  // Tampilkan sesuai dengan kategori yang dipilih
  if (category === "Diamond") {
    diamondList.style.display = "flex";
  } else if (category === "Weekly Diamond Pass") {
    wedepeList.style.display = "flex";
  } else if (category === "Twilight Pass") {
    twilightList.style.display = "flex";
  }
}

// Set default tampilan
tampilkanKategoriTp("Diamond");
document.querySelector(".kategoriTp li:nth-child(1)").classList.add("active");

kategoriItems.forEach((item) => {
  item.addEventListener("click", function () {
    const selectedCategory = this.textContent;
    hapusClassAktif();
    this.classList.add("active");
    tampilkanKategoriTp(selectedCategory);
  });
});

const pembelian = document.querySelector(".pembelian");
const dm = document.querySelectorAll(".dm");
const wdp = document.querySelectorAll(".wdp");
const tp = document.querySelectorAll(".tp");
const eWalet = document.querySelectorAll(".eWalet");
const jumDiamond = document.querySelector(".jumDiamond");
const harga = document.querySelector(".harga");
const metodeBayar = document.querySelector(".metodeBayar");
const inputUser = document.querySelector(".pembelian .userId .user");
const inputZone = document.querySelector(".pembelian .userId .zone");
const inputEMail = document.querySelector(".pembelian .detail .email");

// tempat simpan hasil apa yang di klik
let jItem = "";
let totalHarga = "";
let pembayaran = "";

pembelian.addEventListener("click", function (e) {
  //tempat hasil inputan dari userID, ZoneID, dan email
  let user = inputUser.value;
  let zone = inputZone.value;
  let email = inputEMail.value;

  // Jika yang di-klik adalah elemen dengan class 'dm', 'wdp', atau 'tp'
  if (e.target.classList.contains("dm") || e.target.classList.contains("wdp") || e.target.classList.contains("tp")) {
    jItem = e.target.outerText;
    totalHarga = e.target.value;

    jumDiamond.innerHTML = "Item yang Dipilih: " + jItem;
    harga.innerHTML = "Total Harga: Rp. " + totalHarga;

    // Hapus kelas aktif dari semua item dan tambahkan ke yang dipilih
    document.querySelectorAll(".dm, .wdp, .tp").forEach(function (item) {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  if (e.target.classList.contains("eWalet")) {
    pembayaran = e.target.outerText;

    eWalet.forEach(function (eWalet) {
      eWalet.classList.remove("active");
    });
    e.target.classList.add("active");

    metodeBayar.innerHTML = "Metode Pembayaran: " + pembayaran;
  }

  // Ketika tombol 'bayarSekarang' ditekan, konfirmasi detail pesanan
  if (e.target.classList.contains("bayarSekarang")) {
    alert(
      "Silahkan Cek Kembali Apakah Pesanan Anda Sudah Benar:\n\nUserId: " +
        user +
        " (" +
        zone +
        ")\nItem: " +
        jItem +
        "\nTotal Harga: Rp. " +
        totalHarga +
        "\nMetode Pembayaran: " +
        pembayaran +
        "\n\nJika Pesanan Anda Sudah Benar, Silahkan Klik OK"
    );
    alert("Pesanan Anda Sedang Diproses!\n\nHasil Transaksi Akan Dikirimkan Ke Alamat E-mail Anda: " + email);

    // Reload halaman setelah transaksi selesai
    window.location.reload();
  }
});

// media iklan
const images = ["assets/image/iklan.gif", "assets/image/iklan2.png", "assets/image/iklan3.png", "assets/image/iklan4.png"];

let iImageAwal = 0;
const slideImage = document.getElementById("slideImage");

function changeImage() {
  iImageAwal = (iImageAwal + 1) % images.length; // Mengulang gambar dari awal jika sudah mencapai akhir
  slideImage.src = images[iImageAwal];
}

setInterval(changeImage, 4000);
