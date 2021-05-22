window.nodeRequire = require
const domtoimage = require('dom-to-image')

function saveImage() {
    domtoimage.toPng(document.getElementById('image'), { quality: 1 })
        .then(function(dataUrl) {
            var link = document.createElement('a');
            link.download = 'stories.png';
            link.href = dataUrl;
            link.click();
        });
}