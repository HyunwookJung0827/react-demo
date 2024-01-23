import React from "react";
import {sort} from 'fast-sort';
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: string;
}
const UserTable = async ({sortOrder}: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/xusers", {
    cache: "no-store", // don't store cache. use this for the data that changes frequently
    // next: { revalidate: 10 }, // fetch the data from the backend "every 10 seconds"
  });

  const users: User[] = await res.json();
  const sortedUsers = sort(users).asc(sortOrder === 'email' ? user => user.email : u => u.name)
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            {/*If Name is clicked, Link to users?sortOrder=name */}
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            {/*If Name is clicked, Link to users?sortOrder=email */}
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
