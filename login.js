const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    try {
        await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');

        await page.fill('input[id="username"]', 'admin');
        await page.fill('input[type="password"]', 'password123');

        await page.click('button[type="submit"]');
        console.log("Test completed");
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        await browser.close();
    }
})();
