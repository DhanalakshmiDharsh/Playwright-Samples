export function getValueByPath(obj, path){
    return path.split('.').reduce((acc, key) => acc ?. [key], obj)
}


// function getValueByPath(obj, path){
//     return path.split('.').reduce((acc, key) => acc ?. key, obj)
// }