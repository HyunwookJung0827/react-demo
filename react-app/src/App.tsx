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
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
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
/*
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
*/

// // [Choosing the State Structure]
// function App() {
//   // const [firstName, setFirstName] = useState('');
//   // const [lastName, setLastName] = useState('');
//   const [person, setPerson] = useState({
//     firstName: '',
//     lastName: ''
//   }) // Do not try to have a nested object like contact: {address: {stree: ''}}

//   const [isLoading, setLoading] = useState(false); // while loading the data, we want to show some spinner
//   // The first and second objects are a little different from the third
//   // They are about a person, while the third is about the state of our page

//   return (
//     <div>
//       {person.firstName} {person.lastName}
//     </div>
//   );
// }
// import Message from "./components/Message"
// function App() {
//   return (
//     <div>
//       <Message />
//     </div>
//   )
// }

// [Updating Objects]
// function App() {
//   const [drink, setDrink] = useState({
//     title: "Americano",
//     price: 5,
//   })
//   const handleClick = () => {
//     const newDrink = {
//       //title: drink.title,
//       ...drink, // copy all the properties of drink and update the difference
//       price: 6
//     };

//     //setDrink(newDrink);
//     setDrink({ ...drink, price: 6}) // To show price: 6 and keep state obj immutable,
//     // we made a new object with a new data

//   };
//   return (
//     <div>
//       {drink.price}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// [7-Updating Nested Objects]
// You wanna update the zipcode
// function App() {
//   const [customer, setCustomer] = useState({
//     name: 'Jone',
//     address: {
//       city: 'San Francisco',
//       zipCode: 94111
//     }
//   });
//   const handleClick = () => {
//     setCustomer({...customer, address: {...customer.address, zipCode: 94112}})
//     // One thing to note: spread operator in JavaScript ... is shallow
//     // It means it will copy the reference point of address of the customer
//     // Keep in mind that we need to update the state with a completely independant object
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// // [8-Updating Arrays]
// function App() {
//   const [tags, setTags] = useState(['happy', 'cheerful']);
//   const handleClick = () => {
//     // Add
//     // tags.push() will modify the original array, which is a bad practice for state change
//     setTags([ ...tags, 'exciting']);

//     // Remove
//     setTags(tags.filter(tag => tag !== 'happy'));

//     // Update
//     setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }
// // [9-Updating Arrays of OBjects]
// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: 'Bug 1', fixed: false},
//     { id: 2, title: 'Bug 2', fixed: false},
//   ]);
//   const handleClick = () => {
//     setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true } : bug));
//     // if the bug row's id is 1, change fixed to true
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }
// [10-Simplifying Update Logic with Immer]
// import produce from "immer";
// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: 'Bug 1', fixed: false},
//     { id: 2, title: 'Bug 2', fixed: false},
//   ]);
//   const handleClick = () => {
//     setBugs(produce(draft => {
//       const bug = draft.find(bug => bug.id === 1);
//       if (bug) bug.fixed = true;
//     }))
//   };
//   return (
//     <div>
//       {bugs.map(bug=> <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New' }</p>)}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// function App() {
//   const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
//     </div>
//   )
// }
// [12-Exercise: Update State]
// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "John",
//     },
//   });
//   const handleClick = () => {
//     setGame({...game, player: {...game.player, name: "Bob"}})
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>{game.player.name}</button>
//     </div>
//   )
// }

// function App() {
//   const [pizza, setPizza] = useState({
//     name: 'Spicy Pepperoni',
//     toppings: ['Mushroom']
//   });
//     const handleClick = () => {
//       setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']})
//     };

//   return (
//     <div>
//       <button onClick={handleClick}>{pizza.toppings.join(' ')}</button>
//     </div>
//   )
// // }
// function App() {
//   const [cart, setCart] = useState({
//     discount: .1,
//     items: [
//       {id: 1, title: 'Product 1', quantity: 1},
//       {id: 2, title: 'Product 2', quantity: 1}
//     ]
//   });
//     const handleClick = () => {
//       setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1} : item)})
//     };

//   return (
//     <div>
//       Cart:
//       {cart.items.map((item) => <ul key={item.id}>{item.title}, {item.quantity} <button onClick={handleClick}>Add</button></ul>)}
//     </div>
//   )
// }
// [13-Exercise: Building an ExpandableText Component]
import ExpandableText from "./components/ExpandableText";
function App() {
  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum,
        atque totam numquam vitae inventore! Blanditiis ipsam consequatur
        quisquam numquam labore eius nobis culpa laborum magnam, aut fugit ea id
        sint voluptatem illo dolore hic nesciunt dignissimos excepturi eum quis
        debitis? Blanditiis minus similique tempora quibusdam necessitatibus
        pariatur obcaecati, quaerat ab aliquid esse! Natus, unde consequatur?
        Dolorum eligendi non quos magnam placeat rerum provident officia odit
        minus exercitationem libero veniam voluptatum et, repudiandae saepe
        itaque, consectetur nemo beatae repellendus ullam. Corporis perferendis,
        molestiae corrupti nam maxime velit explicabo dolore eveniet? Facilis
        eligendi vel optio eum iure animi doloremque ea iusto.
      </ExpandableText>
    </div>
  );
}
export default App;
