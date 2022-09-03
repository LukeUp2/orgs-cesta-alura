import React from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native'
import Texto from '../../../componentes/Texto'
import topo from '../../../../assets/topo.png'

const SCREEN_WIDTH = Dimensions.get('screen').width

const Topo = ({ titulo }) => {
  return (
    <>
      <Image 
        style={styles.image}
        source={topo}
      />
      <Texto style={styles.title}>{titulo}</Texto>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 578 / 768 * SCREEN_WIDTH,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,

  },
})

export default Topo
