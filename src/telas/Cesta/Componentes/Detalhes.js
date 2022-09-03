import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Texto from '../../../componentes/Texto'
import Botao from '../../../componentes/Botao'


const Detalhes = ({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) => {
  return (
    <>
      <Texto style={styles.nome}>{nome}</Texto>
        <View style={styles.fazenda}>
          <Image 
            style={styles.imagemFazenda}
            source={logoFazenda}
          />
          <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={styles.descricaoFazenda}>{descricao}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>

        <Botao titulo={botao} style={styles.botao} onPress={() => {}}/>
    </>
  )
}

const styles = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold'
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16, 
    lineHeight: 26,
    marginLeft: 12,
  },
  descricaoFazenda: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26
  },
  preco: {
    color: '#2a9f85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  },
  botao: {
    marginTop: 16,
  },
})

export default Detalhes
