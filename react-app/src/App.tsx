/*import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
*/
/*
import Alert from "./components/Alert";

// [Passing Children]

function App() {
  return (
    <div>
      <Alert text="helou World"/> 
    </div>
  );
}
// But kinda ugly if you want to put a full text
// Instead, we can pass children
export default App;
*/

/*
import Alert from "./components/Alert";

// [Passing Children]

function App() {
  return (
    <div>
      <Alert> 
        Hello <span>world</span>
      </Alert> 
    </div>
  );
}
export default App;
*/

import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import { useState } from "react";
// [Passing Children]
/*
function App() {
  return (
    <div>
      <Button color="danger" onClick={() => console.log('talkative')}>by button</Button>
    </div>
  );
}
export default App;
// [Exercise: Showing an Alert]
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  // Render Alert only if alertVisible is true
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Very alert</Alert>} 
      <Button color="danger" onClick={() => setAlertVisibility(true)}>By button</Button>
    </div>
  );
}
*/
/*
import ListGroup from "./components/ListGroup"; // By default, if a folder was referenced, it will look for index.ts
import './App.css'
function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={()=> console.log('talkative')}></ListGroup>
    </div>
  )
}
*/
/*
// [Adding Icons]
import { BsFillCalendarFill } from 'react-icons/bs';

function App() {
  return (
    <div>
      <BsFillCalendarFill color="red" size={400}/>
    </div>
  )
}
*/
// [Excercise: Using CSS Modules]
import Like from "./components/Like";
function App() {
  let likes = 0;

  return (
    <div>
      <Like onClick={()=>console.log('clicked')}/>
    </div>
  );
}
export default App;
