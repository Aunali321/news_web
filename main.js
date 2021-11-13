
const dummyData = 
        {
        "title":"Elon Musk Trolled Jeff Bezos, After US Judge Cleared NASA's SpaceX Moon Lander",
        "author":"Bharat Sharma",
        "published_date":"2021-11-05 12:22:02",
        "published_date_precision":"full",
        "link":"https://www.indiatimes.com/technology/news/nasa-spacex-moon-lander-elon-musk-jeff-bezos-553442.html",
        "clean_url":"indiatimes.com",
        "summary":"The US Court of Federal Claims on Thursday ruled in favour of Elon Musk's SpaceX while sidelining Jeff Bezos' Blue Origin after the latter filed a lawsuit against NASA for giving SpaceX an expensive lunar lander contract.Also Read: Elon Musk Will End World Hunger With $6 Billion, If UN Has The Right Plan SpaceX + NASAAfter months of back-and-forth jibes on Twitter (yes, Musk, we're looking at you), the court bought long-sought resolution for NASA, SpaceX, and Blue Origin alike.In classic Musk style, a meme-inspired reaction followed the news from the 2012 film\"Dredd saying you have been judged.",
        "rights":"indiatimes.com",
        "rank":325,
        "topic":"tech",
        "country":"IN",
        "language":"en",
        "media":"https://im.indiatimes.in/content/2021/Oct/Facebook-Image---2021-10-11T190559578_61643e4941346.jpg",
        "is_opinion":false,
        "twitter_account":"NULL",
        "_score":24.066694,
        "_id":"f51405161b37b8b19dfd190d64a208cf"
        }
        
var titleElement = document.getElementById("card-title1");
var descriptionElement = document.getElementById("card-description1");
var imgElement = document.getElementById("overlay-img-news");
var getNewsElement = document.getElementById("getbutton");
var btnElement = document.getElementById("btn1");

// getNewsElement.addEventListener("click", async function() {
// await getNews();
// });

btnElement.addEventListener("click", function(){
titleElement.innerHTML = dummyData.title;
descriptionElement.innerHTML = dummyData.summary;
imgElement.src = dummyData.media;
btnElement.href = dummyData.link;
});
