import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store"

const CreatePost = () => {

  const { addPost } = useContext(PostList);
  
  const userIdElement = useRef();
  const postTtileElement = useRef();
  const postBodyElement = useRef();
  const reactionsElements = useRef();
  const tagsElement = useRef();  

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTtileElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElements.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTtileElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElements.current.value = "";
    tagsElement.current.value = "";


    addPost(userId , postTitle, postBody , reactions , tags)
  }
  
  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            Enter your user id here
          </label>
          <input 
            type="text"
            ref={userIdElement}
            className="form-control"
            id="title"
            placeholder="Your user id"
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter Title
          </label>
          <input
            type="text"
            ref={postTtileElement}
            className="form-control"
            id="title"
            placeholder="how are you feeeling today?"
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows="4"
            className="form-control"
            id="cotent"
            placeholder="Tell us more about it" 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            ref={reactionsElements}
            className="form-control"
            id="reactions" 
            placeholder="how many people reacted to this post"         
          />
        </div>

        <div className="mb-3">
          <label htmlFor="hashtag" className="form-label">
            Enter your hashtags
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="hashtag"
            placeholder="Please enter tags using space"
          />
        </div>
        <button type="Post" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
