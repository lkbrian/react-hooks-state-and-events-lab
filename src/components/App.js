import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const[mode,setMode] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ? "App dark" : "App light"
  const toggleMode = () => {
    setMode((mode) => !mode);
  };
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>{ !mode? "Light mode": "Dark mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
