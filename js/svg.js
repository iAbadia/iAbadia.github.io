var awesome_colors = ['#0892D0',  // Electric blue
                      '#00FF00',  // Lime green
                      '#FF0000',  // Red
                      '#8B008B',  // Dark Magenta
                      '#FFFF00'   // Yellow
                      ];
var awesome_color = awesome_colors[Math.floor(Math.random()*awesome_colors.length)];

// Embed SVG and paint
jQuery('img.svg').each(function () {
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  jQuery.get(imgURL, function (data) {
    // Get the SVG tag, ignore the rest
    var $svg = jQuery(data).find('svg');

    // Add replaced image's ID to the new SVG
    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }
    // Add replaced image's classes to the new SVG
    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' embeded-svg');
    }

    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');

    // Replace image with new SVG
    $img.replaceWith($svg);

    // Color svg
    colorSVG(imgID, awesome_color);

  }, 'xml');

});

// Change all paths color
function colorSVG(svg_id, color) {
  $("path", svg_id).attr('style', "fill:"+color);
};