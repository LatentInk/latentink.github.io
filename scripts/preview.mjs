import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const types={'.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.html':'text/html','.xml':'application/xml'};
http.createServer(async(req,res)=>{try{
 let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 let file=path.resolve('dist','.'+pathname);
 if(!file.startsWith(path.resolve('dist')+path.sep)&&file!==path.resolve('dist')) throw Error();
 if(pathname.endsWith('/'))file=path.join(file,'index.html');
 const data=await readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'text/plain'}).end(data);
}catch{res.writeHead(404).end('Not found');}}).listen(8013,'127.0.0.1');
