// const DEFAULT_LAYOUT_SETTINGS = { // TODO create dis and con specific settings
//   anchor: 'auto', // TODO re-name from align..
//   // orientation: 'auto', // TODO impl. v/h/auto
//   // direction: 'auto', // TODO impl. left/right/top/bottom/auto
//   padding: { // TODO use dock layout margin instead..
//     start: 0,
//     end: 10
//   },
//   maxGlyphCount: NaN,
//   maxEdgeBleed: Infinity
//   // labelMode: 'auto' // TODO move here? auto, horizontal, layered
// };

/**
 * Discrete axis settings
 * @typedef {object}
 * @alias component--axis-discrete
 */
const DEFAULT_DISCRETE_SETTINGS = {
  /**
   * @typedef {object}
   */
  labels: {
    /** Toggle labels on/off
    * @type {boolean=} */
    show: true,
    /** Tilting angle in degrees. Capped between -90 and 90. Only applicable when labels are in `tilted` mode.
    * @type {number=} */
    tiltAngle: 40,
    /** Control the amount of space (in pixels) that labes can occupy outside their docking area. Only applicable when labels are in `tilted` mode.
    * @type {number=} */
    maxEdgeBleed: Infinity,
    /** Space in pixels between the tick and label.
    * @type {number=} */
    margin: 4,
    /** Max length of labels in pixels
    * @type {number=} */
    maxLengthPx: 150,
    /** Min length of labels in pixels. Labels will always at least require this much space
    * @type {number=} */
    minLengthPx: 0,
    /** Control how labels arrange themself. Availabe modes are `auto`, `horizontal`, `layered` and `tilted`. When set to `auto` the axis determines the best possible layout in the current context.
    * @type {string=} */
    mode: 'auto',
    /** When only a sub-set of data is available, ex. when paging. This property can be used to let the axis estimate how much space the labels will consume, allowing it to give a consistent space estimate over the entire dataset when paging.
    * @type {number=} */
    maxGlyphCount: NaN,
    /** Align act as a slider for the text bounding rect over the item bandwidth, given that the item have a bandwidth. Except when labels are tilted, then the align is a pure align that shifts the position of the label anchoring point.
    * @type {number=} */
    align: 0.5,
    /** Offset in pixels along the axis direction.
    * @type {number=} */
    offset: 0
  },
  /**
   * @typedef {object}
   */
  ticks: {
    /** Toggle ticks on/off
    * @type {boolean=} */
    show: false,
    /** Space in pixels between the ticks and the line.
    * @type {number=} */
    margin: 0,
    /** Size of the ticks in pixels.
    * @type {number=} */
    tickSize: 4
  },
  /**
   * @typedef {object}
   */
  line: {
    /** Toggle line on/off
    * @type {boolean=} */
    show: false,
    /** If Horizontal Axis is aligned left but you want the line to align right
    * @type {string=} */
    align: 'right'
  },
  /** Padding in direction perpendicular to the axis
    * @type {number=} */
  paddingStart: 0,
  /** Padding in direction perpendicular to the axis
    * @type {number=} */
  paddingEnd: 10,
  /** Set the anchoring point of the axis. Avaialable options are `auto/left/right/bottom/top`. In `auto` the axis determines the best option. The options are restricted based on the axis orientation, a vertical axis may only anchor on `left` or `right`
    * @type {string=} */
  align: 'auto'
};

/**
 * Continuous axis settings
 * @typedef {object}
 * @alias component--axis-continuous
 */
const DEFAULT_CONTINUOUS_SETTINGS = {
  /**
   * @typedef {object}
   */
  labels: {
    /** Toggle labels on/off
    * @type {boolean=} */
    show: true,
    /** Space in pixels between the tick and label.
    * @type {number=} */
    margin: 4,
    /** Max length of labels in pixels
    * @type {number=} */
    maxLengthPx: 150,
    /** Min length of labels in pixels. Labels will always at least require this much space
    * @type {number=} */
    minLengthPx: 0,
    /** Align act as a slider for the text bounding rect over the item bandwidth, given that the item have a bandwidth.
    * @type {number=} */
    align: 0.5,
    /** Offset in pixels along the axis direction.
    * @type {number=} */
    offset: 0
  },
  /**
   * @typedef {object}
   */
  ticks: {
    /** Toggle ticks on/off
    * @type {boolean=} */
    show: true,
    /** Space in pixels between the ticks and the line.
    * @type {number=} */
    margin: 0,
    /** Size of the ticks in pixels.
    * @type {number=} */
    tickSize: 8
  },
  /**
   * @typedef {object}
   */
  minorTicks: {
    /** Toggle minor-ticks on/off
    * @type {boolean=} */
    show: false,
    /** Size of the ticks in pixels.
    * @type {number=} */
    tickSize: 3,
    /** Space in pixels between the ticks and the line.
    * @type {number=} */
    margin: 0
  },
  /**
   * @typedef {object}
   */
  line: {
    /** Toggle line on/off
    * @type {boolean=} */
    show: true,
    /** If Horizontal Axis is aligned left but you want the line to align right
    * @type {string=} */
    align: 'right'
  },
  /** Padding in direction perpendicular to the axis
    * @type {number=} */
  paddingStart: 0,
  /** Padding in direction perpendicular to the axis
    * @type {number=} */
  paddingEnd: 10,
  /** Set the anchoring point of the axis. Avaialable options are `auto/left/right/bottom/top`. In `auto` the axis determines the best option. The options are restricted based on the axis orientation, a vertical axis may only anchor on `left` or `right`
    * @type {string=} */
  align: 'auto'
};

export {
  DEFAULT_DISCRETE_SETTINGS,
  DEFAULT_CONTINUOUS_SETTINGS
};
