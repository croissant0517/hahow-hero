type ErrorProps = {
  title?: string;
  description?: string;
};

const Error = ({
  title = "發生了一點問題",
  description = "薩諾斯可能彈指了...",
}: ErrorProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        type="button"
        onClick={() => {
          location.href = "/heroes";
        }}
      >
        回到英雄列表
      </button>
    </div>
  );
};

export default Error;
