# installation
```npm install next react react-dom```

npx next --help pour atteindre automatiquement ./node_modules/next/

l'option help permet de voir les commandes, ci on va utiliser la commande de développement

```npx next dev``` pour lancer le serveur sur localhost:3000

Pour afficher du markdown dans VsCode : ```CTRL+SHIFT+V```

## Exercice 1:

créer une page about/ (AboutPage())
créer une nouvelle page reviews/spider-man/ (SpiderManPage())

## Client Side / Server Side 

```
'use client'

import { useEffect } from "react"

export default function HomePage() {
    useEffect(()=>{
        window.alert("Bienvenue sur mon site")
    },[])
    console.log('HomePage [Rending]')
    return (
        <>
            <h1>My Games</h1>
            <p>
                Only the best games, reviewed for you.
            </p>
        </>
    )
}
```


## installer Tailwindcss

fermer le serveur 
```npm install --save-dev tailwindcss postcss autoprefixer```

activer la création des fichiers de config avec l'option --postcss
```npx tailwindcss init --postcss```

## installer HeadlessUI
```npm install @headlessui/react@latest```

## installer heroicons
```npm install @heroicons/react```

## Mardown
installation du module pour faire un rendu sur le site en Markdown

```npm install marked```

#### Rappel: 
Pour afficher une prévisualisation de Markdown dans VSCode, on peut utiliser les commandes suivantes: 
```CTRL + MAJ + P``` et inscrire ```markdown``` pour choisir l'option ```Open preview to the side```

ou 
```CTRL + MAJ + V```

# installer Typography de tailwindcss pour utiliser Prose

```npm i --save-dev @tailwindcss/typography```

# pour ajouter des informations à l'intérieur d'un fichier markdown (md)

```npm i --save gray-matter```

# Dynamic Route

la méthod de récupéation des paramètres dynamiques (params) dans les routes asynchrone a changé. Vous ne pouvez plus accéder directement à params dans une fonction asyncrhone, comme vous l'avez fait avec params: {slug}. Vous devez attendre que params soit récupéré avant de l'utiliser.

avant : 

```
export default function ReviewPage({params: {slug}}) {
    return (
        <>
            <h1>{slug}</h1>
        </>
    )
}
```

maintenant: 

```
export default async function ReviewPage({params}) {
    const { slug } = await params;
    return (
        <>
            <h1>{slug}</h1>
        </>
    )
}
```

# GenerateStaticParams

__generateStaticParams__ dans Next.js permet de générer des chemins dynamiques pour les pages lors de la construction, optimsant la génération staitque (SSG). Cela améliore les performances, le SEO, et permet la mise en cache des pages via CDN, tout en réduisant la charge serveur. Utile pour les routes dynamqieus, où les pages peuvent être pré-rendures statique et servies immédiatement. 


# Strapi

https://strapi.io/

Installer le next-review-cms qui est un strapi 

```npx create-strapi-app@latest```

## installation

```
PS F:\React\2025> npx create-strapi-app@latest
Need to install the following packages:
create-strapi-app@5.1.1
Ok to proceed? (y) y
 Strapi   v5.1.1 🚀 Let's create your new project
? What is the name of your project? next-review-cms25
? What is the name of your project? next-review-cms25
We can't find any auth credentials in your Strapi config.
Create a free account on Strapi Cloud and benefit from:
- ✦ Blazing-fast ✦ deployment for your projects
- ✦ Exclusive ✦ access to resources to make your project successful
- An ✦ Awesome ✦ community and full enjoyment of Strapi's ecosystem
Start your 14-day free trial now!
? Please log in or sign up. (Use arrow keys)
? Please log in or sign up. Login/Sign up
[INFO] 🔌 Connecting to the Strapi Cloud API...
 If a browser tab does not open automatically, please follow the next steps:
 1. Open this url in your device: https://auth.cloud.strapi.io/activate?user_code=QVFM-SWWK
 2. Enter the following code: QVFM-SWWK and confirm to login.
✔ Authentication successful!
 You are now logged into Strapi Cloud.
 To access your dashboard, please copy and paste the following URL into your web browser:
 https://cloud.strapi.io/projects
? Do you want to use the default database (sqlite) ? (Y/n) Y
? Do you want to use the default database (sqlite) ? Yes
? Start with an example structure & data? (y/N) N
? Start with an example structure & data? No
? Start with Typescript? (Y/n) n
? Start with Typescript? No
? Install dependencies with npm? (Y/n) Y
? Install dependencies with npm? Yes
? Initialize a git repository? (Y/n) Y
? Initialize a git repository? Yes
```

