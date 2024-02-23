import random, time, json, os

from fastapi import Depends, FastAPI, HTTPException
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware

from urllib.parse import urlparse

app = FastAPI()

@app.get('/')
async def index():
	return HTMLResponse(render_html('index.html'))

@app.get('/{path}')
async def pages(path):
	parsed_url = urlparse(path)
	parsed_url_ = parsed_url.path[:-1] if parsed_url.path[-1] == '/' else parsed_url.path
	path = f'pages/{parsed_url_}.html'
	if os.path.exists(path):
		try: return HTMLResponse(render_html(path))
		except: return HTMLResponse(render_html(f'pages/404.html'))
	else: return HTMLResponse(render_html(f'pages/404.html'))

@app.get('/wp{full_path:path}')
async def content(full_path):
	path = f'wp{full_path}'
	if os.path.exists(path):
		try: return FileResponse(path)
		except: raise HTTPException(status_code=404, detail="File not found")
	else: raise HTTPException(status_code=404, detail="File not found")


@app.get('/{dir}/{q:path}')
async def pages_o_nas(dir, q):
	if q == '': return await pages(dir)
	parsed_url = urlparse(q)
	parsed_url_ = parsed_url.path[:-1] if parsed_url.path[-1] == '/' else parsed_url.path
	path = f'pages/{dir}/{parsed_url_}.html'
	if os.path.exists(path):
		try: return HTMLResponse(render_html(path))
		except: return HTMLResponse(render_html(f'pages/404.html'))
	else: return HTMLResponse(render_html(f'pages/404.html'))