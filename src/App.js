import "./App.css";
import CircularText from "./components/CircularText";
import SplitText from "./components/SplitText.js";

import Experience from "./components/Experience";
import DecryptedText from "./components/DecryptedText.js";
import ScrollFloat from "./components/ScrollFloat.js";
import Footer from "./components/Footer.js";
import AboutMe from "./components/AboutMe.js";
import ShinyText from "./components/ShinyText.js";
import CoolStuff from "./components/CoolStuff.js";
import BlurText from "./components/BlurText.js";
// import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: 50 }}>
          <SplitText
            text="Lets,   Make  it     Move!"
            className="text-2xl font-semibold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <div
            style={{
              padding: 10,
              // borderRadius: 20,
              borderTopColor: "#303030",
              borderBottomColor: "#303030",
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderTopStyle: "solid",
              borderBottomStyle: "solid",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <ShinyText
              text="Home"
              disabled={false}
              speed={3}
              className="custom-class"
            />
            <ShinyText
              text="Cool stuff"
              disabled={false}
              speed={3}
              className="custom-class"
            />
            <ShinyText
              text="About"
              disabled={false}
              speed={3}
              className="custom-class"
            />
            <ShinyText
              text="Experience"
              disabled={false}
              speed={3}
              className="custom-class"
            />
            <ShinyText
              text="Projects"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </div>
        </div>

        <div>
          <img
            src={require("./assets/bg5.png")}
            style={{
              width: 1000,
              marginTop: "500px", // Initial marginTop position
              transition: "margin-top 2s ease", // Animation duration and easing function
            }}
            onLoad={(e) => {
              // Apply the margin-top animation after the image is loaded
              setTimeout(() => {
                e.target.style.marginTop = "0px"; // Final marginTop position
              }, 0);
            }}
          />
        </div>

        <h1 className="heading">
          I am Gaurav, mobile app developer engineering smooth, scalable apps.
          Your expert in turning code into seamless user journeys.
        </h1>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: 100,
          // border: "1px solid white",
        }}
      >
        <BlurText
          text=" Cool Stuff I've Done"
          delay={150}
          animateBy="words"
          direction="top"
          // onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8"
        />
      </div>
      <CoolStuff></CoolStuff>
      <AboutMe></AboutMe>
      {/* <CircularText
        text="REACT Native MOBILE APP DEVELOPER "
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      /> */}
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: 50,
          marginBottom: 50,
          // border: "1px solid white",
        }}
      >
        <BlurText
          text="Past Experience"
          delay={150}
          animateBy="words"
          direction="top"
          // onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8"
        />
      </div>
      <Experience></Experience>
      <Experience></Experience>
      {/* <Experience></Experience> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
