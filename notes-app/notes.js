const fs = require('fs');

//const book = {
//    title: 'The Hobbit',
//    author: 'Shawn Atkinson',
//    isbn: '978-1449325-028-5'
//    }

//fs.writeFileSync('book.json', JSON.stringify(book, null, 2));

const json = fs.readFileSync('book.json');
//Turning the string data into json object
const jsonData = JSON.parse(json.toString())
//Changing some properties then saving the file again
jsonData.title = 'The tale of two Cities'
jsonData.author = 'George Owell'
// writing the data to the file after changes has been made;
fs.writeFileSync('book.json', JSON.stringify(jsonData))
