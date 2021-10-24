
// Find the latest version by visiting https://cdn.skypack.dev/three.

import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.133.1-a8rkd0QTHl2tMZXZJAEw/mode=imports,min/optimized/three.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('canvas'),
	alpha: true
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(renderer.domElement.clientWidth,renderer.domElement.clientHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.DodecahedronGeometry(12);
const material = new THREE.MeshBasicMaterial({color: 0x333333, wireframe: true});
const shape = new THREE.Mesh(geometry, material);

scene.add(shape);

function animate(){
	requestAnimationFrame(animate);
	shape.rotation.x += 0.002;
	shape.rotation.y += 0.0005;
	shape.rotation.z += 0.001;
	renderer.render(scene, camera);
}

animate();

