var $liste = document.getElementById("liste"); // sélectionner d'in élément via son id
var $supprimer = document.getElementById("supprimer");
var $restaurer = document.getElementById("restaurer");



function selectionne (e) {
    // e.target correspond au <li> qui a été cliqué dans le <ul>
    e.target.classList.toggle("selected");
};


function supprimer() {
    
  for (var i = 0; i < $liste.children.length; i++) {
     
      if ($liste.children[i].classList.contains("selected")) {
            $liste.children[i].classList.add("suppression");
        }
    }
}


function restaurer() {
    
   for (var i = 0; i < $liste.children.length; i++) {
        $liste.children[i].classList.remove("suppression");
    }
}


$liste.onclick = selectionne;
$supprimer.onclick = supprimer();
$restaurer.onclick = restaurer();




/*

// ajouter la classe : ?
$element.classList.add("?");

// enlever la classe : ?
$element.classList.remove("?");

// permuter la classe : ?
$element.classList.toggle("?");

// tester la présence de la clase : ?
$element.classList.contains("?");

*/