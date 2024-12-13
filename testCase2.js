const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    try {
        await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');

        await page.fill('input[id="username"]', 'admin');
        await page.fill('input[type="password"]', 'password123');
        await page.click('button[type="submit"]');

        await page.click('text=Web Application');
        console.log("Navigated to 'Web Application'");

        const featureExists = await page.isVisible("h3:has-text('Fix navigation bug')");
        const highPriorityExists = await page.isVisible("span:has-text('Bug')");

        if (featureExists && highPriorityExists) {
            console.log("The tag 'Bug' exists");
        } else {
            console.log("The tag 'Bug' does not exist");
        }

        console.log("Test completed");
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
       
        await browser.close();
    }
})();
