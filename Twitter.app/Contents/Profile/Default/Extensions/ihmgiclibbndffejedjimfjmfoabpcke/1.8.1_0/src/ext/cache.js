(function(undefined) {
  
  pl.extend(ke.ext.cache, {
    save: function(from, to, input, output, callback) {
      callback = callback || ke.EF;

      ke.db.execSql(
        'INSERT INTO ' + ke.getAppConst('t_history') + ' (l_from, l_to, input, output, time) VALUES (?, ?, ?, ?, ?)',
        [from, to, input, output, Date.now()],
        callback,
        function(tx) {
          console.log('Save error:', tx);
        }
      );
    },

    lookUpInCache: function(from, to, input, callback) {
      ke.db.execSql(
        'SELECT l_from, l_to, input, output, time FROM ' + ke.getAppConst('t_history') + ' WHERE l_from = ? AND l_to = ? AND input = ?',
        [from, to, input],
        function(tx) {
          if(tx.rows.length === 0) {
            callback(true);
          } else {
            callback(false, tx.rows.item(0));
          }
        },
        null
      );
    },

    delete: function(from, to, input, output, callback) {
      callback = callback || ke.EF;

      ke.db.execSql(
        'DELETE FROM ' + ke.getAppConst('t_history') + ' WHERE l_from = ? AND l_to = ? AND input = ? AND output = ?',
        [from, to, input, output],
        callback,
        null
      );
    }
  });

})();