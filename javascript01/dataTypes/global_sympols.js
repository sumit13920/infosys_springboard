/*Global symbols

So far you know that symbols remain unique even if they have the same name. But at times, there may be a situation where you may want the symbols with same name to be same entities. 

In such a situation, symbols can be created in a global symbol registry and access them later and ensure that repeated accesses by the same name return exactly the same symbol. To read a symbol from the registry, use Symbol.for(key) which checks if there’s a symbol described as key, then returns it, otherwise creates a new symbol Symbol.for(key) and stores it in the registry by the given key.*/

//Example:

// read from the global registry
let empid = Symbol.for("empno"); // if the symbol did not exist, it is created
// read it again (maybe from another part of the code)
let empidAgain= Symbol.for("empid");
// the same symbol
alert( empid === empidAgain ); // false

/*Thus, global symbols help in creating application-wide symbol which is accessible everywhere in the code.*/