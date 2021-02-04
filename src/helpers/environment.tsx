

let APIURL = ''

switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIURL = 'http://localhost:<port of your local API>'
        break
    case '<name of deployed heroku app>.heroku.com':
        APIURL = 'https://<name of deployed heroku back end>.herokuapp.com'
}

export default APIURL;