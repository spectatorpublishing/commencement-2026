import UpperStars from "../assets/upper_stars.png"
import LowerStars from "../assets/lower_stars.png"
import Image1 from "../assets/home-img-1.png"
import University from "../assets/home-uni.png"
import Image2 from "../assets/home-img-2.png"
import LFE from "../assets/home-lfe.png"
import Spectrum from "../assets/home-spectrum.png"
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";

const DESKTOP_BOARD_WIDTH = 1485;
const DESKTOP_BOARD_HEIGHT = 860;

export default function Homepage() {
  const [scale, setScale] = useState(1);
  const shellRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth > 960) {
        setScale(1);
        return;
      }

      const shellTop = shellRef.current?.getBoundingClientRect().top ?? 0;
      const availableWidth = window.innerWidth - 24;
      const availableHeight = window.innerHeight - shellTop - 24;
      const widthScale = availableWidth / DESKTOP_BOARD_WIDTH;
      const heightScale = availableHeight / DESKTOP_BOARD_HEIGHT;
      setScale(Math.min(1, widthScale, heightScale));
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <main ref={shellRef} className="homepage-shell" style={{ ["--homepage-scale" as string]: scale }}>
      <div className="homepage-board-viewport">
        <div className="homepage-desktop-board" aria-hidden="true">
          <img
            src={UpperStars}
            alt=""
            width="1485"
            height="836"
            className="homepage-stars homepage-stars--top"
          />
          <img
            src={LowerStars}
            alt=""
            width="1485"
            height="836"
            className="homepage-stars homepage-stars--bottom"
          />
          <img
            src={Image1}
            alt=""
            width="329"
            height="218"
            className="homepage-art homepage-art--image1"
          />
          <Link to="/articles/university" className="homepage-art homepage-art--university">
            <img src={University} alt="University" width="418" height="171" />
          </Link>
          <img
            src={Image2}
            alt=""
            width="212.37"
            height="198.47"
            className="homepage-art homepage-art--image2"
          />
          <Link to="/letter-from-editor" className="homepage-art homepage-art--letter-from-editor">
            <img src={LFE} alt="Letter from the Editor" width="520" height="292.5" />
          </Link>
          <Link to="/articles/spectrum" className="homepage-art homepage-art--spectrum">
            <img src={Spectrum} alt="Spectrum" width="373.24" height="229.54" />
          </Link>
        </div>
      </div>
    </main>
  );
}