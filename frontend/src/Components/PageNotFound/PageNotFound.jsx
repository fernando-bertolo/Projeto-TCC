import PageNotFoundAnimation from "../../assets/lottieAnimations/PageNotFound404.json";
import Lottie from "lottie-react";

function PageNotFound() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#201b2c",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie
          animationData={PageNotFoundAnimation}
          style={{ height: "50%", width: "50%" }}
        />
      </div>
    </>
  );
}

export default PageNotFound;
