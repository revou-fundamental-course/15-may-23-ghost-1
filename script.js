function hitungLuas() { //untuk membuat fungsi perhitungan luas persegi
    let sisiPersegi = document.getElementById("sisi-luas").value;
    if (sisiPersegi)
    {
    let hasil = parseInt(sisiPersegi) * parseInt(sisiPersegi);
    output_luas.innerHTML = "<p> L = S x S</p>"+
                            "<p> L = " + sisiPersegi + " " + "x" + " " + sisiPersegi + "</p>" +
                            "<p> L = " + hasil; 
    document.getElementById("output_luas").style.display = '' ; //untuk memunculkan hasil perhitungan
    document.getElementById("luas").reset();//untuk memunculkan output
}
    else {
    alert ("Harap isi Sisi Persegi untuk menghitung Luas Persegi ^_^");
}
}

function hitungKeliling() { //untuk membuat fungsi perhitungan keliling persegi
    let sisiPersegiKeliling = document.getElementById("sisi-keliling").value;
    var rumus= 4; 
    if (sisiPersegiKeliling)
    {
    let hasilKeliling = rumus * parseInt(sisiPersegiKeliling);
    output_keliling.innerHTML = "<p> K = 4 x S</p>"+
                            "<p> K = 4 "  + "x" + " " + sisiPersegiKeliling + "</p>" +
                            "<p> K = " + hasilKeliling;
    document.getElementById("output_keliling").style.display = '' ;//untuk memunculkan output
    document.getElementById("keliling").reset(); //untuk mereset kotak input
}
else {
    alert ("Harap isi Sisi Persegi untuk menghitung Keliling Persegi ^_^");
}
}

function resetSisiLuas() { // untuk membuat fungsi reset di tombol reset
    document.getElementById("luas").reset(); //untuk mereset kotak input
    document.getElementById("output_luas").style.display = 'none' ; // untuk menyembunyikan hasil output keliling
} 

function resetSisiKeliling() { // untuk membuat fungsi reset di tombol reset
    document.getElementById("keliling").reset(); //untuk mereset kotak input
    document.getElementById("output_keliling").style.display = 'none' ; // untuk menyembunyikan hasil output keliling
} 