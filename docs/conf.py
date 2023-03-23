# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'ChoiceScript Stats'
copyright = '2023, Westly'
author = 'Westly'
release = '1.0'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration
import sphinx_rtd_theme

extensions = [
    'sphinx_copybutton'
]

copybutton_prompt_text = "$"

templates_path = ['_templates']
exclude_patterns = []

from sphinx.builders import html

def add_zip_file(app):
    html_static_path = app.config.html_static_path
    app.config.html_static_path = html_static_path + ['_static']
    app.config.html_static_path.append('zip')
    app.config.html_extra_path.append('zip')
    app.add_stylesheet('custom.css')
    app.add_javascript('custom.js')

def setup(app):
    app.connect('builder-inited', add_zip_file)



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'alabaster'

html_sidebars = {
    "**": [
        "about.html",
        "navigation.html",
        "relations.html",
        "searchbox.html",
    ]
}
html_theme_options = {
    "description": "A way to modify ChoiceScript game stats on browsers",
    "github_user": "WestlyDust",
    "github_repo": "ChoiceScript_Stats_Modifier",
    "page_width": "1200px",
    "sidebar_width": "250px",
    "fixed_sidebar": "true"
}

html_static_path = ['_static']
html_css_files = ['_static/custom.css']
