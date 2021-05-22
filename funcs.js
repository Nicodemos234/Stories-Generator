window.nodeRequire = require
const domtoimage = require('dom-to-image')

function saveImage() {

    domtoimage.toJpeg(document.getElementById('image'), { quality: 1 })
        .then(function(dataUrl) {
            var link = document.createElement('a');
            link.download = 'stories.jpeg';
            link.href = dataUrl;
            link.click();
        });
}