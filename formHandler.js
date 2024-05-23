function formHandler(event) {
    event.preventDefault();
    
    document.getElementById('text').style.display = 'none';
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var classes = document.getElementById('classes');
    var lang = document.getElementsByName('lang');
    var gender = document.getElementsByName('gender');
    var bio = document.getElementById('bio');

    var genderRes = document.getElementById('genderResult').innerHTML = '<b>Gender: </b>';
    for(var i = 0; i < gender.length; i++){
        if(gender[i].checked === true){
            genderRes += `<span>${gender[i].value}</span>`;
        }
    }
    
    var langRes = document.getElementById('langResult').innerHTML = "<b>Languages: </b>";
    for(var i = 0; i < lang.length; i++){
        if(lang[i].checked === true){
            langRes += ` <span> &nbsp; ${lang[i].value} </span> `;
        }  
    }

    if(name.value != '') {
        document.getElementById('nameResult').innerHTML = `<b>Name: </b> <span>${name.value}</span>`;
    }else {
        document.getElementById('nameResult').innerHTML = `<b>Name: </b> <span> Empty</span>`;
    }

    if(email.value != '') {
        document.getElementById('emailResult').innerHTML = `<b>Email: </b> <span>${email.value}</span>`;
    }else {
        document.getElementById('emailResult').innerHTML = `<b>Email: </b> <span> Empty</span>`;
    }

    if(password.value != '') {
        document.getElementById('passwordResult').innerHTML = `<b>Paswword: </b><span>${password.value}</span>`;
    }else {
        document.getElementById('passwordResult').innerHTML = `<b>Password: </b> <span> Empty</span>`;
    }

    if(classes.value != '') {
        document.getElementById('classResult').innerHTML = `<b>Class: </b><span>${classes.value}</span>`;
    }else {
        document.getElementById('classResult').innerHTML = `<b>Class: </b> <span> Empty</span>`;
    }

    if(bio.value != '') {
        document.getElementById('bioResult').innerHTML = `<b>Bio: </b><span>${bio.value}</span>`;
    }else {
        document.getElementById('bioResult').innerHTML = `<b>Bio: </b> <span> Empty</span>`;
    }
    for(var i = 0; i < gender.length; i++){
        if(gender[i].checked != false) {
            document.getElementById('genderResult').innerHTML = genderRes;
            break;
        }else {
            document.getElementById('genderResult').innerHTML = `<b>Gender: </b> <span> Empty</span>`;
        }
    }
    
    for(var i = 0; i < lang.length; i++){
        if(lang[i].checked != false) {
            document.getElementById('langResult').innerHTML = langRes;
            break;
        }else {
            document.getElementById('langResult').innerHTML = `<b>Language: </b> <span> Empty</span>`;
        } 
    }               
}