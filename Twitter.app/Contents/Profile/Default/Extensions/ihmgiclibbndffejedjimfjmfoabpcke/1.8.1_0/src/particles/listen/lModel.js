(function(undefined) {
  
  pl.extend(ke.particles.listen.model, {
    _getTransValue: function(source) {
      var input, sel_multi, sel_single;

      if(source === 'window') {
        if(ke.app.flags.isCurrentTranslationMulti) {
          input = pl('.translation-layout .main-variant').html();
        } else {
          input = pl('.translation-layout').html();
        }
      } else if(source === 'tooltip') {
        input = ke.particles.translate_ctt.model.getCurrentSelectedText();
      }

      return input;
    },

    _getHistoryValue: function(s, e) {
      return ke.particles.hist_list.model.getListenValue(s, e);
    },

    _playPrototype: function(flag, dir, input, vis_fn, dl) {
      if(ke.app.flags[flag]) {
        return;
      }

      ke.app.flags[flag] = true;
      ke.particles.listen.model[vis_fn](true);

      ke.particles.listen.model._play(dir, input, function() {
        ke.app.flags[flag] = false;
        if(!pl.type(dl, 'undef')) {
          ke.particles.listen.model[vis_fn](false, dl);
        } else {
          ke.particles.listen.model[vis_fn](false);
        }
      });
    },

    ctrlVisibility: function(a) {
      pl('.listen-raw-button')[a]();
      pl('.listen-translation-button')[a]();
    },

    ctrlRawVisibility: function(e, detected_lang) {
      var playing = e === true;

      var allowed = !playing && 
        !pl.empty(pl('.translation-input').val()) && 
        ke.ext.audio.isUtterable(detected_lang || ke.ext.util.langUtil.getFromLang());
      
      pl('.listen-raw-button')[(allowed ? 'remove' : 'add') + 'Class']('listen-disabled');
      ke.app.flags.rawUtterancePermission = allowed;
    },

    ctrlTransVisibility: function(e) {
      var playing = e === true;

      var allowed = !playing && 
        !pl.empty(ke.particles.listen.model._getTransValue('window')) && 
        ke.ext.audio.isUtterable(ke.ext.util.langUtil.getToLang());
      
      pl('.listen-translation-button')[(allowed ? 'remove' : 'add') + 'Class']('listen-disabled');
      ke.app.flags.transUtterancePermission = allowed;
    },

    ctrlTooltipTransVisibility: function(e) {
      chrome.extension.sendRequest({
        action: ke.proccessCall('app', 'option', 'getToLang')
      }, function(lang) {
        var playing = e === true;

        var allowed = !playing && 
          !pl.empty(ke.particles.listen.model._getTransValue('tooltip')) && 
          ke.ext.audio.isUtterable(lang);
        
        pl('.TnITTtw-listen')[(allowed ? 'remove' : 'add') + 'Class']('TnITTtw-listen-disabled');
        ke.app.flags.tt_transUtterancePermission = allowed;
      });
    },

    ctrlHistoryOrigVisibility: function(e) {
      pl('.listen-original')[(ke.app.flags.isPlayingOriginal ? 'add' : 'remove') + 'Class']('listen-disabled');
    },

    ctrlHistoryTransVisibility: function(e) {
      pl('.listen-translation')[(ke.app.flags.isPlayingTrans ? 'add' : 'remove') + 'Class']('listen-disabled');
    },

    _play: function(dir, input, callback) {
      chrome.extension.sendRequest({
        action: ke.proccessCall('app', 'audio', 'play'),
        text: input,
        dir: dir
      }, function(d) {
        if((d || {}).error && ke.section !== 'content') {
          ke.ext.errorManager.showNetworkError();
        }

        callback(d);
      });
    },

    playRaw: function() {
      ke.particles.listen.model._playPrototype(
        'isPlayingRaw', 
        'from', 
        pl('.translation-input').val(), 
        'ctrlRawVisibility',
        ke.app.temp.currentDetectedLang
      );
    },

    playTranslation: function() {
      ke.particles.listen.model._playPrototype(
        'isPlayingTrans', 
        'to', 
        ke.particles.listen.model._getTransValue('window'), 
        'ctrlTransVisibility'
      );
    },

    playTooltipTranslation: function() {
      ke.particles.listen.model._playPrototype(
        'isPlayingTooltipTrans', 
        'from', 
        ke.particles.listen.model._getTransValue('tooltip'), 
        'ctrlTooltipTransVisibility'
      );
    },

    playHistoryOriginal: function(e) {
      console.log('lang:' + ke.ext.util.selectorsUtil.getHistoryOriginalLang(e));

      ke.particles.listen.model._playPrototype(
        'isPlayingOriginal',
        'lang:' + ke.ext.util.selectorsUtil.getHistoryOriginalLang(e),
        ke.particles.listen.model._getHistoryValue('orig', e),
        'ctrlHistoryOrigVisibility'
      );
    },

    playHistoryTranslation: function(e) {
      ke.particles.listen.model._playPrototype(
        'isPlayingTrans',
        'lang:' + ke.ext.util.selectorsUtil.getHistoryToLang(e),
        ke.particles.listen.model._getHistoryValue('trans', e),
        'ctrlHistoryTransVisibility'
      );
    }
  });

})();