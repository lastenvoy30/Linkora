const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <center className="welcome-message">
      {" "}
      <h1>No posts to display</h1>
      <button type="button" onClick={onGetPostsClick} className="btn btn-success">
        Get Posts from Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
