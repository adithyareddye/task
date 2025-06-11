class SearchFiltersPage {
  constructor(page) {
    this.page = page;
    this.gameDropdown = page.locator('#app_option_0_selected');
    this.heroDropdown = page.locator('select[name="category_570_Hero[]"]');
    this.searchButton = page.locator('div.btn_medium.btn_green_white_innerfade', { hasText: 'Search' });
  }

  async selectGames(appIds) {
    await this.gameDropdown.click();
    for (const appId of appIds) {
      const option = this.page.locator(`#app_option_${appId}`);
      await option.click();
    }
  }

  async selectHero(heroName) {
    await this.heroDropdown.selectOption({ label: heroName });
  }

  async checkRarities(rarities) {
    for (const rarity of rarities) {
      const checkbox = this.page.locator(`#tag_570_Rarity_Rarity_${rarity}`);
      await checkbox.check();
    }
  }

  async clickSearch() {
    await this.searchButton.click();
  }
}

module.exports = SearchFiltersPage;
