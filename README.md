<h1 align="center">
   DESAFIO: CONCEITOS DO REACT NATIVE
</h1>

<h4 align="center"> 
	🚧 Projeto na versão 1.0 mobile para gestão de condomínio, em construção... 🚧
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/static/v1?label=Language&message=4&color=green&style=for-the-badge&logo=ghost">

  <img alt="Repository size" src="https://img.shields.io/static/v1?label=Last%20commit&message=December&color=yellowgreen&style=for-the-badge&logo=Slack">
</p>

## 💻 Sobre o Projeto

Esse projeto faz parte da prova de conhecimentos realizado na trilha React Native - Ignite na plataforma Rocketseat, e para essa aplicação o objetivo é completar os códigos onde as funcionalidades estão sem funcionar.

## 🎨 Layout

O layout foi desenvolvido pela equipe da Rocketseat 

### Mobile

<p align="center">
  <img alt="chapter" title="#chapter" src="https://raw.githubusercontent.com/jeandsontb/React-Native-Chapter-01/main/Screens/todo00.jpg" width="200px">

  <img alt="chapter" title="#chapter" src="https://raw.githubusercontent.com/jeandsontb/React-Native-Chapter-01/main/Screens/todo01.jpg" width="200px">

  <img alt="chapter" title="#chapter" src="https://raw.githubusercontent.com/jeandsontb/React-Native-Chapter-01/main/Screens/todo02.jpg" width="200px">
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [React Native][react-native]
- [Vscode][vscode]

## A aplicação original sem alterações está disponível no link abaixo:

