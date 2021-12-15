import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {

    const compareTask = tasks.find(task => task.title === newTaskTitle);

    if(compareTask) {
      Alert.alert(
        'Task já cadastrada',
        'Você não pode cadastrar uma task com o mesmo nome',
        [
          {text: 'OK', onPress: () => ''}
        ]
      )
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldTask => [...oldTask, newTask]);
  }

  function handleEditTask(taskId: number, taskNewTitle: string) {
    const editTasks = tasks.map(task => ({ ...task }));

    const foundTask = editTasks.find(task => task.id === taskId);

    if(!foundTask) {
      return;
    }

    foundTask.title = taskNewTitle;
    setTasks(editTasks);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))

    const foundTask = updatedTasks.find(item => item.id === id);

    if(!foundTask){
      return;
    }

    foundTask.done = !foundTask.done;
    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {

    Alert.alert(
      'Remover item',
      'Tem certeza que você deseja remover esse item?',
      [
        { text: "Não" },
        { text: "OK", onPress: () => setTasks(tasks.filter(task => task.id !== id)) }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
        editTask={handleEditTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})