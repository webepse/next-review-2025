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