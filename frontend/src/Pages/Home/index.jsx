import Menu from "../../Components/Menu/index.jsx";
import { Body } from "../../Components/BodyPages/style.jsx";
import Report from "./report.jsx";
function Home() {
  return (
    <Body>
      <Menu />
      <div
        style={{
          width: "90%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          title="Prova-FernandoBertolo"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/reportEmbed?reportId=f418fa7f-720f-4ec8-be86-1d14ef520821&autoAuth=true&embeddedDemo=true"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
      {/* <Report /> */}
    </Body>
  );
}

export default Home;
