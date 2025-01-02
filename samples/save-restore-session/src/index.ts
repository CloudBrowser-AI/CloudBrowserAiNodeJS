import puppeteer, { Page } from "puppeteer";
import { BrowserService, SessionService, ResponseStatus } from "cloudbrowserai";

const token = "YOUR CLOUDBROWSER.AI TOKEN";

async function main() {
    const svc = new BrowserService(token);

    // FIRST VISIT --------------------------------------------------------------------
    let browser = await openAndConnect(svc);
    if (!browser) return;

    let page = (await browser.pages())[0];

    await page.goto("http://app.cloudbrowser.ai");
    console.log("Web visited");

    await login(page);
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await browser.close();
    console.log("Browser closed");

    // SECOND VISIT -------------------------------------------------------------------
    await new Promise((resolve) => setTimeout(resolve, 1000));

    browser = await openAndConnect(svc);
    if (!browser) return;

    page = (await browser.pages())[0];

    await page.goto("http://app.cloudbrowser.ai");
    console.log("Web visited again");

    // This time, logging in is not necessary.
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await browser.close();
    console.log("Browser closed");

    // CHECK STORED SESSIONS ----------------------------------------------------------
    const sessions = new SessionService(token);
    console.log("Label | Created On | Last Update");
    const sessionRp = await sessions.list();
    for (const s of sessionRp.sessions ?? []) {
        console.log(`${s.label} | ${s.createdOn} | ${s.lastUpdate}`);
    }

    // REMOVE ONE SESSION
    await sessions.remove("test");
}

async function openAndConnect(svc: BrowserService) {
    const rp = await svc.open({
        label: "SessionSample",
        saveSession: true,
        recoverSession: true,
    });

    if (rp.status !== ResponseStatus.SUCCESS || rp.address == null) {
        console.log(`Error requesting browser: ${rp.status}`);
        return null;
    }
    console.log("Browser requested");

    return await puppeteer.connect({
        browserWSEndpoint: rp.address,
        defaultViewport: null,
        slowMo: 0,
    });
}

async function login(page: Page) {
    await page.type('[type="email"]', "email");
    await page.type('[type="password"]', "password");
    await page.click('[type="submit"]');
}

main().catch(console.error);
