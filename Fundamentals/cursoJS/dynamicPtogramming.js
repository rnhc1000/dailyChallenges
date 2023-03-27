// The global variable
const bookList = [
    "The Hound of the Baskervilles", 
    "On The Electrodynamics of Moving Bodies", 
    "Philosophiæ Naturalis Principia Mathematica", 
    "Disquisitiones Arithmeticae"
];

// Change code below this line
function add(bookName) {
  let listBook = [...bookList];
  listBook.push(bookName);
  return listBook;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = listBook.indexOf(bookName);
  if (book_index >= 0) {

    listBook.splice(book_index, 1);
    return listBook;

    // Change code above this line
    }
}


let a = add("Clean Code");
console.log(a);
console.log(bookList)