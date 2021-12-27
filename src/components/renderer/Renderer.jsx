import "./renderer.scss";
import React, { Component } from "react";
import * as THREE from 'three';

class Model extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color( 255, 255, 255 );

    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth/2, window.innerHeight/2);
    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.TorusGeometry(5, 2, 10, 50);
    var material = new THREE.MeshStandardMaterial( {color: 0xFFFFFF, wireframe: true});
    var torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    camera.position.z = 20;

    var animate = function() {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      torus.rotation.z += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}

export default function Renderer() {
  return (
    <div className="renderer" id="renderer">
      <h1>Look at this rotating torus</h1>
      <div className="container">
      <Model/>
      </div>
    </div>
  );
}
