/*jshint esversion: 6*/
console.log("SANITY IS DEAD");



let mainContainer = document.getElementById("context");


//title
//photo = source:
//author
//datestamp
//views
//
//upvotes or comments

//moment js
var mainSite = "https://www.reddit.com/r/EarthPorn.json";



/*var random = document.getElementById("random");
let randomReq = new XMLHttpRequest();
randomReq.addEventListener("click", openRandom );
randomReq.open("GET", "https://www.reddit.com/r/popular/");
randomReq.send();


*/

let photoReq = new XMLHttpRequest();
photoReq.addEventListener("load", getPhoto);
photoReq.open('GET', "https://www.reddit.com/r/EarthPorn.json");
photoReq.send();

function getPhoto () {
  let content = JSON.parse(this.responseText).data.children;
  var i = 0, len = content.length;
  for(i+=i; i < len; i++){

    var everyPost = document.createElement("div");
    everyPost.className = "postBox";
    everyPost.style.height = "400px";
    everyPost.style.width = "300px";
    everyPost.innerHTML = "";
    mainContainer.appendChild(everyPost);


    let eachPhoto = document.createElement("div");
    eachPhoto.className = "imgBox";
    eachPhoto.style.height = "200px";
    eachPhoto.style.width = "300px";
    imageUrl = content[i].data.preview.images[0].source.url;
    eachPhoto.style.backgroundImage = `url('${imageUrl}')`;
    everyPost.appendChild(eachPhoto);

    let eachTitle = document.createElement("h5");
    eachTitle.className = "titleBox";
    var titleUrl = content[i].data.title;
    eachTitle.innerHTML = titleUrl;
    everyPost.appendChild(eachTitle);

    let eachAuthor = document.createElement("div");
    eachAuthor.className = "eachAuthor";
    eachAuthor.innerHTML = "posted by: " + content[i].data.author + " ●";
    everyPost.appendChild(eachAuthor);

    let timeCreated = document.createElement("div");
    timeCreated.className = "timeCreated";
    let timeData = content[i].data;
    timeCreated.innerHTML = moment.unix(timeData.created_utc).fromNow() + " ●";
    everyPost.appendChild(timeCreated);

    let eachVotes = document.createElement("div");
    eachVotes.className = "eachVotes";
    eachVotes.innerHTML = `${content[i].data.ups}` + " upvotes";
    everyPost.appendChild(eachVotes);


  }
}




