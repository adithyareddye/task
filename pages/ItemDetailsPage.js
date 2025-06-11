const { expect } = require('@playwright/test');

class ItemDetailsPage {
  constructor(page) {
    this.page = page;
    this.itemTypeInfo = page.locator('#largeiteminfo_item_type');
  }

  itemDescriptor(heroName) {
    return this.page.locator('div.descriptor', { hasText: heroName });
  }

  async verifyItemDetails({ rarity, heroName }) {
    await expect(this.itemTypeInfo).toContainText(rarity);
    await expect(this.itemDescriptor(heroName)).toContainText(heroName);
  }
}

module.exports = ItemDetailsPage;
