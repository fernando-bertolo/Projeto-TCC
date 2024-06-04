const express = require('express');
const buscaRelatorio = express();
const axios = require('axios');



buscaRelatorio.post('/get-token', async (req, res) => {
    try {
      const tokenResponse = await axios.post(
        `https://login.microsoftonline.com/2fa5e3b6-2f1e-408c-8fce-b6b650935961/oauth2/v2.0/token`,
        new URLSearchParams({
          grant_type: 'password',
          scope: 'openid',
          //resource: 'https://analysis.windows.net/powerbi/api',
          client_id: '36ccccb8-c746-4ed8-a63b-83ad222a5453',
          client_secret: '3vt8Q~3iFSGXdigWN4ZsNMutTk0hLXs-iyHRgauF',
          username: 'fernando.bertolo@solutionsbi.com.br',
          password: 'qewZe0-pennyj-ricdoz'
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