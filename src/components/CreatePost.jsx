const CreatePost = () => {
  return (
    <>
      <form className="create-post">
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            Enter your user id here
          </label>
          <input 
            type="text"
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
