# json_renderer

A JupyterLab and Jupyter Notebook extension for rendering JSON

![output renderer](http://g.recordit.co/QAsC7YULcY.gif)

## Prerequisites

* JupyterLab ^0.28.0 and/or Notebook >=4.3.0

## Usage

To render JSON output in IPython:

```python
from json_renderer import JSON

JSON({
    "string": "string",
    "array": [1, 2, 3],
    "bool": True,
    "object": {
        "foo": "bar"
    }
})
```

## Install

```bash
pip install json_renderer
# For JupyterLab
jupyter lab build
# For Notebook
jupyter nbextension enable --py --sys-prefix json_renderer
```

## Development

```bash
pip install -e .
# For JupyterLab
jupyter labextension link
jupyter lab --watch
# For Notebook
jupyter nbextension install --symlink --py --sys-prefix json_renderer
jupyter nbextension enable --py --sys-prefix json_renderer
```
