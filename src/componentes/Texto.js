import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Texto = ({ children, style }) => {

  let estilo = style?.fontWeight === 'bold' ? styles.textoNegrito : styles.texto

  return <Text style={[style, estilo]}>{ children }</Text>
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal'
  },
  textoNegrito: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal'
  }
})

export default Texto
