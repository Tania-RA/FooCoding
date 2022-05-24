fetch("https://www.breakingbadapi.com/api/characters")
  .then(res => res.json())
  .then(data => {
    let divOne = document.querySelector(".container")
    //to access container to add elements into it
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        //element storing data objects
        //displaying these objects
        console.log(element)
        const elementsOfObject = Object.keys(element);
        //elementsOfObject storing key values 
        //console.log(elementsOfObject);
        //display keys of elements
        for (const eachElement of elementsOfObject) {
          //to display values of the keys
          //console.log(element[eachElement]);


          //selective display of name, image, birthday,status
          if (eachElement === "nickname" || eachElement === "img" || eachElement === "name" || eachElement === "birthday" || eachElement === "status") {
            if (element[eachElement] == "Walter White" || element[eachElement] == "Walter White Jr.") {
              //removes Walter White and Walter White Jr.
              break;
            } else if (eachElement === "name") {
              //inserts name element value as h1
              let a = document.createElement("h1");
              let hr = document.createElement("hr");
              a.innerHTML = element[eachElement].toUpperCase();
              divOne.appendChild(hr);
              divOne.appendChild(a);

            } else if (eachElement === "img") {
              //to insert image in img tag for display
              let a = document.createElement("img");
              a.src = element[eachElement];
              divOne.appendChild(a);
            } else {
              let a = document.createElement("h3");
              a.innerHTML = eachElement.toUpperCase() + ': ' + element[eachElement];
              divOne.appendChild(a);
            }
          }

        }
      }
    }
  })

/*
before you start, make sure to change the script src  in index.html
to this file src = "objects.js"
Do you code here
put yourself some challenges and try to acheive them
use console logs to see your results
 */