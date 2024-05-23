import Lottie from "lottie-react";
import loadingAnimation from "../../assets/lottieAnimations/loading.json";

function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#090909ba",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Lottie
        animationData={loadingAnimation}
        style={{
          height: 300,
          width: 300,
        }}
      />
    </div>
  );
}

export default Loading;
