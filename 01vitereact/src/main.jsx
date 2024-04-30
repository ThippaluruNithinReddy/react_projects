import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement = {
//   type:'a',
//   props: {
//           href:'http://www.baidu.com',
//           target:  '_blank'
//   } ,
//   childern:'click me to visit baidu'
// }

const anotherElement = (
  <a href= "https://github.com/facebook" target= "_self">Go to Facebook</a>

)

const reactElement = React.createElement(
  'a',
  {
    href:"https://github.com/facebook",
    target:"_blank"
  },
  'click me to visit facebook'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
