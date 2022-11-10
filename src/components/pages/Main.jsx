import React, { useState } from "react";
import Header from "../layout/Header";
import Landing from "../layout/Landing";
import Footer from "../layout/Footer";

function Main() {
  //Inicia el contador de favoritos
  const [counter, setCounter] = useState(0);

  const addFavs = () => {
    setCounter(counter + 1);
  };
  //Termina el contador de favoritos
  return (
    <div>
      <Header favsNumber={counter} />
      <Landing addFavs={addFavs} />
      <Footer />
    </div>
  );
}

export default Main;
