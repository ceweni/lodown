'use strict';

// YOU KNOW WHAT TO DO //
/** 
*  identity: contains any one argument <value> and returns the <value> unchanged
* Examples:
*   identity(5) === 5
*   identity({a: "b"}) === {a: "b"}
*/
 function identity(name){
    return name;
}
module.exports.identity = identity;

/** 
* typeOf: takes an argument <value> and
*    Returns the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* typeOf(134) -> "number"
* typeOf("javascript") -> "string"
* typeOf([1,2,3]) -> "array"
*/
function typeOf(value){
    if (Array.isArray(value)){
        return 'array';
    }else if(value === null){
        return 'null';
    }else{
        return typeof value;
    }
}
module.exports.typeOf = typeOf;
/** 
* first: is a function that takes 2 arguments namely
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   first("ponies", 1) -> []
*   first(["a", "b", "c"], "ponies") -> "a"
*   first(["a", "b", "c"], 1) -> "a"
*   first(["a", "b", "c"], 2) -> ["a", "b"]
*/
 function first(myArray,number){
    //checks if array is not an array and returns []
    
        
        if (!Array.isArray(myArray) || number < 0){
            return [];
        }else if(typeof number !== 'number' || number === null){//checks if number is not a number or null, returns first element in array
            
            return myArray[0];
        }else if(myArray.length !== number){
            return myArray.slice(0, number);
        }else {//else return first number of items in the array
            return myArray;
        }
        
    //checks if number is negative or greater than length of array
}
module.exports.first = first;

/** last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   last("ponies", 2) -> []
*   last(["a", "b", "c"], "ponies") -> "c"
*   last(["a", "b", "c"], 1) -> "c"
*   last(["a", "b", "c"], 2) -> ["b", "c"]
*/
 function last(myArray, number){
   
    if (!Array.isArray(myArray) || number < 0){
            return [];
        }else if(typeof number !== 'number' || number === null){//checks if number is not a number or null, returns first element in array
            
            return myArray[myArray.length-1];
        }else if(myArray.length < number){
            return myArray;
        }else if(myArray.length !== number)  {//else return first number of items in the array
            return myArray.splice(number-1, myArray.length-1);
        }
}
module.exports.last = last;
/** 
* indexOf: Designed to loop over an array, and returns the
* index of each value in the array.
* Arguments:
*   1) An array
*   2) A value
* @param {Array or Object} myArray: The array over which to iterate.
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   indexOf(["a","b","c"], "c") -> 2
*   indexOf(["a","b","c"], "d") -> -1
*/

 function indexOf(myArray, value){
    
    //loops the array to find which index matches with the value
    for (var i = 0; i < myArray.length; i++){
        
        if (myArray[i] === value){
            
            return i;
        }
           
        
    } return -1;
    //if value is not in array return -1
    
} 

module.exports.indexOf = indexOf;
/** contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   contains([1,"two", 3.14], "two") -> true
*/
 function contains(myArray, value){
    for (var i = 0; i < myArray.length; i++){
        if (myArray[i] === value){
            return true;
        }
           
        
    } return false;
}
module.exports.contains = contains;
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/** unique: Designed to loop over array <input> and applies the indexOf function
 * to ensure no two index has same value or negative index
* Arguments:
*   1) An array
* Objectives:
*   1) Returns a new array of all elements from <array> with duplicates removed
*   2) Uses indexOf() from above
* @param {Function} indexOf: loops over the array <input> and checks that the
* current index is not negative
* Examples:
*   unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
function unique(input){
   var results = [];// declares new array
    for (var i = 0; i < input.length; i++){ // loops over the input array
   if (indexOf(results, input[i]) === -1){ 
    results.push(input[i]);//returns the entire new results array
    }
}return results;
}
module.exports.unique = unique;
/** 
* filter: Designed to loop over Array or Object, and applies the 
* test Function to each element in the array.
* Arguments:
*   1) An array
*   2) A function
* @param {Array or Object} collection: The array over which to iterate.
* @param {Function} test: The Function to be applied to each value in the 
* collection
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
 function filter (array, test) {
   let results = [];
   each(array, function(element, index, array){
       if(test(element, index, array)){
          results.push(element);
       }
   })
   return results;
};
module.exports.filter = filter;
/** reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
function reject(array, test){
   let results = [];
   filter(array, function(element, index, array){
       if(test(element, index, array) === false){
          results.push(element);
       }
   })
   return results;
};
module.exports.reject = reject;
/** partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
 function partition(array, test){
   let result1 = [[],[]];
   filter(array, function(element, index, array){
       index = index++;
     if(test(element, index, array)){
          
          result1[0].push(element);
          
       }else{
           result1[1].push(element);
       }
       
   })
   return result1;
};
module.exports.partition = partition;
/** map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
function map(collection, test){
   let result1 = [];
   filter(collection, function(element, index, array){
       
    result1.push(test (element, index, array));
       
   })
   return result1;
};
module.exports.map = map;
/** pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
function pluck(array, value){
     var list = [];
    each(array, function(element, index, array){
        
        list.push(element[value]);
    }); return list;
}
module.exports.pluck = pluck;
/** every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   every([2,4,6], function(e){return e % 2 === 0}) -> true
*   every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
function every (collection, test){
    var x = true;
    if (test){
    each(collection, function(element, index, array){
 
      if (test(element, index, array) === false){
          x = false;
      }   
    }); 
    }else {
        each(collection, function(element, index, array){
            if (!element){
                x = false;
            }
        });
    }
    return x;
}
module.exports.every = every;

/** some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   some([1,3,5], function(e){return e % 2 === 0}) -> false
*   some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
function some (collection, test){
    var x = false;
    if (test){
    each(collection, function(element, index, array){
 
      if (test(element, index, array)){
          x = true;
      }   
    }); 
    }else {
        each(collection, function(element, index, array){
            if (Boolean(element)){
                x = true;
            }
        });
    }
    return x;
}
module.exports.some = some;
/** reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

function reduce (collection, test, seed){
    var previousResult = seed;
    
    each(collection, function(element, index, array){
       
          if (seed === undefined && index === 0){
              previousResult = element;
              return ;
          }  
        previousResult = test(previousResult, element, index)
    });
    return previousResult;
}
module.exports.reduce = reduce;
/** extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
 function extend (Object1,...Object2){
    
        
        Object.assign(Object1,...Object2);
         
     return Object1;
}
module.exports.extend = extend;