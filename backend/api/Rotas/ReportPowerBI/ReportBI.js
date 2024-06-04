const express = require('express');
const buscaRelatorio = express();
const axios = require('axios');



buscaRelatorio.post('/get-token', async (req, res) => {
    try {
      const tokenResponse = await axios.post(
        `https://login.microsoftonline.com/${process.env.POWERBI_TENANTID}/oauth2/v2.0/token`,
        new URLSearchParams({
          grant_type: 'password',
          scope: 'openid',
          //resource: 'https://analysis.windows.net/powerbi/api',
          client_id: process.env.POWERBI_CLIENTID,
          username: process.env.POWERBI_USERNAME,
          password: process.env.POWERBI_PASSWORD
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      );
      res.json(tokenResponse.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  module.exports = buscaRelatorio;