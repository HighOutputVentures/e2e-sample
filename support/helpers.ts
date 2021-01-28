import { WebDriver } from 'selenium-webdriver';
import { Chance } from 'chance';

export interface Context {
    driver: WebDriver;

}

export default new Chance();