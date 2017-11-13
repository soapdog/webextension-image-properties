let imageResolution = {
    view: (vnode) => {
        if (vnode.attrs.x && vnode.attrs.y) {
            return [
                m("img[src=images/maximize-2.svg]"),
                m("span", ` ${vnode.attrs.x}x${vnode.attrs.y}`)
            ]
        }
    }
}