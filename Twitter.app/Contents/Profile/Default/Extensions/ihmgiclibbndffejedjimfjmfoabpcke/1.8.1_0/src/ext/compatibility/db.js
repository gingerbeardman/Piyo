(function(undefined) {
  
  var OLD_DB_NAME = 'IT_Trl_History';
  var OLD_TABLE_NAME = 'IT_Db_History';
  var CURRENT_DB_NAME = ke.getAppConst('db');
  var CURRENT_TABLE_NAME = ke.getAppConst('t_history');

  pl.extend(ke.ext.compatibility.db, {
    sync: function() {
      ke.ext.compatibility.db._onOldDbExists(function() {
        ke.ext.compatibility.db._makeSync(function() {
          ke.db.choose(OLD_DB_NAME);
          // ke.ext.compatibility.db._deleteOldDb(function() {
            // ke.db.choose(CURRENT_DB_NAME);
          // });
        });
      }, function() {
        ke.db.choose(CURRENT_DB_NAME);
      });
    },

    _onOldDbExists: function(yes, no) {
      ke.db.choose(OLD_DB_NAME);
      ke.db.execSql(
        'SELECT * FROM ' + OLD_TABLE_NAME,
        [],
        yes,
        no
      );
    },

    _makeSync: function(callback) {
      ke.db.execSql(
        'SELECT * FROM ' + OLD_TABLE_NAME + ' ORDER by timestamp DESC',
        [],
        function(tx) {
          var temp, output;
          var ready = [];
          var len = tx.rows.length;

          ke.db.choose(CURRENT_DB_NAME);

          for(var i = 0; i < len; ++i) {
            ready.push(0);
            temp = tx.rows.item(i);
            output = ke.ext.compatibility.db._convertOutputToModern(temp.phrase_to);

            ke.db.execSql(
              'INSERT INTO ' + CURRENT_TABLE_NAME + ' (l_from, l_to, input, output, time) VALUES (?, ?, ?, ?, ?)',
              [temp.lang_from, temp.lang_to, temp.phrase_from, output, temp.timestamp],
              function(tx) {
                ready.pop();
              },
              null
            );
          }

          var int = setInterval(function() {
            if(pl.empty(int)) {
              clearInterval(int);
              callback();
            }
          }, 1);
        },
        function(tx) {
          ke.log('Synchronization error:', tx);
        }
      );
    },

    _deleteOldDb: function(callback) {
      ke.db.execSql(
        'DROP TABLE ' + OLD_TABLE_NAME,
        [],
        callback,
        null
      );
    },

    _convertOutputToModern: function(out) {
      out = pl.JSON(out);
      var newOut = {
        sentences: []
      };

      newOut.src = out.lang;
      newOut.sentences.push({
        trans: out.main
      });
      newOut.dict = out.trl;

      return pl.stringify(newOut);
    }
  });

})();