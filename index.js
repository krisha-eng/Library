const booksGrid = document.querySelector(".section-cards");
const newBookButton = document.querySelector("#new-btn");
const popup = document.querySelector(".popup");
const submitButton = document.querySelector("#submit-btn");
const cancelButton = document.querySelector("#cancel-btn");

let myLibrary = [];

newBookButton.addEventListener('click', event => {
    popup.classList.add("popup-active");
})

submitButton.addEventListener('click', event => {
    // console.log(event);
    event.preventDefault();
    const form = event.target.parentNode;
    const newTitle = form[0].value;
    const newAuthor = form[1].value;
    const newPages = form[2].value;
    const newIsReadChecked = form[3].checked;   // true/false
    // console.log(form, newTitle, newAuthor, newPages, newIsReadChecked);

    if (newTitle == '' || newAuthor == '' || newPages == '') {
        alert('Fill all book details!');
    } else {
        const newBook = new Book(newTitle, newAuthor, newPages, newIsReadChecked);

        if (myLibrary.some((book) => book.title === newTitle)) {
            alert("This book already exists!!");
        } else {
            myLibrary.push(newBook);
            // console.log(myLibrary);
            displayBooks();

            document.querySelectorAll('.section-cards-div').forEach(item => {
                // console.log(item);
                item.childNodes[3].addEventListener('click', event => {
                    console.log(event);
                    if (event.target.innerHTML === 'Read') {              // === is important
                        event.target.innerHTML = 'Not read'
                    } else {
                        event.target.innerHTML = 'Read'
                    }
                })

                item.childNodes[4].addEventListener('click', event => {
                    const bookCardtoRemove = event.target.parentNode;
                    const titleOfbookCardtoRemove = event.target.parentNode.childNodes[0].innerHTML;
                    booksGrid.removeChild(bookCardtoRemove);
                    myLibrary = myLibrary.filter((book) => book.title !== titleOfbookCardtoRemove);
                })
            })
            popup.classList.remove("popup-active");
        }
    }

})

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") popup.classList.remove("popup-active");
});
cancelButton.addEventListener("click", e => {
    e.preventDefault();
    popup.classList.remove("popup-active");
})

function Book(title, author, pages, isRead) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function displayBooks() {
    booksGrid.innerHTML = "";   //reset Grid, could have been tackled better in below for loop by comparing titles of books, but didnt find a way
    for (let book of myLibrary) {
        const bookCard = document.createElement("div");
        const title = document.createElement("h3");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const readButton = document.createElement("button");
        const removeButton = document.createElement("button");

        bookCard.classList.add("section-cards-div");

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = `${book.pages} pages`;
        removeButton.textContent = "Remove";
        if (book.isRead) {
            readButton.textContent = "Read";
        } else {
            readButton.textContent = "Not read";
        }

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readButton);
        bookCard.appendChild(removeButton);
        booksGrid.appendChild(bookCard);

    }
}


// {
//     title: "Rich Dad Poor Dad",
//     author: "Robert Kiyosaki",
//     pages: "500",
//     isRead: false
// },
// {
//     title: "How to be a Bawse",
//     author: "Lily Singh",
//     pages: "700",
//     isRead: true
// },
// {
//     title: "Miles to go",
//     author: "Miley Cyrus",
//     pages: "600",
//     isRead: true
// },
// {
//     title: "Unfinished",
//     author: "Priyanka Chopra",
//     pages: "500",
//     isRead: false
// }
