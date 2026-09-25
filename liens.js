/*
 * LES LIENS DE L'ASSOCIATION : c'est le seul fichier à modifier.
 *
 * Une ligne par lien :
 *   'nom-court': { titre: 'Nom affiché', description: 'Une phrase (facultatif)', url: 'https://…' },
 *
 * → go.or-edhec.com/nom-court redirige vers url.
 * Le nom court : minuscules, chiffres et tirets uniquement (ex. 'notes-de-frais', 'entretiens').
 * Ajoute cache: true pour qu'un lien fonctionne sans apparaître sur la page d'accueil.
 * Pour qu'un même outil ait deux noms courts, duplique simplement la ligne.
 */
window.LIENS = {

  'ndf': {
    titre: 'Notes de frais',
    description: 'Déposer une note de frais et suivre sa validation',
    url: 'COLLE_ICI_LE_LIEN_EXEC'
  },

  // 'entretiens': {
  //   titre: 'Entretiens de recrutement',
  //   description: 'Réserver un créneau d\'entretien',
  //   url: 'https://…'
  // },

};
