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

        const taskExists = await page.isVisible('h3.font-medium.text-gray-900.mb-2');
        if (taskExists) {
            console.log("'Implement user authentication' task is in the 'To Do' column");
        } else {
            console.log("'Implement user authentication' task not found in 'To Do' column");
        }

        const featureExists = await page.isVisible("span:has-text('Feature')");
        const highPriorityExists = await page.isVisible("span:has-text('High Priority')");

        if (featureExists && highPriorityExists) {
            console.log("Tag 'Feature' exists");
            console.log("Tag 'High Priority' exists");
        } else {
            if (!featureExists) console.log("The tag 'Feature' does not exist");
            if (!highPriorityExists) console.log("The tag 'High Priority' does not exist");
        }

        console.log("Test completed");
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        await browser.close();
    }
})();
