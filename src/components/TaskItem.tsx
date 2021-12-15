import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import trashIcon from '../assets/icons/trash/trash.png';
import { Task } from './TasksList';

interface IResponseTasks {
  index: number;
  item: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: (id: number, title: string) => void;
}

const TaskItem = ({index, item, toggleTaskDone, removeTask, editTask }: IResponseTasks) => {

  const [ edit, setEdit ] = useState(false);
  const [ editabledTask, setEditableTask ] = useState(item.title);
  const textInputRef = useRef<TextInput>(null)

  useEffect(() => {
    if(textInputRef.current) {
      if(edit) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
  }, [edit]);

  const handleStartEditing = () => {
    setEdit(true);
  }

  const handleCancelEditing = () => {
    setEditableTask(item.title);
    setEdit(false);
  }

  const handleSubmitEditing = ( id: number ) => {
    editTask(id, editabledTask);
    setEdit(false);
  }
 
  return (
    <React.Fragment >
      <View>
        <TouchableOpacity
          testID={`button-${index}`}
          activeOpacity={0.7}
          style={styles.taskButton}
          onPress={() => toggleTaskDone(item.id)}
        >
          <View 
            testID={`marker-${index}`}
            style={item.done === true ? styles.taskMarkerDone : styles.taskMarker}
          >
            { item.done && (
              <Icon 
                name="check"
                size={12}
                color="#FFF"
              />
            )}
          </View>

          <TextInput 
            value={editabledTask}
            onChangeText={setEditableTask}
            editable={edit}
            onSubmitEditing={() => handleSubmitEditing(item.id)}
            style={item.done === true ? styles.taskTextDone : styles.taskText}
            ref={textInputRef}
          />
        </TouchableOpacity>
      </View>

      <View style={ styles.iconsContainer } >
        {edit ? (
          <TouchableOpacity
            onPress={handleCancelEditing}
          >
            <Icon name='x' size={24} color='#b2b2b2' />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleStartEditing}
          >
            <Icon name='edit' size={18} color='#b2b2b2' />
          </TouchableOpacity>
        )}

        <View 
          style={ styles.iconsDivider }
        />

        <TouchableOpacity
          testID={`trash-${index}`}
          style={{ paddingHorizontal: 24, marginTop: -2 }}
          onPress={() => removeTask(item.id)}
          disabled={edit}
        >
          <Image source={trashIcon} style={{opacity: edit ? 0.2 : 1}} />
        </TouchableOpacity>
      </View>


    </React.Fragment>
  )
}

export { TaskItem };

const styles = StyleSheet.create({
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskText: {
    color: '#666',
    fontFamily: 'Inter-Medium'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: '#1DB863',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskTextDone: {
    color: '#1DB863',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter-Medium'
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconsDivider: {
    width: 1,
    height: 24,
    backgroundColor: 'rgba(196, 196, 196, 0.24)',
    marginLeft: 20,
    marginRight: -5
  }
})