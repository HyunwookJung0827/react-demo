import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

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

// [5-Fetching Data, 6-Understanding HTTP Requests, 7-Handling Errors]
// import axios from "axios";

// interface User {
//   id: number;
//   name: string;
// }
// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
// get -> promise -> res / err

//     // This will return Promise
//     // : An object that holds the eventual result or failure of an asynchronous operation
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
//       .then((res) => setUsers(res.data))
//       .catch((err) => setError(err.message)); // This line will be executed if something goes wrong while fetching the data
//   }, []);
//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}

//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// [8-Working with Async and Await]
// Some people don't like .then method of useEffect.
// Let's rewrite this code without then and catch method.
// import axios, { AxiosError } from "axios";

// interface User {
//   id: number;
//   name: string;
// }
// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // async () to make this async. But still doesn' work because react doesn't allow us to pass an async function to the effect hook.
//     const fetchUsers = async () => {
//       try {

//         const res = await axios // await function is only allowed  within async functions and at the top of the module
//         .get<User[]>("https://jsonplaceholder.typicode.com/xusers");
//       // get -> await promise -> res / err
//       setUsers(res.data);
//       }
//       catch (err) {
//         setError((err as AxiosError).message);
//       }

//     };
//     fetchUsers();
//   }, []);
//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}

//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// Not that elegant. We have to make more functions, more nested {}, format introduced.

// [9-Canceling a Fetch Request]
// What if the user leaves the page? We cancel our fetch request with our cleanup function
// import axios, { AxiosError, CanceledError } from "axios";

// interface User {
//   id: number;
//   name: string;
// }
// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState('');

//     useEffect(() => {
//       const controller = new AbortController(); // cancel or abort asynchronous operations like fetch requests,
//       // DOM manipulation or any other operations that take a long enough time
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users", { signal: controller.signal})
//       .then((res) => setUsers(res.data))
//       .catch((err) => {
//         if (err instanceof CanceledError) return; // If err is an instance of CanceledError, return immediately
//         setError(err.message)});

//       return () => controller.abort(); // cleanup function
//   }, []);

//   return (
//     <>
//       {error && <p className='text-danger'>{error}</p>}

//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// [10-Showing a Loading Indicator]
// import axios, { AxiosError, CanceledError } from "axios";

// interface User {
//   id: number;
//   name: string;
// }
// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true); // Is loading right now
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/xusers", {
//         signal: controller.signal,
//       })
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });
//     // axios
//     //   .get<User[]>("https://jsonplaceholder.typicode.com/users", {
//     //     signal: controller.signal,
//     //   })
//     //   .then((res) => {
//     //     setUsers(res.data);
//     //     setLoading(false);
//     //   })
//     //   .catch((err) => {
//     //     if (err instanceof CanceledError) return;
//     //     setError(err.message);
//     //     setLoading(false);
//     //   })
//     //   .finally(() => {
//     //     setLoading(false);
//     //   }); // executed when our promise is settled
//     //   // However, this doesn't work with the strict mode turned on

//     return () => controller.abort();
//   }, []);

//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}
//       {isLoading && <div className="spinner-border"></div>}

//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// [11-Deleting Data, 12-Creating Data, 13-Updating Data]
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    // Pessimistic Update: Call the server and Update the UI - slow
    // Optimistic Update: Update the UI and Call the server - fast
    setUsers(users.filter((u) => u.id !== user.id));

    // Now call the server
    axios
      .delete("https://jsonplaceholder.typicode.com/users" + user.id)
      // we don't need then this case
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers); // if error, recover the original state
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = {...user, name: user.name + '!'};
    setUsers(users.map(u => u.id === user.id ? updatedUser : u))

    // Now call the server to save the changes
    // 1. .put: replacing an object
    // 2. .patch: patching more than one properties (not supported to some server)
    axios.patch("https://jsonplaceholder.typicode.com/users/" + user.id, updatedUser)
    .catch(err => {
      setError(err.message);
      setUsers(originalUsers);
    });
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button className="btn-outline-secondary mx-1" onClick={() => updateUser(user)}>Update</button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
