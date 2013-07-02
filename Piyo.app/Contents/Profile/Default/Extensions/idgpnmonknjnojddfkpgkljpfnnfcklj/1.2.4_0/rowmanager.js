/**
 * Manages a list of rows in the UI.
 *
 * @param table the jquery table element to append the row to.
 */
function RowManager(table, rowFactory) {
  this.table_ = table;
  this.rowFactory_ = rowFactory;
  this.all_rows_ = [];
};

/**
 * Adds a row to the UI if there none exists.
 */
RowManager.prototype.add = function(serializedRecord) {
  var row = this.rowFactory_(serializedRecord);
  row.attachToTable(this.table_);
  var thisRowManager = this;
  row.setDeleteHandler(function() {
    row.detachFromTable();
    var index = thisRowManager.all_rows_.indexOf(row);
    if (index !== -1) {
      thisRowManager.all_rows_.splice(index, 1);
    }
    if (!thisRowManager.all_rows_.length) {
      thisRowManager.add();
    }
  });
  this.all_rows_.push(row);
};

/**
 * Popuplate the rows with a list of serialized records.
 */
RowManager.prototype.populateAll = function(serializedRecordList) {
  this.table_.empty();
  if (serializedRecordList) {
    for (var i = 0, length = serializedRecordList.length; i < length; i++) {
      this.add(serializedRecordList[i]);
    }
  }
  if (!this.all_rows_.length) {
    this.add();
  }
};

/**
 * Serializes the row inputs into a list of JSON records and clear the rows.
 */
RowManager.prototype.serializeAndClear = function() {
  var records = [];
  for (var i = 0, length = this.all_rows_.length; i < length; i++) {
    records.push(this.all_rows_[i].serialize());
  }
  this.all_rows_ = [];
  return records;
};
