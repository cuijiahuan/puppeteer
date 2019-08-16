const puppeteer = require('puppeteer');
const consoleEnviroment = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({
        width: 1376,
        height: 768,
    });
    await page.goto(url);
    const log = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
        };
    });
    console.log('视窗信息', log);
    
    const htmlHandle = await page.$('html');
    const html = await page.evaluate(body => body.outerHTML, htmlHandle);
    await htmlHandle.dispose();
    console.log('html:', html);

    const bodyInnerHTML = await page.$eval('body', dom => dom.innerHTML);
    console.log('bodyInnerHTML:', bodyInnerHTML);

    await browser.close();
};

module.exports = consoleEnviroment;

if (require.main === module) {
    consoleEnviroment('https://baidu.com')
}