console.log("this is tutorial 32 - solution");
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });

    }

    issueBook(bookname, user) {
        if (this.issuedBooks[bookname] == undefined) {
        this.issuedBooks[bookname] = user;
        }
        else {
            console.log('This book is already issued!');
        }
    }

    returnBook(bookname) {
        delete this.issuedBooks[bookname];
    }
}


// codingxjourenyLibrary = new Library(["The Martian", "Clean Code", "Aeronautics"])
// codingxjourenyLibrary.issueBook("Clean Code", "samyakt")
// codingxjourenyLibrary.issueBook("Clean Code", "priyanka")
// codingxjourenyLibrary.returnBook("Clean Code")
// codingxjourenyLibrary.issueBook("Clean Code", "priyanka")
// codingxjourenyLibrary.issueBook("Clean Code", "samyakt")
// codingxjourenyLibrary.issueBook("Aeronautics", "samyakt")
// codingxjourenyLibrary.issueBook("Aeronautics", "priyanka")