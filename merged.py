import re
import os, glob
import requests
from urllib.parse import urlparse


def download_page(url, filename, outpath, redownload = True):
	response = requests.get(url)
	if not redownload and os.path.exists(outpath):
		return None

	elif response.status_code == 200:
		with open(outpath, 'wb') as f:
			f.write(response.content)
		print(f"[+] Файл {filename} успешно загружен.")
		return response.content
	else:
		print(f"[-] Не удалось загрузить файл {filename} [{response.status_code}].")
		return None

def get_content(text):
	result = []
	for x in text.split('\n'):
		urls = re.findall(r'https?://\S+?\.\w{2,}/\S+\.\w{2,}', x) #https?://(?:\w+\.)+\w+/.*\.\w+ #https:\/\/[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\/[a-zA-Z0-9-\/]+
		result.extend(urls)
	result = list(set(result))
	return result


def download_file(url, output_dir):
	parsed_url = urlparse(url)
	filename = os.path.basename(parsed_url.path)
	path_ = os.path.join(output_dir, filename)[2:].replace('\\', '/')

	if os.path.exists(os.path.join(output_dir, filename)):
		#print(f"[++] Файл {filename} уже существует.")
		return (True, path_)
	else:
		response = requests.get(url)
		if response.status_code == 200:
			# Сохраняем файл в указанную директорию
			with open(os.path.join(output_dir, filename), 'wb') as f:
				f.write(response.content)
			print(f"[+] Файл {filename} успешно загружен.")
			return (True, path_)
		else:
			print(f"[-] Не удалось загрузить файл {filename}.")
			return (False, None)

def replace(filename, url, repl):
	z = open(filename, encoding='utf-8').read().replace(url, repl)
	open(filename, 'w', encoding='utf-8').write(z)

def main(filename, input_text):
	urls = input_text.split('\n')
	
	for url in urls:
		try:
			url = url.strip()
			if url and 'majsterio.pl' in url:
				try:
					url_path = urlparse(url).path
					output_dir = os.path.join("downloads", os.path.dirname(url_path))
					z = download_file('https://majsterio.pl'+url if 'majsterio.pl' not in url else url, './'+output_dir)
				except: continue
				if z[0]: replace(filename, url, z[1])
		except: pass

def replace_urls(path, urls):
	for url in urls:
		url = url.strip()
		if url and 'majsterio.pl' in url:
			replace(path, url, url.replace('https://majsterio.pl', ''))

	print(f'[+] Файл {path} изменён.')

def find_html_files(directory):
	html_files = []
	for root, dirs, files in os.walk(directory):
		for file in files:
			if file.endswith(".html"):
				html_files.append(os.path.join(root, file))
	return html_files

