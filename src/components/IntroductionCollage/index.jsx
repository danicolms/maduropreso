import TV from "./TV";
import MapScrap from "./MapScrap";
import CurvedArrow from "../CurvedArrow";

function IntroductionCollage() {
  return (
    <section className="introduction-collage">
      <MapScrap />
      <TV />
      {/* NOTE: Due to the flow of the introduction collage, we must place
        the curved arrow after the TV component so that it moves with it. The proper placement would be the App.tsx */}
      {/* <CurvedArrow />*/}
    </section>
  );
}

export default IntroductionCollage;
