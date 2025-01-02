import puppeteer from "puppeteer";
import { AIService, BrowserService, ResponseStatus } from "cloudbrowserai";

const cloudBrowserToken = "YOUR CLOUDBROWSER.AI TOKEN";
const openAiToken = "YOUR OPEN AI TOKEN";

async function main() {
    const ai = new AIService(cloudBrowserToken, {
        openAIConfiguration: { apiKey: openAiToken },
    });

    const text = await getText("http://www.cloudbrowser.ai", "h1");

    if (!text) return;

    const rp = await ai.translate({
        text: text,
        isoLang: "ES",
    });

    console.log(rp.response);
}

async function getText(
    address: string,
    selector: string
): Promise<string | null> {
    const svc = new BrowserService(cloudBrowserToken);

    const rp = await svc.open();

    if (rp.status !== ResponseStatus.SUCCESS || rp.address == null) {
        console.log("Error requesting browser:", rp.status);
        return null;
    }
    console.log("Browser requested");

    const browser = await puppeteer.connect({
        browserWSEndpoint: rp.address,
        defaultViewport: null,
        slowMo: 0,
    });

    console.log("Browser connected");
    const page = (await browser.pages())[0];

    await page.goto(address);
    const text = await page.evaluate((selector) => {
        const element = document.querySelector(selector);
        return element?.textContent;
    }, selector);

    await browser.close();
    return text ?? null;
}

main().catch(console.error);
