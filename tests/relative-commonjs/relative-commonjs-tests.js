require({
    baseUrl: require.isBrowser ? "./" : "./relative-commonjs/",
    paths: {
        text: "../../text"
    }
}, [
    'require',
    'vendor/some/lib/some'
], function (require, some) {
    doh.register(
        "relativeCommonJS",
        [
            function relativeCommonJS (t) {
                t.is("SUCCESS!", some.success);
            }
        ]
    );

    doh.run();
});