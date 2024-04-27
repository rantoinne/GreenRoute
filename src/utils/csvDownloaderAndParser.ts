import { GoogleSpreadsheet } from 'google-spreadsheet';
import keys from './green-route.json';

// Change this when switching to a different GSheet
const sheetId = '11PHWkZ5OF0yQma1ZZcSbODHrBWjpFvEg8Bs1pDJMoBU';

const downloadRecordsFromGoogleSheet = async () => {
    const doc = new GoogleSpreadsheet(sheetId, {
        apiKey: (keys as any).api_key,
    });
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    const parsedData = rows.map(r => ({...r.toObject()}))

    return parsedData;
};

export default downloadRecordsFromGoogleSheet;
