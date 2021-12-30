function validateForm(){
    var nama = document.forms["validasiForm"]["nama"].value;
    var nrp = document.forms["validasiForm"]["NRP"].value;
    var email = document.forms["validasiForm"]["email"].value;

    if(nama == ""){
        alert("Harap memasukkan nama Anda");
        return false;
    }

    if(nrp == ""){
        alert("Harap memasukkan nrp Anda");
        return false;
    }

    if(email == ""){
        alert("Harap memasukkan email Anda");
        return false;
    }

    if (document.forms["validasiForm"]["jurusan"].selectedIndex < 1){
        alert("Pilih jurusan Anda");
        return false;
    }

    if (document.forms["validasiForm"]["status"].selectedIndex < 1){
        alert("Pilih status vaksinasi Anda");
        return false;
    }

    alert("Data telah dimasukkan");
}