# BIWI


## Pré-requis

### Installer Node.js (choisir la version la plus récente)
https://nodejs.org/en/download/


Vérifier que l'installation s'est bien déroulé en tapant dans l'invite de commande (cmd):

`node -v`

Si l'installation s'est bien passée, vous aurez : la version qui sera affichée

Pour voir la version aussi de npm, tapez: 

`npm -v`

Assurez vous que les versions de node et npm doivent être >= v8. 9. 4 (pour node) et v5. 6. 0 (pour npm)

Si ce n'est pas le cas par exemple pour npm, mettez le à jour avec:

`npm -i -g npm@latest`


## Utulisation
Télécharger le .zip depuis GitHub
Démarrer votre environement de développement (IDE)

(Je vous conseille d'aller dans Help > Marketplace > Rechercher: Angular > Installer et redémarrer l'IDE pour qu'il puisse gérer le type de projet Angular si ce n'est pas déja fait)

Importer le projet (File > Import > General > Projects From Folder or Archive )

Windows:

Lancer l'invite de commande en mode Admin (Recherche: cmd > clic droit > Run as admin),  placez vous dans le répertoire du projet ( C:\.....\biwy> )

### Installer Angular

`npm install -g @angular/cli@latest`

Modules complémentaires

`npm update` pour recupérer les modules en une fois

ou

`npm install -g express --save`

`npm install -g typescript --save`

`npm install @angular/material @angular/cdk @angular/animations --save`

`npm install --save angular/material2-builds angular/cdk-builds angular/animations-builds`

`npm install material-design-icons`

`ng add @angular/material`

`npm install angular-web-storage --save`

Vérifier les versions

`ng -v`

Si c'est ok vous verrez qu'il a importer dans votre projet le module: node_modules (hyper important)
Il n'était pas dans le .zip car trop volumineux mais il est indispensable.


( !!!!!! Si après actualisation du projet il n'y est pas, tapez: `npm install` simplement il installera le tout avec les dépendances puis reprendre à l'étape Installer Angular)


### Development server

Lancer un server dans le répertoire du projet:

`npm start` 

ou 

`ng serve`

Ouvrir l'application avec ce lien depuis un navigateur:

`http://localhost:4200/`

## Déploiement

Pour créer un livrable de l'application:

`ng build --env=prod` 

Un répertoire dist qui veut dire distribustion sera créé. Il contient l'application à héberger sur un serveur.
