
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * Search event handlers.
 *
 * @package     omeka
 * @subpackage  neatline
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Editor.Search', function(
  Search, Neatline, Backbone, Marionette, $, _) {


  /**
   * Udpate the records collection and render the list.
   *
   * @param {Object} records: The new records collection.
   */
  var paginate = function(records) {
    Search.__view.updatePagination({
      prev:   '#',
      next:   '#',
      start:  records.offset+1,
      end:    records.offset+records.length,
      total:  records.count
    });
  };

  Neatline.commands.addHandler('editor:search:paginate', paginate);
  Neatline.vent.on('editor:records:update', paginate);


});