function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('Init.js')
    .then(() => {
        console.log('Initialized');
    }).catch(error => {
        console.error(error);
    });
