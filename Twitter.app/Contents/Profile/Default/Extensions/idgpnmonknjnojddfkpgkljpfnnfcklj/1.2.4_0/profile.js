/**
 * Manages a profile.
 */
function Profile(profileIndex) {
  this.profileName_ = 'Profile ' + (profileIndex + 1);
  this.profileTab_ = $('<td class="profile">').append(this.profileName_);
  this.profileIndex_ = profileIndex;
  this.profileRecord_ = {};
};

/**
 * Gets the serialized profile record.
 */
Profile.prototype.getRecord = function() {
  return this.profileRecord_;
};

/**
 * Sets the serialized profile record.
 */
Profile.prototype.setRecord = function(profileRecord) {
  this.profileRecord_ = profileRecord;
};

/**
 * Attaches this profile UI to the profile row.
 *
 * @param profileRow the profile row elemenet to attach to.
 */
Profile.prototype.attachTo = function(profileRow) {
  profileRow.append(this.profileTab_);
};

/**
 * Sets whether this profile is selected.
 */
Profile.prototype.setSelected = function(isSelected) {
  var className = isSelected ? 'profile profile-selected' : 'profile';
  this.profileTab_.attr('class', className);
};

/**
 * Sets the handler for when the profile is selected.
 * The handler is a callback with the signature function(profileIndex).
 */
Profile.prototype.setSelectHandler = function(handler) {
  this.profileTab_.click((function(profileIndex) {
    return function() {
      handler(profileIndex);
    };
  })(this.profileIndex_));
};
