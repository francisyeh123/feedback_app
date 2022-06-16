import React from "react";

function App() {
  const title = "My Blog";
  const body = "bbb";
  const comments = [
    { id: 1, text: "ooone" },
    { id: 2, text: "tttwo" },
    { id: 3, text: "threee" },
  ];

  const loading = false;
  const showComments = true;

  const commentBlock_1 = showComments ? (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  ) : null;

  const commentBlock_2 = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  if (loading) return <h1>loading...</h1>;

  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>

      {showComments && commentBlock_2}
    </>
  );
}

export default App;
