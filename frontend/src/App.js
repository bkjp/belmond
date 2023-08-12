import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import Product from "./components/Product";
import ProductScreen from "./screen/ProductScreen";
import NavBar from "./components/NavBar";

// Dans tes routes tantot tu mets element tantot component.
// function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<HomeScreen />} />
//         <Route path="/product/:id" component={<ProductScreen />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

/**
 * Voici ton code corrigé
 */
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
