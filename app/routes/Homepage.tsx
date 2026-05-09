import UpperStars from "../assets/upper_stars.png"
import LowerStars from "../assets/lower_stars.png"

export default function Homepage() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #F4A9CD 0%, #67A7CA 100%)",
        minHeight: 1024,
      }}
    >
      <img src={UpperStars} alt="" width="1485" height="836"
        style={{top: -123}}/>
      <img src={LowerStars} alt="" width="1485" height="836"
        style={{top: 646}}/>
      
    </div>
  );
}