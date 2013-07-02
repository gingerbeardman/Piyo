(function(undefined) {
  
  ke.import('ext.const.storage');

  var arrayInsertValAction = function(n, v, a) {
    var temp = pl.JSON(localStorage[ke.getStorageConst(n)]);
    temp[a](v);
    localStorage[ke.getStorageConst(n)] = pl.stringify(temp);
  };

  var arrayDeleteValAction = function(n, a) {
    var temp = pl.JSON(localStorage[ke.getStorageConst(n)]);
    temp[a]();
    localStorage[ke.getStorageConst(n)] = pl.stringify(temp);
  };

  pl.extend(ke.ext.util.storageUtil, {
    initStorage: function() {
      var got_val, def_val;

      for(var key in ke.ext.const.storage) {
        if(pl.type(localStorage[ke.ext.const.storage[key]], 'undef')) {
          got_val = ke.getStorageDefValue(key);

          if(pl.type(got_val, 'obj') || pl.type(got_val, 'arr')) {
            def_val = pl.stringify(got_val);
          } else {
            def_val = got_val;
          }

          localStorage[ke.ext.const.storage[key]] = def_val;
        }
      }
    },

    isTrueOption: function(n) {
      return localStorage[ke.getStorageConst(n)] == 'true';
    },

    setOptionAsBoolean: function(n, v) {
      localStorage[ke.getStorageConst(n)] = pl.type(v, 'bool') ? v : v == 'true';
    },

    isActiveJsonOption: function(n) {
      return !!pl.JSON(localStorage[ke.getStorageConst(n)]).active;
    },

    setActiveJsonValueAsBoolean: function(n, v) {
      var temp = pl.JSON(localStorage[ke.getStorageConst(n)]);
      temp.active = v;
      localStorage[ke.getStorageConst(n)] = pl.stringify(temp);
    },

    setJsonVal: function(n, v) {
      var temp = pl.JSON(localStorage[ke.getStorageConst(n)]);
      temp.value = v;
      localStorage[ke.getStorageConst(n)] = pl.stringify(temp);
    },

    getJsonVal: function(n) {
      return pl.JSON(localStorage[ke.getStorageConst(n)]).value;
    },

    setVal: function(n, v) {
      localStorage[ke.getStorageConst(n)] = v;
    },

    getVal: function(n) {
      return localStorage[ke.getStorageConst(n)];
    },

    getArrayValLen: function(n) {
      return ke.ext.util.storageUtil.getArrayVal(n).length;
    },

    getArrayVal: function(n) {
      return pl.JSON(localStorage[ke.getStorageConst(n)]);
    },

    pushArrayVal: function(n, v) {
      arrayInsertValAction(n, v, 'push');
    },

    unshiftArrayVal: function(n, v) {
      arrayInsertValAction(n, v, 'unshift');
    },

    addArrayVal: function(n, v) {
      var temp = pl.JSON(localStorage[ke.getStorageConst(n)]);
      var pos = pl.inArray(v, ke.ext.util.storageUtil.getArrayVal(n));

      if(~pos) {
        var temp2 = [];
        temp2.push(temp[pos]);

        pl.each(temp, function(k, v) {
          if(pos !== k) {
            temp2.push(v);
          }
        });

        console.log(temp, temp2);

        temp = temp2;
      } else {
        temp.unshift(v);
      }

      localStorage[ke.getStorageConst(n)] = pl.stringify(temp);
    },

    popArrayVal: function(n) {
      arrayDeleteValAction(n, 'pop');
    },

    shiftArrayVal: function(n) {
      arrayDeleteValAction(n, 'shift');
    }
  })

})();