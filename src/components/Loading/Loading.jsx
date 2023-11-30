export const LoadingMesssge = ({ messageName }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{messageName} Loading...</h3>
      <img
        src="https://idekukreatif.com/wp-content/uploads/2020/05/loading-gif.gif"
        alt=""
      />
    </div>
  );
};
