(function () {
    const themeData = window.Telegram.WebApp.themeParams;

    getCSSPropsFromThemeData('bg_color', themeData);
    getCSSPropsFromThemeData('button_color', themeData);
    getCSSPropsFromThemeData('button_text_color', themeData);
    getCSSPropsFromThemeData('secondary_bg_color', themeData);
    getCSSPropsFromThemeData('text_color', themeData);

    getCSSPropsFromThemeData('section_bg_color', themeData);
    getCSSPropsFromThemeData('accent_text_color', themeData);
    getCSSPropsFromThemeData('subtitle_text_color', themeData);
    getCSSPropsFromThemeData('destructive_text_color', themeData);
    getCSSPropsFromThemeData('header_bg_color', themeData);
    getCSSPropsFromThemeData('section_header_text_color', themeData);

    getCSSPropsFromThemeData('app_platform', window.Telegram.WebApp.platform);

    // fallback for stackedTMA support
    if (window.Telegram.WebApp.platform === 'ios' || window.Telegram.WebApp.platform === 'tdesktop') {
        window.Telegram.WebApp.setHeaderColor(themeData.section_bg_color)
        window.Telegram.WebApp.setBackgroundColor(themeData.section_bg_color)
        updateCssProps('link_color', themeData.accent_text_color);
        updateCssProps('bg_color', themeData.section_bg_color);
    }

    function getCSSPropsFromThemeData(key, themeData) {
        const prevValue = document.documentElement.style.getPropertyValue("--".concat(key));
        const nextValue = themeData[key] || prevValue;

        document.documentElement.style.setProperty("--".concat(key), nextValue);
    }

    function updateCssProps(key, value) {
        document.documentElement.style.setProperty("--".concat(key), value);
    }
})()
