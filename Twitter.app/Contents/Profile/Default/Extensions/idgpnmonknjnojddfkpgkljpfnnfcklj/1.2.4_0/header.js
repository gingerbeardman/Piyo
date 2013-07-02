/**
 * Creates a request header based on the serialized header.
 *
 * @param !serializedHeader the serialized request header value.
 */
function Header(serializedHeader) {
  this.enableChk_ = $('<input type="checkbox" class="check" />');
  this.nameTxt_ = $('<input type="text" placeholder="Name" size="15" />');
  this.valueTxt_ = $('<input type="text" placeholder="Value" size="20" />');
  this.commentTxt_ = $('<input type="text" placeholder="Comment" size="15" />');
  this.deleteBtn_ = $('<button class="delete" />');
  this.headerRow_ = $('<tr>');
  if (!serializedHeader || serializedHeader.enabled) {
    this.enableChk_.attr('checked', 'checked');
  }
  if (serializedHeader) {
    this.nameTxt_.val(serializedHeader.name);
    this.valueTxt_.val(serializedHeader.value);
    this.commentTxt_.val(serializedHeader.comment);
  }
};

/**
 * Serializes the current header values in the input.
 *
 * @return a struct representing the header value.
 */
Header.prototype.serialize = function() {
  return {
    name: this.nameTxt_.val(),
    value: this.valueTxt_.val(),
    comment: this.commentTxt_.val(),
    enabled: this.enableChk_.get(0).checked,
  };
};

/**
 * Adds this header to the UI.
 *
 * @param table the jquery table element to append the header row to.
 */
Header.prototype.attachToTable = function(table) {
  table.append(this.headerRow_.append(
      $('<td>').append(this.enableChk_),
      $('<td>').append(this.nameTxt_),
      $('<td>').append(this.valueTxt_),
      $('<td>').append(this.commentTxt_),
      $('<td>').append(this.deleteBtn_)));
  this.nameTxt_.focus();
};

/**
 * Detaches this header from the UI.
 */
Header.prototype.detachFromTable = function() {
  this.headerRow_.detach();
};

/**
 * Sets the callback handler for the delete row event.
 */
Header.prototype.setDeleteHandler = function(handler) {
  this.deleteBtn_.click(handler);
};
