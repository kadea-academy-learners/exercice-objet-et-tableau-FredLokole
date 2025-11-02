// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.


// Création du tableau de base de données
const baseDeDonnees = [];

// Fonction d'inscription (signUp)
function signUp(nom, email, password, confirmPassword) {

    // Vérifier si l'email existe déjà
    const utilisateurExiste = baseDeDonnees.find(user => user.email === email);
    if (utilisateurExiste) 
    {
        return "Erreur : cet email est déjà utilisé.";
    }

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) 
    {
        return "Erreur : les mots de passe ne correspondent pas.";
    }

    // Créer un objet d'un nouvel utilisateur
    const nouvelUtilisateur = {
        id: baseDeDonnees.length + 1, // identifiant unique (simple)
        nom: nom,
        email: email,
        password: password,
        estConnecte: false,
        estBloque: false
    };

    // Ajouter dans la base de données
    baseDeDonnees.push(nouvelUtilisateur);

    // Retourner l'utilisateur créé
    return nouvelUtilisateur;
}

// Fonction de connexion (login)
function login() {
	// Rechercher l'utilisateur par email
    const utilisateur = baseDeDonnees.find(user => user.email === email);

    // Vérifier si l'utilisateur existe
    if (!utilisateur) 
    {
        return "Erreur : utilisateur non trouvé.";
    }

    // Vérifier si le mot de passe est correct
    if (utilisateur.password !== password) 
    {
    return "Erreur : mot de passe incorrect.";
    }

    // Vérifier si l'utilisateur est bloqué
    if (utilisateur.estBloque) 
    {
        return "Erreur : cet utilisateur est bloqué.";
    }

    // Mettre à jour l'état de connexion
    utilisateur.estConnecte = true;

    // Retourner l'utilisateur connecté
    return utilisateur;
}

console.log(signUp("Freddy", "freddy@mail.com", "1234", "1234"));
console.log(signUp("Sarah", "sarah@mail.com", "abcd", "abcd"));
console.log(signUp("Freddy", "freddy@mail.com", "test", "test")); // email déjà utilisé

console.log(login("freddy@mail.com", "1234"));  // Connexion réussie
console.log(login("sarah@mail.com", "mauvais")); // Mauvais mot de passe
console.log(login("kevin@mail.com", "1234"));    // Utilisateur inexistant  

module.exports = { baseDeDonnees, signUp, login };
