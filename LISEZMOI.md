# Liens courts de l'association

Une seule adresse pour tous les outils de l'association :

- `go.or-edhec.com` → page d'accueil qui liste les outils ;
- `go.or-edhec.com/ndf` → l'app Notes de frais ;
- `go.or-edhec.com/…` → tout outil ajouté plus tard.

Hébergement : GitHub Pages. C'est gratuit, sans serveur, et le HTTPS est automatique.

## Contenu

| Fichier | Rôle |
|---|---|
| `liens.js` | **La liste des liens : le seul fichier à modifier** |
| `index.html`, `404.html` | La page de redirection et d'accueil. Les deux fichiers sont identiques, ne pas les modifier |
| `CNAME` | L'adresse personnalisée (`go.or-edhec.com`) |
| `logo.png`, `apple-touch-icon.png`, `icone-512.png` | Logo et icône d'écran d'accueil |

## Mise en place (une seule fois, environ 15 minutes)

1. **(Conseillé) Crée une organisation GitHub** pour l'association (github.com > + > New organization > plan Free), par exemple `objectif-reussite`. Les liens ne dépendront plus de ton compte personnel, et tu pourras ajouter d'autres membres du bureau.
2. **Crée un dépôt public** nommé `liens` dans cette organisation (ou dans ton compte).
3. Ouvre le dépôt, clique **Add file > Upload files** et fais glisser **tous les fichiers** du dossier, puis **Commit changes**.
4. **Settings > Pages** : Source « Deploy from a branch », branche `main`, dossier `/ (root)`, **Save**.
5. Toujours dans Settings > Pages, saisis `go.or-edhec.com` dans « Custom domain », puis coche **Enforce HTTPS** quand la case devient disponible.
6. Chez le gestionnaire DNS de **or-edhec.com**, ajoute un enregistrement :
   - Type **CNAME**, nom `go`, valeur `objectif-reussite.github.io` (ou `i-f-k.github.io` si le dépôt est sur ton compte).

La propagation DNS prend de quelques minutes à quelques heures.

**Sans accès au DNS**, tout fonctionne quand même à l'adresse GitHub : supprime le fichier `CNAME`, et tes liens deviennent `objectif-reussite.github.io/liens/ndf`. Tu pourras brancher `go.or-edhec.com` plus tard sans rien changer d'autre.

## Ajouter ou modifier un lien (1 minute)

1. Dans le dépôt, ouvre `liens.js` puis clique le crayon (Edit).
2. Ajoute une ligne en suivant le modèle :
   ```js
   'entretiens': { titre: 'Entretiens de recrutement', description: 'Réserver un créneau', url: 'https://…' },
   ```
3. **Commit changes.**

Le lien est actif en 1 à 10 minutes (délai de mise à jour de GitHub).

Bon à savoir :
- **Nom court** : minuscules, chiffres et tirets. Les majuscules tapées par les visiteurs sont acceptées (`/NDF` fonctionne).
- **Masquer un lien** : ajoute `cache: true` pour qu'il fonctionne sans apparaître sur la page d'accueil.
- **Paramètres** : ce qui suit `?` ou `#` dans le lien court est transmis à la destination.
- **Lien inconnu** : la page d'accueil s'affiche, avec un message et la liste des outils.
- **Apps Script** : utilise toujours le lien `/exec` du déploiement, et publie tes modifications en « Nouvelle version » du même déploiement. Le lien `/exec` ne change alors jamais, donc le lien court non plus.
