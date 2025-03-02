import Circles from "/images/home/desktop/pattern-circles.svg";
import SampleProduct from "/images/home/mobile/image-speaker-zx7.jpg";
import SampleProduct2 from "/images/home/mobile/image-earphones-yx1.jpg";

const HomeProducts: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div>
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
      <div style={{ backgroundColor: "orange", height: "10rem" }}>
        <h5>ZX7 SPEAKER</h5>
        <button>SEE PRODUCT</button>
      </div>
      <div>
        <img src={SampleProduct} style={{ width: "4rem", height: "4rem" }} />
      </div>
      <div>
        <div>
          <img src={SampleProduct2} style={{ width: "4rem", height: "4rem" }} />
        </div>
        <div>
          <h5>YX1 EARPHONES</h5>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
