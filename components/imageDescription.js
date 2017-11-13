let imageDescription = {
    view: (vnode) => {
        let description = vnode.attrs.description.replace(/\0[\s\S]*$/g, '');
        if ( description && description.length > 0) {
            return m(".content",
                m("blockquote", description)
            );
        }
    }
}