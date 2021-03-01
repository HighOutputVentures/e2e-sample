import { Given ,Then,When} from '@cucumber/cucumber';
import {By, until, Key} from 'selenium-webdriver';
import { Context } from '../../../../support/helpers';

// Locate by CSS ID, unique identifier

Given(`browser is at Amazon`,async function(this:Context) {
  await this.driver.get('https://www.amazon.com/')
});

When(`user clicks Amazon signin`,async function (this:Context) {
  await this.driver.executeScript("arguments[0].click();", await this.driver.findElement(By.id(`a-autoid-0-announce`)))
});

Then(`signin page is shown`, async function (this:Context) {
  await this.driver.wait(until.elementLocated(By.id(`ap_email`)))
});

// Locate by CSS Name, useful in forms

When(`user searches {string}`,async function (this:Context, searchStr:string) {
  await this.driver.findElement(By.name('field-keywords')).sendKeys(searchStr)
  await this.driver.findElement(By.name('field-keywords')).sendKeys(Key.ENTER)
});

Then(`result for hotdog is shown`, async function (this:Context) {
  await this.driver.wait(until.elementLocated(By.xpath(`//span[text()='hot dog']`)))
});

// Locate by Class returns 1st element of same class

When(`user searches {string} in class search`,async function (this:Context, searchStr:string) {
  await this.driver.findElement(By.className('nav-input')).sendKeys(searchStr)
  await this.driver.findElement(By.className('nav-input')).sendKeys(Key.ENTER)
});

// Locate by XPATH, last resort

When(`user clicks Cart`, async function (this:Context) {
  await this.driver.findElement(By.xpath(`//a[@id='nav-cart']`)).click()
});

Then(`cart empty page is shown`, async function (this:Context) {
  await this.driver.wait(until.elementLocated(By.xpath(`//div[@class='a-row sc-your-amazon-cart-is-empty']`)))
});
