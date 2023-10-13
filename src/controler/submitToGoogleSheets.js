// import axios from 'axios';
// // import dotenv from 'dotenv';

// // dotenv.config({ path: './.env' });

// const submitToGoogleSheets = async(data) => {
//     const spreadsheetId = '1DYXqhgcXxGlMNQ8181G97rrDbG4Ap_vJ2CL2hjEGDO8';
//     const sheetName = 'ipWrbSolution';



//     const response = await axios.post(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/{range}:append`, {
//         values: [data],
//         headers: {
//             'Authorization': `Bearer ${apiKey}`,
//         },
//     });

//     return response.data;
// };

// export default submitToGoogleSheets;