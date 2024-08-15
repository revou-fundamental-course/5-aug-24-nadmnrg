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
        advice = 'Anda berada di bawah berat badan ideal. Disarankan untuk meningkatkan asupan kalori dan nutrisi.';
        second = 'Disarankan untuk meningkatkan asupan kalori dengan mengonsumsi makanan bergizi seimbang dan berkonsultasi dengan ahli gizi.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Berat Badan Normal';
        advice = 'Berat badan Anda berada dalam kisaran ideal. Pertahankan pola makan dan gaya hidup sehat.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Kelebihan Berat Badan';
        advice = 'Anda memiliki berat badan berlebih. Pertimbangkan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik.';
    } else {
        category = 'Kegemukan (Obesitas)';
        advice = 'Anda berada dalam kategori obesitas. Disarankan untuk berkonsultasi dengan ahli gizi untuk penanganan lebih lanjut.';
        second = 'Disarankan untuk segera menghubungi dokter atau ahli gizi untuk program penurunan berat badan yang aman dan efektif.';
    }

    // Tampilkan hasil di elemen HTML //
    document.querySelector('.bmi-value').textContent = `BMI Anda adalah ${bmiValue}`;
    document.querySelector('.bmi-category').textContent = `Kategori: ${category}`;
    document.querySelector('.hasilnya').textContent = `Saran: ${advice}`;
    if (second) {
        document.querySelector('.hasilnya').textContent += ` ${second}`;
    }
}

document.querySelector('form').addEventListener('reset', function () {
    document.querySelector('.bmi-value').textContent = '';
    document.querySelector('.bmi-category').textContent = 'Hasil perhitungan BMI akan muncul setelah Anda menghitung.';
    document.querySelector('.hasilnya').textContent = '';
    document.getElementById('downloadResult').style.display = 'none'; // Menyembunyikan tombol download
});
