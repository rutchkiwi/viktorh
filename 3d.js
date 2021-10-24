
// Find the latest version by visiting https://cdn.skypack.dev/three.

import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.133.1-a8rkd0QTHl2tMZXZJAEw/mode=imports,min/optimized/three.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('canvas'),
	alpha: true
})

renderer.setPixelRatio(1);
renderer.setSize(renderer.domElement.clientWidth,renderer.domElement.clientHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.DodecahedronGeometry(12);
const material = new THREE.MeshBasicMaterial({wireframe: true});
const shape = new THREE.Mesh(geometry, material);

shape.rotation.x = Math.random();
shape.rotation.y = Math.random();
shape.rotation.z = Math.random();

scene.add(shape);

const speed = 0.4;
function animate(){
	requestAnimationFrame(animate);
	shape.rotation.x += speed * 0.0008;
	shape.rotation.y += speed * 0.0007;
	shape.rotation.z -= speed * 0.0011;

	const color = new THREE.Color(
		getComputedStyle(document.body).getPropertyValue('--line-color'));

	material.color = color;

	renderer.render(scene, camera);
}

animate();

