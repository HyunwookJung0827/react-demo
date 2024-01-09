import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";


const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      const { request, cancel } = userService.getAll<User>(); // This returns a promise: data of all users
      // We still have an error about controller object
      // We don't want to export controller that is all about HTTP requests
      // Think of a remote controller. There are complex logic in the board on the inside
      // But as a user, we don't have to worry about that complexity
      // The buttons hide the implementation details
      request
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      return () => cancel();
      // At this form, our effect hook knows absolutely nothing about making HTTP requests.
    }, []);

    return {users, error, isLoading, setUsers, setError};
}

export default useUsers;