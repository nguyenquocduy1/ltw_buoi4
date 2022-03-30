function isTextNull(){


    var s1 = f.hovaten.value;
    var s2 = f.diachi.value;
    var s3 = f.Email.value;
    var s4 = f.dienthoai.value;


    var phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
    var mailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(s1 == '' || s2 == '' || s3 == '' || s4 == '')
    {
        alert('Vui long nhap du thong tin!');
        return false;
    }

    if(!mailRegExp.test(s3))
    {
        alert('Email incorect');
        return false;
    }

    if(!phoneRegExp.test(s4))
    {
        alert('Phone number incorect');
        return false;
    }


    return true;

}
