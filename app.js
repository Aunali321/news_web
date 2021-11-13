const URL =
  "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const URL1 = "https://jsonplaceholder.typicode.com/todos/1";

const newsContainerElement = document.getElementById('newsContainer');
var getNewsElement = document.getElementById("getbutton");

getNewsElement.addEventListener("click", async function() {
await getNews();
});

async function getNews() {
  await fetch('http://localhost:3000', {
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
        data.articles.forEach(article => {
          console.log(article);
          html += `
          <div class="col-md">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <img src="${article.urlToImage}" alt="" class="card-img-top" id="overlay-img-news">
                <p class="card-text">
                  ${article.description}
                </p>
                <a href="${article.link}" class="btn btn-primary">Go to news</a>
              </div>
            </div>
          </div>
          `
        });       
      }

      newsContainerElement.innerHTML = html;
        });
  });
}
