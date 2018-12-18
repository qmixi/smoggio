import { observable, action } from 'mobx';
import "isomorphic-fetch"

export default class AppState {

    @observable items = [];
    @observable tasks = [];

    constructor(initialState) {
        this.items = initialState && initialState.appstate && initialState.appstate.items ? initialState.appstate.items : [];
        this.tasks = initialState && initialState.appstate && initialState.appstate.tasks ? initialState.appstate.tasks : [];
    }    

    @action
    fetchTasks (id) {
        return fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(resp => resp.json())        
        .catch(e => console.log(e));
    }

    @action
    addItem(item) {
        this.items.push(item);
    }

    toJson() {
        return {
            items: this.items,
            tasks: this.tasks && this.tasks.length ? this.tasks : []
        };
    }
}