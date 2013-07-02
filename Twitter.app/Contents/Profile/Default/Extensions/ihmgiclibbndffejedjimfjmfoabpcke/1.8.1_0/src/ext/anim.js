/* Kumquat Extension - Animation
 * 
**/

(function(undefined) {
  
  // It actually extends Prevel, not Kumquat..
  // But for including it to the Prevel Build, it's too crude
  pl.extend(ke.ext.anim, {
    import: []
  });
  
	pl.extend({
    nonCamelCase: function(str) {
      return str.replace(/[A-Z]/g, function(m) {
        return '-' + m.toLowerCase();
      });
    },
    
    setAuto: function(e, p) {
      if(e.notAuto) return;

      if((p === 'height' && e.scrollHeight != parseInt(pl(e).css(p))) ||
         (p === 'width' && e.scrollWidth != parseInt(pl(e).css(p)))
      ) return;

      // Remember the original height
      var a = e.style[p];

      // Figure out the size of the height right now
      var o = pl(e).css(p);

      if(p === 'height' && e.scrollHeight != o ||
         p === 'width' && e.scrollWidth != o) return;

      // Set the height to auto
      e.style[p] = e.currentStyle ? '' : 'auto';

      // See what the size of 'auto' is
      var n = pl(e).css(p);

      // Revert back to the original size
      if(o !== n && n !== 'auto') {
        e.style[p] = a;
        e.notAuto = true;
      }
    },
    
    preAnimate: function(s, o) {
      o = o || {};
      
      if(pl.type(o, 'fn')) {
        var _o = o; // To prevent an error related to calling an object
        o = {complete: _o};
      }
      
      o.duration = (pl.type(s, 'int') ? s : {slow: 600, fast: 200}[s]) || 400;
    
      return o;
    },
            
    fx: function(elem, options, prop) {
      var z = this;
    
      // The users options
      z.o = {
        duration: options.duration || 400,
        complete: options.complete,
        step: options.step
      };
    
      // The element
      z.el = elem;
    
      // The styles
      var y = z.el.style;
    
      // Simple function for setting a style value
      z.a = function() {
        if(options.step)
          options.step.apply(elem, [ z.now ]);

        if(prop === 'opacity') {
          if(pl.browser('firefox') && z.now == 1) z.now = 0.9999;
          if(window.ActiveXObject)
            y.filter = 'alpha(opacity=' + (z.now * 100) + ')';
          else
            y.opacity = z.now;

        // My hate for IE will never die
        } else if(parseInt(z.now))
          y[prop] = parseInt(z.now) + 'px';
          
        y.display = 'inline-block';
      };
    
      // Figure out the maximum number to run to
      z.max = function() {
        return parseFloat(pl(z.el).css(prop));
      };
    
      // Get the current size
      z.cur = function() {
        var r = parseFloat(pl(z.el).css(prop));
        return r && r > -10000 ? r : z.max();
      };
    
      // Start an animation from one number to another
      z.custom = function(from, to) {
        z.startTime = (new Date()).getTime();
        z.now = from;
        z.a();
    
        z.timer = setInterval(function() {
          z.step(from, to);
        }, 13);
      };
    
      // Simple 'show' function
      z.show = function(p) {
        if(!z.el.orig) z.el.orig = {};

        // Remember where we started, so that we can go back to it later
        z.el.orig[prop] = this.cur();

        z.custom(0, z.el.orig[prop]);

        // Stupid IE, look what you made me do
        if(prop != 'opacity')
          y[prop] = '1px';
      };
    
      // Simple 'hide' function
      z.hide = function() {
        if(!z.el.orig) z.el.orig = {};

        // Remember where we started, so that we can go back to it later
        z.el.orig[prop] = this.cur();

        z.o.hide = true;

        // Begin the animation
        z.custom(z.el.orig[prop], 0);
      };
    
      // IE has trouble with opacity if it does not have layout
      if(pl.browser('ie'))
        if(!z.el.currentStyle.hasLayout) 
          y.zoom = '1';
    
      // Remember  the overflow of the element
      if(!z.el.oldOverlay)
        z.el.oldOverflow = pl(z.el).css('overflow');
    
      // Make sure that nothing sneaks out
      y.overflow = 'hidden';
    
      // Each step of an animation
      z.step = function(firstNum, lastNum) {
        var t = (new Date()).getTime();
    
        if(t > z.o.duration + z.startTime) {
          // Stop the timer
          clearInterval(z.timer);
          z.timer = null;

          z.now = lastNum;
          z.a();

          z.el.curAnim[ prop ] = true;
          
          var done = true;
          for(var i in z.el.curAnim)
            if(z.el.curAnim[i] !== true)
              done = false;
              
          if(done) {
            // Reset the overflow
            y.overflow = z.el.oldOverflow;
          
            // Hide the element if the 'hide' operation was done
            if(z.o.hide) 
              y.display = 'none';
            
            // Reset the property, if the item has been hidden
            if(z.o.hide) {
              for(var p in z.el.curAnim) {
                y[ p ] = z.el.orig[p] + (p == 'opacity' ? '' : 'px');
    
                // set its height and/or width to auto
                if(p == 'height' || p == 'width')
                  pl.setAuto(z.el, p);
              }
            }
          }

          // If a callback was provided, execute it
          if(done && z.o.complete && pl.type(z.o.complete, 'func'))
            // Execute the complete function
            z.o.complete.apply(z.el);
        } else {
          // Figure out where in the animation we are and set the number
          var p = (t - this.startTime) / z.o.duration;
          z.now = ((-Math.cos(p * Math.PI) / 2) + 0.5) * (lastNum - firstNum) + firstNum;
    
          // Perform the next step of the animation
          z.a();
        }
      };
    
    }
  });
  
  // ======
  // Public
  
  pl.extend(pl.fn, {
    animate: function(prop, speed, callback) {
      pl.each(this.elements, function() {
        this.curAnim = prop;
        
        for(var p in prop) {
          var e = new pl.fx(this, pl.preAnimate(speed, callback), p);
          if(pl.type(prop[p], 'int'))
            e.custom(e.cur(), prop[p]);
          else
            e[prop[p]](prop);
        }
      });
      return this;
    },
    
    // overwrite the old show method
    _show: pl.fn.show,

    show: function(speed, callback) {
      return speed ? pl.fn.animate.call(this, {
        height: 'show', width: 'show', opacity: 'show'
      }, speed, callback) : pl.fn._show.call(this);
    },
    
    // Overwrite the old hide method
    _hide: pl.fn.hide,

    hide: function(speed, callback) {
      return speed ? pl.fn.animate.call(this, {
        height: 'hide', width: 'hide', opacity: 'hide'
      }, speed, callback) : pl.fn._hide.call(this);
    },

    slideDown: function(speed, callback) {
      return pl.fn.animate.call(this, {height: 'show'}, speed, callback);
    },

    slideUp: function(speed, callback) {
      return pl.fn.animate.call(this, {height: 'hide'}, speed, callback);
    },

    fadeIn: function(speed, callback) {
      return pl.fn.animate.call(this, {opacity: 'show'}, speed, callback);
    },

    fadeOut: function(speed, callback) {
      return pl.fn.animate.call(this, {opacity: 'hide'}, speed, callback);
    },

    fadeTo: function(speed, to, callback) {
      return pl.fn.animate.call(this, {opacity: to}, speed, callback);
    }
  }, true);

})();