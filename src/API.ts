/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  name: string,
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  name: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  content?: string | null,
  tags?: ModelPostTagsConnection | null,
  createdAt: string,
  updatedAt: string,
  blogPostsId?: string | null,
};

export type ModelPostTagsConnection = {
  __typename: "ModelPostTagsConnection",
  items:  Array<PostTags | null >,
  nextToken?: string | null,
};

export type PostTags = {
  __typename: "PostTags",
  id: string,
  postId: string,
  tagId: string,
  post: Post,
  tag: Tag,
  createdAt: string,
  updatedAt: string,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  label: string,
  posts?: ModelPostTagsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlogInput = {
  id: string,
  name?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  content?: string | null,
  blogPostsId?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  blogPostsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  blogPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  label: string,
};

export type ModelTagConditionInput = {
  label?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
  label?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  todoCommentId?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
  todoCommentId?: ModelIDInput | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  comment?: Comment | null,
  createdAt: string,
  updatedAt: string,
  todoCommentId?: string | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  todoCommentId?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreatePostTagsInput = {
  id?: string | null,
  postId: string,
  tagId: string,
};

export type ModelPostTagsConditionInput = {
  postId?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  and?: Array< ModelPostTagsConditionInput | null > | null,
  or?: Array< ModelPostTagsConditionInput | null > | null,
  not?: ModelPostTagsConditionInput | null,
};

export type UpdatePostTagsInput = {
  id: string,
  postId?: string | null,
  tagId?: string | null,
};

export type DeletePostTagsInput = {
  id: string,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  blogPostsId?: ModelIDInput | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
  todoCommentId?: ModelIDInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelPostTagsFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  and?: Array< ModelPostTagsFilterInput | null > | null,
  or?: Array< ModelPostTagsFilterInput | null > | null,
  not?: ModelPostTagsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionBlogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  label?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionPostTagsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  tagId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostTagsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostTagsFilterInput | null > | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    todoCommentId?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    todoCommentId?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    todoCommentId?: string | null,
  } | null,
};

export type CreatePostTagsMutationVariables = {
  input: CreatePostTagsInput,
  condition?: ModelPostTagsConditionInput | null,
};

export type CreatePostTagsMutation = {
  createPostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostTagsMutationVariables = {
  input: UpdatePostTagsInput,
  condition?: ModelPostTagsConditionInput | null,
};

export type UpdatePostTagsMutation = {
  updatePostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostTagsMutationVariables = {
  input: DeletePostTagsInput,
  condition?: ModelPostTagsConditionInput | null,
};

export type DeletePostTagsMutation = {
  deletePostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    todoCommentId?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      todoCommentId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostTagsQueryVariables = {
  id: string,
};

export type GetPostTagsQuery = {
  getPostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostTagsQueryVariables = {
  filter?: ModelPostTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostTagsQuery = {
  listPostTags?:  {
    __typename: "ModelPostTagsConnection",
    items:  Array< {
      __typename: "PostTags",
      id: string,
      postId: string,
      tagId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostTagsByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostTagsByPostIdQuery = {
  postTagsByPostId?:  {
    __typename: "ModelPostTagsConnection",
    items:  Array< {
      __typename: "PostTags",
      id: string,
      postId: string,
      tagId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostTagsByTagIdQueryVariables = {
  tagId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostTagsByTagIdQuery = {
  postTagsByTagId?:  {
    __typename: "ModelPostTagsConnection",
    items:  Array< {
      __typename: "PostTags",
      id: string,
      postId: string,
      tagId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    todoCommentId?: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    todoCommentId?: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    todoCommentId?: string | null,
  } | null,
};

export type OnCreatePostTagsSubscriptionVariables = {
  filter?: ModelSubscriptionPostTagsFilterInput | null,
};

export type OnCreatePostTagsSubscription = {
  onCreatePostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostTagsSubscriptionVariables = {
  filter?: ModelSubscriptionPostTagsFilterInput | null,
};

export type OnUpdatePostTagsSubscription = {
  onUpdatePostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostTagsSubscriptionVariables = {
  filter?: ModelSubscriptionPostTagsFilterInput | null,
};

export type OnDeletePostTagsSubscription = {
  onDeletePostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
