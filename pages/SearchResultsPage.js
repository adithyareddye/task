const { expect } = require('@playwright/test');

class SearchResultsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.searchTags = page.locator('.market_searchedForTerm');
    this.resultRows = page.locator('div.market_listing_row');
    this.itemTypeInfo = page.locator('#largeiteminfo_item_type');
    this.itemDescriptor = (heroName) =>
      page.locator('div.descriptor', { hasText: heroName });

    this.priceSortButton = page.locator('div[data-sorttype="price"]').first();
    this.priceElements = page.locator('span.normal_price[data-price]');
  }

  async verifyTags(expectedTags) {
    for (let i = 0; i < expectedTags.length; i++) {
      await expect(this.searchTags.nth(i)).toContainText(expectedTags[i]);
    }
  }

  async waitForResults() {
    await expect(this.resultRows.first()).toBeVisible();
  }

  async clickFirstResult() {
    await this.resultRows.first().click();
  }

  async sortByPriceDescending() {
    await this.priceSortButton.click();
    await this.page.waitForResponse((response) =>
      response.url().includes('search/render') && response.status() === 200
    );
    await this.page.waitForSelector('span.normal_price[data-price]');
    await this.page.waitForTimeout(500); // wait for sorting effect
  }

  async getPrices() {
    return await this.page.$$eval(
      'span.normal_price[data-price]',
      (elements) => elements.map((el) => parseFloat(el.getAttribute('data-price')))
    );
  }
}

module.exports = SearchResultsPage;

