import os
import os, glob

import requests
from urllib.parse import urlparse


def replace(filename, url, repl):
	z = open(filename, encoding='utf-8').read().replace(url, repl)
	open(filename, 'w', encoding='utf-8').write(z)

def replace_urls(path, urls):
	for url in urls:
		url = url.strip()
		if url:
			replace(path, url, '')

	print(f'[+] Файл {path} изменён.')

def find_html_files(directory):
	html_files = []
	for root, dirs, files in os.walk(directory):
		for file in files:
			if file.endswith(".html"):
				html_files.append(os.path.join(root, file))
	return html_files

if __name__ == "__main__":
	# Пример строки с URL
	filename = 'pages/404.html'
	input_text = ['''<li id="menu-item-657" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-657">
                                                    <a href="/maz-na-godziny/">Mąż na godziny</a>
                                                </li>''',
'''<li id="menu-item-1415" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1415">
                                                    <a href="https://majsterio.pl/./blog/">Blog</a>
                                                </li>''']
	
	directory_to_search = r"C:\Users\plows\OneDrive\Documents\GitHub\ambika.pl\pages"
	html_files = find_html_files(directory_to_search)
	for file in html_files:
		replace_urls(file, input_text)
