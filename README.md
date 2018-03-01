# Dia : TD4

TD4 du cours de développement et intégration d'applications distribuées.

L'objectif de ce TD est de manipuler des données comme "dans la vrai vie", en m'inspirant de situations réellement rencontrées.

Un client vous a fourni un fichier contenant un ensemble de données que vous devez intégrer dans votre infrastructure. Le but est d'intégrer ces données puis de régénérer un fichier contenant le nouvel ensemble.

## Installation de node

Voir le TD2 : https://github.com/dreimert/dia-td2

## Protocole

Un client vous a envoyé le fichier `client_data.csv`. Vous avez déjà une infrastructure avec des données. Votre objectif est d'intégrer les données du client dans votre infrastructure puis de lui renvoyer le nouveau fichier.

## Implémentation

Cloner ce dépot :

    git clone https://github.com/dreimert/dia-td4.git

Installation des dépendances :

    npm install

Dans ce TD, on utilise TingoDB qui est une solution embarquée de MongoDB. Ce qui évite la phase pénible de mise en place et de configuration de MongoDB dont ce n'est pas la propos ici.

Intégrer les données dans la base de données.

Générer un nouveau fichier csv.

Vous avez fini ? Essayez de migrer vers MongoDB.

## Test

Analysez les dates de naissances. Sont-elles bonnes ?

Avez-vous des doublons ?

Vos yeux.

## Par où commencer ?

Entrainez-vous à faire des requêtes en utilisant l'exemple de code et la documentation de MongoDB : https://docs.mongodb.com/manual/crud/.

Vous pouvez vous mettre en interpréter pour faire des tests plus simplement :

* Lancer node sans argument.
* Copier / coller les lignes suivantes dedans :

    let Db = require('tingodb')().Db;
    let db = new Db('./db', {});
    let collection = db.collection("users");

* Vous pouvez maintenant manipuler `collection`.

Vous pouvez aussi regarder le fichier `db/users`.

Vous commencez à comprendre la structure ? Il faut maintenant importer les données ! Mais comment ?

* Vous pouvez copier / coller dans le code et reformater les données.
* Lire le fichier et l'analyser avec fs : https://nodejs.org/api/fs.html
* Utiliser une librairie écrite pour lire du csv.

## Ce que je dois retenir

Ne jamais faire confiances aux données brutes envoyé par un utilisateur.

Imposez le format à l'utilisateur ou écrivez des programmes paranoïaques sur les données en entrées.

Maitrisez un langage qui vous permet de manipuler facilement des données / fichiers.

Dans une application distribuée, automatisez le maximum de choses. Mais parfois, ils vaux mieux faire certaines tâches à la main. La frontière entre ce qu'il faut automatiser pour gagner du temps et ce qu'il faut faire à la main est compliquée à trouver. Vous devrez faire confiance à votre expérience et votre instinct.

Rajouter un peu d'analyse et de mathématique : vous avez l'activité d'un spécialiste de l'analyse de données.

## Pour aller plus loin

Lancez deux instances de MongoDB et faite en sorte que la seconde soit un répliqua de la première.
