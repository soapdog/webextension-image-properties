let app = {
    view: vnode => {
        return m(".columns", [
            m(".column.is-image",
                m(imageDisplay)
            ),
            m(".column.image-properties",
                m(propertiesDisplay)
            )
        ])
    }
};

m.mount(document.body, app);

