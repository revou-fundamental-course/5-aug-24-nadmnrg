console.log('linked success');

function formValidate() {
    let inputWeight = parseFloat(document.getElementById('input-weight').value);
    let inputHeight = parseFloat(document.getElementById('input-height').value);
    console.log(`isi inputan berat badan: ${inputWeight}`);
    console.log(`isi inputan tinggi badan: ${inputHeight}`);

    // Validasi input //
    if (isNaN(inputWeight) || isNaN(inputHeight) || inputWeight <= 0 || inputHeight <= 0) {
        alert('Inputan Berat Badan atau Tinggi Badan tidak valid!');
    } else {
        result(inputHeight, inputWeight);
    }

    console.log('form submitted');
}

function result(inputHeight, inputWeight) {
    // Konversi tinggi badan dari cm ke meter //
    let heightInMeters = inputHeight / 100;
    // Hitung BMI //
    let bmi = inputWeight / (heightInMeters * heightInMeters);
    let bmiValue = bmi.toFixed(1);

    // Menentukan kategori BMI //
    let category = '';
    let advice = '';
    let second = '';

    if (bmi < 18.5) {
        category = 'Kekurangan Berat Badan';
        advice = 'Anda berada dalam kategori "Kekurangan Berat Badan"';
        second = 'Disarankan untuk meningkatkan asupan kalori dan nutrisi dengan <br> mengonsumsi makanan bergizi seimbang dan berkonsultasi dengan ahli gizi.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Berat Badan Normal (ideal)';
        advice = 'Anda berada dalam kategori berat badan ideal. Pertahankan pola makan dan gaya hidup sehat.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Kelebihan Berat Badan';
        advice = 'Anda berada dalam kategori berat badan berlebih. <br>Pertimbangkan untuk mengatur asupan kalori Anda dan tingkatkan aktivitas fisik / berolahraga.';
    } else {
        category = 'Kegemukan (Obesitas)';
        advice = 'Anda berada dalam kategori Kegemukan (obesitas).';
        second = 'Disarankan untuk segera berkonsultasi dengan menghubungi dokter atau ahli gizi <br> untuk program penurunan berat badan yang aman dan efektif.';
    }

    // Tampilkan hasil di elemen HTML //
    document.querySelector('.bmi-value').textContent = `BMI Anda adalah ${bmiValue}`;
    document.querySelector('.bmi-category').textContent = `Kategori: ${category}`;
    document.querySelector('.hasilnya').innerHTML = ` ${advice} <br>${second}`;
    document.getElementById('downloadResult').style.display = 'inline'; // Tampilkan tombol download //
}

document.querySelector('form').addEventListener('reset', function() {
    // Reset hasil perhitungan ketika form di-reset //
    document.querySelector('.bmi-value').textContent = '';
    document.querySelector('.bmi-category').textContent = 'Hasil perhitungan BMI akan muncul setelah Anda menghitung.';
    document.querySelector('.hasilnya').innerHTML = 'Jika Anda memiliki kekhawatiran mengenai hasil BMI Anda, konsultasikan dengan ahli gizi untuk mendapatkan panduan yang lebih mendetail dan program diet yang sesuai dengan kondisi tubuh Anda';
    document.getElementById('downloadResult').style.display = 'none'; // Sembunyikan tombol download //
});
