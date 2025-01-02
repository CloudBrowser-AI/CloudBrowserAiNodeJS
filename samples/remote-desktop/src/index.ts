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

    const rmt = await svc.startRemoteDesktop(rp.address);
    console.log("Remote desktop address:");
    console.log(
        `https://browser.cloudbrowser.ai${obtainId(rp.address)}/${rmt.password}`
    );
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await svc.stopRemoteDesktop(rp.address);
    console.log("Remote Desktop closed");
}

function obtainId(address: string): string {
    const pattern = /\.ai\/(.*?)\/devtools/;
    const match = address.match(pattern);
    return match ? match[1] : "";
}

main().catch(console.error);
