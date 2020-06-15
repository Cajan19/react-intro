import React from 'react';
import Header from "./components/Header"
import List from "./components/List";


const unicornAttributes = ["fluffig", "größenwahnsinnig", "bekloppt"];
const animals = ["Jackal", "Wildebeest", "Lion", "Porcupine"]


function App() {
  return (
    <div className="App">
        <Header />
        <List items={unicornAttributes}/>
        <List items={animals}/>
    </div>
  );
}

export default App;
