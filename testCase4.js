
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

        const toDoIsVisible = await page.isVisible("h2:has-text('To Do')");
        const pushIsVisible = await page.isVisible("h3:has-text('Push notification system')");
        const featureTag = await page.isVisible("span:has-text('Feature')");

        
        if (toDoIsVisible && pushIsVisible && featureTag) {
            console.log("To Do is visible");
            console.log("Push notification system is visible");
            console.log("'Feature' is visible");
        } else {
            console.log("To Do is not visible");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        
        await browser.close();
    }
})();
