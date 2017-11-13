let propertyItem = {
    view: (vnode) => {
        vnode.attrs.unit = vnode.attrs.unit || "";
        if (vnode.attrs.data) {
            let label = vnode.attrs.label;
            let data = vnode.attrs.data.toString();

            return m("p", [
                typeof vnode.attrs.icon !== "undefined" ? m("img", { src: vnode.attrs.icon }) : "",
                m("strong", `${label}: `),
                m("span", data + ` ${vnode.attrs.unit}`)
            ])
        }
    }
}