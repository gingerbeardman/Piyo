/**
 * Creates a filter based on the serialized filter.
 *
 * @param !serializedFilter the serialized filter value.
 */
function Filter(serializedFilter) {
  this.hostTxt_ = $('<input type="text" placeholder="Add a new hostname pattern. e.g., *.google.com*" size="40" />');
  this.allowOption_ = $('<option value="true">').append('Allow');
  this.blockOption_ = $('<option value="false">').append('Block');
  this.behaviorSelect_ = $('<select>').append(this.allowOption_, this.blockOption_);
  this.commentTxt_ = $('<input type="text" placeholder="Comment" size="15" />');
  this.deleteBtn_ = $('<button class="delete" />');
  this.filterRow_ = $('<tr>');
  if (serializedFilter) {
    this.hostTxt_.val(serializedFilter.host);
    this.behaviorSelect_.val(serializedFilter.behavior);
    this.commentTxt_.val(serializedFilter.comment);
  }
};

/**
 * Serializes the current filter values in the input.
 *
 * @return a struct representing the filter value.
 */
Filter.prototype.serialize = function() {
  return {
    host: this.hostTxt_.val(),
    behavior: this.behaviorSelect_.val(),
    comment: this.commentTxt_.val(),
  };
};

/**
 * Adds this filter to the UI.
 *
 * @param table the jquery table element to append the filter row to.
 */
Filter.prototype.attachToTable = function(table) {
  table.append(this.filterRow_.append(
      $('<td>').append(this.hostTxt_),
      $('<td>').append(this.behaviorSelect_),
      $('<td>').append(this.commentTxt_),
      $('<td>').append(this.deleteBtn_)));
  this.hostTxt_.focus();
};

/**
 * Detaches this filter from the UI.
 */
Filter.prototype.detachFromTable = function() {
  this.filterRow_.detach();
};

/**
 * Sets the callback handler for the delete row event.
 */
Filter.prototype.setDeleteHandler = function(handler) {
  this.deleteBtn_.click(handler);
};
