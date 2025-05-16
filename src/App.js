import "./App.css";
import CircularText from "./components/CircularText";
import SplitText from "./components/SplitText.js";

import Experience from "./components/Experience";
import DecryptedText from "./components/DecryptedText.js";
import ScrollFloat from "./components/ScrollFloat.js";
import Footer from "./components/Footer.js";
import AboutMe from "./components/AboutMe.js";
import ShinyText from "./components/ShinyText.js";
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
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <h1 className="heading">
            Thibaut Crépelle, 3D & Motion generalist freelance who makes
            products dance. Your one-stop shop, with more disco.
          </h1>

          <h1 className="heading">
            Thibaut Crépelle, 3D & Motion generalist freelance who makes
            products dance. Your one-stop shop, with more disco.
          </h1>
        </div> */}
        <div style={{ marginTop: 50 }}>
          <SplitText
            text="Lets, Make  it Move!"
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
              borderRadius: 20,
              borderColor: "#303030",
              borderWidth: 1,
              borderStyle: "solid",
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
            <ShinyText
              text="Contact"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </div>
        </div>

        <div
          style={
            {
              // border: "1px solid white",
              // position: "absolute",
              // top: "10%",
            }
          }
        >
          <img
            src={require("./assets/bg5.png")}
            style={{
              width: 1000,
              marginTop: "500px", // Initial marginTop position
              transition: "margin-top 1s ease", // Animation duration and easing function
              // position: "absolute",
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
          Thibaut Crépelle, 3D & Motion generalist freelance who makes products
          dance. Your one-stop shop, with more disco.
        </h1>
      </div>
      <AboutMe></AboutMe>
      {/* <CircularText
        text="REACT Native MOBILE APP DEVELOPER "
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      /> */}
      <Experience></Experience>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          rotate: "90%",
        }}
      >
        <img
          src={require("./assets/spilled.png")}
          style={{
            width: 400,
            marginTop: 0,
            // position: "absolute",
            // marginTop: 200,
          }}
        ></img>
      </div>

      {/* <Experience></Experience> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
