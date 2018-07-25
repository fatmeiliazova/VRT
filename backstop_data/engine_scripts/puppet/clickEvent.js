await page.click('body > div > p:nth-child(3) > a');

module.exports = async (page, scenario) => {
    var clickEvent = scenario.clickEvent;
    var postInteractionWait = scenario.postInteractionWait;

    if (clickEvent) {
        for (const clickEventIndex of [].concat(clickEvent)) {
            await page.waitFor(clickEventIndex);
            await page.click(clickEventIndex);
        }
    }

    if (postInteractionWait) {
        await page.waitFor(postInteractionWait);
    }
};