function arrayOrObject(collection){
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }

function myEach(collection, callback){
    const newCollection = arrayOrObject(collection)

    for (let i = 0; i < newCollection.length; i++){
    callback(newCollection[i])
}
return collection 
}

function myMap(collection, callback){
    const newCollection = arrayOrObject(collection)

    const newArray = []

    for (let i = 0; i < newCollection.length; i++){
        newArray.push(callback(newCollection[i]))
    }
    return newArray
}

function myReduce(collection, callback, acc){
    let newCollection = arrayOrObject(collection)

    if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }
    const collectionLength = newCollection.length

    for (let i = 0; i < collectionLength; i++){
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc
}

function myFind(collection, predicate){
    const newCollection = arrayOrObject(collection)

    for (let i = 0; i < newCollection.length; i++){
        if (predicate(newCollection[i])) return newCollection[i]
    }
    return undefined
}
function myFilter(collection, predicate){
    const newCollection = arrayOrObject(collection)
    
    const newArray = []

    for (let i = 0;i < newCollection.length; i++){
        if (predicate(newCollection[i])) newArray.push(newCollection[i])
    }
    return newArray
}
function mySize(collection){
    const newCollection = arrayOrObject(collection)

    for (let i = 0; i < newCollection.length; i++){
        return newCollection.length
    }
}
function myFirst(collection, integer = false){
    return (integer) ? collection.slice(0, integer) : collection[0]
}
function myLast(collection, integer = false){
    return (integer) ? collection.slice(collection.length - integer, collection.length) : collection[collection.length - 1]
}
function myKeys(object){
    const keys = []

    for (let key in object){
        keys.push(key)
    }
    return keys
}
function myValues(object){
    const values = [];
    
    for (let key in object){
    values.push(object[key]);
    }
  
    return values;

}
