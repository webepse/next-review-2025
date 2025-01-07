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

```export default async function ReviewPage({params}) {
    const { slug } = await params;
    return (
        <>
            <h1>{slug}</h1>
        </>
    )
}```

# GenerateStaticParams

__generateStaticParams__ dans Next.js permet de générer des chemins dynamiques pour les pages lors de la construction, optimsant la génération staitque (SSG). Cela améliore les performances, le SEO, et permet la mise en cache des pages via CDN, tout en réduisant la charge serveur. Utile pour les routes dynamqieus, où les pages peuvent être pré-rendures statique et servies immédiatement. 



