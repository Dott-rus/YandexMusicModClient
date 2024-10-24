module.exports = {
    changes: [
        {
            type: 'replaceAll',
            target: 'main',
            find: 'panel:!1',
            replaceWith: 'panel:window.IS_DEVTOOLS_ENABLED ?? !0'
        }
    ]
}