import _ from 'lodash';
import css from './style.css'
import bg from './bg.png'
import printMe from './print'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    //lodash (目前是通过一个script脚本引入) 对于执行这一行是必须的;
    element.innerHTML = _.join(['hello', 'webpack'], '1344566723');
    element.classList.add('hello');
    var background = new Image();
    background.src = bg;
    element.appendChild(background);

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}
document.body.appendChild(component());
if (module.hot) {
    +module.hot.accept('./print.js', function() {
        +console.log('Accepting the updated printMe module!');
        printMe();
    })
}