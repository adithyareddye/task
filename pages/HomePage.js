const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async open(baseURL) {
    await this.page.goto(baseURL);
    await expect(this.page).toHaveURL(/store\.steampowered\.com/);
    await expect(await this.page.title()).not.toBe('');
  }
}

module.exports = HomePage;