```
npm run develop
```

ou 

```
npm run start
```

http://localhost:1337/admin/

:: -> all IPV6 adresses mais peut être en ipv4 http://0.0.0.0:1337 

mais on peut utiliser localhost sans problème. 

### login de connexion

```
admin@example.com
Admin123

```
```npm run develop``` si on veut créer des éléments comme des catégories d'information
``` 

=> Content-Type-Builder-Create 

=> new collection type : Review

sur la collectiontype tu peux faire Add another field et choisir le type de champs que tu veux. 

slug : UID
title : Text
image : Media
body : Rich text
subtitle : Text
=> save

```
pour l'api 
```
Settings - Users & permissions Plugin - Roles - Public - Review - Find et findOne 
```
adresse du json 
http://localhost:1337/api/reviews


## Pour tester notre api
créer un fichier scripts et un fichier mjs

Un fichier avec l'extension .mjs est généralement un fichier JavaScript Module (Module JS). L'extension .mjs est souvent utilisée pour indiquer que le fichier contient un module JavaScript.

Les modules JavaScript sont une fonctionnalité introduite dans ECMAScript 6 (ES6) pour organiser et réutiliser le code JavaScript de manière modulaire. Ils permettent de diviser le code en morceaux plus petits et autonomes, facilitant ainsi la gestion et la maintenance du code.

La différence principale entre un fichier .mjs et un fichier .js réside dans la manière dont ils traitent les modules. Les fichiers .mjs sont automatiquement traités comme des modules, tandis que les fichiers .js peuvent être des scripts classiques ou des modules en fonction de l'utilisation de l'instruction import ou export.

## voir le résultat
fermer le serveur et faire ```node scripts/strapi-request.mjs```

La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON. Optionnellement, elle peut remplacer des valeurs ou spécifier les propriétés à inclure si un tableau de propriétés a été fourni.

### Paramètre :

valeur - la valeur à convertir 

remplacement - modifie le processus de transformation (pour filter, selectionner des propriétés de l'objet)

espace - pour insérer des blancs dans la chaine JSON pour la lisibilité 
si l'argument est un nombre, il indiquera le nombre d'espaces à utiliser pour l'indentation (max 10)

## QS pour les requêtes complexe avec Strapi
https://docs.strapi.io/dev-docs/api/rest/populate-select

https://github.com/ljharb/qs

```npm install qs``` - pour gérer les requêtes complexe avec Strapi

## Mise en place avec NextJs

redemarrer le serveur ```npm run dev```

on va modifier notre code pour lire l'api

```
 return data.map((items) => ({
        slug: items.slug,
        title: items.title,
    }));
```
modification de strapi-request pour tester 

```node scripts/strapi-request.mjs```

puis redémarrer le serveur

Error: Page "/reviews/[slug]/page" is missing exported function "generateStaticParams()", which is required with "output: export" config.
To avoid that error, please just disable the export option in next.config.js

module.exports = {
  // output: 'export',
};

You can then re-enable it at the end of this section, when you get to the Static Build with CMS Data lecture.

# ESLint

```npm install --save-dev eslint eslint-config-next```

ESLint est, comme son nom l’indique, un linter, c’est-à-dire un outil qui analyse statiquement du code et vérifie que celui-ci respecte un certain nombre de règles, celles-ci étant bien évidemment configurables de manière (très) fine.

### L’intérêt est multiple :

vous êtes assuré·e de la constance du coding style, qu’il s’agisse de bonnes pratiques ou de considérations plus esthétiques : autant de points plus ou moins triviaux dont vous n’aurez plus à vous soucier directement en cas d’erreur de syntaxe dans votre code, l’analyse statique de ce dernier échouera, et l’erreur en question vous sera remontée : c’est un garde-fou supplémentaire

```npm run lint```

pour tester et voir qu'il y a un problème avec les images

## installer l'extension eslint dans vscode 

l'optimisation d'image ne fonctionne qu'avec un serveur node donc dans next.config.js notre configuration pour une statique export doit être retirée. Ensuite il faut indique le path que nous autorisons 

priority pour indiquer au navigateur de charger dès que possible. (lazy loading = paresseux)



