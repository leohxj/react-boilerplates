import component from './component';

import './index.pcss';

document.body.appendChild(component());

const obj = {};
Object.assign(obj, { a: 1 }, { a: 2 });

console.log('xxx');
