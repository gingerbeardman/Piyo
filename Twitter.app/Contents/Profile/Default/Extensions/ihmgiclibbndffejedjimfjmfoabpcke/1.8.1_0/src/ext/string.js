/* Kumquat Extension - String
 * 
**/

(function(undefined) {
  
  pl.extend(ke.ext.string, {
    leadToDbOutputLike: function(i) {
      return i
        .replace(/\{/g, '').replace(/\}/g, '')
        .replace(/\[/g, '').replace(/\]/g, '')
        .replace(/\"/g, '').replace(/\,/g, '')
        .replace(/\:/g, '');
    },

    highlight: function(obj, subj) {
      return obj.replace(new RegExp(subj, 'gi'), '<span class="highlighting">' + subj + '</span>');
    }
  });
  
})();