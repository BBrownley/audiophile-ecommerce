"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const qs = require("qs");
const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async getSuggestedItems(ctx) {
    const queryParams = ctx.request.url.split("?")[1].split("&");

    const category = queryParams[0].split("=")[1];
    const itemId = Number(queryParams[1].split("=")[1]);

    let entities = await strapi.services.product.find({ _limit: -1 });

    entities = entities.map(product => {
      return {
        name: product.name,
        category: product.category.name,
        id: product.id,
        image: product.image
      };
    });

    // sort items so that the ones in the current category take priority
    entities = entities.reduce((acc, item) => {
      if (item.category === category) {
        return [item, ...acc];
      }
      return [...acc, item];
    }, []);

    // remove currently selected item from suggested and just take the first three
    entities = entities.filter(item => item.id !== itemId).splice(0, 3);

    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models.product })
    );
  },

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
