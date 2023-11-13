const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');//yargs for working on the command line and accessing the config and process variables.
const getNotes = require('./notes')


//Using the default file system module.
fs.writeFileSync('notes.txt','This file was created by nodeJs');
fs.appendFileSync('notes.txt',' I have added this text by the append file method\n');

//Using the validator module.
console.log(validator.isEmail('omotosodavid@gmail.com'));
console.log(validator.isURL('https://mead.io'));

//Using chalk to color the message.
console.log(chalk.blue(validator.isIP('172.16.58.3')));
console.log(chalk.bold.inverse.green('Success'));

//How to receive arguments from the terminal using Node.js.
//console.log(process.argv[2])
//logging all the process arguments to the terminal.
//console.log(process.argv);

// working on the arguments received from the terminal
//const command = process.argv[2];
//if(command === 'add'){
//    console.log(chalk.bold.yellow('Adding notes'))
//    }else if(command === 'remove'){
//    console.log(chalk.red.inverse.yellow('Removing notes'))
//    }
//    else if(command === 'list'){
//    console.log(chalk.green.inverse.yellow('Listing notes'))
//    }
//console.log(yargs.argv)



// Using yargs to create new add command;
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
            },body: {
            describe: 'This is the body of the note',
            demandOption: true,
            type:'string'}
        },
    handler: function(argv){ console.log('Title: ' + argv.title + '\nDescription: ' + argv.body)}
    })

// using yargs to create new remove command;
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: function(){ console.log(this.describe)}
    })

// using yargs to create new list command;
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function(){ console.log(this.describe)}
    })
// using yargs to create new read command;
yargs.command({
    command:'read',
    describe: 'Read a note',
    handler: function(){ console.log(this.describe)}
    })

 console.log(yargs.argv)