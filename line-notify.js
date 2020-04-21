const axios = require('axios');
const qs = require('querystring');
const BASE_URL = 'https://notify-api.line.me';
const PATH =  '/api/notify';
const LINE_TOKEN = "your-line-token";

let config = {
    baseURL: BASE_URL,
    url: PATH,
    method: 'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${LINE_TOKEN}`
    },
    data: qs.stringify({
        message: "Test",
    })
};

axios.request(config)
.then((res) => {
    console.log(res.status);
})
.catch((error) => {
    console.log(error);
});
