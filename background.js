/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated(tabs) {
    console.log(tabs)
    if (browser.runtime.lastError) {
        console.log(`Error: ${browser.runtime.lastError}`);
    } else {
        console.log("Item created successfully");
    }
}

/*
Called when there was an error.
We'll just log the error here.
*/
function onError(error) {
    console.log(`Error: ${error}`);
}

/*
Create the tab
*/
function viewImageProperties(path) {

    var creating = browser.tabs.create({
        url: browser.runtime.getURL(`index.html#${path}`)
    });
    creating.then(onCreated, onError);
}

/*
Create all the context menu items.
*/
browser.menus.create({
    id: "image-properties",
    title: "View Image Properties",
    contexts: ["image"]
}, onCreated);


/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
browser.menus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "image-properties":
            console.log(info);
            viewImageProperties(info.srcUrl);
            break;
    }
});
