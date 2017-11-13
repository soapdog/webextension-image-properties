let imageWhiteBalance = {
    view: (vnode) => {
        if (vnode.attrs.whiteBalance) {
            let content;
            let lightSource = vnode.attrs.lightSource || false;
            if (lightSource) {
                content = `${vnode.attrs.whiteBalance} (${lightSource})`;
            } else {
                content = vnode.attrs.whiteBalance;
            }
            
            return m(propertyItem, {label: "White Balance", data: content});
        }
    }
}