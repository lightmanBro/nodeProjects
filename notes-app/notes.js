const fs = require('fs');
const chalk = require('chalk');
////const book = {
////    title: 'The Hobbit',
////    author: 'Shawn Atkinson',
////    isbn: '978-1449325-028-5'
////    }
//
////fs.writeFileSync('book.json', JSON.stringify(book, null, 2));
//
//const json = fs.readFileSync('book.json');
////Turning the string data into json object
//const jsonData = JSON.parse(json.toString())
////Changing some properties then saving the file again
//jsonData.title = 'The tale of two Cities'
//jsonData.author = 'George Owell'
//// writing the data to the file after changes has been made;
//fs.writeFileSync('book.json', JSON.stringify(jsonData))

exports.getNotes = ()=>{
    const notes = loadNotes();
    notes.forEach(note=>console.
    log(chalk.green.inverse(`${note.title} - ${note.body}`)))
}

exports.addNotes =(title, body)=>{
    const notes = loadNotes();
    //const duplicateNotes = notes.filter((note)=> note.title === title) the filter method looks through all the notes
    // irrespective of where it finds the duplicate, it'll look through all
    const duplicateNote = notes.find((note)=> note.title === title)//The find stops on the first find.
    //Debugger commands = node inspect app.js, restart = debug> restart

    debugger.
    if(!duplicateNote){
            notes.push({ title, body})
            saveNotes(notes);
            console.log(chalk.yellow.inverse.bold('Added notes'))
    }else{
            console.log(chalk.inverse.red('Note already exists'));
    }
}

exports.readNotes =(title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.green.inverse(`Title : ${note.title}\n`),`Body : ${note.body}`)
    }else{
        console.log(chalk.inverse.red('No notes found'))
    }
}


exports.removeNotes = (title)=>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=> note.title === title)
    if(duplicateNotes.length===0){
        console.log(chalk.inverse.red('No notes found'));
    }
    else{
        notes.splice(duplicateNotes.indexOf(title), 1);
        saveNotes(notes);
        console.log(chalk.inverse.green('Notes removed'));
    }
}

const saveNotes =(notes)=>{
const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}


const loadNotes = ()=>{
try {
    const notes = fs.readFileSync('notes.json');
    const notesJson = notes.toString();
    return JSON.parse(notesJson)
}catch(e) {
    return []
}

}


