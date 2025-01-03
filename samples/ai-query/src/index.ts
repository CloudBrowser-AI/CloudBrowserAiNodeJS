import puppeteer from "puppeteer";
import { AIService, BrowserService, ResponseStatus } from "cloudbrowserai";

const cloudBrowserToken = "YOUR CLOUDBROWSER.AI TOKEN";
const openAiToken = "YOUR OPEN AI TOKEN";

async function main() {
    const html = await getHTML("http://www.cloudbrowser.ai");

    if (!html) return;

    const ai = new AIService(cloudBrowserToken, openAiToken);

    const rp = await ai.query({
        html: html,
        prompt: "Give me the lowest price",
        responseFormat: JSON.stringify({
            response: "number",
            required: ["response"],
        }),
    });

    console.log("The lowest price is:", JSON.parse(rp.response).response);
}

async function getHTML(address: string): Promise<string | null> {
    const browserService = new BrowserService(cloudBrowserToken);

    const rp = await browserService.open();

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
    const content = await page.content();

    await browser.close();
    return content;
}

main().catch(console.error);
