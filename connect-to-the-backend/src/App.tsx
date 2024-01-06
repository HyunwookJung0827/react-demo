import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

// [2-Understanding the Effect Hook]
// function App() {
//   const ref = useRef<HTMLInputElement>(null);

//   // Side effect
//   // meaning this line changes things outside the DOM
//   // To make this pure component, we can use the effect hook
//   // if (ref.current) ref.current.focus();

//   useEffect(()=> {
//     if (ref.current) ref.current.focus();
//   });
//   // The name useEffect is confusing. Think of it as "afterRender"
//   // that runs after each render

//   // Just like state and ref hook, we can only call the effect hook
//   // at the top level of our components.
//   // So we cannot call it inside loops or if statements

//   useEffect(()=> {
//     document.title = 'My App';
//   });

//   return <div>
//     <input ref={ref} type="text" className="form-control" />
//   </div>
// }

// [3-Effect Dependencies]
// What if we want more control of effect hook instead of after every render?
// function App() {
//   const [category, setCategory] = useState('');

//   return <div>
//     <select className="form-select" onChange={(event) => setCategory(event.target.value)}>
//       <option value=""></option>
//       <option value="Clothing">Clothing</option>
//       <option value="Household">Household</option>
//     </select>
//     <ProductList category={category}/>
//   </div>
// }

// [4-Effect Clean Up]
// Sometimes the code that we pass to the effect hook doesn't need any cleanup.
// EX) The user navigates away from the chat page, we have to disconnect
// from the chat server.

// const connect = () => console.log('Connecting');
// const disconnect = () => console.log('Disconnecting');

// function App() {
//   useEffect(( ) => {
//     connect();

//     return () => disconnect();
//     // This is normally how we cleanup after effect hook.
//     // Generally, stop or undo the effects
//   })

//   return <div>
//   </div>
// }

// [5-Fetching Data]

import axios from "axios";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // This will return Promise
    // : An object that holds the eventual result or failure of an asynchronous operation
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  return <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>;
}
export default App;
