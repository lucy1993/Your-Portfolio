function toggle(element, klass) {
  var classes = element.className.match(/\S+/g) || [],
      index = classes.indexOf(klass);

  index >= 0 ? classes.splice(index, 1) : classes.push(klass);
  element.className = classes.join(' ');
}



function() {
    var allElements = document.getElementsByTagName("section");

    for(var i=0; i < allElements.length; i++){
       console.log(section)
    }

    return matchingItems;
}

console.log(matchingItems)

// var elements = document.querySelector("section");
// console.log(elements)

// const elm = elements.map(elm =>  elm);
// elements.map(elm => {
// 	console.log(elm)
// })
// console.log(elements.length)
// for (var i = 0, len = elements.length; i < len; i++) {
//     // elements[i].style.display = "none";
//     console.log(elements[i])
// }













