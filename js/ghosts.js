var ghosts = ['ghost-blue-32px.png', 
              'ghost-orange-32px.png',
              'ghost-pink-32px.png',
              'ghost-red-32px.png'];
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = 'img/' + ghosts[Math.floor(Math.random()*ghosts.length)];;
    document.getElementsByTagName('head')[0].appendChild(link);
})();