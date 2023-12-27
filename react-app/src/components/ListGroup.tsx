import { Fragment } from "react";

function ListGroup() {
  /*In react, a component cannot return more than one element.
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
    */
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
