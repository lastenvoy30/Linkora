import { act, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Exploring React Hooks 🚀",
    body: "Today I learned how useState and useEffect make React development easier and more powerful.",
    reactions: "120",
    userId: "user_101",
    tags: ["react", "javascript", "webdev"],
  },
  {
    id: "2",
    title: "My Coding Journey 💻",
    body: "Started learning DSA and React. Every small step is making me more confident as a developer.",
    reactions: "89",
    userId: "user_102",
    tags: ["coding", "learning", "motivation"],
  },
];

export default PostListProvider;
