import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      
      <AppCard>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title='Редактировать' />
      </AppCard>


      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" onPress={goBack} color={THEME.GRAY_COLOR} />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            color={THEME.DANGER_COLOR}
            onPress={() => console.log('Remove')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
  },
  title: {
    fontSize: 26
  }
})
