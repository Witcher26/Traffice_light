const LIGHTS = {
    red: 'red',
    green: 'green',
    yellow: 'yellow',
};

const CLASSES_BY_LIGHT = {
    [LIGHTS.red]: 'traffic-light_red',
    [LIGHTS.green]: 'traffic-light_green',
    [LIGHTS.yellow]: 'traffic-light_yellow',
};

const NEXT_LIGTHT_BY_LIGHT = {
    [LIGHTS.red]: LIGHTS.green,
    [LIGHTS.green]: LIGHTS.yellow,
    [LIGHTS.yellow]: LIGHTS.red,
};

let currentLight = LIGHTS.red;

function switchLight(node) {
    const currentClass = CLASSES_BY_LIGHT[currentLight];
    const nextLight = NEXT_LIGTHT_BY_LIGHT[currentLight];
    const nextClass = CLASSES_BY_LIGHT[nextLight];

    currentLight = NEXT_LIGTHT_BY_LIGHT[currentLight];

    console.log(currentLight);
    node.classList.replace(currentClass, nextClass);
};

function initLight(node) {
    node.classList.add(CLASSES_BY_LIGHT[currentLight]);
}