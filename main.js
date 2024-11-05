import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>

        <a-assets>
            <a-asset-item id="animated-asset" src="https://raw.githubusercontent.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/models/CesiumMan.gltf"></a-asset-item>
        </a-assets>

        <a-marker type="pattern" preset="custom" url="pattern-logo_jg-e16f856d.patt">
            <a-box position='0 0.5 0' color="yellow"></a-box>
        </a-marker>

        <a-marker id="animated-marker" type="pattern" preset="custom" url="/pattern-logo_jg-e16f856d.patt">
            <a-entity
                gltf-model="#animated-asset"
                scale="2">
            </a-entity>
        </a-marker>

        <!-- use this <a-entity camera> to support multiple-markers, otherwise use <a-marker-camera> instead of </a-marker> -->
        <a-entity camera></a-entity>
        </a-scene>
`

setupCounter(document.querySelector('#counter'))
