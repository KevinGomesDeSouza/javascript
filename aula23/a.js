d1 = document.getElementById ('d1')
d2 = document.getElementById ('d2')
d3 = document.getElementById ('d3')
d4 = document.getElementById ('d4')
d5 = document.getElementById ('d5')


console.log(d1)

var DivArray = [d1,d2,d3,d4,d5]

// console.log (DivArray)
// for (let c = 0; c < DivArray.length; c++) {
    
//     DivArray [c].innerHTML = 'asdasd'

// }

const HTMLcollection = [...document.getElementsByTagName ('div')]

console.log (HTMLcollection.map ((e)=> document.write ('<p>' + e.innerHTML + '</p>')))
 

