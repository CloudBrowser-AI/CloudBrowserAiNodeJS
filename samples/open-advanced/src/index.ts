import puppeteer from "puppeteer";
import { BrowserService, SupportedBrowser } from "cloudbrowserai";

const apiToken = "YOUR CLOUDBROWSER.AI TOKEN";

const browserService = new BrowserService(apiToken);

async function main() {
    const rp = await browserService.open({
        label: "MyCustomBrowser",
        //Chromium is supported but we recommend Chrome for best stealth
        browser: SupportedBrowser.CHROMIUM,
        keepOpen: 10 * 60, //This browser will close after 10 minutes without any Puppeteer connected.
        proxy: {
            host: "IP.0.0.0.1",
            port: "3000",
            password: "password",
            username: "username",
        },
    });
    console.log("Browser opened");

    function delay(time: number) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    if (rp.address == undefined) {
        console.log("Error: " + (rp?.status ?? ""));
    } else {
        const browser = await puppeteer.connect({
            browserWSEndpoint: rp.address,
            defaultViewport: null,
            slowMo: 0,
        });

        const pages = await browser.pages();
        const page = pages[0];
        await page.goto("https://cloudbrowser.ai");

        console.log("Waiting 10 seconds");

        await delay(10000);

        await browser.close();
        console.log("Browser closed");
    }
}

main().catch(console.error);
