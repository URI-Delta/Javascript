// immediately Invoke Function Expression


(function chai(){
    console.log("Db Connected..");
    
})();

(  (name)=>{
    console.log(`DB Connecteed TWO ${name} `);
    
} )("uri")  

