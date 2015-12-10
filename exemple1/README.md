##### Exemple 1 :

Quand on clique sur l'élément d'une liste, cet élément se sélectionne et
son background color devient bleu clair.    

<br/>

***côté HTML***

On fait une liste avec des `<ul>` et des `<li>` comme d'habitude, mais sans oublier 
d'ajouter un id à son `<ul>` pour pouvoir appeler cet élément dans son script JS.


<br/>

***côté CSS*** 

On crée une classe .selected qui donne les attributs à l'élément sélectionné via javascript. 
Dans ce cas, notre liste `<ul>`.