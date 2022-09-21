import { View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
// import {  useFrame } from '@react-three/fiber'

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame(() => (mesh.current.rotation.x += 0.01))
    // Return view, these are regular three.js elements expressed in JSX

    return (
        <View style={{ height: '50vh' }}>
            <Canvas>
                <pointLight position={[10, 10, 10]} />
                <mesh
                    {...props}
                    ref={mesh}
                    scale={active ? 1.5 : 1}
                    onClick={() => setActive(!active)}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}>
                    <boxGeometry args={[1, active ? 2 : 1, 1]} />
                    <meshStandardMaterial color={hovered ? 'blue' : 'orange'} />
                </mesh>
            </Canvas>
        </View>
    )
}

export default Box