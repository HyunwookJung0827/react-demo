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

import Button from "./components/Button";

// [Passing Children]

function App() {
  return (
    <div>
      <Button color="danger" onClick={() => console.log('talkative')}>by button</Button>
    </div>
  );
}
export default App;
