<?php

/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * Record text pane.
 *
 * @package     omeka
 * @subpackage  neatline
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

?>

<div class="control-group">

  <?php echo common('neatline/input', array(
      'name'  => 'item-id',
      'label' => 'Item',
      'bind'  => 'record.item_id'
  )); ?>

  <?php echo common('neatline/textarea', array(
      'name'  => 'title',
      'label' => 'Title',
      'bind'  => 'record.title'
  )); ?>

  <?php echo common('neatline/textarea', array(
      'name'  => 'body',
      'label' => 'Body',
      'bind'  => 'record.body'
  )); ?>

</div>
