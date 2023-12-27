import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";

/*function ListGroup() {
  In react, a component cannot return more than one element.
    That's why <h1>List</h1> would return error here (ListGroup is returning two: h1 and ul)
        -> translated to React.createElement('h1') later

    Solution:
    1. cover entirely with div
    return (
    <div>
        <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </div>
    )
    2. cover entirely with Fragment
    <Fragment>
        <h1>List</h1>
        <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
    </Fragment>

    3. cover entirely with <>

    <>
        <h1>List</h1>
        <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
    </>

    What if you want to have your list components dynamically?
    
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];
  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    ); // But this block has some duplicatation. Can we improve on this? Yes, with conditional Rendering.

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li> // key={item.id} is also widely used but remember to have a unique id for each row
        ))}
      </ul>
    </>
    
  // [Conditional Rendering]

  // We cannot use if statement inside return(). Instead, use {} to have any dynamic value
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {
        getMessage() // In this way, we can have a different messages depending on different conditions/parameter!
      }
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
  

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {
        // Original: items.length === 0 ? <p>No item found</p> : null
        items.length === 0 && <p>No item found</p> 
        // if items.length is 0, it's 'true && <p></p> => <p></p>'
        // if items.length isn't zero, it's 'false && <p></p> => false'
      }
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
  */

  /*
  // [handling event]
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event) // Type annotation, specify the parameter type
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick} // When the user clicks, this function should be called.
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
  // [Managing State]
  // When we click, we want to highlight it. We have a CSS class in bootstrap called active
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //let selectedIndex = 0;
  // Hook: a function that allows us to tap into built-in features in React
  // state hook for variables that changes the state or data over time

  // const arr = useState(-1); // -1 for initial value
  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function to update arr[0] variable

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              // selectedIndex = index; doesn't work because 
              setSelectedIndex(index); // works
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  ); // Each component has its own state. If we have two ListGroups, one selectedIndex won't affect the other ListGroup

export default ListGroup;

  */

// [Passing Data Via Props] : We want to reuse the components
// { item: [], heading: string}
interface Props {
    items: string[];
    heading: string;
}

function ListGroup({ items, heading }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleClick = (event: MouseEvent) => console.log(event);
    return (
        <>
          <h1>{heading}</h1>
          {items.length === 0 && <p>No item found</p>}
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => {
                  // selectedIndex = index; doesn't work because 
                  setSelectedIndex(index); // works
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      );
}


export default ListGroup;