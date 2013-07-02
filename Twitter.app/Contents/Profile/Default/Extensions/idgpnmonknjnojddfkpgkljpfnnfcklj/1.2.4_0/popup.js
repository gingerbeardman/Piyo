var NUM_PROFILES = 4;
var profiles = [];
var selectedProfile = 0;
var initialized = false;
var headerManager = new RowManager($('#header-table'), function(record) {
  return new Header(record);
});
var filterManager = new RowManager($('#filter-table'), function(record) {
  return new Filter(record);
});
var dataStore = localStorage;

/**
 * Save the current profile in the UI to the localStorage.
 */
function saveProfile(selectedProfile) {
  profiles[selectedProfile].setRecord({
    headers: headerManager.serializeAndClear(),
    filters: filterManager.serializeAndClear(),
  });
  var profileRecords = [];
  for (var i = 0; i < NUM_PROFILES; ++i) {
    profileRecords.push(profiles[i].getRecord());
  }
  dataStore.profiles = JSON.stringify(profileRecords);
};

/**
 * Selects the profile at the given index.
 */
function changeProfile(newProfileIndex) {
  saveProfile(selectedProfile);
  selectedProfile = newProfileIndex;

  // Updates the UI for the selected tab.
  for (var i = 0; i < NUM_PROFILES; ++i) {
    profiles[i].setSelected(i == selectedProfile);
  }
  populateProfile(profiles[selectedProfile].getRecord());
  dataStore.selectedProfile = selectedProfile;
};

/**
 * Populates the UI based on the profile record.
 */
function populateProfile(profileRecord) {
  headerManager.populateAll(profileRecord.headers);
  filterManager.populateAll(profileRecord.filters);
}

/**
 * Adds the profiles row.
 */
function initProfileRow() {
  var profileRow = $('<tr>');
  for (i = 0; i < NUM_PROFILES; ++i) {
    // Add the profile UI.
    var profile = new Profile(i);
    profile.attachTo(profileRow);
    profile.setSelectHandler(function(profileIndex) {
      changeProfile(profileIndex);
    });
    profiles.push(profile);
  }
  $('#profile-table').append(profileRow);
};

/**
 * Loads the headers value from the dataStore.
 */
function initialize() {
  initProfileRow();
  // Load the profiles.
  if (dataStore.profiles) {
    var profilesRecord = $.parseJSON(dataStore.profiles);
    for (var i = 0, length = profilesRecord.length; i < length; ++i) {
      profiles[i].setRecord(profilesRecord[i]);
    }
  }

  if (dataStore.selectedProfile) {
    selectedProfile = dataStore.selectedProfile;
  }
  profiles[selectedProfile].setSelected(true);
  populateProfile(profiles[selectedProfile].getRecord());

  $('#add-header-btn').click(function() {
    headerManager.add();
  });
  $('#add-filter-btn').click(function() {
    filterManager.add();
  });

  initialized = true;
};

onunload = function() {
  if (initialized) {
    saveProfile(selectedProfile);
  }
};

initialize();