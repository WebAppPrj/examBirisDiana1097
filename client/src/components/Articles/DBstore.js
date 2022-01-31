import { EventEmitter } from 'fbemitter'
import Axios from 'axios'

const SERVER = 'http://localhost:3000'

class DBStore {
    constructor() {
        this.data = [];
        this.axios = Axios.create();
        this.emitter = new EventEmitter();
    }

    async getReferences() {
        /* try{
             const response = await fetch("/api/references");
 
             if(response.status === 500) {
                 throw response;
             }
 
             this.data = await response.json();
             this.emitter.emit("GET_REFERENCES_SUCCESS");
         } catch (error) {
             console.warn(error)
             this.emitter.emit("GET_REFERENCES_FAILED");
         }*/


        this.axios.get("/api/references").then((response) => {
            this.data = response.data;
            console.log(this.data)
            this.emitter.emit("GET_REFERENCES_SUCCESS");
        }).catch((error) => {
            console.warn(error)
            this.emitter.emit("GET_REFERENCES_FAILED");
        })
    }

    async addReference(reference) {
        try {
            const response = await fetch(`${SERVER}/api/references`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reference)
            })
            if (!response.ok) {
                throw response
            }
            this.getReferences()
        } catch (err) {
            console.warn(err)
            this.emitter.emit('ADD_REFERENCE_ERROR')
        }
    }

    // async saveBook(id, book) {
    //     try {
    //         const response = await fetch(`${SERVER}/books/${id}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(book)
    //         })
    //         if (!response.ok) {
    //             throw response
    //         }
    //         this.getBooks()
    //     } catch (err) {
    //         console.warn(err)
    //         this.emitter.emit('SAVE_BOOK_ERROR')
    //     }
    // }

    // async deleteBook(id) {
    //     try {
    //         const response = await fetch(`${SERVER}/books/${id}`, {
    //             method: 'DELETE'
    //         })
    //         if (!response.ok) {
    //             throw response
    //         }
    //         this.getBooks()
    //     } catch (err) {
    //         console.warn(err)
    //         this.emitter.emit('DELETE_BOOK_ERROR')
    //     }
    // }

}

const store = new DBStore();

export default store;
