import PageNotFoundAnimation from "../../assets/lottieAnimations/PageNotFound404.json";
import Lottie from "lottie-react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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
          flexDirection: "column",
        }}
      >
        <Lottie
          animationData={PageNotFoundAnimation}
          style={{ height: "50%", width: "50%" }}
        />
        <Button type="button" variant="outlined">
          <Link to="/home" style={{ textDecoration: "none", color: "#4141DF" }}>
            Home
          </Link>
        </Button>
      </div>
    </>
  );
}

export default PageNotFound;
