const Error = () => {
  return (
    <div>
      <h1>發生了一點問題</h1>
      <p>薩諾斯可能彈指了...</p>
      <button
        type="button"
        onClick={() => {
          location.href = "/heroes";
        }}
      >
        Try again?
      </button>
    </div>
  );
};

export default Error;
