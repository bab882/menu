function myFunction(){
    let x = document.getElementById('myTopnav');
    if(x.className === 'topnav'){
        x.className += " responsive"; // un espace pour éviter que la classe en css soit fausse en graphisme
    }
    else {
        x.className = 'topnav';
    }
}