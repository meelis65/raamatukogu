const vue = Vue.createApp ({
    data() {
        return {
            bookInModal: {name: null},
            books: [] 
        }
    },
    async created() {
            this.books = await (await fetch(`http://localhost:8080/books`)).json();
    }
}).mount('#app')