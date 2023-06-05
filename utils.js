export const getCookie = cname => {
    if (typeof document !== 'undefined') {
        const name = cname + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.includes(name)) return c.substring(name.length, c.length);
        }
    }

    return '';
};

export const setCookie = (name, value, options) => {
    if (typeof document !== 'undefined') {
        let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

        for (const optionKey in options) {
            updatedCookie += '; ' + optionKey;
            const optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += '=' + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }
};
