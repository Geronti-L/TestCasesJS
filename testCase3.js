const { chromium } = require('playwright');

(async () => {
  
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    try {
     
        await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
        await page.fill('input[id="username"]', 'admin');
        await page.fill('input[type="password"]', 'password123');
        await page.click('button[type="submit"]');
        const featureExists = await page.isVisible("h3:has-text('Design system updates')");
        if (featureExists) {
            console.log("Design system updates exists");
        } else {
            console.log("Design system updates does not exist");
        }

       
        const designExists = await page.isVisible("span:has-text('Design')");
        if (designExists) {
            console.log("Design exists");
        } else {
            console.log("Design does not exist");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        
        await browser.close();
    }
})();
