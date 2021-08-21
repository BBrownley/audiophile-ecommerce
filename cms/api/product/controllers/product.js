"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const qs = require("qs");
const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async findByCategory(ctx) {
    // Get category from route param
    const category = ctx.request.url.split("/").slice(-1)[0];

    let entities;

    // Get all entities and filter out the irrelevant ones
    entities = await strapi.services.product.find({ _limit: -1 });
    entities = entities.filter(item => {
      return item.category.name === category;
    });

    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models.product })
    );
  }
};
