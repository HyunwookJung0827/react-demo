import apiClient from "./api-client";

interface Entity {
    id: number
}

class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll<T>() { // <T> is called a generic type parameter, a placeholder
        
    const controller = new AbortController();
    const request = apiClient
      .get<T[]>(this.endpoint, {
        signal: controller.signal,
      })
    return { request, cancel: ()=> controller.abort()} 

    }

    delete(id: number) {
        return apiClient.delete(this.endpoint + "/" + id);
    }

    create<T>(entity: T) {
        return apiClient.post(this.endpoint, entity);
    }

    update<T extends Entity>(entity: T) {
        return apiClient.patch(this.endpoint + "/" + entity.id, entity);
    }
}

//export default new HttpService('/');
// We don't want to hard code an endpoint like 'users'
// that will make our HttpService no longer reusable

// Instead of exporting an instance, we should export a function
// for creating an instance of this class
const create = (endpoint: string) => new HttpService(endpoint);

export default create;