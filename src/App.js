import "./App.css";

import Cards from "./Cards.js";
import Feature from "./Feature";
import Front from "./Front";
import Footer from "./Footer";

function App() {
  return (
    <div className="App relative">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen w-screen absolute top-0 left-0"></div>

      <Front />
      <Cards />

      <Feature />
      <Footer />
    </div>
  );
}

export default App;
