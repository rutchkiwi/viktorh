import * as THREE from './three.js';

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

const geometry = new THREE.DodecahedronGeometry(1);
const material = new THREE.MeshBasicMaterial({wireframe: true});
const object = new THREE.Mesh(geometry, material);

object.rotation.x = Math.random();
object.rotation.y = Math.random();
object.rotation.z = Math.random();

scene.add(object);

const speed = 0.4;
const zoomSpeed = 0.5;
function animate(){
	requestAnimationFrame(animate);
	if(object.scale.x < 11) {
		object.scale.x += zoomSpeed;
		object.scale.y += zoomSpeed;
		object.scale.z += zoomSpeed;
	}
	object.rotation.x += speed * 0.0008;
	object.rotation.y += speed * 0.0007;
	object.rotation.z -= speed * 0.0011;

	const color = new THREE.Color(
		getComputedStyle(document.body).getPropertyValue('--line-color'));

	material.color = color;

	renderer.render(scene, camera);
}

animate();

