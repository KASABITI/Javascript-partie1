
function displayInput(){
  // Selecting the input element and get its value
  var inputName = document.getElementById('nom').value;
  var inputUsername = document.getElementById('prenom').value;
  var inputCity = document.getElementById('ville').value;
  if (isNaN(inputName) && isNaN(inputUsername) && isNaN(inputCity)){

  alert( 'Votre Nom est : ' + inputName + '\n' + 'Votre prénom est :' + inputUsername + '\n' + 'Votre ville est :' + inputCity);
  } else {
    alert('Veuillez remplir les chaps correctment');
  }
}
