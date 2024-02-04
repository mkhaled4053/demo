import { useEffect, useState } from "react";

import { generateClient } from "aws-amplify/api";

import {
  createComment,
  createPost,
  createPostTags,
  createTag,
  createTodo,
  deleteComment,
  deleteTodo,
} from "./graphql/mutations";
import {
  commentByDeleted,
  getPost,
  getTodo,
  listComments,
  listPosts,
  listTodos,
} from "./graphql/queries";
import { type CreateTodoInput, type Todo } from "./API";

const initialState: CreateTodoInput = { name: "", description: "" };
const client = generateClient();

const App = () => {
  let [data, setData] = useState({});

  function onClick() {
    let test = Array.from({ length: 500000 }, (_, k) => ({
      gender: k % 2 === 0 ? "male" : "female",
      count: k,
    }));
    const start = performance.now();

    let { genderRatio, count } = test.reduce(
      (prev: any, curr) => {
        if (!prev.genderRatio[curr.gender]) {
          prev.genderRatio[curr.gender] = 1;
        } else {
          prev.genderRatio[curr.gender]++;
        }
        prev.count += curr.count;
        return prev;
      },
      { genderRatio: {}, count: 0 }
    );

    console.log(genderRatio);
    console.log(count);

    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
    // console.log(test);
  }
  async function createOneComment() {
    await client.graphql({
      query: createComment,
      variables: { input: { content: "male" } },
    });

    console.log("dd");
  }

  async function createComments() {
    const start = performance.now();

    let test = Array.from({ length: 7000 });
    test.map((t, index) =>
      client.graphql({
        query: createComment,
        variables: { input: { content: index % 2 === 0 ? "male" : "female" } },
      })
    );
    await Promise.all(test);

    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
    // console.log(test);
  }

  async function list(nextToken?: string | null, limit?: number) {
    let listing = (
      await client.graphql({
        query: listComments,

        variables: { limit: limit || 100000, nextToken },
      })
    ).data.listComments;

    return listing;
  }

  async function listByDeleted(nextToken?: string | null, limit?: number) {
    let listing = (
      await client.graphql({
        query: commentByDeleted,

        variables: { limit: limit || 100000, nextToken, deleted: "0" },
      })
    ).data.commentByDeleted;

    return listing;
  }

  async function getComments() {
    const start = performance.now();
    let listing;
    let comments: any[] = [];
    do {
      listing = await list(listing?.nextToken);
      comments = comments.concat(listing.items);
    } while (listing.nextToken);
    console.log(comments);

    const end = performance.now();
    console.log(`fetching time: ${end - start} ms`);

    const st = performance.now();

    let { genderRatio } = comments.reduce(
      (prev: any, curr) => {
        if (!prev.genderRatio[curr.content]) {
          prev.genderRatio[curr.content] = 1;
        } else {
          prev.genderRatio[curr.content]++;
        }
        prev.count += curr.count;
        return prev;
      },
      { genderRatio: {} }
    );
    console.log(genderRatio);

    const en = performance.now();
    console.log(`loop time: ${en - st} ms`);
  }

  async function getCommentsByDeleted() {
    const start = performance.now();
    let listing;
    let comments: any[] = [];
    do {
      listing = await listByDeleted(listing?.nextToken);
      comments = comments.concat(listing.items);
    } while (listing.nextToken);
    console.log(comments);
    // listing = (
    //   await client.graphql({
    //     query: commentByDeleted,

    //     variables: { deleted: "0", limit: 10000 },
    //   })
    // ).data.commentByDeleted;

    // comments = comments.concat(listing.items);
    // console.log(comments);

    const end = performance.now();
    console.log(`fetching time: ${end - start} ms`);
  }

  async function removeComments() {
    const start = performance.now();
    let listing;
    let comments: any[] = [];
    listing = await list(null, 7000);
    comments = comments.concat(listing.items);
    console.log(comments);

    const end = performance.now();
    console.log(`fetching time: ${end - start} ms`);

    const st = performance.now();

    let deletePromises = comments.map((comment) =>
      client.graphql({
        query: deleteComment,
        variables: { input: { id: comment.id } },
      })
    );
    await Promise.all(deletePromises);
    const en = performance.now();
    console.log(`delete time: ${en - st} ms`);
  }

  async function fetchByLambda() {
    const start = performance.now();

    let res = await fetch(
      "https://7iozmlcwqgl5ksqs7ybfayjfem0tktdl.lambda-url.us-east-2.on.aws/"
    ).then((res) => res.json());
    console.log(res.data.listComments.items);
    const end = performance.now();
    console.log(`fetching time: ${end - start} ms`);
  }

  return (
    <div style={styles.container}>
      <button onClick={onClick}>test</button>
      <button onClick={createOneComment}>create one commet</button>
      <button onClick={createComments}>create commets</button>
      <button onClick={getComments}>list comments</button>
      <button onClick={getCommentsByDeleted}>list comments by deleted</button>
      <button onClick={removeComments}>delete comments</button>
      <button onClick={fetchByLambda}>fetch by lambda</button>
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
  deleteTodo: { color: "red" },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
} as const;

export default App;
