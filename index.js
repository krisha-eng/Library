let myLibrary = [
    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        pages: "500"
    }, 
    {
        title: "How to be a Bawse",
        author: "Lily Singh",
        pages: "700"
    },    
    {
        title: "Miles to go",
        author: "Miley Cyrus",
        pages: "600"
    },
];

function Book(title, author, pages) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    // do stuff here
    //take user inp
    myLibrary.push(book);
}

function displayBooks() {
    for (let i in myLibrary) {
        
    }
}