if __name__ == "__main__":
	urls = '''
https://majsterio.pl/o-nas/
https://majsterio.pl/o-nas/nasze-prace/
https://majsterio.pl/o-nas/faq/
https://majsterio.pl/kontakt/
https://majsterio.pl/uslugi-remontowo-budowlane/
https://majsterio.pl/uslugi-remontowo-budowlane/uslugi-malarskie
https://majsterio.pl/uslugi-remontowo-budowlane/uslugi-malarskie/szpachlowanie-i-gipsowanie-scian
https://majsterio.pl/uslugi-remontowo-budowlane/uslugi-malarskie/szpachlowanie-i-wykonczenie-sufitu
https://majsterio.pl/uslugi-remontowo-budowlane/uslugi-malarskie/tynkowanie-scian
https://majsterio.pl/uslugi-remontowo-budowlane/uslugi-malarskie/malowanie-scian-i-sufitu
https://majsterio.pl/uslugi-remontowo-budowlane/uslugi-malarskie/tapetowanie
https://majsterio.pl/uslugi-remontowo-budowlane/uslugi-malarskie/akrylowanie
https://majsterio.pl/uslugi-remontowo-budowlane/uslugi-malarskie/obrobka-okien
https://majsterio.pl/wykonczenie-wnetrz
https://majsterio.pl/wp-content/themes/majsteriotemplate/For
https://majsterio.pl/nasze-prace/piaseszno
https://majsterio.pl/nasze-prace/ostrobramska
https://majsterio.pl/nasze-prace/ludwika-rydygiera
https://majsterio.pl/nasze-prace/jerozolimskie
https://majsterio.pl/nasze-prace/perkoza
https://majsterio.pl/nasze-prace/wladyslawa-broniwskiego
https://majsterio.pl/uslugi-remontowo-budowlane/montaz
https://majsterio.pl/uslugi-remontowo-budowlane/montaz/zabudowa-stelaza-gk
https://majsterio.pl/uslugi-remontowo-budowlane/montaz/montaz-drzwi
https://majsterio.pl/uslugi-remontowo-budowlane/montaz/montaz-listew
https://majsterio.pl/uslugi-remontowo-budowlane/montaz/montaz-okien
https://majsterio.pl/uslugi-remontowo-budowlane/montaz/scianki-dzialowe
https://majsterio.pl/uslugi-remontowo-budowlane/montaz/zabudowa-stelaza-gk
https://majsterio.pl/uslugi-remontowo-budowlane/montaz/sufity-podwieszane
https://majsterio.pl/uslugi-remontowo-budowlane/ukladanie-podlog
https://majsterio.pl/uslugi-remontowo-budowlane/ukladanie-podlog/ukladanie-paneli
https://majsterio.pl/uslugi-remontowo-budowlane/ukladanie-podlog/wylewanie-posadzki
https://majsterio.pl/uslugi-remontowo-budowlane/ukladanie-podlog/ukladanie-styropianu-pod-wylewki
https://majsterio.pl/uslugi-remontowo-budowlane/ukladanie-plytek
https://majsterio.pl/uslugi-remontowo-budowlane/uslugi-hydrauliczne
https://majsterio.pl/uslugi-remontowo-budowlane/uslugi-elektryczne
https://majsterio.pl/uslugi-remontowo-budowlane/bialy-montaz
https://majsterio.pl/uslugi-remontowo-budowlane/murowanie
https://majsterio.pl/uslugi-remontowo-budowlane/wyburzenie-i-demontaz
https://majsterio.pl/uslugi-remontowo-budowlane/sprzatanie-po-remoncie
https://majsterio.pl/wykonczenie-wnetrz/remont-mieszkania
https://majsterio.pl/wykonczenie-wnetrz/remonty-domow
https://majsterio.pl/wykonczenie-wnetrz/generalny-remont
https://majsterio.pl/wykonczenie-wnetrz/wykonczenie-pod-klucz
https://majsterio.pl/wykonczenie-wnetrz/remont-lazienek
https://majsterio.pl/wykonczenie-wnetrz/remont-sypialni
https://majsterio.pl/wykonczenie-wnetrz/remont-kuchni
https://majsterio.pl/wykonczenie-wnetrz/wykonczenie-salonu
https://majsterio.pl/wykonczenie-wnetrz/remont-pokoju
https://majsterio.pl/cennik-uslug-budowlanych
https://majsterio.pl/kosztorys-i-wycena-remontu
https://majsterio.pl/maz-na-godziny
https://majsterio.pl/blog
'''.strip().split('\n')
	if False:
		for url in urls:
			if not url: continue
			parsed_url = urlparse(url)
			parsed_url_ = parsed_url.path[:-1] if parsed_url.path[-1] == '/' else parsed_url.path
			filename = os.path.basename(parsed_url_)
			dir = f'./pages{parsed_url_.replace("/"+filename, "")}/'
			path = f'{dir}{filename}'
			path_html = f'{dir}{filename}.html'
			os.makedirs(dir, exist_ok=True)

			print(f'{path_html} | {filename} | {dir}')
			content = str(download_page(url, filename, path_html, redownload = False))
			if not content: continue
			content = '\n'.join(get_content(content))
			main(path_html	, content)

	directory_to_search = "pages"
	html_files = find_html_files(directory_to_search)
	for file in html_files:
		replace_urls(file, urls)
	#main(filename, input_text)
'''

'''
'''

'''