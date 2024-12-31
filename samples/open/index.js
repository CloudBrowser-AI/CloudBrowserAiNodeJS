import puppeteer from 'puppeteer';
import { BrowserService } from 'cloudbrowserai';

const apiToken = "YOUR CLOUDBROWSER.AI TOKEN";

const browserService = new BrowserService(apiToken);

async function main() {
    const rp = await browserService.open();
    console.log('Browser opened');

    const browser = await puppeteer.connect({
        browserWSEndpoint: rp.address,
        defaultViewport: null,
        ignoreHTTPSErrors: true,
        slowMo: 0
    });

    const pages = await browser.pages();
    const page = pages[0];
    await page.goto('https://cloudbrowser.ai');

    console.log('Waiting 10 seconds');

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    await delay(10000);

    await browser.close();
    console.log('Browser closed');
}

main().catch(console.error);
