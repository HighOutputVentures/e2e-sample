import { After, Before } from '@cucumber/cucumber';
import { Builder } from 'selenium-webdriver';
//import { Options } from 'selenium-webdriver/firefox';
import { Context } from '../support/helpers';



Before({timeout: 30 * 1000},async function (this: Context) {
  this.driver = await new Builder()
    .forBrowser('firefox')
    //.setFirefoxOptions(new Options().addArguments('--headless'))
    .build();
    

    
});

After({timeout: 30 * 1000},async function (this: Context) {
  //await this.driver.close();
});
