
let data = null;
let json = window.localStorage.getItem('data');

if(json && json !== 'undefined') {
    data = JSON.parse(json);
}
else {
    data = {};
}

// expose for dev purposes:
window.resetData = function(dataKey) {
    data = {};
    let keys = Object.keys(initByKey);
    for(let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if(dataKey && dataKey !== key) {
            continue;
        }
        
        data[key] = initByKey[key]();
    }
    window.location.reload();
};

window.addEventListener('beforeunload', () => {
    window.localStorage.setItem('data', JSON.stringify(data));
});

let initByKey = {};

export default function load(key, init) {
    let value = data[key];

    if(value === undefined) {
        data[key] = init();
        value = data[key];
    }

    // store the init function for reset purposes
    initByKey[key] = init;

    return value;
}