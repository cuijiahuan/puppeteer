const puppeteer = require('puppeteer');
const autoForm = async (url) => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    page.setViewport({
        width: 1376,
        height: 768,
    });
    await page.goto(url, {
        waitUntil: 'networkidle2',
    });
    await page.focus('#kw');
    await page.type('#kw','途家', {
        delay: 1000,
    });
    await page.keyboard.press('Enter');
};

module.export = autoForm;

if (require.main === module) {
    autoForm('http://baidu.com');
}