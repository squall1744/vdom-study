import vnode from './vnode.js'
import createElement from './createElement'
import { isSameVnode } from './utils.js'

export default function(oldVnode, newVnode) {
    if (!oldVnode.hasOwnProperty('sel') || !oldVnode.sel) {
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, undefined, undefined, oldVnode)
    }

    if (isSameVnode(oldVnode, newVnode)) {

    } else {
        const newVnodeDom =  createElement(newVnode)
        if (oldVnode.elm && newVnodeDom) {
            oldVnode.elm.parentNode.insertBefore(newVnodeDom, oldVnode.elm)
        }
        oldVnode.elm.parentNode.removeChild(oldVnode.elm)
    }
}

