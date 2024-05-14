function customRender(reactElement, container) {
  /*

    // create dom element that means created empty container
    const domElement = document.createElement(reactElement.type)

    // In that container injected inner html
    domElement.innerHTML = reactElement.children
    
    // set attributes 
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)

    */

  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit google',
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
