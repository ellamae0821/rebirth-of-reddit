/*jshint esversion: 6*/
console.log("SANITY IS DEAD");



var mainContainer = document.getElementById("context");


//title
//photo = source:
//author
//datestamp
//views
//
//upvotes or comments

//moment js

var photoReq = new XMLHttpRequest();
photoReq.addEventListener("load", getPhoto);
photoReq.open('GET', "https://www.reddit.com/r/EarthPorn.json");
photoReq.send();

function getPhoto () {
  var content = JSON.parse(this.responseText).data.children;
  var i = 0, len = content.length;
  for(i+=i; i < len; i++){

    var everyPost = document.createElement("div");
    everyPost.className = "postBox";
    everyPost.style.height = "500px";
    everyPost.style.width = "330px";
    mainContainer.appendChild(everyPost);


    var eachPhoto = document.createElement("div");
    eachPhoto.className = "imgBox";
    eachPhoto.style.height = "200px";
    eachPhoto.style.width = "300px";
    imageUrl = content[i].data.preview.images[0].source.url;
    eachPhoto.style.backgroundImage = `url('${imageUrl}')`;
    everyPost.appendChild(eachPhoto);
    console.log(content);

    var eachTitle = document.createElement("h5");
    eachTitle.className = "titleBox";
    eachTitle.innerHTML = content[i].data.title;
    everyPost.appendChild(eachTitle);

    var eachAuthor = document.createElement("h6");
    eachAuthor.className = "eachAuthor";
    eachAuthor.innerHTML = "posted by: " + content[i].data.author;
    everyPost.appendChild(eachAuthor);
  }
}

/*var logo = document.getElementsClassName("logo");
logo.style.height = "100px";
logo.stle.width = "100%";
logo.style.backgroundImage = "url('${/assets/bg.jpg}')";*/


//"url(${imageUrl})";

