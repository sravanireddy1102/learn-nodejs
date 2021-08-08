const {readFileSync, writeFileSync} = require('fs');
const { writeFile } = require('fs/promises');
const first=readFileSync('./content/first.txt', 'utf8');
const second=readFileSync('./content/second.txt', 'utf8');

console.log(first,second);
writeFileSync('./content/content-sync.txt', "Hey you",{flag:'r'});
