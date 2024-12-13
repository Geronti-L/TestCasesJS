
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    try {
        await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
        await page.fill('input[id="username"]', 'admin');
        await page.fill('input[type="password"]', 'password123');
        await page.click('button[type="submit"]');
        await page.click('text=Mobile Application');
        console.log("Navigated to 'Mobile Application'");


        const doneExists = await page.isVisible("//h3[normalize-space()='App icon design']");
        if (doneExists) {
   
            const hasFeatureTag = await page.isVisible('span:has-text("Design")');
            if (hasFeatureTag) {
                console.log("Tag 'Design' is correctly assigned");
            } else {
                console.log("Tag 'Design' is not present");
            }
        } else {
            console.log("'App icon design' task not found");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
      
        await browser.close();
    }
})();
