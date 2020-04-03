/* global window */

const API_KEY = 'AIzaSyAKXNqz7rb0JesWgufQda8fp-Qw_V78yyE';
const SPREADSHEET_ID = '18QgScq55OUiDA4L886mQnZXZV6XW6KEcKX_scQHGYgk';

export const load = async (callback) => {
  window.gapi.load('client', () => {
    window.gapi.client.init({ apiKey: API_KEY }).then(() => {
      window.gapi.client.load('sheets', 'v4', () => {
        window.gapi.client.sheets.spreadsheets.values
          .get({
            range: 'Scores!A2:F',
            spreadsheetId: SPREADSHEET_ID,
          })
          .then(({ result }) => {
            const { values } = result;
            callback(
              values.map((value) => {
                const [name, ...scores] = value;
                return { name, scores };
              }),
            );
          });
      });
    });
  });
};
