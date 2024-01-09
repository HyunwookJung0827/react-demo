import apiClient from "./api-client";

// This is the file for all the functionalities


export interface User {
    id: number;
    name: string;
  }

class UserService {
    getAllUsers() {
        
    const controller = new AbortController();
    // return apiClient
    //   .get<User[]>("/users", {
    //     signal: controller.signal,
    //   })
    // } // Controller issue
    const request = apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
    return { request, cancel: ()=> controller.abort()} // So the consumer of this user service simply uses the cancel method(cancel button) to cancel a request
    // How it's happened internally is irrelevant. That's implementation detail.

    }

    deleteUser(id: number) {
        return apiClient.delete("/users/" + id);
    }

    createUser(user: User) {
        return apiClient.post("/users", user);
    }

    updateUser(user: User) {
        return apiClient.patch("/users/" + user.id, user);
    }
}

export default new UserService();