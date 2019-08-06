import React from 'react';
export default function App() {
  return (
    <div>
      <h2 id="基本思路：">基本思路：</h2>
<ol>
<li>Github Pages 实现网页预览 =&gt; 2. Markdown 文件自动转换为可视网页 =&gt;  3. 自动创建文章目录</li>
</ol>
<hr>
<h2 id="github-pages-实现网页预览">Github Pages 实现网页预览</h2>
<h4 id="1-新建一个-git-仓库">1. 新建一个 git 仓库</h4>
<p>新建仓库：
<img src="http://upload-images.jianshu.io/upload_images/8879462-e8296023a014a022.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620" alt="">
<img src="http://upload-images.jianshu.io/upload_images/8879462-7967c6f01b95a05b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620" alt="新建仓库">
添加  README 文件：
<img src="http://upload-images.jianshu.io/upload_images/8879462-61418c14e396b8f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620" alt="添加 README文件">
<img src="http://upload-images.jianshu.io/upload_images/8879462-8de4f97d84993da5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620" alt="提交README文件">
<img src="http://upload-images.jianshu.io/upload_images/8879462-6caef7321024bda2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620" alt="仓库新建完成"></p>
<h4 id="2-新建-indexhtml-文件并提交">2. 新建 index.html 文件并提交</h4>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;title&gt;Marked in the browser&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt; this is index.html&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h4 id="3-github-pages-设置">3. GitHub Pages 设置</h4>
<p>进入 Settings：
<img src="http://upload-images.jianshu.io/upload_images/8879462-f3a949adbfa7f04f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620" alt="">
GitHub Pages 的 Source 选项下，选择 master branch 并保存：
<img src="http://upload-images.jianshu.io/upload_images/8879462-b3dd83dd6a557352.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620" alt="">
<img src="http://upload-images.jianshu.io/upload_images/8879462-6f00397da7920108.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620" alt="">
设置完成页面刷新后，打开 GitHub Pages 的 Source 选项下的网址则默认打开 index.html：
<img src="http://upload-images.jianshu.io/upload_images/8879462-bb63cad6ee335b9d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620" alt="">
<img src="http://upload-images.jianshu.io/upload_images/8879462-f6c84f5b3db05700.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300" alt=""></p>
<hr>
<h2 id="将--markdown-格式的内容转换为-html-元素">将  Markdown 格式的内容转换为 HTML 元素</h2>
<h5 id="1-新建-templatehtml">1. 新建 template.html</h5>
<p>此处，使用 marked 插件，可将用 Markdown 语法写的内容转换为 HTML 元素。</p>
<pre><code>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;/&gt;
  &lt;title&gt;template&lt;/title&gt;
  &lt;script src=&quot;https://cdn.bootcss.com/marked/0.3.17/marked.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;content&quot;&gt;
# template content
## by me  
&lt;/div&gt;
  &lt;script&gt;
    let content = document.getElementById(&#39;content&#39;);
    let markdown = content.innerHTML;
    let newMarkdown = HTMLDecode(markdown);
    let html = marked(newMarkdown);
    content.innerHTML = html;    

    //特殊字符在获取 innerHTML 时，会被转换为转义字符，影响 Markdown 内容转换，此处反转回来。 &amp;gt对应 &gt; 
    function HTMLDecode(text) { 
      return text.replace(/&amp;gt;/g, &#39;&gt;&#39;)
    }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h5 id="2-再次点击-settings-进入网页，在网址后加入template，即可预览-templatehtml-网页，效果如下：">2. 再次点击 Settings 进入网页，在网址后加入/template，即可预览 template.html 网页，效果如下：</h5>
<p><img src="http://upload-images.jianshu.io/upload_images/8879462-0a25a8bcdd7d3b73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300" alt=""></p>
<hr>
<h2 id="下载并安装-nodejs">下载并安装 Node.js</h2>
<p>使用 Node.js，首先要安装 Node 环境。
官网下载：<a href="https://link.jianshu.com/?t=https://nodejs.org/en/">https://nodejs.org/en/</a> / <a href="https://link.jianshu.com/?t=http://nodejs.cn/download/">http://nodejs.cn/download/</a>
安装时，要勾选 <code>Add to Path</code>，则 node 环境变量会被自动添加。
安装完成后，验证是否安装成功：打开命令行，输入 node -v ，安装正常，则会在下行输出 node 版本号，如：v8.9.1
至此，安装成功。</p>
<hr>
<p>##将  Markdown 文档转换为直接展示 Markdown 内容的 html 文件
思路：将第3步中 template.html 文件中 div 内的内容替换为 要展示的 Markdown 文档内容，即可。
此处，利用 Node.js 的文件读写功能。
点击 <a href="http://nodejs.cn/api/">查看Node 文档</a></p>
<h5 id="1-将仓库内容克隆到本地">1. 将仓库内容克隆到本地</h5>
<p><img src="http://upload-images.jianshu.io/upload_images/8879462-d8a4ebcfdfd8c665.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620" alt=""></p>
<h5 id="2-在本地新建-transformjs-文件，内容如下：">2. 在本地新建 transform.js 文件，内容如下：</h5>
<pre><code>console.log(&#39;this is transform.js&#39;);</code></pre><h5 id="3-命令行执行-node-transformjs，则命令行会打印出-this-is-transformjs，说明-transformjs-文件已执行。">3. 命令行执行 node transform.js，则命令行会打印出 &#39;this is transform.js&#39;，说明 transform.js 文件已执行。</h5>
<h5 id="4-根目录新建-list-文件夹，用来存放-markdown-文件。">4. 根目录新建 list 文件夹，用来存放 Markdown 文件。</h5>
<p>并新建 article1.md、article.md 内容如下：</p>
<pre><code># this is article1
## by me</code></pre><pre><code># this is article2
## by me</code></pre><h5 id="5-修改-templatehtml-文件，删除-div-内内容，改为占位符-content，删除-script-中的转换内容，放到-transformjs-内处理-：">5. 修改 template.html 文件，删除 div 内内容，改为占位符 %content%，删除 <code>&lt;script&gt;</code> 中的转换内容，放到 transform.js 内处理 ：</h5>
<pre><code>&lt;div id=&quot;content&quot;&gt;%content%&lt;/div&gt;</code></pre><h5 id="6-安装-marked-依赖：">6. 安装 marked 依赖：</h5>
<p>执行 npm install marked --save</p>
<h5 id="7-修改-transformjs-文件如下：">7. 修改 transform.js 文件如下：</h5>
<pre><code>const fs = require(&#39;fs&#39;);
const path = require(&#39;path&#39;);
const marked = require(&#39;marked&#39;);

fs.readdir(&#39;./list&#39;, function (error, files) {
    files.forEach( file=&gt;{
        let p = path.join(&#39;./list&#39;, file);
        let markdown = fs.readFileSync(p).toString();
        let html = marked(markdown);
        let template = fs.readFileSync(&#39;./template.html&#39;).toString();
        let result = template.replace(&#39;%content%&#39;, html);
        fs.writeFileSync(file+&#39;.html&#39;, result);
    })
});</code></pre><h5 id="8-再次执行-node-transformjs，则会在根目录生成-article1mdhtml-和-article2mdhtml-文件，打开文件预览如下：">8. 再次执行 node transform.js，则会在根目录生成 article1.md.html 和 article2.md.html 文件，打开文件预览如下：</h5>
<p><img src="http://upload-images.jianshu.io/upload_images/8879462-21a0df95c9d61083.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300" alt="article1">
<img src="http://upload-images.jianshu.io/upload_images/8879462-37d0397363b0d543.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300" alt="article2">
至此，可通过执行 transform.js 文件生成 Markdown 文档对应的 html 文件。</p>
<hr>
<h2 id="6将-indexhtml-作为博客入口文件，自动生成博客目录。">6.将 index.html 作为博客入口文件，自动生成博客目录。</h2>
<p>思路：利用 Node.js 操作 DOM，此处要用到 cheerio 插件，进行 DOM 操作。</p>
<h5 id="1-命令行执行-npm-init-生成-packagejson-文件，再执行-npm-install-cheerio-，安装-cheerio。">1. 命令行执行 npm init 生成 package.json 文件，再执行 npm install cheerio ，安装 cheerio。</h5>
<h5 id="2-修改-indexhtml-文件如下：">2. 修改 index.html 文件如下：</h5>
<pre><code>&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;title&gt;Marked in the browser&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;content&quot;&gt;&lt;/div&gt;
&lt;/body&gt;&lt;/html&gt;</code></pre><h5 id="3-修改-transformjs-文件如下：">3. 修改 transform.js 文件如下：</h5>
<pre><code>const fs = require(&#39;fs&#39;);
const path = require(&#39;path&#39;);
const cheerio = require(&#39;cheerio&#39;);
const marked = require(&#39;marked&#39;);
const baseUrl = &#39;https://hitsuoyue.github.io/gegezhan/&#39;;
let list = [];

fs.readdir(&#39;./list&#39;, function (error, files) {
    files.forEach( file=&gt;{
        let p = path.join(&#39;./list&#39;, file);
        let markdown = fs.readFileSync(p).toString();
        let html = marked(markdown);
        let template = fs.readFileSync(&#39;./template.html&#39;).toString();
        let result = template.replace(&#39;%content%&#39;, html);
        fs.writeFileSync(file+&#39;.html&#39;, result);
    })
});

fs.readdir(&#39;./&#39;, function (error, files) {
    files.forEach(file=&gt;{
        if(file.substring(file.length-7, file.length) === &#39;md.html&#39;){
            list.push(file);
        }
    })
    modifyList();
});

function modifyList() {
    let content = fs.readFileSync(&#39;./index.html&#39;);
    $ = cheerio.load(content);
    let dom = $(&#39;#content&#39;);
    dom.empty();
    let ul = `&lt;ul class=&quot;container&quot;&gt;&lt;/ul&gt;`;
    dom.append(ul);
    let container = $(&#39;.container&#39;);


    list.forEach((item,index)=&gt;{
        let url = `${baseUrl}${item}`;
        let title = item.substring(0, item.length-8);
        let li = `&lt;li&gt;&lt;a href=${url}&gt;${index+1}. ${title}&lt;/a&gt;&lt;/li&gt;\n`;
        container.append(li);
    });

    fs.writeFile(&#39;./index.html&#39;, $.html());
}</code></pre><h5 id="4-执行-node-transformjs，则-indexhtml-文件被改变，打开预览效果如下：">4. 执行 node transform.js，则 index.html 文件被改变，打开预览效果如下：</h5>
<p><img src="http://upload-images.jianshu.io/upload_images/8879462-617e7ebf069949db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600" alt="index.html">
至此，可自动生成文章目录。</p>
<hr>
<h2 id="将代码提交到-github-仓库上。">将代码提交到 github 仓库上。</h2>
<pre><code>git add .
git commit -m blog
git push</code></pre><hr>
<p>通过以上步骤就可利用 Github Pages 简单创建一个博客啦~
你可根据需要添加自己的样式<del>~</del></p>
<hr>
<p>注：代码中涉及到 github 地址的请替换为自己的 github 地址；
       源代码地址：<a href="https://hitsuoyue.github.io/gegezhan/">https://hitsuoyue.github.io/gegezhan/</a> </p>

    </div>
  );
}