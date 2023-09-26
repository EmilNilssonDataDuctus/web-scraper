import puppeteer from "puppeteer";

const URL_TO_SCRAPE =
  "https://en.wikipedia.org/wiki/List_of_It%27s_Always_Sunny_in_Philadelphia_episodes";

async function getEpisodeData() {
  let browser;
  try {
    // launch browser and open new page
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    // set viewport
    await page.setViewport({
      width: 1080,
      height: 768,
    });

    // change navigation timeout from default 30 seconds to 2 minutes
    page.setDefaultNavigationTimeout(2 * 60 * 1000);

    // navigate to url
    page.goto(URL_TO_SCRAPE)
  } catch (error) {
    console.log(error);
    await browser?.close();
  }
}

getEpisodeData();
