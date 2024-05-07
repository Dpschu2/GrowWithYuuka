import 'core-js/stable';
import objectFitImages from 'object-fit-images';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';

require('formdata-polyfill');

document.addEventListener('DOMContentLoaded', () => {
    objectFitImages();
});

