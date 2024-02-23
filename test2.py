import os
import requests
from urllib.parse import urlparse

def download_file(url, output_dir):
	# Создаем директорию, если она не существует
	os.makedirs(output_dir, exist_ok=True)
	
	# Получаем имя файла из URL
	parsed_url = urlparse(url)
	filename = output_dir.replace('.pages/', '')


	# Загружаем файл
	if os.path.exists(f'{output_dir}.html'):
		print(f"[++] Файл {filename} уже существует.")
	else:
		response = requests.get(url)
		if response.status_code == 200:
			# Сохраняем файл в указанную директорию
			with open(f'{output_dir}.html', 'wb') as f:
				f.write(response.content)
			print(f"[+] Файл {filename} успешно загружен.")
		else:
			print(f"[-] Не удалось загрузить файл {filename}.")


def main(input_text):
	# Разделяем текст по переносу строки
	urls = input_text.split('\n')
	
	for url in urls:
		# Убираем лишние пробелы
		url = url.strip()
		if url:
			# Получаем путь к файлу и директорию для сохранения
			url_path = urlparse(url).path
			output_dir = os.path.join("downloads", os.path.dirname(url_path))

			z = download_file(url, f'./pages{output_dir}'.replace('\\',''))

if __name__ == "__main__":
	# Пример строки с URL
	input_text = """https://majsterio.pl/wp-content/plugins/wp-postratings/css/postratings-css.css?ver=1.91
https://majsterio.pl/wp-content/uploads/2023/09/cropped-Majsterio-4-32x32.png
https://majsterio.pl/wp-includes/js/jquery/jquery-migrate.min.js
https://majsterio.pl/wp-content/uploads/2024/02/Grubosc-plytki-i-ile-kleju-na-m2-plytek.jpg
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/css/responsive.css
https://majsterio.pl/wp-content/uploads/2023/12/Blog-budowlany-№1-jpg.webp
https://majsterio.pl/wp-content/uploads/2023/12/Yurii-Majsterio-small-jpg.webp
https://majsterio.pl/wp-content/uploads/2024/01/Remont-kuchni-glowne-bledy-1.jpg
https://majsterio.pl/wp-content/uploads/2023/12/Korzysci-ze-wspolpracy-z-projektantem.jpg
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/css/nice-select.css
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/js/slick.min.js
https://majsterio.pl/wp-content/plugins/wp-postratings/js/postratings-js.js?ver=1.91
https://majsterio.pl/wp-content/uploads/2024/01/5-bledow-zwiazanych-z-instalacja-elektryczna.jpg
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/js/jquery.min.js
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.8969460975286!2d21.076069576663393!3d52.227090071985934
https://majsterio.pl/wp-content/uploads/2023/09/cropped-Majsterio-4-180x180.png
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/js/bootstrap.bundle.min.js
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/js/swiper.min.js
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/js/jquery.magnific-popup.min.js
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/css/font/flaticon.css
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/images/pre-loader-1.svg
https://majsterio.pl/wp-content/plugins/wp-postratings/images/stars/rating_over.gif
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/js/popper.min.js
https://majsterio.pl/wp-content/uploads/2024/01/3-bledy-przy-wyborze-podlogi-w-pomieszczeniu.jpg
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/images/4444.png
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/js/jquery.nice-select.js
https://majsterio.pl/wp-content/uploads/2024/01/7-bledow-podczas-remontu-lazienki.jpg
https://majsterio.pl/wp-content/uploads/2023/12/Terminy-wykonania-remontu-mieszkania_top.jpg
https://majsterio.pl/wp-content/uploads/2023/12/OSTROBRAMSKA_Nasze_prace-jpg.webp
https://majsterio.pl/wp-content/uploads/2023/12/Form_consultation_Majsterio-jpg.webp
https://majsterio.pl/wp-content/uploads/2024/01/Antyposlizgowosc-plytek_3.jpg
https://majsterio.pl/wp-content/uploads/2023/12/5-bledow-podczas-remontu-i-pozegnamy-sie-z-komfortem-jpg.webp
https://majsterio.pl/wp-content/uploads/2023/12/Jak-wybrac-wykonawce-dla-swojego-remontu-jpg.webp
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/css/swiper.min.css
https://www.googletagmanager.com/ns.html
https://majsterio.pl/wp-content/uploads/2023/12/PIASESZNO_Nasze_prace-jpg.webp
https://majsterio.pl/wp-includes/js/jquery/ui/core.min.js?ver=1.13
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/js/isotope.pkgd.min.js
https://majsterio.pl/wp-content/uploads/2023/12/al.jerozolimskie_Nasze_prace-jpg.webp
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/css/font-awesome.css
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/css/animate.css
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/css/magnific-popup.css
https://majsterio.pl/wp-content/uploads/2023/11/Logo_Majsterio.svg
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/css/style.css
https://majsterio.pl/wp-content/uploads/2024/01/5-bledow-przy-wyborze-drzwi-wewnetrznych.jpg
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/js/wow.min.js
https://majsterio.pl/wp-content/uploads/2024/01/Jaka-fuga-do-bialych-plytek_.jpg
https://majsterio.pl/wp-content/uploads/2024/01/klasa-scieralnosci-plytek.jpg
https://majsterio.pl/wp-content/uploads/2023/12/Ludwika-Rydygiera_Nasze_prace-jpg.webp
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/js/jquery-ui.js
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/css/slick.css
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/js/custom.js
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/js/bootstrap.min.js
https://www.google.com/recaptcha/api.js
https://majsterio.pl/wp-content/uploads/2023/12/Wladyslawa-Broniwskiego_Nasze_prace.jpg
https://majsterio.pl/wp-content/uploads/2023/11/Logo_Majsterio-1200x675-1.jpg
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/css/jquery-ui.css
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/images/background_blog.jpg
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/css/bootstrap.min.css
https://majsterio.pl/wp-content/plugins/majsterioplugin/public/js/majsterio-public.js
https://majsterio.pl/wp-content/uploads/2023/12/Co-masz-zrobic-przed-remontem_top-jpg.webp
https://majsterio.pl/wp-includes/css/dist/block-library/style.min.css
https://majsterio.pl/wp-content/uploads/2024/02/Komfort-w-najmniejszej-lazience-o-powierzchni-3.14-m2.jpg
https://www.googletagmanager.com/gtm.js
https://majsterio.pl/wp-content/themes/majsteriotemplate/assets/images/icons_forms-green_M.png
https://majsterio.pl/wp-content/uploads/2023/12/PERKOZA_Nasze_prace-jpg.webp
https://majsterio.pl/wp-includes/js/jquery/jquery.min.js
https://majsterio.pl/wp-content/uploads/2023/09/cropped-Majsterio-4-270x270.png
https://majsterio.pl/wp-content/uploads/2023/09/cropped-Majsterio-4-192x192.png"""
	
	main(input_text)

