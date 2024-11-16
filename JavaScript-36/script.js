let obj = {
    key1:'adasd',
    key2:121,
    key3:{
        key31:'asdas'
    },
    key4:['mosnabi','ratul',121,1021.22]
}
localStorage.setItem('jj',JSON.stringify(obj))

let a = JSON.parse(localStorage.getItem('jj'))
console.log(a);


