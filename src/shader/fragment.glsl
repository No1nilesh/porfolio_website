export default /* glsl */`
precision mediump float;
uniform float uTime;
varying vec3 vPosition;

varying vec3 vNormal;
varying vec2 vUv;

void main() {


    gl_FragColor = vec4(vNormal , 1.0);
}
`;
