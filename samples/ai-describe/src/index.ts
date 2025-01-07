import puppeteer from "puppeteer";
import { AIService, BrowserService, ResponseStatus } from "cloudbrowserai";

const cloudBrowserToken = "YOUR CLOUDBROWSER.AI TOKEN";
const openAiToken = "YOUR OPEN AI TOKEN";

async function main() {
    const src = await getImageAddress("http://www.cloudbrowser.ai", "img");

    if (!src) return;

    const ai = new AIService(cloudBrowserToken, {
        openAIConfiguration: { apiKey: openAiToken },
    });

    const rpai = await ai.describe({
        // base64Image: downloadImage(src), // You can send bytes instead of the image URL
        imageUrl: src,
        question: "Is the image red?",
        responseFormat: {
            properties: {
                response: { type: "boolean" },
            },
        },
    });

    console.log("The lowest price is:", JSON.parse(rpai.response).response);
}

async function getImageAddress(
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

    const element = await page.$(selector);
    if (!element) return null;

    const src = await page.evaluate(
        (el, attr) => el.getAttribute(attr),
        element,
        "src"
    );

    await browser.close();
    return src;
}

main().catch(console.error);
