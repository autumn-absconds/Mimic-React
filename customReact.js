const customeRender = (reactElement, container) => {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.attributes.href)
    // domElement.setAttribute('target',reactElement.attributes.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for (const attribute in reactElement.attributes) {

        domElement.setAttribute(attribute, reactElement.attributes[attribute])
        console.log(attribute)

    }
    container.appendChild(domElement)








}

const reactElement = {
    type: 'a',
    attributes: {
        href: 'https://www.youtube.com/watch?v=2xz-ADKsKzA&list=PLRAV69dS1uWQos1M1xP6LWN6C-lZvpkmq&index=6',
        target: '_blank',
    },
    children: 'click here'
}

const mainContainer = document.getElementById('root')

customeRender(reactElement, mainContainer)