import os
import glob

def find_html_files(directory):
	html_files = []
	for root, dirs, files in os.walk(directory):
		for file in files:
			if file.endswith(".html"):
				html_files.append(os.path.join(root, file))
	return html_files

directory_to_search = "pages"
html_files = find_html_files(directory_to_search)