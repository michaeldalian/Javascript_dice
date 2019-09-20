function Main() {
  //Gestion évenements - bouton
  let btn = document.getElementById("Roll");
  btn.addEventListener("click", clicDice);

  function clicDice() {
    _picName = `pictures/${rollDice(1, 6)}.jpg`;
    console.log(_picName);
    loadPic(_picName);
  }

  function loadPic(name) {
    let ImgDice = new Image();
    ImgDice.className = "dice";

    ImgDice.src = name; // Étape 2 : on spécifie l'adresse de notre image

    const container = document.getElementById("uncontainer");
    // Vide mon container html
    container.innerHTML = "";
    container.appendChild(ImgDice); // L'image est ajoutée au DOM
  }

  function rollDice(min, max) {
    let nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
  }
}

Main();
