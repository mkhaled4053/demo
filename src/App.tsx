import { useEffect, useState } from 'react';

import { generateClient } from 'aws-amplify/api';

import { createPost, createPostTags, createTag, createTodo, deleteTodo } from './graphql/mutations';
import { getPost, getTodo, listComments, listPosts, listTodos } from './graphql/queries';
import { type CreateTodoInput, type Todo } from './API';

const initialState: CreateTodoInput = { name: '', description: '' };
const client = generateClient();

const App = () => {
  const [formState, setFormState] = useState<CreateTodoInput>(initialState);
  const [todos, setTodos] = useState<Todo[] | CreateTodoInput[]>([]);

  useEffect(() => {
    fetchTodos();
    // fetchPosts()
  }, []);

  async function fetchTodos() {
    try {
      const todoData = await client.graphql({
        query: listTodos,
      });
      const todos = todoData.data.listTodos.items;
      console.log(todos);
      setTodos(todos);
    } catch (err) {
      console.log(err);
    }
  }

//   async function fetchPosts() {
//     try {


// // create tag
// const tagResult = await client.graphql({
//   query: createTag,
//   variables: {
//     input: {
//       label: 'new Tag'
//     }
//   }
// });
// const tag = tagResult.data.createTag;

// // connect post and tag
// let con = await client.graphql({
//   query: createPostTags,
//   variables: {
//     input: {
//       postId: "d19b3000-9008-4b2e-8c4e-a0f01256bc41",
//       tagId: tag.id,
//     }
//   }
// });

// console.log(con);


// const listPostsResult = await client.graphql({ query: listPosts });
// const posts = listPostsResult.data.listPosts.items;

// console.log(posts);
// //@ts-ignore
// console.log(posts[0].tags);

//     } catch (err) {
//       console.log(err);
//     }
//   }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await client.graphql({
        query: createTodo,
        variables: {
          input: todo,
        },
      });
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  async function removeTodo(id:string) {
    try {
      setTodos(todos.filter(todo=>todo.id !==id));
      await client.graphql({
        query: deleteTodo,
        variables: {
          input: {id},
        },
      });
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={(event) =>
          setFormState({ ...formState, name: event.target.value })
        }
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={(event) =>
          setFormState({ ...formState, description: event.target.value })
        }
        style={styles.input}
        value={formState.description as string}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>
        Create Todo
      </button>
      {todos.map((todo, index) => (
        <div key={todo.id ? todo.id : index} style={styles.todo}>
          <p style={styles.todoName}>{todo.name}</p>
          <p style={styles.todoDescription}>{todo.description}</p>
          <p onClick={()=>removeTodo(todo.id!)} style={styles.deleteTodo}>delete</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  deleteTodo: { color: 'red' },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
} as const;

export default App;