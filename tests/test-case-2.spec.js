const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const CommunityMarketPage = require('../pages/CommunityMarketPage');
const SearchFiltersPage = require('../pages/SearchFiltersPage');
const SearchResultsPage = require('../pages/SearchResultsPage');

test('Test Case 2 - Steam Market: prices sorting', async ({ page, baseURL }) => {
  const home = new HomePage(page);
  const market = new CommunityMarketPage(page);
  const filters = new SearchFiltersPage(page);
  const results = new SearchResultsPage(page);

  // 1. Open homepage
  await home.open(baseURL);

  // 2. Navigate to Community Market
  await market.navigateToMarket();
  await market.openAdvancedSearch();

  // 3. Select game(s): Dota 2
  await filters.selectGames(['570']);
  await expect(page.locator('#app_option_570')).toContainText('Dota 2');

  // 4. Select hero: Anti-Mage
  await filters.selectHero('Anti-Mage');
  await expect(filters.heroDropdown).toHaveValue(/tag_npc_dota_hero_antimage/);

  // 5. Select rarity: Uncommon
  await filters.checkRarities(['Uncommon']);
  await expect(page.locator('#tag_570_Rarity_Rarity_Uncommon')).toBeChecked();

  // 6. Search
  await filters.clickSearch();

  // 7. Verify tags
  await results.verifyTags(['Dota 2', 'Anti-Mage', 'Uncommon']);
  await results.waitForResults();

  // 8. Sort by price (desc)
  await results.sortByPriceDescending();

  // 9. Check prices descending
  const prices = await results.getPrices();
  for (let i = 1; i < prices.length; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i - 1]);
  }
});



