
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

        const taskExists = await page.isVisible("//h3[contains(text(),'Offline mode')]");
        if (taskExists) {
            console.log("'Offline mode' task is in the 'In Progress' column");

            const hasFeatureTag = await page.isVisible("(//span[@class='px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800'][normalize-space()='Feature'])[2]");

            const hasHighPriorityTag = await page.isVisible("(//span[@class='px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800'])[1]");

            if (hasFeatureTag && hasHighPriorityTag) {
                console.log("Tags 'Feature' and 'High Priority' are correctly assigned");
            } else {
                console.log("Tags are incorrect or missing");
            }
        } else {
            console.log("'Offline mode' task not found in the 'In Progress' column");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        await browser.close();
    }
})();
