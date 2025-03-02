import bestGear from "/images/shared/mobile/image-best-gear.jpg";

const HomeFooter: React.FC = () => {
  return (
    <footer>
      <div>
        <img
          src={bestGear}
          alt="Best gear"
          style={{ width: "4rem", height: "4rem" }}
        />
      </div>
      <div>
        <h4>Bringing you the best audio gear</h4>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </footer>
  );
};

export default HomeFooter;
