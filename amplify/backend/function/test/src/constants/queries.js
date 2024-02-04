const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      tags {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
  }
`;
const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        createdAt
        updatedAt
        blogPostsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      label
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      deleted
      createdAt
      updatedAt
      __typename
    }
  }
`;

const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        deleted
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      comment {
        id
        content
        deleted
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      todoCommentId
      __typename
    }
  }
`;
const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        todoCommentId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
const getPostTags = /* GraphQL */ `
  query GetPostTags($id: ID!) {
    getPostTags(id: $id) {
      id
      postId
      tagId
      post {
        id
        title
        content
        createdAt
        updatedAt
        blogPostsId
        __typename
      }
      tag {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;

const listPostTags = /* GraphQL */ `
  query ListPostTags(
    $filter: ModelPostTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postId
        tagId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

const commentByDeleted = /* GraphQL */ `
  query CommentByDeleted(
    $deleted: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentByDeleted(
      deleted: $deleted
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        deleted
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

const postTagsByPostId = /* GraphQL */ `
  query PostTagsByPostId(
    $postId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postTagsByPostId(
      postId: $postId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postId
        tagId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

const postTagsByTagId = /* GraphQL */ `
  query PostTagsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postTagsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postId
        tagId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

module.exports = {
  listComments,
};
