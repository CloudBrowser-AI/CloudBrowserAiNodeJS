import { AIService } from "cloudbrowserai";

const cloudBrowserToken = "YOUR CLOUDBROWSER.AI TOKEN";
const openAiToken = "YOUR OPEN AI TOKEN";

async function main() {
    const ai = new AIService(cloudBrowserToken, {
        openAIConfiguration: { apiKey: openAiToken },
    });

    const rpai = await ai.optimize({
        text: "FakeBrand Boa XL Max Water Pump Pliers in a Festive Christmas Ornament",
        instruction: "SEO for an online store product title",
    });

    console.log("Optimized title:", rpai.response);
}

main().catch(console.error);
