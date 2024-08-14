console.log('linked success');

function formValidate() {
    let inputWeight = document.getElementById('input-weight').value;
    let inputHeight = document.getElementById('input-height').value;
    console.log('isi inputan berat badan: ${inputWeight}');
    console.log('isi inputan tinggi badan: ${inputHeight}');

    (inputWeight == '' || inputHeight == '') 
        ? alert('Inputan Berat Badan Kosong!')
        : result(inputHeight, inputWeight);

    console.log('form submitted');
}

function result(inputHeight, inputWeight) {
    let convertCmToM = inputHeight * 100;
    let resultHeight = Math.pow(convertCmToM, 2);
    console.log(inputWeight / resultHeight);
}