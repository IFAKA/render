import { useState } from "react";
import "./App.css";
import { Body, Footer, Navbar, Render } from "./components";

function App() {
  const initConditions = {
    Navbar: true,
    Body: true,
    Footer: true,
  };

  const [conditions, setConditions] = useState(initConditions);

  return (
    <>
      <Render when={conditions}>
        <Navbar />
        <Body />
        <Footer />
      </Render>
      <button
        onClick={() => setConditions((p) => ({ ...p, Navbar: !p.Navbar }))}
      >
        Navbar
      </button>
      <button onClick={() => setConditions((p) => ({ ...p, Body: !p.Body }))}>
        Body
      </button>
      <button
        onClick={() => setConditions((p) => ({ ...p, Footer: !p.Footer }))}
      >
        Footer
      </button>
    </>
  );
}

export default App;
