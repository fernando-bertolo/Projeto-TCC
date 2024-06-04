import React, { useState, useEffect } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import axios from "axios";

const Report = () => {
  const [embedConfig, setEmbedConfig] = useState(null);

  const getAccessToken = async () => {
    const tokenResponse = await axios.post('http://localhost:3010/get-token');
    return tokenResponse.data.access_token;
  };

  const getReportData = async (accessToken) => {
    const reportResponse = await axios.get(
      "https://api.powerbi.com/v1.0/myorg/groups/da656253-8e0b-4643-bf47-f7b579950ea9/reports/1c230eea-4cf5-461c-ba0f-bff17dcce153",
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return reportResponse.data;
  };

  useEffect(() => {
    const fetchEmbedConfig = async () => {
      const accessToken = await getAccessToken();
      const reportData = await getReportData(accessToken);

      console.log("accestoken: " + accessToken);
      console.log("reportdata: " + reportData);

      setEmbedConfig({
        type: "report",
        id: reportData.id,
        embedUrl: reportData.embedUrl,
        accessToken: accessToken,
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
    };

    fetchEmbedConfig();
  }, []);

  const cssClassName = "report-style-class";

  return (
    embedConfig ? <PowerBIEmbed embedConfig={embedConfig} cssClassName={cssClassName} /> : <div>Loading...</div>
  );
};

export default Report;
