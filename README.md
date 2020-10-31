# KataPotterNg

## Potter
Si vous voulez essayer ce Kata pour vous-même ou lors de votre réunion de dojo, lisez la description du problème et voyez si le Kata vous plaît. Le reste est un commentaire et des indices utiles si vous ne parvenez pas à le résoudre. Je recommanderais d'essayer le Kata par vous-même avant d'en lire trop.

## Description du problème
Il était une fois une série de 5 livres sur un héros très anglais appelé Harry. (Au moins lorsque ce Kata a été inventé, il n'y en avait que 5. Depuis, ils se sont multipliés) Les enfants du monde entier pensaient qu'il était fantastique, et, bien sûr, l'éditeur aussi. Ainsi, dans un geste d'immense générosité envers l'humanité (et pour augmenter les ventes), ils ont mis en place le modèle de tarification suivant pour tirer parti des pouvoirs magiques de Harry.

Un exemplaire de l'un des cinq livres coûte 8 EUR. Si, cependant, vous achetez deux livres différents de la série, vous bénéficiez d'une réduction de 5% sur ces deux livres. Si vous achetez 3 livres différents, vous bénéficiez d'une réduction de 10%. Avec 4 livres différents, vous bénéficiez d'une réduction de 20%. Si vous optez pour le porc entier et achetez les 5, vous bénéficiez d'une réduction énorme de 25%.

Notez que si vous achetez, par exemple, quatre livres, dont 3 sont des titres différents, vous bénéficiez d'une réduction de 10% sur les 3 qui font partie d'un ensemble, mais le quatrième livre coûte toujours 8 EUR.

La folie des Potter envahit le pays et les parents d'adolescents du monde entier font la queue avec des paniers remplis de livres de Potter. Votre mission est d'écrire un morceau de code pour calculer le prix de tout panier d'achat imaginable, en offrant une remise aussi importante que possible.

Par exemple, combien coûte ce panier de livres ?

- 2 exemplaires du premier livre
- 2 exemplaires du deuxième livre
- 2 exemplaires du troisième livre
- 1 exemplaire du quatrième livre
- 1 exemplaire du cinquième livre

réponse :
```
  (4 * 8) - 20% [first book, second book, third book, fourth book]
+ (4 * 8) - 20% [first book, second book, third book, fifth book]
= 25.6 * 2
= 51.20
```

## Source

https://codingdojo.org/kata/Potter/
