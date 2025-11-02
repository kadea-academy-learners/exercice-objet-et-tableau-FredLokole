// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

// 1. Création du tableau de notes
const notes = [10, 11, 15, 13, 20];

// 2. Définition de la fonction
function averageNote(notes) {

	// Calcul de la somme des notes
	let somme = 0;
	for (let i = 0; i < notes.length; i++)
	{
  		somme += notes[i];
	}

	// Calcul de la moyenne
	const moyenne = somme / notes.length;

	// Vérification du résultat
	if (moyenne >= 10)
	{
  		return "Réussi";
	} 
	else
	{
  		return "Échoué";
	}
}

// 3. Exemple d'utilisation
console.log(averageNote(notes)); // Affiche "Réussi"

module.exports = {
	averageNote,
};



