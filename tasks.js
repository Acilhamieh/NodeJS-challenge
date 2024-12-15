
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}
/*
function to list the tasks 
*/
let tasks =['task 1','task 2','task 3','task 4'];
function listtasks(){
console.log('tasks:');
tasks.forEach((task, index) => {
  console.log(`${index + 1}- ${task}`);
});

}



/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  const trimmedText = text.trim(); // Removes extra spaces and newline
  const splittext = text.split(" ");
  if (trimmedText === 'quit' || trimmedText === 'exit')  {
    quit();
  }
  else if(splittext[0] === 'hello' ||   trimmedText === 'hello'){ 
  /*hello();*/
  const result= trimmedText+ ' !';
  console.log(result);
  }
  else if(trimmedText === 'help'){
    help();
  }
  else if(trimmedText === 'list'){
    listtasks();
  }
  else{
    unknownCommand(text);
  }
}



/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello !');
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
  


/**
 * Displays all the available commandes 
 *
 * @returns {void}
 */
function help(){
console.log("available commandes:");
console.log("-hello to display hello!");
console.log("-hello + anything ;display hello anything ! ");
console.log("-quit or exit to quit the application ");
console.log("-help to display this message");

}

// The following line starts the application
startApp("Acil hamieh")
