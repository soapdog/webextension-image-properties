let propertiesDisplay = {
    data: false,



    whiteBalance: function () {
        if (propertiesDisplay.data["WhiteBalance"]) {
            return [
                m("h3.title", "White Balance"),
                m("p", [
                    m("span", `${propertiesDisplay.data["WhiteBalance"]}`),
                    typeof propertiesDisplay.data["LightSource"] !== "undefined" ? m("i", ` (${propertiesDisplay.data["LightSource"]})`) : ""
                ])
            ]
        }
    },


    view: vnode => {
        if (!propertiesDisplay.data) {
            return m("h1", { style: "text-align: center; margin: auto;" }, [
                m("img.spin[src=images/loader.svg]"),
                m("br"),
                m("span", "Loading image")
            ]);
        }
        return [
            m("h1.title", "Image Properties"),
            m("hr"),
            // Camera model...
            m(cameraModel, { brand: propertiesDisplay.data.Make, model: propertiesDisplay.data.Model }),
            m(imageDescription, { description: propertiesDisplay.data.ImageDescription || ""}),
            m(imageResolution, { x: propertiesDisplay.data.PixelXDimension, y: propertiesDisplay.data.PixelYDimension}),
            m(propertyItem, {data: propertiesDisplay.data.Artist, label: "Artist"}),
            m(propertyItem, {data: propertiesDisplay.data.Copyright, label: "Copyright"}),
            m("hr"),
            m(propertyItem, {data: propertiesDisplay.data.ApertureValue, label: "Aperture"}),  
            m(propertyItem, {data: propertiesDisplay.data.MaxApertureValue, label: "Max Aperture"}),            
            
            m(propertyItem, { data: propertiesDisplay.data.ExposureTime, label: "Exposure Time", unit: "seconds" }),
            m(propertyItem, { data: propertiesDisplay.data.ExposureProgram, label: "Exposure Program" }),
            m(propertyItem, { data: propertiesDisplay.data.FocalLength, label: "Focal Length", unit: "mm" }),
            m(propertyItem, { data: propertiesDisplay.data.FocalLengthIn35mm, label: "Focal Length in 35mm", unit: "mm" }),
            m(propertyItem, { data: propertiesDisplay.data.ISOSpeedRatings, label: "ISO" }),
            m(imageWhiteBalance, { whiteBalance: propertiesDisplay.data.WhiteBalance, lightSource:  propertiesDisplay.data.LightSource}),
            m(propertyItem, { data: propertiesDisplay.data.DateTimeOriginal, label: "Captured at" }),
            m(propertyItem, { data: propertiesDisplay.data.Saturation, label: "Saturation" }),
            m(propertyItem, { data: propertiesDisplay.data.SceneCaptureType, label: "Scene Capture Type" }),
            m(propertyItem, { data: propertiesDisplay.data.SceneType, label: "Scene Type" }),
            m(propertyItem, { data: propertiesDisplay.data.SensingMethod, label: "Sensing Method" }),
            m(propertyItem, { data: propertiesDisplay.data.Sharpness, label: "Sharpness" }),
            m(propertyItem, { data: propertiesDisplay.data.MeteringMode, label: "Metering Mode" }),            
            m(propertyItem, { data: propertiesDisplay.data.Software, label: "Software" }),
            m(propertyItem, { data: propertiesDisplay.data.Flash, label: "Flash" }),
            m(propertyItem, { data: propertiesDisplay.data.Orientation, label: "Orientation", unit: "°" }),

        ]
    }
}