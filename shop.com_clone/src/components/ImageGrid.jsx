export default function ImageGrid({ data }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        backgroundColor: "#f0f1f7",
        padding: "5px",
        paddingLeft: "25px",
      }}
    >
      {data.map((item) => {
        return (
          <div>
            <img
              style={{
                border: "10px solid #0098b8",
                height: "150px",
                width: "300px",
                padding: "10px",
                rowGap: "10px",
                backgroundColor: "white",
              }}
              src={item}
              alt="1"
            />
          </div>
        );
      })}
    </div>
  );
}
