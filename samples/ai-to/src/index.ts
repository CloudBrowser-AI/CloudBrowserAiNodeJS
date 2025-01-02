import puppeteer from "puppeteer";
import { AIService, BrowserService, ResponseStatus } from "cloudbrowserai";

const cloudBrowserToken = "YOUR CLOUDBROWSER.AI TOKEN";
const openAiToken = "YOUR OPEN AI TOKEN";

async function main() {
    const ai = new AIService(cloudBrowserToken, {
        openAIConfiguration: { apiKey: openAiToken },
    });

    const html = await getHTML("http://www.cloudbrowser.ai");

    if (!html) return;

    const json = await ai.toJSON({
        html: html,
    });

    const markDown = await ai.toMarkdown({
        html: html,
    });

    const csv = await ai.toCSV({
        html: html,
        headers: "Name,Price,Duration",
    });

    console.log("JSON:", json);
    console.log("Markdown:", markDown);
    console.log("CSV:", csv);
}

async function getHTML(address: string): Promise<string | null> {
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
    const content = await page.content();

    await browser.close();
    return content;
}

main().catch(console.error);