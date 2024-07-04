import * as THREE from "three";

// Renderer <- (Camera, Scene)
// 1. Setting up the Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
const width = window.innerWidth;
const height = window.innerHeight;
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// 2. Setting up the Camera
const fov = 75;  // field of view
const aspect = width / height;  // aspect ratio
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// 3. Initializing the scene
const scene = new THREE.Scene();

const geo = new THREE.IcosahedronGeometry(1.0, 3);  // radius, detail
const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true
});
const mesh = new THREE.Mesh(geo, material);
scene.add(mesh);

const wireFrameMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});

const wireMesh = new THREE.Mesh(geo, wireFrameMaterial);
scene.add(wireMesh);
const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 1 );
scene.add(hemiLight);

function animate(t = 0) {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();