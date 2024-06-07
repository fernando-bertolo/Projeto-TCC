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
          title="TCC"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/reportEmbed?reportId=91792e70-b058-4489-b36d-08540f3bec49&autoAuth=true&embeddedDemo=true"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
      {/* <Report /> */}
    </Body>
  );
}

export default Home;
