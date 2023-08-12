import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { listProductDetails, listProducts } from "./actions/product.action";

// J'ai ajouté export pour pouvoir l'importer dans les actions dans
// le code que je t'ai proposé
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

// le fichier index.js c'est le point d'entrée de ton application.
// c'est a dire que lorsque ton application est lancé dans le
// navigateur c'est ce fichier qui s'exécute en premier.

// Dans ce cas toutes les lignes de ce fichier vont s'exécuter au
// lancement. c'est a dire: tu vas exécuter "store.dispatch(listProducts())"
// qui va aller te chercher les produits et directement apres cela
// "store.dispatch(listProductDetails())" s'exécute a son tour pour aller
// chercher le detail d'un produit. Ce qui n'est plus normal.
// car tu execute la requete de détail alors que tu n'as meme pas
// cliqué sur un produit. Donc la page du details du produit ne pourrait
// pas recevoir de id car a cet instant ca n,existe pas.

// car lorsque "store.dispatch(listProductDetails())", axios se met en
// marche et execute une requete contenant id dans son url
// et lui il se met a  chercher ce id et il ne trouve pas. il se fache
// donc et t,envoie une erreur.

// Pour resoudre ce probleme, tu dois enlever "store.dispatch(listProductDetails());"
// de ce fichier pour qu'il ne s'exécute plus au lancement de l'application
// et tu dois l,appeller au moment ou l'utilisateur doit cliquer sur un
// produit. En ce moment la axios verra un id et executera sa requete sans erreur.

store.dispatch(listProducts());

// En plus tu appellais meme cette action sans lui passer le id
// du product que tu veux.
// store.dispatch(listProductDetails());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
