/*function Todos() {
  const ref = firestore().collection('todos');

  return (
    <>
      <Appbar>
        <Appbar.Content title={'TODOs List'} />
      </Appbar>
      <ScrollView style={{flex: 1}}>
        <Text>List of TODOs!</Text>
      </ScrollView>
      <TextInput label={'New Todo'} onChangeText={() => {}} />
      <Button onPress={() => {}}>Add TODO</Button>
    </>
  );
}*/
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';




function Todo ({ id, title, complete }) {
      async function toggleComplete() {
        await firestore()
          .collection('customerApp')
          .doc(id)
          .update({
            complete: !complete,
          });
      }

      return (
        <List.Item
          title={title}
          onPress={() => toggleComplete()}
          left={props => (
            <List.Icon {...props} icon={complete ? 'check' : 'cancel'} />
          )}
        />
      );


}

export default React.memo(Todo);