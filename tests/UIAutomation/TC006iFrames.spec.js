const{test,expect} = require('@playwright/test');  //import {test, expect} from '@playwright/test';

const baseURL = 'https://ui.vision/demo/webtest/frames/'

test ('iFrames Test',async({page}) => {
    await page.goto(baseURL);
    //count the number of frames on the page 
    const allFrames = page.frames().length;
    console.log("Number of frames:", allFrames);  
    //ما 7 تا داریم چراکه فقط ای فریم ها ر ونمیشناسه فریم اصلی و ناپیدا روهم میشماره!

    //get the first frame
    const firtFrame = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await firtFrame.locator('[name="mytext1"]').fill('Hello from Frame 1');

    //get the second frame
    const frame2 = await page.frameLocator('frame[src="frame_2.html"]').locator('[name="mytext2"]');
    await frame2.fill('John Doe');
    await page.waitForTimeout(4000);

    //get the third frame +fill form
    const secondFrame = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    const googleFormiFrame = await page.frame({url:'https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true'})
    console.log("Google Form iFrame:", googleFormiFrame);
    await googleFormiFrame.locator("label[for='i9'] span[class='aDTYNe snByac OvPDhc OIC90c']").click();
    await page.waitForTimeout(4000);



})