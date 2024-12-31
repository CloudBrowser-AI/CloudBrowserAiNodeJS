import puppeteer from "puppeteer";
import { AIService } from "cloudbrowserai";

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
        responseFormat: JSON.stringify({
            response: "bool",
            required: ["response"],
        }),
    });

    console.log("The lowest price is:", rpai);
}

async function getImageAddress(
    address: string,
    selector: string
): Promise<string | null> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

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
