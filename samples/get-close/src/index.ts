import puppeteer from "puppeteer";
import { BrowserService, ResponseStatus } from "cloudbrowserai";

const cloudBrowserToken = "YOUR CLOUDBROWSER.AI TOKEN";

async function main() {
    const svc = new BrowserService(cloudBrowserToken);

    const rp = await svc.open();

    if (rp.status !== ResponseStatus.SUCCESS || rp.address == null) {
        console.log(`Error requesting browser: ${rp.status}`);
        return;
    }
    console.log("Browser requested");

    const browser = await puppeteer.connect({
        browserWSEndpoint: rp.address,
        defaultViewport: null,
        slowMo: 0,
    });
    console.log("Browser connected");

    const page = (await browser.pages())[0];
    await page.goto("http://www.cloudbrowser.ai");
    console.log("Web visited");

    browser.disconnect();
    console.log("Browser disconnected");

    const rpGet = await svc.get();

    console.log("Label | Address | Started On | VNC Opened | VNC Pass");
    for (const b of rpGet.browsers) {
        console.log(
            `${b.label} | ${b.address} | ${b.startedOn} | ${b.vncPass !== null} | ${b.vncPass}`
        );
        await svc.close(b.address);
    }
}

main().catch(console.error);
