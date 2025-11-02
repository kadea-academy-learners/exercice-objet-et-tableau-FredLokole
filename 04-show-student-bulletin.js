// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".

// Creer de tableau d'élèves
const eleves = [
  { nom: "Jehovani", notes: [17, 15, 15, 20] },
  { nom: "Abel", notes: [12, 14, 13] },
  { nom: "Maria", notes: [9, 8, 10] },
  { nom: "David", notes: [] } // Aucun note
];

// Fonction showStudentBulletin
function showStudentBulletin(eleves) {
  const bulletins = [];

  // On parcourt tous les élèves
  for (let i = 0; i < eleves.length; i++) 
  {
    const eleve = eleves[i];

    // Vérifier si l'élève a des notes
    let moyenne = 0;
    if (eleve.notes.length > 0) 
    {
      const somme = eleve.notes.reduce((acc, note) => acc + note, 0);
      moyenne = somme / eleve.notes.length;
    }

    // Arrondir à 2 décimales
    moyenne = moyenne.toFixed(2);

    // Déterminer le commentaire
    let commentaire = "";
    if (moyenne >= 16) 
    {
      commentaire = "Excellent";
    } 
    else if (moyenne >= 14) 
    {
      commentaire = "Très Bien";
    } 
    else if (moyenne >= 12) 
    {
      commentaire = "Bien";
    } 
    else if (moyenne >= 10) 
    {
      commentaire = "Passable";
    } 
    else 
    {
      commentaire = "À revoir";
    }

    // Créer le bulletin de l'élève
    const bulletin = {
      nom: eleve.nom,
      moyenne: parseFloat(moyenne),
      commentaire: commentaire
    };

    // Ajouter le bulletin au tableau
    bulletins.push(bulletin);
  }

  // Retourner tous les bulletins
  return bulletins;
}

// Exemple d'utilisation
console.log(showStudentBulletin(eleves));


module.exports = {
	showStudentBulletin,
};