const puppeteer = require('puppeteer');

// IIFE - Immediately Invoke Function Expression
(async () => {
    // Launch the browser and open a new blank page
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--window-size=1920,1080"],
            slowMo: 100
        });
        const page = await browser.newPage();

        // Navigate the page to a URL.
        await page.goto('https://app-netflix-gpt.vercel.app/');

        // Set screen size.
        await page.setViewport({ width: 1920, height: 1080 });
        console.log("Page loaded")

        const getInputUser = "#email"
        await page.waitForSelector(getInputUser);
        await page.type(getInputUser, "test123@gmail.com")
        console.log("email typed")

        const getInputPassUser = "#password"
        await page.waitForSelector(getInputPassUser);
        await page.type(getInputPassUser, "Test@123")
        console.log("password typed")

        const signInButton = ".bg-red-700"
        await page.waitForSelector(signInButton);
        await page.click(signInButton)
        console.log("signedIn")

        const signOut = "button:nth-child(2)"
        await page.waitForSelector(signOut)
        await page.click(signOut)
        console.log("signed out");

        await browser.close()
    } catch (error) {
        console.log("ERROR running E2E testing")
        console.log(error);
    }
})()