const puppeteer = require('puppeteer');

const saveImage = async (url, path) => {
    // 启动browser
    const browser = await puppeteer.launch({
        //关闭无头模式
        headless: false,
        timeout: 30000,
    });
    // 打开页面
    const page = await browser.newPage();
    // browser视窗
    page.setViewport({
        width: 1376,
        height: 768,
    });
    // 地址栏输入网页地址
    await page.goto(url);
    // 截图
    await page.screenshot({ path });
    // 关闭浏览器
    await browser.close();
};

module.exports = saveImage;


if (require.main === module) {
    saveImage('https://cn.bing.com', '../asset/bing.png');
}
