import vnode from './vnode.js'

export default function(sel, data, c) {
    if (arguments.length !== 3) throw new Error('need 3 params')

    if (typeof c === 'string' || typeof  c === 'number') {
        return vnode(sel, data, undefined, c, undefined)
    } else if(Array.isArray(c)) {
        const children = []
        c.forEach(item => {
            if (typeof item !== 'object' && !item.hasOwnProperty('sel')) throw new Error('array must be a h function')
            children.push(item)
        })
        return vnode(sel, data, children, undefined, undefined)
    } else if(typeof c === 'object' && c.hasOwnProperty('sel')) {
        return vnode(sel, data, [c], undefined, undefined)
    } else {
        throw new Error('third param wrong')
    }
}
