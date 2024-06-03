import React from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import axios from "axios";

export const Report = () => {
  const [embedConfig, setEmbedConfig] = React.useState({
    type: "report", // Pode ser 'report', 'dashboard', etc.
    id: "e226f082-b719-4e8f-87d0-88f562301ca7",
    embedUrl:
      "https://app.powerbi.com/links/9xUdYtvfkd?ctid=518f66eb-cd4e-4d59-84e3-b3ce1f72b656&pbi_source=linkShare&bookmarkGuid=dc8451a4-c41b-4a54-a362-1f825468d770",
    accessToken: "",
    tokenType: models.TokenType.Embed,
    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: false,
        },
      },
      background: models.BackgroundType.Transparent,
    },
  });

  const teste = async () => {
    const response = await axios.get(
      "https://app.powerbi.com/groups/69b5d19f-7b5c-4ffe-975b-68d898d7141d/reports/7e98b6aa-f5e4-4a0a-9d4c-1988dd48c62a?ctid=518f66eb-cd4e-4d59-84e3-b3ce1f72b656&pbi_source=linkShare"
    );
    console.log(response);
  };

  // React.useEffect(() => {
  //   const response = axios
  //     .get(
  //       "https://app.powerbi.com/groups/69b5d19f-7b5c-4ffe-975b-68d898d7141d/reports/7e98b6aa-f5e4-4a0a-9d4c-1988dd48c62a?ctid=518f66eb-cd4e-4d59-84e3-b3ce1f72b656&pbi_source=linkShare"
  //     )
  //     .then((response) => {
  //       // setEmbedConfig({
  //       //   ...embedUrl,
  //       //   embedUrl: response.value.embedUrl,
  //       //   accessToken: response.value.id,
  //       //   id: response.value.id,
  //       // });
  //     });

  //   console.log(response);
  // }, []);

  const cssClassName = "report-style-class";

  return (
    <>
      {/* <PowerBIEmbed embedConfig={embedConfig} cssClassName={cssClassName} /> */}
      <button
        onClick={() => {
          teste();
        }}
      >
        teste
      </button>
    </>
  );
};

export default Report;
