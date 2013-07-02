/* Dropdowns
 *
**/

(function(undefined) {

  ke.import('s:ui_components.dropdown'); // Styles of dropdowns

  var EF = function() {};

  pl.extend(ke.ui, {
    dropdown: {}
  });

  pl.extend(ke.ui.dropdown, {
    data: {
      isOpened: false,
      isFocused: true, // Due to integral auto-focus
      overOption: false,
      
      ind: 999,
      callback: EF,
      callbacksOnOpenClose: [EF, EF],
      
      ui_search: {}
    },
    
    init: function(fn, callbacks) {      
      pl(document).bind({
        click: ke.ui.dropdown.externalClick,
        keydown: ke.ui.dropdown.arrowsNavigation
      });
        
      ke.ui.dropdown.applySelects();
      if(!pl.empty(callbacks)) {
        ke.ui.dropdown.data.callbacksOnOpenClose = callbacks;
      }
        
      pl('.select').bind('click', ke.ui.dropdown.dropdownClick);
      pl('.options .list li[index]').bind({
        click: ke.ui.dropdown.optionClick,
        mouseover: ke.ui.dropdown.optionHover,
        mouseout: ke.ui.dropdown.optionOut
      });
        
      ke.ui.dropdown.data.callback = fn;
    },
    
    removeDropdown: function(flag) {
      pl('.lang-particle').removeClass('ui_extend');
      pl('div').each(function() {
        if(pl(this).hasClass('ui_selector')) {
          pl(this).remove();
        }
      });

      if(flag) {
        pl('select').show();
      }
    },
    
    optionHover: function() {
      ke.ui.dropdown.data.overOption = true;
      pl(this).addClass('whenHover');
    },
    
    optionOut: function() {
      ke.ui.dropdown.data.overOption = false;
      pl(this).parent().find('.whenHover').removeClass('whenHover');
    },
    
    arrowsNavigation: function(e) {
      if(!ke.ui.dropdown.data.isOpened || ke.ui.dropdown.data.overOption) {
        return true; // To allow typing and some other stuff
      }
      return true;
    },
    
    externalClick: function(evt) {
      if(
         (
           pl(evt.target).hasClass('option') || 
           pl(evt.target).parent().hasClass('option') ||
           pl(evt.target).hasClass('option_selected') || 
           pl(evt.target).parent().hasClass('option_selected')
         ) || 
         pl(evt.target).hasClass('options') || 
         pl(evt.target).hasClass('select') ||
         pl(evt.target).parent().hasClass('select') ||
         pl(evt.target).hasClass('group') ||
         pl(evt.target).parent().hasClass('group') ||
         (evt.target != document.body && pl(evt.target).parent(4).hasClass('options'))
      ) return;
      
      ke.ui.dropdown.data.callbacksOnOpenClose[1]();
      
      pl('.ui_selector .options').hide();
      pl('.ui_selector .select').removeClass('active');
      pl('.options .whenHover').removeClass('whenHover');
      
      ke.ui.dropdown.data.isOpened = false;
    },
    
    dropdownClick: function() {
      var currentE = pl(this).parent().prev(2).get();

      if(pl(this).hasClass('active')) {
        pl('.options .whenHover').removeClass('whenHover');
        pl(this).parent().find('.options').hide();
        pl(this).removeClass('active');
                
        ke.ui.dropdown.data.isOpened = false;
        ke.ui.dropdown.data.callbacksOnOpenClose[1](currentE);
      } else {
        pl('.ui_selector .options').hide();
        pl('.ui_selector .select').removeClass('active');
        pl(this).parent().find('.options').show();

        var offsetTop = pl(this).parent().find('.options .option_selected').get().offsetTop - 35;

        pl(this).addClass('active');
                
        ke.ui.dropdown.data.isOpened = true;

        ke.ui.dropdown.data.callbacksOnOpenClose[0](currentE, offsetTop);
      }
    },

    applySelects: function() {
      var selNumber = 0;
      pl('select').each(function() {
        ++selNumber;

        if(pl(this).parent(2).hasClass('ui_extend')) return;
        
        pl(this).parent().css('display', 'none');
        
        var cache_selector = pl(this),
            parent         = cache_selector.parent(2),
            options        = cache_selector.find('select').children(),
            code           = '',
            index          = 0,
            cycle          = options.len(),
            _length        = cycle,
            self, isCur    = '';

        var active = options.each(function() {
          self = pl(this);
          isCur = '';

          if(self.attr('selected')) {
            isCur = '_selected';
            index = cycle - 1;
          } else if(!self.attr('selected') && !--cycle) {
            isCur = '_selected';
          }

          if(self.tag('optgroup')) {
            code = '\
              <li class="group">\
                <span class="group-title">' + self.attr('label') + '</span>\
              </li>\
            ' + code;
          } else {
            code = '\
             <li class="option' + isCur + '" index="' + cycle + '">\
              <span val="' + 
              self.attr('value') + '">' + self.html() + '</span>\
             </li>' + code;
          }
        }).rev().get(index).textContent;

        parent
          .addClass('ui_extend')
          .append(
            '<div class="ui_selector">\
              <div class="select">' + active + '</div>\
              <div class="options opt-' + selNumber + '" style="z-index: ' + 
              --ke.ui.dropdown.data.ind + '">\
               <div id="selVisibleScroll-' + selNumber + '">\
                <div id="selEntireScroll-' + selNumber + '">\
                 <div class="inner-options-layout">\
                  <ul class="list">' + code + '</ul>\
                 </div>\
                </div>\
                <div id="sel-scrollbar-' + selNumber + '">\
                 <div id="sel-track-' + selNumber + '">\
                  <div id="sel-dragBar-' + selNumber + '"></div>\
                 </div>\
                </div>\
               </div>\
              </div>\
             </div>'
          );
        
        pl('.options', parent.get()).css('display', 'none');
      });
    },
    
    // Since v0.7.0:
    //  - works even after artificial page re-rendering.
    optionClick: function() {
      pl(this).parent(6).find('.select').html(pl(this).html());
      pl(this).parent(6).find('.option_selected').removeClass('option_selected');
      pl(this).attr('class', 'option_selected');
      
      ke.ui.dropdown.dropdownClick.call(pl(this).parent(6).find('.select').get());
      
      // ==================
      // Apply for <select>

      pl(this).parent(6).find('select').get().selectedIndex = pl(this).attr('index');
      
      // Add the selected attribute
      // All options
      var optionList = pl(this).parent(6).find('select option').get();
      
      // At first, remove from all
      pl.each(optionList, function() {
        if(pl(this).attr('selected')) {
          pl(this).removeAttr('selected');
        }
      });
      
      // Add to the certain option
      var match = pl(this).find('span').attr('val');
      
      pl.each(optionList, function() {
        if(pl(this).attr('value') === match) {
          pl(this).attr('selected', 'selected');
        }
      });
          
      ke.ui.dropdown.data.callback(
        pl(this).parent(7).find('select').get(),
        pl(this).find('span').attr('val')
      );
    }
  });

})();