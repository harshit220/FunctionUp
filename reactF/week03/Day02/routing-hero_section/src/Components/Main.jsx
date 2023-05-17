const MainContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "centre",
        width: "100%",
        height: "100vh",
      }}
    >
        <div className="Containerr">
      <div className="text">
        <h2>Hello Marine Life</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          nostrum cum rem rerum corporis eaque tenetur minus! Possimus velit,
          voluptatum obcaecati distinctio, recusandae voluptas voluptatibus
          quisquam illo molestias repellendus suscipit?
        </p>
        <button style={{ backgroundColor: "#29335c", color: "#eee" }}>
          Explore
        </button>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/2446439/pexels-photo-2446439.jpeg?auto=compress&cs=tinysrgb&w=800 "
          alt="pic"
        />
      </div>
    </div>
    </div>
  );
};
export default MainContainer;
