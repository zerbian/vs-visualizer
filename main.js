import * as THREE from 'https://cdn.skypack.dev/three@0.130.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.130.0/examples/jsm/controls/OrbitControls.js';

// setup scene and camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0ff);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// controls
const controls = new OrbitControls( camera, renderer.domElement );

// geometry
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const sp_geo = new THREE.SphereGeometry(0.1, 6, 6);
//const material = new THREE.MeshBasicMaterial({color: 0xff0b34});
const sp = new THREE.Mesh(sp_geo, material);
sp.translateZ(3);
scene.add(sp);

camera.position.y = 5;
camera.position.z = -5;
camera.lookAt(0,0,0);


const animate = function () {
    requestAnimationFrame( animate );
    // do stuff for changing suff here
    
    renderer.render( scene, camera );
};

animate();