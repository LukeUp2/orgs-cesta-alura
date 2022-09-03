import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import Topo from './Componentes/Topo'
import Detalhes from './Componentes/Detalhes'
import Item from './Componentes/Item'
import Texto from '../../componentes/Texto'

const Cesta = ({ topo, detalhes, itens }) => {
  return (
    <>
      <FlatList 
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo}/>
              <View style={styles.cesta}>
                <Detalhes {...detalhes}/>
                <Texto style={styles.titulo}>{itens.titulo}</Texto>
              </View>
            </>
          )
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    padding: 26
  },
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
})

export default Cesta
