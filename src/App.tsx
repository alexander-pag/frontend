import { useState } from "react";
import "./App.css";
import { CreateBarberShop } from "./pages/CreateBarberShop";
import { ListBarberShop } from "./pages/ListBarberShop";

function App() {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <div>
      <button
        className="inline-block px-4 py-2 border text-green-600 duration-150 font-medium bg-green-100 rounded-lg hover:bg-green-200 active:bg-green-100 md:text-sm"
        onClick={handleClick}
      >
        cambiar
      </button>
      {state ? <CreateBarberShop /> : <ListBarberShop />}
    </div>
  );
}

export default App;
