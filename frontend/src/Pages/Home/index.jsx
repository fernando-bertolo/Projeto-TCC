import Menu from "../../Components/Menu/index.jsx";
import { Body } from "../../Components/BodyPages/style.jsx";

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
          src="https://app.powerbi.com/reportEmbed?reportId=94530a54-0edb-4cd9-9741-b098b9d420e8&autoAuth=true&ctid=518f66eb-cd4e-4d59-84e3-b3ce1f72b656"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </Body>
  );
}

export default Home;
