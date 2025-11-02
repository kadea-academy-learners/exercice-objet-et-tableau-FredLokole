/*
Écrire une fonction "createUser" qui permet de créer un utilisateur.

La fonction doit accepter trois paramètres :
    - nom (string) : le nom de l'utilisateur
    - age (number) : l'âge de l'utilisateur
    - estConnecte (boolean) : indique si l'utilisateur est connecté

La fonction doit retourner un objet contenant ces trois propriétés :
    - nom (string)
    - age (number)
    - estConnecte (boolean)
*/

function createUser(nom, age, estConnecte){

    // On crée un objet utilisateur avec les propriétés données
    const utilisateur = {
        nom: nom,
        age: age,
        estConnecte: estConnecte
    };

  // On retourne cet objet
  return utilisateur;
}

const user1 = createUser("Freddy", 25, true);
console.log(user1);

module.exports = {
    createUser,
};

