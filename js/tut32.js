console.log("This is js tutorial 32")
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library{
    constructor(book1, book2, book3, book4) {
        this.book1 = book1;
        this.book2 = book2;
        this.book3 = book3;
        this.book4 = book4;
    }

    getBookList() {
        return `The total number of books present in library are "${this.book1}", "${this.book2}", "${this.book3}" and "${this.book4}"`
    }

    issueBook(username) {
        return `"${this.book2}" book is issued by ${username}.`;
    }

    returnBook(username) {
        return `"${this.book2}" book is returned by ${username}.`;
    }
}

books = new Library("Clean Code", "Code Complete", "The Pragmatic Programmer", "Code: The Hidden Language of Computer");
console.log(books);
console.log(books.getBookList());
console.log(books.issueBook("codingxjourney"));
console.log(books.returnBook("codingxjourney"));

