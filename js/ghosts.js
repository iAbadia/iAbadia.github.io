function setFavicon(favicon) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = 'img/favicon/' + favicon;
    document.getElementsByTagName('head')[0].appendChild(link);
};