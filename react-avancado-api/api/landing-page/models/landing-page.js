'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require('axios');
const netlifyWebHook = strapi.config.get('custom.netlifyWebHook')

module.exports = {
  lifecycles: {
    async afterCreate(_, __) {
      netlifyWebHook && axios.post(netlifyWebHook)
    },
    async afterUpdate(_, __, ___) {
      netlifyWebHook && axios.post(netlifyWebHook)
    },
  },
};
