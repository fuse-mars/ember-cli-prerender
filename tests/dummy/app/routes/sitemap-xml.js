import Ember from 'ember';

// The line below is not needed if you don't have any dynamic segments
import dynamicSegmentResolver from '../utils/dynamic-segment-resolver';

import sitemapEntryFilter from '../utils/sitemap-entry-filter';

export default Ember.Route.extend({
  sitemap: Ember.inject.service(),

  model() {
    const sitemap = this.get('sitemap');

    // The line below is not needed if you don't have any dynamic segments
    sitemap.setDynamicSegmentResolver(dynamicSegmentResolver);

    sitemap.setSitemapEntryFilter(sitemapEntryFilter);

    return sitemap.getModel();
  },
});
