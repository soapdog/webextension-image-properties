
let imageDisplay = {
    src: location.hash.substr(1),
    getProperties: ev => {
        let el = document.getElementById("imagem")

        EXIF.getData(el, function () {
            var allMetaData = EXIF.getAllTags(this);
            propertiesDisplay.data = allMetaData
            console.log(allMetaData)
            m.redraw()
        });
    },
    view: vnode => m("img.is-image-display", { 
        src: imageDisplay.src, 
        id: "imagem", 
        onload: imageDisplay.getProperties,
    })
}
