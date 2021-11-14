const URL =
  "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const URL1 = "https://jsonplaceholder.typicode.com/todos/1";

const newsContainerElement = document.getElementById('newsContainer');
const carousel0Element = document.getElementById('carousel0');
const carousel1Element = document.getElementById('carousel1');
const carousel2Element = document.getElementById('carousel2');
const carousel3Element = document.getElementById('carousel3');

// var getNewsElement = document.getElementById("getbutton");


// getNewsElement.addEventListener("click", async function() {
// await getNews();
// });

async function getNews() {
  await fetch('/api', {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    //console.log(res);
    res.json().then((data) => {
      let html = '';
      if(data.articles) {
        var carousel0Data = data.articles[40];
        var carousel1Data = data.articles[41];
        var carousel2Data = data.articles[42];
        var carousel3Data = data.articles[43];

        carousel0Element.innerHTML = `
        <div class="container-fluid">
        <div class="overlay-image" style="background-image: url(${carousel0Data.urlToImage});"></div>
        <a href="${carousel0Data.url}" id="carouselHeadline">${carousel0Data.title}</a>
        <p id="carousel-p">${carousel0Data.description}</p>
        </div>
        `;
        carousel1Element.innerHTML = `
        <div class="container-fluid">
        <div class="overlay-image" style="background-image: url(${carousel1Data.urlToImage});"></div>
        <a href="${carousel0Data.url}" id="carouselHeadline">${carousel1Data.title}</a>
        <p id="carousel-p">${carousel1Data.description}</p>
        </div>
        `;
        carousel2Element.innerHTML = `
        <div class="container-fluid">
        <div class="overlay-image" style="background-image: url(${carousel2Data.urlToImage});"></div>
        <a href="${carousel0Data.url}" id="carouselHeadline">${carousel2Data.title}</a>
        <p id="carousel-p">${carousel2Data.description}</p>
        </div>
        `;
        carousel3Element.innerHTML = `
        <div class="container-fluid">
        <div class="overlay-p" style="background-image: url(${carousel3Data.urlToImage});"></div>
        <a href="${carousel0Data.url}" id="carouselHeadline">${carousel3Data.title}</a>
        <p id="carousel-item">${carousel3Data.description}</p>
        </div>
        `;

        data.articles.forEach(article => {
          html += ` 
          <div class="col-sm-12 col-md-6 col-lg-4 py-3" id="col">
            <div class="card" id="newsCard">
              <div class="card-body">
                <a href="${article.url}" class="card-title" id="link">${article.title}</a>
                <img src="${article.urlToImage}" alt="" class="card-img-top p-3" id="overlay-img-news">
                <p class="card-text">
                  ${article.description}
                </p>
              </div>
            </div>
          </div>
          `
        });       
      } else {
        html = "Sorry, We didn't find any news"
      }

      newsContainerElement.innerHTML = html;
        });
  });
}

getNews();