[rocketseat-education/ignite-template-react-native-todos](https://github.com/rocketseat-education/ignite-template-react-native-todos)

## Instruções para aplicar no projeto

## O que devo editar na aplicação?

Com o template já clonado e as dependências instaladas, você deve completar onde não possui código com o código para atingir os objetivos de cada teste. Nesse desafio, você deve editar **apenas** os seguintes arquivos para completar as funcionalidades da aplicação:

- [src/pages/Home.tsx](https://github.com/rocketseat-education/ignite-template-react-native-todos/blob/main/src/pages/Home.tsx).
- [src/components/Header.tsx](https://github.com/rocketseat-education/ignite-template-react-native-todos/blob/main/src/components/Header.tsx);
- [src/components/TodoInput.tsx](https://github.com/rocketseat-education/ignite-template-react-native-todos/blob/main/src/components/TodoInput.tsx);
- [src/components/TasksList.tsx](https://github.com/rocketseat-education/ignite-template-react-native-todos/blob/main/src/components/TasksList.tsx);

### Implementando contagem no Header

Para implementar a contagem no Header o único arquivo que você precisa editar é o `Header.tsx`.

Nesse componente, tudo que você precisa fazer é implementar a lógica do `tasksCounterText` e descomentar o `Text` referente ao render do `tasksCounter` e `tasksCounterText`.

Para o `tasksCounterText`, você precisa atribuir o valor `tarefa` caso o `tasksCounter` for igual a 1. Caso contrário, atribua o valor `tarefas`.

### Adicionando todo

Para adicionar um todo, você vai precisar fazer edições nos arquivos `TodoInput.tsx`, `Home.tsx` e `TasksList.tsx`.

No componente `TodoInput.tsx` temos o estado `task` que deverá ser usado na propriedade `value` do componente `TextInput` e a função `setTask` que deve ser usada na propriedade `onChangeText` também do `TextInput`.

Você deve implementar a função que existe no arquivo que é:

- **handleAddNewTask**: Essa função deve ser chamada quando o botão `TouchableOpacity` for pressionado ou quando a tecla `enter` do teclado for pressionada (use a propriedade `onSubmitEditing` do `TextInput` para isso).
Ao receber o nome da tarefa na função, é importante que você verifique se esse nome é uma `string` válida. Isto é, o valor recebido **deve** ser diferente de uma `string` vazia.
Essa função deve chamar a função `addTask` (recebida nas propriedades do componente) passando o estado `task` como argumento. Lembre de limpar o estado `task` sempre que uma nova `task` for adicionada.

Na página `Home.tsx`, você deve implementar a função `handleAddTask`. Nela você vai receber o valor `newTaskTitle`, criar uma nova `task` e adicioná-la ao final do array `tasks` (respeitando o princípio da imutabilidade). A estrutura de uma `task` é a seguinte:

```tsx
interface Task {
  id: number;
  title: string;
  done: boolean;
}
```

Para os valores da tarefa, você pode gerar um `id` aleatório usando o método `new Date().getTime()` e a propriedade `done` deve sempre ser iniciada com o valor `false`.
Lembre-se também de manter as tarefas já existentes na listagem, apenas adicionando a nova tarefa.

Por fim, no componente `TasksList` tudo que você precisa fazer é descomentar a linha `data={tasks}`

### Removendo todo

Para remover um todo, você vai precisar fazer edições nos arquivos `TasksList.tsx` e `Home.tsx`.

No componente `TasksList.tsx`, você precisa fazer com que o segundo `TouchableOpacity` (o que renderiza o ícone da lixeira) apague o todo. Para isso, utilize o método `onPress` do botão e chame a propriedade `removeTask` passando como parâmetro o `id` do `item`.

Lembre-se de chamar a função passando o `id` como argumento corretamente. 

Exemplo:

```tsx
ERRADO:
<TouchableOpacity 
  onPress={handleSomething(item.id)}  
>
 <Text>Botão</Text>
</TouchableOpacity>

CERTO:
<TouchableOpacity 
  onPress={() => handleSomething(item.id)} 
>
 <Text>Botão</Text>
</TouchableOpacity>
```

Na página `Home.tsx`, você vai precisar implementar a lógica do `handleRemoveTask`. Como o próprio nome diz, essa função irá remover uma tarefa que possua o `id` igual ao `id` recebido. Para isso, você pode usar o método `filter`, criar uma nova lista com a tarefa removida a partir disso e salvar a informação no estado.

### Marcando e desmarcando um todo como done

Para marcar e desmarcar um todo, você vai precisar fazer edições nos arquivos `TasksList.tsx` e `Home.tsx`.

No componente `TasksList.tsx`, você precisa fazer com que o primeiro `TouchableOpacity` (o que renderiza o ícone `check`) marque e desmarque o todo. Para isso, utilize o método `onPress` do botão e chame a propriedade `toggleTaskDone` passando como parâmetro o `id` do `item`.

Lembre-se de chamar a função passando o `id` como argumento corretamente.

Além disso, você deve também aplicar as estilizações (propriedade `style`) no `View` e `Text` para que exiba o item da tarefa corretamente quando marcado e quando desmarcado. Você pode usar a propriedade `done` do `item` na listagem para aplicar a estilização correta.

Caso a propriedade `done` esteja como `true`, você deve aplicar as seguintes estilizações:

- No componente `View` deve-se aplicar a estilização `styles.taskMarkerDone`;
- No componente `Text` deve-se aplicar a estilização `styles.taskTextDone`.

Caso a propriedade `done` esteja como `false`, você deve aplicar as seguintes estilizações:

- No componente `View` deve-se aplicar a estilização `styles.taskMarker`;
- No componente `Text` deve-se aplicar a estilização `styles.taskText`.

Na página `Home.tsx`, você deve implementar a função `handleToggleTaskDone`. Essa função deve receber o `id` de uma tarefa e alterar a propriedade `done` para o inverso do seu valor, ou seja, altere para `true` caso esteja `false` ou altere para `false` caso esteja `true`.

Lembre que você deve usar o conceito de imutabilidade sempre que alterar a informação de um estado. Ou seja, ao alterar a propriedade `done` de uma tarefa, não faça isso diretamente no estado `tasks`, salve a lista alterada em uma nova variável antes de salvar no estado.

<aside>
ℹ️ Você pode trabalhar com o método `find` para encontrar a `task` utilizando o `id` para comparação. É importante copiar com segurança o conteúdo de `tasks` antes de manipular o array para não quebrar o conceito de `imutabilidade`. Uma forma de fazer isso seria:

`const updatedTasks = tasks.map(task => ({ ...task }))`

</aside>

## 💡 Como executar o projeto

1. Mobile 

💡 Para que o sistema execute é necessário verificar os pré-requisitos

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs] e SDK configurado. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🧭 Rodando a aplicação

```bash
# Clone este repositório

# Vá para a pasta da aplicação 

# Instale as dependências
$ npm install ou yarn

# Execute o start da aplicação em modo de desenvolvimento
$ sudo npm run start ou yarn start

# Execute o deploy da plicação para o emulador
$ npm run android ou yarn android

# Execute os testes
$ npm run test ou yarn test


```

## 📝 Licença

Este projeto esta sobe a licença MIT.

Desafio completado por Jeandson Tenorio 👋🏽 [Entre em contato!](https://www.linkedin.com/in/jeandson/)

[nodejs]: https://nodejs.org/
[react-native]: https://reactnative.dev/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/