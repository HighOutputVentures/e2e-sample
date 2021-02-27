import { Given ,Then,When} from '@cucumber/cucumber';
import {By, until,Key} from 'selenium-webdriver';
import { Context } from '../../../../support/helpers';

Given(`browser is at Google`,async function(this:Context) {
  await this.driver.get('https://www.google.com');
});

When(`user search {string}`,async function (this:Context, searchStr:string) {
  await this.driver.findElement(By.name('q')).sendKeys(searchStr);
  await this.driver.findElement(By.name('q')).sendKeys(Key.ENTER);
});

Then(`related page about RED is shown`, async function (this:Context) {
  await this.driver.wait(until.elementLocated(By.xpath(`//h3[text()='Images for RED']`)));
});

When(`user enters {string} at search bar`,async function (this:Context, searchStr:string) {
  await this.driver.findElement(By.name('q')).sendKeys(searchStr);
});

When(`clicks search button`,async function (this:Context) {
  await this.driver.executeScript("arguments[0].click();", await this.driver.findElement(By.xpath(`//div[@jsname='VlcLAe']//input[@name='btnK']`)))
})

Then(`related page about BLUE is shown`, async function (this:Context) {
  await this.driver.wait(until.elementLocated(By.xpath(`//h3[text()='Images for BLUE']`)));
});