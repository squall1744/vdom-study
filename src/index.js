// import {
//     init,
//     classModule,
//     propsModule,
//     styleModule,
//     eventListenersModule,
//     h,
// } from "snabbdom";
//
// const path = init([classModule, propsModule, styleModule, eventListenersModule])
// const container = document.querySelector("#container")
// const aLink = h('a', {props: {href: 'http://www.baidu.com'}}, '百度')
//
// path(container, aLink)
//
// console.log(aLink)

import h from './my-snabbdom/h.js'
import path from './my-snabbdom/path.js'

const container = document.querySelector('#container')
const vnode1 = h('a', {}, h('div', {}, [
    h('div', {}, h('div', {}, 'aaa')),
    h('div', {}, 'bbb')
]))

path(container, vnode1)



