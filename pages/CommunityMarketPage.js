const { expect } = require('@playwright/test');

class CommunityMarketPage {
  constructor(page) {
    this.page = page;
    this.communityLink = page.getByRole('link', { name: 'Community' });
    this.marketLink = page.getByRole('link', { name: 'Market' });
    this.marketTitleText = page.locator('span.market_title_text');
    this.advancedSearchButton = page.locator('.market_search_advanced_button');
    this.advancedSearchTitle = page.locator('div.title_text', { hasText: 'Search Community Market' });
  }

  async navigateToMarket() {
    await this.communityLink.hover();
    await this.marketLink.click();
    await expect(this.marketTitleText).toHaveText('Community Market');
  }

  async openAdvancedSearch() {
    await this.advancedSearchButton.click();
    await expect(this.advancedSearchTitle).toBeVisible();
  }
}

module.exports = CommunityMarketPage;
