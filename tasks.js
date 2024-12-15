
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
  else if(trimmedText === 'add'){
    console.log('error ! you should add something !');
  }
  else if(splittext[0] === 'add'){
    let result = text.replace("add ", "");
   tasks.push(result);
   console.log('ok');
   listtasks();
  }
  else if(trimmedText === 'remove'){
    tasks.splice(0,1);
    console.log("ok");
    listtasks();
  }
  else if(splittext[0] === 'remove'){
    if(parseInt(splittext[1])<=tasks.length){
    tasks.splice(parseInt(splittext[1])-1,1);
    console.log("ok");
    listtasks()
  }else{
  console.log("the task does not exist");}

  }
  else if(trimmedText === 'edit'){
    console.log('error ! you should edit something !');
  }
  else if(splittext[0] === 'edit'){
    
    if (isNaN(parseInt(splittext[1]))){
      console.log("ok1");
      let result = text.replace("edit ", "");
      tasks[tasks.length-1]=result;
      listtasks();
   }else{
    if (splittext.length >= 3 &&  splittext[2].trim() !== "")  {
      let slicedtext=splittext.slice(2);
      tasks[parseInt(splittext[1])-1]=slicedtext;
      listtasks();
    }else{
    console.log("you should add a task to edit ! ");}
    
   }
  
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
 * Displays all the available commandes 
 *
 * @returns {void}
 */
function help(){
console.log("available commandes:");
console.log("-hello to display hello!");
console.log("-hello + anything ;display hello anything ! ");
console.log("-list to display tasks");
console.log("-add + a task to add");
console.log("-remove to remove the first task ");
console.log("-remove+ index for the task to remove ");
console.log("-quit or exit to quit the application ");
console.log("-help to display this message");

}

// The following line starts the application
startApp("Acil hamieh")
