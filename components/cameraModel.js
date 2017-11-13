let cameraModel = {
    view: (vnode) => {
        if (vnode.attrs.brand && vnode.attrs.model) {
            let model = vnode.attrs.model.replace(/\0[\s\S]*$/g, '');
            let brand = vnode.attrs.brand;
            return [
                m("h2", [
                    m("img[src=images/camera.svg]"),
                    m("span", ` ${brand} / ${model}`),
                ]),
                m("small",
                    m("a[target=_blank]", { href: `https://www.dpreview.com/search/?query=${model}` }, "Search camera in dpreview")
                ),
                m("hr")
            ];
        }
    }
}