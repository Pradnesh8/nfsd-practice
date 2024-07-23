const puppeteer = require('puppeteer');

// IIFE - Immediately Invoke Function Expression
(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--window-size=1920,1080"],
        slowMo: 100
    });
    const page = await browser.newPage();

    // Navigate the page to a URL.
    await page.goto('https://namastedev.com/');

    // Set screen size.
    await page.setViewport({ width: 1920, height: 1080 });
    console.log("Page loaded")
    const getStartedButton = ".darkEnroll"

    await page.waitForSelector(getStartedButton);
    await page.click(getStartedButton)
    console.log("courses page loaded")

    const enrollButton = ".bg-success-btn"
    await page.waitForSelector(enrollButton);
    await page.click(enrollButton)
    console.log("course details page loaded")

    await browser.close()
})()