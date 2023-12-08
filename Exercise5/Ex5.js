function arrayuse(){
    let array=["book",5,"chair","window","door"];
    console.log(array);
    array[1]='paper';
    console.log(array);
    array[4]='table';
    console.log(array);
    array.unshift('box');
    console.log(array);
    let removed = array.pop();
    console.log(removed);
    console.log(array);
}
arrayuse();