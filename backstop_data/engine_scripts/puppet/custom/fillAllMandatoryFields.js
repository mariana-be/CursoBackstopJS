module.exports = async page => {
    await page.type("#first-name", "Mariana");
    await page.type("#last-name", "Bezerra");
    await page.type("#email", "mariana@mailinator.com");
    await page.click("#agree");
}