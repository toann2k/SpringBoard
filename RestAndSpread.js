/* Find Min */
const findMin = (...args)=>Math.min(...args)

/* Merge Objects */
const mergeObject = (obj1, obj2) => ({...obj1, ...obj2})

/*doubleAndReturnArgs */
const doubleAndReturnArgs = (arr, ...args)=>[...arr, ...args.map(v=>v * 2)]

/* Slice and Dice */

const removeRandom = items =>{
    let idx = Math.floor(Math.random()*items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

/** REturn a new array with every item in array1 and array2  */

const extend = (array1, array2)=>{
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values from obj and a new key/value pair */

const addkeyVal = (obj, key, val)=>{
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed */
const removekey = (obj, key)=>{
    delete newObj[key]
    return newObj;
}

/**Combine two objects and return a new object */
const comb = (obj1, obj2)=>{
    return {...obj1, ...obj2};
}

/** return a new object with a modifed key and value */
let newObj = {...obj}
newObj[key] = val;
return newObj

