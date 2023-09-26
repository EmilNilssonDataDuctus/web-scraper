import * as cheerio from "cheerio";

const URL_TO_SCRAPE =
  "https://en.wikipedia.org/wiki/List_of_It%27s_Always_Sunny_in_Philadelphia_episodes";

async function getProductData() {
  // fetch page from url
  const response = await fetch(URL_TO_SCRAPE);
  console.log(response);

  // convert response to text
  const text = await response.text();

  const $ = cheerio.load(text);

  const episodeData = [];

  $(".vevent").each((index, element) => {
    const episodeNumber = $(element).find("th").text();
    const episodeTitle = $(element).find(".summary").text();
    episodeData.push({
      episodeNumber,
      episodeTitle,
    });
  });
  console.log("episodeData");
  console.log(episodeData);
  console.log("episodeData");
}

getProductData();
