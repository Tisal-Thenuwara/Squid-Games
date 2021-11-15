//Creates a scene
const scene = new THREE.Scene();
//Creates a camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
//Adds it to our page
document.body.appendChild( renderer.domElement );

//Adds a cube to the scene
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 5;

//renderer.render(scene, camera);
//This adds the cube manually

//This function calls itself perpetually
function animate() {
	requestAnimationFrame( animate );

    //Adds rotation animation to the cube
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // cube.rotation.z += 0.01;

	renderer.render( scene, camera );
}
animate();