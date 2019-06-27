const tool = require('curl-ganteng');
const jsonfile = require('jsonfile');
const fs = require('fs');
const dateFormat = require('dateformat');
const url = require('url');

module.exports = {
	format_number,
	mutasiLink,
	getReks,
	getHtml,
}
function format_number(number) {
	let res = /[\d\.]+\,/.exec(number);
	return res[0].replace(/\D/g, '');
}

function mutasiLink(link, page = 1) {
  link = url.parse(link);
  let start = (page == 1) ? 0 : (page - 1) * 10;
	if(start > 1) {
		link = `${link.protocol}//${link.host}${link.pathname}?page=AccountIDSelectRq&Paginated=true&paginationSet=next&StartValue=${start}`;
	} else {
		link = `${link.protocol}//${link.host}${link.pathname}?page=AccountIDSelectRq&Paginated=true&StartValue=${start}`;
	}
  return link;
}

function getReks(html) {
	const $ = tool.jquery(html);
	const reks = [];
	$('#OperativeDisplayTable').find('tr').each(function(index, el) {
		const rek = $(this).find('input[name="acc1"]').val();
		if(rek) reks.push(rek);
	});
	return reks;
}

function getHtml(pt) {
	return fs.readFileSync(pt);
}
