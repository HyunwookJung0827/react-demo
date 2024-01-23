import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
  }
const UserTable = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // don't store cache. use this for the data that changes frequently
    // next: { revalidate: 10 }, // fetch the data from the backend "every 10 seconds"
  });

  const users: User[] = await res.json();
  return (
    <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default UserTable