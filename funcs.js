const domtoimage = require('dom-to-image')

window.addEventListener('DOMContentLoaded', () => {
    console.log('carregou');
    document.querySelector('#loaderimage').addEventListener('change', () => {
        console.log('teste');
        let inputObject = document.querySelector('#loaderimage')
        let files = inputObject.files
        if (FileReader && files && files.length) {
            let fr = new FileReader()
            fr.onload = function () {
                document.querySelector('.main-image-area img').src = fr.result
            }
            fr.readAsDataURL(files[0])
        }
    })
    document.querySelector('#saveimage').addEventListener('click', () => {
        domtoimage.toPng(document.getElementById('image'), { quality: 1 })
            .then(function (dataUrl) {
                var link = document.createElement('a')
                link.download = 'stories.png'
                link.href = dataUrl
                link.click()
            })
    })
})