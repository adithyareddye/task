const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const CommunityMarketPage = require('../pages/CommunityMarketPage');
const SearchFiltersPage = require('../pages/SearchFiltersPage');
const SearchResultsPage = require('../pages/SearchResultsPage');
const ItemDetailsPage = require('../pages/ItemDetailsPage');

test('Test Case 1 - Steam Market: advanced search', async ({ page, baseURL }) => {
  const home = new HomePage(page);
  const market = new CommunityMarketPage(page);
  const filters = new SearchFiltersPage(page);
  const results = new SearchResultsPage(page);
  const item = new ItemDetailsPage(page);

  // 1. Open homepage
  await home.open(baseURL);

  // 2. Navigate to Community Market
  await market.navigateToMarket();
  //await market.verifyMarketPage();

  // 3. Open advanced search filters
  await market.openAdvancedSearch();

  // 4. Select game(s) "Dota 2"
  await filters.selectGames(['570']);
  await expect(page.locator('#app_option_570')).toContainText('Dota 2');

  // 5. Select hero "Phantom Assassin"
  await filters.selectHero('Phantom Assassin');
  await expect(filters.heroDropdown).toHaveValue(/tag_npc_dota_hero_phantom_assassin/);

  // 6. Select rarity "Rare"
  await filters.checkRarities(['Rare']);
  await expect(page.locator('#tag_570_Rarity_Rarity_Rare')).toBeChecked();

  // 7. Click search button
  await filters.clickSearch();

  // 8. Verify search tags appear correctly
  await results.verifyTags(['Dota 2', 'Phantom Assassin', 'Rare']);
  await results.waitForResults();

  // 9. Click first result item
  await results.clickFirstResult();

  // 10. Verify item details page content
  await item.verifyItemDetails({ rarity: 'Rare', heroName: 'Phantom Assassin' });
});
