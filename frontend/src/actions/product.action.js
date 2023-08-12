import axios from "axios";
import { store } from "../index";

export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST";

// le dispatch que tu as mis en parametre la. lui il sort d'ou? ou
// est ce que tu l'as importé ? Nulle part. ce n,est pas une bonne
// maniere de faire. En plus il y a un petit trait qui s'affiche sous
// la premiere parethese qui contient dispatch. Si tu mets le curseur
// dessus cela va t,afficher ce message
// "This may be converted to an async function.". Pour dire que ta
// fonction doit etre une fonction asynchrone. les appels de requetes
// dans nodejs sont pour la plupart des appels asynchrones. Donc tu dois
// précédé ta fonction du mot clé "async" et mettre le mot clé "await"
// devant axios et l'erreur va disparatitre.
// En plus ta maniere de traiter les reponses des requetes avec les
// callbacks est une maniere qui tend a disparaitre. tu devrais utiliser
// un try-catch ou un top-level await. j'ai refais en dessous avec un
// try-catch pour que tu voies.

// En plus cette fonction que tu definis doit etre appellé lorsque la
// page HomeScreen est monté. mais dans ta page HomeScreen je vois
// seulement que tu es allé cherché le résultat au store.

// Avec redux pour charger le store il faut appeller l'action qui va
// déclencher le processus.
// Ou est ce que tu as appellé l,action "listProducts" pour déclencher
// le processus de requete axios ? Nulle part.

// la question que tu dois te poser est la suivante.
// Question: Ou est ce que jeveux avoir la liste des produits ?
// rep: Sur la page HomeScreen lorsqu'elle est montée
// docntu dois appellé l'action dans la page HomeScreen lorsqu'elle
// est montée. c'est a dire dans le useEffect.

/**
 * Ici c'est ton code que tu avais au départ. je l'ai modifié et mis
 * en dessous
 */

// export const listProducts = () => {
//   return (dispatch) => {
//     return axios.get("http://127.0.0.1:8000/api/product/").then((res) => {
//       dispatch({ type: PRODUCT_LIST_REQUEST, payload: res.data });
//     });
//   };
// };

/**
 * Ici c'est ton code que je ai .
 */

export const listProducts = () => {
  return async (dispatch) => {
    return await axios.get("http://127.0.0.1:8000/api/product/").then((res) => {
      dispatch({ type: PRODUCT_LIST_REQUEST, payload: res.data });
    });
  };
};

/**
 * Ici c'est la facon que je te propose de faire.
 */

// export const listProducts = async () => {
//   try {
//     const { data } = await axios({
//       method: "get",
//       url: "http://127.0.0.1:8000/api/product/",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // Tu dispatch le resultat "data" au store que tu as obtenu de axios.
//     store.dispatch({ type: PRODUCT_LIST_REQUEST, payload: data });
//   } catch (error) {
//     // tu peux rediger une logique ici pour gérer l'erreur au cas axios
//     // renvoyait une erreur de requete. Tu peux créer une constante
//     // d'action dans ton reducer et l'utiliser ici pour le dispatcher
//     // en cas d'obtention d'une erreur.
//     console.log(error);
//   }
// };

/**
 *
 * Voici ton code en dessous
 */
// ici en plus de cooriger les erreurs que j'ai cité plus haut, tu as commis
// une autre erreur a éviter chaque fois.
// NB: ton url du frontend doit etre exactement celui du backend.
//     Ici regarde bien ton url et regarde bien celui du backend.
//     Tu vas constater que celui du backend a un slash "/" a la fin,
//     pourtant pour celui du frontend n'a pas ce slash. Axios doit encore
//     se facher et te renvoyer une erreur.
//     Donc tu as 2 choix. Soit tu retires le slash du backend, soit
//     tu ajoutes le slash ici. ce que j,ai fais dans le code que
//     j'ai corrigé plus bas.
// export const listProductDetails = (id) => {
//   return (dispatch) => {
//     return axios.get(`http://127.0.0.1:8000/api/detail/${id}`).then((res) => {
//       console.log(res);
//       dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: res.data });
//     });
//   };
// };

/**
 *
 * Voici ton code corrigé
 */
export const listProductDetails = (id) => {
  return async (dispatch) => {
    return await axios
      .get(`http://127.0.0.1:8000/api/detail/${id}/`)
      .then((res) => {
        console.log(res);
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: res.data });
      });
  };
};
