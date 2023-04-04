import {
  Widget
} from '@phosphor/widgets';

import '../style/index.css';


/**
 * The default mime type for the extension.
 */
const MIME_TYPE = 'application/json';


/**
 * The class name added to the extension.
 */
const CLASS_NAME = 'jp-OutputWidgetJSON';


/**
 * A widget for rendering JSON.
 */
export
class OutputWidget extends Widget {
  /**
   * Construct a new output widget.
   */
  constructor(options) {
    super();
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
  }

  /**
   * Render JSON into this widget's node.
   */
  renderModel(model) {
    this.node.textContent = model.data[this._mimeType];
  }
}


/**
 * A mime renderer factory for JSON data.
 */
export
const rendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  createRenderer: options => new OutputWidget(options)
};


const extension = {
  name: 'JSON',
  rendererFactory,
  rank: 0,
  dataType: 'json',
};

export default extension;
