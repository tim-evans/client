import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['category-list', 'test-category-list'],

  categorySorting: ['totalAddonCount:desc'],
  categoriesSortedByAddonCount: Ember.computed.sort('categories', 'categorySorting')
});
