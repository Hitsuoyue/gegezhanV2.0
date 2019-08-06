const fs = require('fs');
const path = require('path');
// const cheerio = require('cheerio');
const marked = require('marked');
const baseUrl = 'https://hitsuoyue.github.io/gegezhan/';
let list = [];

fs.readdir('./src/mds', function (error, files) {
  fs.mkdir('./src/list');
  files.forEach( file=>{
        let p = path.join('./src/mds', file);
        let markdown = fs.readFileSync(p).toString();
        let html = marked(markdown);
        let newMarkdownStr = `export default {value: "${markdown}"}`
    console.log('markdown', newMarkdownStr);

        let newHtml = `import React from 'react';
export default function App() {
  return (
    <div>
      ${html}
    </div>
  );
}`

    //     let newHtml = `import React from 'react';
    // export default <div>
    //   ${html}
    // </div>`
    // let template = fs.readFileSync('./template.html').toString();
        // let result = template.replace('%content%', html);
        let newP = path.join('./src/list', file);
        fs.writeFileSync(newP +'.js', newHtml, {});
    })
});

// fs.readdir('./', function (error, files) {
//     files.forEach(file=>{
//         if(file.substring(file.length-7, file.length) === 'md.html'){
//             list.push(file);
//         }
//     })
//     modifyList();
// });

// function modifyList() {
//     let content = fs.readFileSync('./index.html');
//     $ = cheerio.load(content);
//     let dom = $('#content');
//     dom.empty();
//     let ul = `<ul class="container"></ul>`;
//     dom.append(ul);
//     let container = $('.container');
//
//
//     console.log('list', list);
//     list.forEach((item,index)=>{
//         let url = `${baseUrl}${item}`;
//         let title = item.substring(0, item.length-8);
//         let li = `<li><a href=${url}>${index+1}. ${title}</a></li>\n`;
//         container.append(li);
//     });
//
//     fs.writeFile('./index.html', $.html());
// }


