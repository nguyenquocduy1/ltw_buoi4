function isTextNull(){

    var username = f.txtUsername.value;
    var password = f.txtPassword.value;

    if(username == '' || password == '')
    {
        alert('Vui long nhap du thong tin!');
        return false;
    }
    return true;
}
