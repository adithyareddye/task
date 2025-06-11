/* / SteamMarketPage.js
 const { expect } = require('@playwright/test');

class SteamMarketPage {
  /*
   * @param {import('@playwright/test').Page} page
   
  constructor(page) {
    this.page = page;

    // Locators
    this.communityLink = page.getByRole('link', { name: 'Community' });
    this.marketLink = page.getByRole('link', { name: 'Market' });
    this.marketTitleText = page.locator('span.market_title_text');
    this.advancedSearchButton = page.locator('.market_search_advanced_button');
    this.advancedSearchTitle = page.locator('div.title_text', { hasText: 'Search Community Market' });

    this.gameDropdown = page.locator('#app_option_0_selected');
    this.heroDropdown = page.locator('select[name="category_570_Hero[]"]');
    this.searchButton = page.locator('div.btn_medium.btn_green_white_innerfade').filter({ hasText: 'Search' });
    this.searchTags = page.locator('.market_searchedForTerm');
    this.resultRows = page.locator('div.market_listing_row');
    this.itemTypeInfo = page.locator('#largeiteminfo_item_type');
    this.itemDescriptor = (heroName) => page.locator('div.descriptor', { hasText: heroName });
    this.priceSortButton = page.locator('div[data-sorttype="price"]').first();
    this.priceElements = page.locator('span.normal_price[data-price]');
  }

  async navigateToCommunityMarket() {
    await this.communityLink.hover();
    await this.marketLink.click();
    await expect(this.page).toHaveURL(/market/);
    await expect(this.marketTitleText).toHaveText('Community Market');
  }

  async openAdvancedSearch() {
    await this.advancedSearchButton.click();
    await expect(this.advancedSearchTitle).toBeVisible();
  }

  async selectGames(appIds) {
    await this.gameDropdown.click();
    for (const appId of appIds) {
      const option = this.page.locator(`#app_option_${appId}`);
      await option.click();
      // For Dota 2, can add specific assert outside or inside test
    }
  }

  async selectHero(heroName) {
    await this.heroDropdown.selectOption({ label: heroName });
  }

  async checkRarities(rarities) {
    for (const rarity of rarities) {
      const checkbox = this.page.locator(`#tag_570_Rarity_Rarity_${rarity}`);
      await checkbox.check();
      // Assertions done in tests
    }
  }

  async clickSearch() {
    await this.searchButton.click();
  }

  async waitForResults() {
    await expect(this.resultRows.first()).toBeVisible();
  }

  async clickFirstResult() {
    await this.resultRows.first().click();
  }

  async sortByPriceDescending() {
    await this.priceSortButton.click();
    await this.page.waitForResponse(response =>
      response.url().includes('search/render') && response.status() === 200
    );
    await this.page.waitForSelector('span.normal_price[data-price]');
    await this.page.waitForTimeout(500); // allow for animations/dynamic updates
  }

  async getPrices() {
    return await this.page.$$eval('span.normal_price[data-price]', els =>
      els.map(el => parseFloat(el.getAttribute('data-price')))
    );
  }
}

module.exports = SteamMarketPage; */

