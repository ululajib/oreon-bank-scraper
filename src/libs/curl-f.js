const bcurl = require('curlrequest');
const cookie = require('cookie');
const cheerio = require('cheerio');
const url = require('url');
const fs = require('fs');

module.exports = {curl, append_cookies, cookie_to_str, parse_cookie : cookie.parse, get_host, cut_str, serialize_post, save_log};

// curl('https://ib.bankmandiri.co.id/retail/Login.do?action=form&lang=in_ID')
//   .then((res) => {
//     console.log(res.cookie);
//   })
//   .catch((err) => {console.log(err);})

// let coo = 'JSESSIONID=0001mg3PwBPPQpbpz-V2otVhUnp:1E5JV7VKIR; Path=/; HttpOnly';
// let coo2 = 'BIGipServerpool_ib=190359744.47873.0000; path=/';
// // let coo3 = ';
// console.log(append_cookies(coo, coo2));


function save_log(data, file_name) {
  if(typeof data === 'object') data = JSON.stringify(data);
  fs.writeFileSync(`logs/${file_name}`, data);
}

function curl(url, opt) {
  if(!opt) opt = {};
  return new Promise((resolve, reject) => {
    let options = {url, include: true};
    if(opt.post) {
      options.data = opt.post;
      delete opt.post;
    }
    options.headers = {};
    if(opt.cookie) {
      options.headers.cookie = opt.cookie;
      delete opt.cookie;
    }
    options = append(options, opt);
    options.insecure = true;
    // console.log(options);
    bcurl.request(options, (err, res) => {
      if(err) reject(err);
      let output = {};
      output.headers = res.split('\r\n\r\n')[0];
      output.body = '<' + cut_str(res, '<', '');
      output.cookie = get_cookies(output.headers);
      if('cookie' in options.headers) {
        output.cookie = append_cookies(options.headers.cookie, output.cookie);
      }
      output.req_url = url;
      resolve(output);
    });
  });
}

function append_cookies(one, two) {
  one = cookie.parse(one);
  two = cookie.parse(two);
  one = append(one, two);
  return cookie_to_str(one);
}

function cookie_to_str(object){
  let cookies = '';
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      cookies += `${key}=${object[key]}; `;
    }
  }
  return cookies = cookies.slice(0, -1);
}

function get_cookies(headers) {
  let output = {};
  let cookies = headers.match(/set-cookie+.+/ig);
  if(!cookies) return '';
  cookies.forEach((item, index) => {
    append(output, cookie.parse(item.replace(/set\-cookie\:\ /i, '')));
  })
  return cookie_to_str(output);
}

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

function cut_str(str, start, end) {
  if(!start) start = 0;
	else start = str.indexOf(start)+start.length;
  if(!end) end = str.length;
  else end = str.indexOf(end);
  if(start>end) return;
	return str.substring(start,end);
}

function append(obj, new_obj) {
  let output = {};
  for (let key in new_obj) {
    if (new_obj.hasOwnProperty(key)) {
      if(Array.isArray(new_obj[key])) {
        append(obj[key] , new_obj[key])
      } else if(typeof new_obj[key] == 'object') {
        if(obj[key]) {
          append(obj[key], new_obj[key]);
        } else {
          obj[key] = {};
          append(obj[key], new_obj[key]);
        }
      } else {
        obj[key] = new_obj[key];
      }
    }
  }
  return obj;
}

function get_host(link) {
  // let host = url.parse(link).host.split('.');
  return url.parse(link).host;
}

function serialize_post(res) {
  let $ = cheerio.load(res.body);
  let posts = $('form').serializeArray();
  let post = {};
  posts.forEach((item) => {
    post[item.name] = item.value;
  });
  return post;
}
