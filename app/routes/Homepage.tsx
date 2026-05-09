import UpperStars from "../assets/upper_stars.png"
import LowerStars from "../assets/lower_stars.png"
import Image1 from "../assets/home-img-1.png"
import University from "../assets/home-uni.png"
import Image2 from "../assets/home-img-2.png"
import LFE from "../assets/home-lfe.png"
import Spectrum from "../assets/home-spectrum.png"
import { Link } from 'react-router';

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
      <img src={Image1} alt="" width="329" height="218"
        style={{top: 216, left: 100, position: "absolute"}}/>
      <Link to="/articles/university">
        <img src={University} alt="" width="418" height="171"
        style={{top: 278, left: 584, position: "absolute"}}/>
      </Link>
      <img src={Image2} alt="" width="212.37" height="198.47"
        style={{top: 444, left: 1083, position: "absolute"}}/>
      <Link to="/letter-from-editor">
        <img src={LFE} alt="" width="520" height="292.5"
          style={{top: 556, left: 876, position: "absolute"}}/>
      </Link>
      <Link to="/articles/spectrum">
        <img src={Spectrum} alt="" width="373.24" height="229.54"
          style={{top: 636, left: 220, position: "absolute"}}/>
      </Link>
      
    </div>
  );
}