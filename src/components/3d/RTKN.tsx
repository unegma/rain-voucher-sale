/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import {Text, useGLTF} from '@react-three/drei'
import { GLTF } from 'three-stdlib'

const VOUCHER_URL = `${process.env.REACT_APP_CDN_BASE_URL}/voucher-transformed.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
  }
  materials: {
    paper_Mat: THREE.MeshStandardMaterial
    textile_Mat: THREE.MeshStandardMaterial
  }
}

export default function Model({ redeemableSymbol, ...props }: any) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(VOUCHER_URL, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <Text
        position={[0, -1, 0.58]}
        rotation={[0,0,0]}
        fontSize={2}
        // lineHeight={0.8}
        // material-toneMapped={false}
        color='#444444'
      >
        {redeemableSymbol}
      </Text>

      <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.paper_Mat} />
      {/*<mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.textile_Mat} />*/}
    </group>
  )
}

useGLTF.preload(VOUCHER_URL)
