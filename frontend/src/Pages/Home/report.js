import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const Report = () => {
    const embedConfig = {
        type: 'report', // Pode ser 'report', 'dashboard', etc.
        id: 'e226f082-b719-4e8f-87d0-88f562301ca7',
        embedUrl: 'https://app.powerbi.com/links/9xUdYtvfkd?ctid=518f66eb-cd4e-4d59-84e3-b3ce1f72b656&pbi_source=linkShare&bookmarkGuid=dc8451a4-c41b-4a54-a362-1f825468d770',
        accessToken: '',
        tokenType: models.TokenType.Embed,
        settings: {
            panes: {
                filters: {
                    expanded: false,
                    visible: false
                }
            }
        }
    };

    const eventHandlers = new Map([
        ['loaded', () => { console.log('Report loaded'); }],
        ['rendered', () => { console.log('Report rendered'); }],
        ['error', (event) => { console.log(event.detail); }]
    ]);

    const cssClassName = "report-style-class";

    const getEmbeddedComponent = (embeddedReport) => {
        window.report = embeddedReport;
    };

    return (
        <PowerBIEmbed
            embedConfig={embedConfig}
            eventHandlers={eventHandlers}
            cssClassName={cssClassName}
            getEmbeddedComponent={getEmbeddedComponent}
        />
    );
};

export default Report;
