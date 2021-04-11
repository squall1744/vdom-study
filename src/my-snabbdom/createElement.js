export default function creatElement(vnode, pviot) {
    const domNode = document.createElement(vnode.sel)

    if (vnode.text && (!vnode.children || vnode.children.length === 0)) {
        domNode.innerText = vnode.text

    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        vnode.children.map(child => {
            const chDom = creatElement(child)
            domNode.appendChild(chDom)
        })
    }
    vnode.elm = domNode
    return vnode.elm
}
