'use strict';

// YOU KNOW WHAT TO DO //
/** 
*  identity: contains any one argument <value> and returns the <value> unchanged
* @param {Element} name: the name (string) which is passed into the function
*/
 function identity(name){
    return name;
}
module.exports.identity = identity;

/** 
* typeOf: takes an argument <value> and
*    Returns the type of <value> as a string
* @param {Element} value: the input <value> to check for edge cases
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
* first: is a function that takes 2 arguments namely designed to 
* loop over myArray and returns the first element of the array
* @param {array} myArray: the array input over which to iterate
* @param {Element} number: the input number to check for edge cases
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

/** 
 * last: Designed to loop over myArray and returns the last item in
 * the array
* @param {Array} myArray: the array input over which to iterate
* @param {Element} number: the input number to check for edge cases
*/
 function last(myArray, number){
   
    if (!Array.isArray(myArray) || number < 0){
            return [];
        }else if(typeof number !== 'number' || number === null){//checks if number is not a number or null, returns last element in array
            
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
* @param {Array} myArray: the array input over which to iterate
* @param {Element} value: the input value to test if the condition is true or 
* false.
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
/** 
 * contains: Designed to loop over an array (myArray). It returns true
 * if the elements of myArray matches with the input value. if it 
 * there's no given value or value does not match the content of myArray
 * it returns false.
* @param {Array} myArray: the array input over which to iterate
* @param {Element} value: the input value to test if the condition is true or 
* false.
* 
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
* 
* @param {Array} input: the input array over which to iterate
* 
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
* 
* @param {Array} array: The array over which to iterate.
* @param {Function} test: The Function to be applied to each value in the 
* collection
* 
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
/** 
 * reject: Designed to loop over a collection, Array or Object, and applies the 
 * test Function to each value in the array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * array
* 
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
/** 
 * partition: Designed to loop over a collection, Array or Object, and applies the 
 * test Function to each value in the array by returning an array that is made up 
 * of 2 sub arrays.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * array and checks for edge cases
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
/** 
 * map: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection by saving the return value
 * of each <function> call in a new array and returns a new array
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
*/
function map(collection, test){
   let result1 = [];
   filter(collection, function(element, index, array){
       
    result1.push(test (element, index, array));
       
   })
   return result1;
};
module.exports.map = map;

/**
 * pluck: Designed to loop over a Array of Object, by selecting a specific value
 * in the object and returns a new array
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Property} value: The property of the object to which each value can be selected
 * 
*/
function pluck(array, value){
     var list = [];
    each(array, function(element, index, array){
        
        list.push(element[value]);
    }); return list;
}
module.exports.pluck = pluck;
/** 
 * every: Designed to loop over a collection, Array or Object, and applies the 
 * test Function to each value in the array by returning a boolean value if the 
 * element in the array is true or false or null
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection
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

/** 
 * some: Designed to loop over a collection, Array or Object, and applies the 
 * test Function to each value in the collection and returning a boolean value 
 * based on the edge cases
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection
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
/** 
 * reduce: Designed to loop over a collection, Array or Object, and applies the 
 * test Function to each value in the collection by saving the most recent result
 * seed as the previous result and return the previous result after the edge cases
 * have been satisfied
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @param {Element} seed: The seed where to save the previous element
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
/** 
 * extend: Designed to copy properties one or more objects to a designated object
 * and returns the update of the designated object
 * 
 * @param {Object} Object1: The object over which properties are copied to
 * @param {Object} Object2: The object which its properties are being copied
*/
 function extend (Object1,...Object2){
    
        
        Object.assign(Object1,...Object2);
         
     return Object1;
}
module.exports.extend = extend;