'use strict';

// YOU KNOW WHAT TO DO //
/** 
*  identity: contains any one argument <value> and returns the <value> unchanged
* @param {Value} name: the name (input) which is passed into the function
* @return {Value} name: returns the final value of the name (input) passed in the function
*/
 function identity(name){
    return name;
}
module.exports.identity = identity;

/** 
* typeOf: takes an argument <value> and
*    Returns the type of <value> as a string
* @param {Element} value: the input <value> to check for edge cases
* @return {Value} value: returns the final value of the value (input) passed in the function
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
* first: designed to return the first <number> of elements in an array
* 
* @param {array} myArray: the array input over which to iterate
* @param {Number} number: the input number to check for edge cases
* @return {Array} myArray: returns array literal if the first parameter is
* not an array, if the number is not a number or null it returns the first 
* element of myArray.
*/
 function first(myArray,number){
        if (!Array.isArray(myArray) || number < 0){
            return [];
        }else if(typeof number !== 'number' || number === null){
            return myArray[0];
        }else if(myArray.length !== number){
            return myArray.slice(0, number);
        }else {
            return myArray;
        }
}
module.exports.first = first;

/** 
 * last: designed to return the last <number> of items of an array
 * 
* @param {Array} myArray: the array input over which to iterate
* @param {Number} number: the input number to check for edge cases
* @return {Array} myArray: if the first parameter is not an array it returns
* array literal, if number is not a number or null it returns the last element in 
* the array
*/
 function last(myArray, number){
   
    if (!Array.isArray(myArray) || number < 0){
            return [];
        }else if(typeof number !== 'number' || number === null){
            return myArray[myArray.length-1];
        }else if(myArray.length < number){
            return myArray;
        }else if(myArray.length !== number)  {
            return myArray.splice(number-1, myArray.length-1);
        }
}
module.exports.last = last;
/** 
* indexOf: Designed to loop over an array, and returns the
* index of the first occurence.
* 
* @param {Array} myArray: the array input over which to iterate
* @param {Value} value: the input value to test when an array index matches
* the with the input 
* @return {Number} i: returns a specific index(number)
*/

 function indexOf(myArray, value){
    for (var i = 0; i < myArray.length; i++){
        
        if (myArray[i] === value){
            
            return i;
        }
           
        
    } return -1;
   
} 

module.exports.indexOf = indexOf;
/** 
 * contains: Designed to loop over an array (myArray). It returns true
 * if an element of myArray matches with the input value. if it 
 * there's no given value or value does not match the content of myArray
 * it returns false.
 * 
 * 
* @param {Array} myArray: the array input over which to iterate
* @param {Value} value: the input value to test if the condition is true or 
* false.
* @return {Boolean} boolean: returns either true or false
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

/** unique: Designed to loop over array <input> and copy's
 * an array and remove all duplicates from that copied array.
* 
* @param {Array} input: the input array over which to iterate
* @return {Array} results: returns the array input without duplicates
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
* test Function to each element in the array after which the element
* is pushed into a new array. The function fileter returns a new array of elements 
* for which calling test<function> returned true
* 
* @param {Array} array: The array over which to iterate.
* @param {Function} test: The Function to be applied to each value in the 
* array 
* @return {Array} results: returns a new array
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
 * test Function to each value in the array. It only pushes elements of the array into
 * the new array results for which the test function is false.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * array
* @return {Array} results: returns a new array of elements for which calling <function> 
* returned false.
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
 * of 2 sub arrays. The sub arrays store numbers and are stored at first index of the new
 * array if test function is true. If test function is false it stores the sub array element 
 * at the second index of the new array result1.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * array and checks for edge cases
 * @return {Array} result1: returns a new array.
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
 * @param {Property} value: The property of the object to which each key value pair 
 * of the property can be transformed into an array of elements.
 * @return {Array} list: The new array to be returned after pushing each value of the 
 * array of object into a new list array.
*/
function pluck(array, value){
     var list = [];
    each(array, function(element, index, array){
        
        list.push(element[value]);
    }); return list;
}
module.exports.pluck = pluck;
/** 
 * every: Designed to loop over a collection, Array or Object, and calls the function
 * argument on the elements in the array and if the return value from that function is 
 * true/ or false, then our every function will return true or false. 
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection
 * @return {Value} x: If the return value of calling <function> for every element is true, returns true
 *  If even one of them returns false, returns false
 *  If <function> is not provided, returns true if every element is truthy, otherwise it returns false
 * 
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
 * some: Designed to loop over a collection, Array or Object, and and calls the function
 * argument on the elements in the array and if the return value from that function is 
 * true/ or false, then our every function will return true or false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection
 * @return {Value} x:If the return value of calling <function> is true for at least one element, returns true
*   If it is false for all elements, returns false
*   If <function> is not provided return true if at least one element is truthy, otherwise it returns false
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
 * reduce: Designed to loop over a collection(Array) and applies the 
 * test Function to each value in the collection by saving the most recent result
 * seed as the previous result and return the previous result after On the very first iteration, uses <seed> as the "previous result"
 * If no <seed> was given, uses the first element/value of <collection> as <seed> and continue to the next element
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @param {Number} seed: The seed where to save the previous element
 * @return {Number} previousResult: return value of <function> as the "previous result"
 * for the next iteration
 * After the last iteration, return the return value of the final <function> call
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
 * @param {Object} object1: The object over which properties are copied to
 * @param {Object} object2: The object which its properties are being copied
*/
 function extend (object1,...object2){
    
        
        Object.assign(object1,...object2);
         
     return object1;
}
module.exports.extend = extend;