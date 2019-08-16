const puppeteer = require('puppeteer');

const savePdf = async (url, path) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({
        width: 1376,
        height: 768,
    });
    await page.goto(url, {
        // 等待网络状态为空闲的时候才执行保存
        waitUntil: 'networkidle2',
    });
    await page.pdf({
        path,
        format: 'A4'
    });
    await browser.close();
};
module.exports = savePdf;


if (require.main === module) {
    // for test
    savePdf('https://cn.bing.com', '../asset/bing.pdf');
}
