const Button = (props) => {
  //  Write your code here.
  const { bgColor, content, color } = props;
  return (
    <button
      className="button"
      style={{ backgroundColor: bgColor, color: color }}
    >
      {content}
    </button>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button bgColor="#eab308" content="Like" color="white" />
      <Button bgColor="#ffffff" content="Comment" color="black" />
      <Button bgColor=" #1d4ed8" content="Share" color="white" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
