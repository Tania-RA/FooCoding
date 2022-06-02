'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets', 'anne_of_green_gables', 'the_secret_garden', 'pride_and_prejudice', 'my_sisters_keeper', 'thor', 'superman', 'ironman', 'marvel', 'life_of_pi'
  ];

  // Replace with your own code
  function displayBookTitles() {
    let uList = document.createElement("ul");
    let list;
    let title = document.createElement("h1");
    let statement= document.createElement("p")
    title.innerHTML = "Book titles";
    statement.innerHTML = "Click on each book to get it's details.";
    statement.setAttribute("class", "statement");
    document.body.appendChild(title);
    document.body.appendChild(statement);

    for (let index = 0; index < bookTitles.length; index++) {

      list = bookTitles[index];
      uList.innerHTML += `<li class="${list}">${list}</li>`;
      document.body.append(uList);
    }
    return list;


  }
  displayBookTitles();

  let booksObjects = {
    harry_potter_chamber_secrets: {
      "title": "harry_potter_chamber_secrets",
      "language": "English",
      "author": "Harry",

    },
    anne_of_green_gables: {
      "title": "anne_of_green_gables",
      "language": "English",
      "author": "RRR",

    },
    the_secret_garden: {
      "title": "the_secret_garden",
      "language": "English",
      "author": "XYZ",

    },
    pride_and_prejudice: {
      "title": "pride_and_prejudice",
      "language": "English",
      "author": "ABC",


    },
    my_sisters_keeper: {
      "title": "my_sisters_keeper",
      "language": "English",
      "author": "Auth",

    },
    thor: {
      "title": "thor",
      "language": "Arabic",
      "author": "UVW",

    },
    superman: {
      "title": "superman",
      "language": "Swedish",
      "author": "LMN",


    },
    ironman: {
      "title": "ironman",
      "language": "Spanish",
      "author": "ABB",

    },
    marvel: {
      "title": "marvel",
      "language": "English",
      "author": "ZZH",

    },
    life_of_pi: {
      "title": "life_of_pi",
      "language": "English",
      "author": "BBC",

    }
  }
  console.log(booksObjects);

  /*function bookDetails() {
    let myDiv = document.createElement("div");
    let description = document.createElement("h1");
    document.body.appendChild(myDiv);
    description.innerHTML = "Book Details";
    myDiv.appendChild(description);


    for (const key in booksObjects) {
      if (Object.hasOwnProperty.call(booksObjects, key)) {
        const element = booksObjects[key];
        //console.log(element);
        const elementsOfObject = Object.keys(element);
        //console.log(elementsOfObject);

        for (const iterator of elementsOfObject) {
          let bookLanguage = document.createElement("p");
          let bookAuthor = document.createElement("p");
          //console.log(element[iterator]);
          if (iterator === "title") {
            let bookName = document.createElement("h3");
            bookName.innerHTML = element[iterator].toUpperCase();
            myDiv.appendChild(bookName);
          } else {
            let bookDescription = document.createElement("p");
            bookDescription.innerHTML = iterator.toUpperCase() + ": " + element[iterator];
            myDiv.appendChild(bookDescription);
          }
        }

      }
    }
  }
  bookDetails();*/

  const onClick = (event) => {
    let nameClicked = event.target.className;
    //console.log(nameClicked);
    for (const key in booksObjects) {

      let nameOfBook = booksObjects[key].title;
      let authorOfBook = booksObjects[key].author;
      let languageOfBook = booksObjects[key].language;
      let imageOfBook = booksObjects[key].img;
      //console.log(nameOfBook);
      if (nameOfBook === nameClicked) {
        /*console.log(nameClicked);
        console.log(authorOfBook);
        console.log(languageOfBook);*/
        let myDiv = document.createElement("div");
        myDiv.setAttribute("id", "bookDetails");
        let description = document.createElement("h1");
        let comment = document.createElement("p");
        comment.setAttribute("class", "endNote");
        comment.innerHTML="**OK button currently not working! Button should close the book details!"
        document.body.appendChild(myDiv);
        description.innerHTML = "Book Details";
        myDiv.appendChild(description);
        let bookLanguage = document.createElement("p");
        let bookAuthor = document.createElement("p");
        let bookName = document.createElement("h3");
        let image = document.createElement("img");
        let closeButton = document.createElement("button");
        closeButton.innerHTML = ("OK");
        closeButton.setAttribute("onclick", "closeClick()");
        closeButton.setAttribute("id", "close");
        closeButton.setAttribute("type", "submit");
        bookName.innerHTML = nameOfBook;
        bookAuthor.innerHTML = "Author of Book: " + authorOfBook;
        bookLanguage.innerHTML = "Language: " + languageOfBook;
        image.src = imageOfBook;
        myDiv.appendChild(bookName);
        myDiv.appendChild(image);
        myDiv.appendChild(bookAuthor);
        myDiv.appendChild(bookLanguage);
        myDiv.appendChild(closeButton);
        myDiv.appendChild(comment);
      }

    }
  }
  

  window.addEventListener('click', onClick);

  booksObjects.harry_potter_chamber_secrets.img = "images1.jpg";
  booksObjects.anne_of_green_gables.img = "images.jpg";
  booksObjects.ironman.img = "download1.jpg";
  booksObjects.life_of_pi.img = "download2.jpg";
  booksObjects.marvel.img = "download3.jpg";
  booksObjects.my_sisters_keeper.img = "download4.jpg";
  booksObjects.pride_and_prejudice.img = "download5.jpg";
  booksObjects.superman.img = "download.jpg";
  booksObjects.the_secret_garden.img = "download6.jpg";
  booksObjects.thor.img = "download7.jpg";

  //console.log(booksObjects);

}