var awesome_ghosts = [{color: '#0892D0', favicon: 'ghost-blue-32px.png'},  // Electric blue
                      {color: '#00FF00', favicon: 'ghost-green-32px.png'},  // Lime green
                      {color: '#FF0000', favicon: 'ghost-red-32px.png'},  // Red
                      {color: '#8B008B', favicon: 'ghost-pink-32px.png'},  // Dark Magenta
                      {color: '#FF4500', favicon: 'ghost-orange-32px.png'},  // Orange
                      {color: '#FFFF00', favicon: 'pacman-32px.png'},   // Yellow
                      ];
var awesome_ghost = awesome_ghosts[Math.floor(Math.random()*awesome_ghosts.length)];

setFavicon(awesome_ghost.favicon);
handleSVG(awesome_ghost.color);