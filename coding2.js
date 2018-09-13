var path = require('path')
var fs = require('fs')
var request = require('request')

var CONSUMER_KEY = '90dc82090ec74284a2ae8bd22e770642',
    CONSUMER_SECRET = '5a62d04af7b9c39e',
    OAUTH_TOKEN = '39e1f5ef76194d1f80da029eff3c0e3c',
    OAUTH_TOKEN_SECRET = '40194cd29bf78514';

var URL = 'https://va.msghist.liveperson.net/messaging_history/api/account/13350576/conversations/conversation/search?v=2'

var oauth = {
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
    token: OAUTH_TOKEN,
    token_secret: OAUTH_TOKEN_SECRET,
}


request.post({
    url: URL, oauth, body: JSON.stringify({
        "conversationId": "3c026cc6-f1b8-4ddd-a24b-30068420d09c"
    }),
    headers: {
        'Content-Type': "application/json"
    }
}, (err, req, body) => {
    body = JSON.parse(body)

    const infos = body.conversationHistoryRecords.map(c => c.info)
    console.log(infos);
    fs.writeFileSync(path.resolve('./response.txt'), JSON.stringify(infos))
})