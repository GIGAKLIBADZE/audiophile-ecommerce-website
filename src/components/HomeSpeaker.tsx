import Circles from "/images/home/desktop/pattern-circles.svg";

const HomeSpeaker: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div style={{ backgroundColor: "orange", height: "10rem" }}>
      <div>
        <img
          src={data[5].categoryImage.mobile}
          alt="something"
          style={{ width: "4rem", height: "4rem" }}
        />
      </div>
      <div>
        <img
          src={Circles}
          alt="Circles"
          style={{ width: "4rem", height: "4rem" }}
        />
      </div>
      <div>
        <h5>ZX9 SPEAKER</h5>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button>SEE PRODUCT</button>
      </div>
    </div>
  );
};

export default HomeSpeaker;
