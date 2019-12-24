function cek_tinggi(a,b,c) {
  var a;
  var b;
  var c;

  hasil = "Urutan paling tinggi:";
  a1 = ", Siswa 1";
  b1 = ", Siswa 2";
  c1 = ", Siswa 3";

  if (a>b && a>c) {
    if (b>c) {
      return console.log(hasil, a1, a, b1, b, c1, c);
    }
    else {
      return console.log(hasil, a1, a, c1, c, b1, b);
    }
  }

  if (b>a && b>c) {
    if (a>c) {
      return console.log(hasil, b1, b, a1, a, c1, c);
    }
    else {
      return console.log(hasil, b1, b, c1, c, a1, a);
    }
  }

  if (c>a && c>b) {
    if (a>b) {
      return console.log(hasil, c1, c, a1, a, c1, c);
    }
    else {
      return console.log(hasil, c1, c, b1, b, a1, a);
    }
  }

}

cek_tinggi(160,172,148);
