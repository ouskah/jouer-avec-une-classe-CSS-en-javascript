$liste = document.getElementById("liste");

function selectionne (e) {
    // e.target correspond au <li> qui a été cliqué dans le <ul>
    e.target.classList.toggle("selected");
};

$liste.onclick = selectionne;



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