

let APIURL = ''

switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIURL = 'http://localhost:1906'
        break
    case 'dw-blaxk-commerce-directory-c.heroku.com':
        APIURL = 'https://dw-blaxk-commerce-directory.herokuapp.com'
}

export default APIURL;