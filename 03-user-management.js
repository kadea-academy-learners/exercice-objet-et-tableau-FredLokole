// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.


// Tableau d'utilisateurs
const utilisateurs = [
  { nom: "Freddy", age: 25, estAdmin: true },
  { nom: "Rachel", age: 30, estAdmin: false },
  { nom: "Israel", age: 22, estAdmin: true },
  { nom: "Candide", age: 28, estAdmin: false }
];

// Fonction whoIsAdmin
function whoIsAdmin(utilisateurs) {

	// On crée un tableau vide pour stocker les noms des admins
  	const admin = [];

  	// On parcourt chaque utilisateur du tableau
  	for (let i = 0; i < utilisateurs.length; i++) 
  	{
    	const user = utilisateurs[i]; // utilisateur courant

    	// Si l'utilisateur est admin, on ajoute son nom dans le tableau
    	if (user.estAdmin === true) 
		{
      		admin.push(user.nom);
    	}
  }

  // On retourne la liste des noms des admins
  return admin;
}

console.log(whoIsAdmin(utilisateurs)); // Affiche ["Freddy", "	Israel"]

module.exports = {
	whoIsAdmin,
};


