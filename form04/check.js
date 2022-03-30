function isTextNull(){

    var s1 = f.hovaten.value;
    var s2=f.ngay.value;
    var s3= f.thang.value;
    var s4 = f.nam.value;
    var s5 = f.nghe.value;

    




    if(s1 == '' || s2 == '' || s3 == '' || s4 == '' || s5 == '')
    
 
    {
        alert('Vui long nhap du thong tin!');
        return false;
    }



    return true;
}
