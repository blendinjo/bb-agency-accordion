/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */



/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
const Edit = ({
  attributes,
  setAttributes
}) => {
  const {
    sections,
    draggingItem,
    styling
  } = attributes;
  const [activeIndex, setActiveIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(sections.findIndex(section => {
    if (section.isOpen) return section;
  }));

  // Toggle visibility of content section
  const toggleActiveSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(index => {
    setActiveIndex(activeIndex === index ? null : index);
  });

  // Toggle Default Opened Accordion
  const toggleDefaultActiveSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((index, value) => {
    if (!value) return;
    const newSections = sections.map((section, i) => i === index ? {
      ...section,
      isOpen: value
    } : {
      ...section,
      isOpen: false
    });
    setAttributes({
      ...attributes,
      sections: newSections
    });
  });
  const addSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    const newSections = [...sections, {
      header: "New Section",
      content: "New Content"
    }];
    setAttributes({
      ...attributes,
      sections: newSections
    });
  });
  const removeSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(index => {
    const newSections = sections.filter((_, i) => i !== index);
    setAttributes({
      ...attributes,
      sections: newSections
    });
  });
  const updateSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((index, key, value) => {
    const newSections = sections.map((section, i) => i === index ? {
      ...section,
      [key]: value
    } : section);
    setAttributes({
      ...attributes,
      sections: newSections
    });
  });
  const updateSectionColors = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value, key, type) => {
    setAttributes({
      styling: {
        ...styling,
        [key]: {
          ...styling[key],
          [type]: value
        }
      }
    });
  });
  const updateSectionTypography = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((type, key, value) => {
    setAttributes({
      styling: {
        ...styling,
        [type]: {
          ...styling[type],
          typography: {
            ...styling[type].typography,
            [key]: value
          }
        }
      }
    });
  });

  //Add Drag & Drop functionality in the Editor
  const handleDragStart = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e, item) => {
    setAttributes({
      draggingItem: item
    });
    e.dataTransfer.setData("text/plain", "");
  });
  const handleDragEnd = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    Array.from(document.getElementsByClassName("hovered")).forEach(el => el.classList.remove("hovered"));
    setAttributes({
      ...attributes,
      draggingItem: null
    });
  });
  const handleDragOver = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(e => {
    //remove previous hovered element
    Array.from(document.getElementsByClassName("hovered")).forEach(el => el.classList.remove("hovered"));

    //Add hovered styling to the drop down element
    if (e.target.parentNode.classList.contains("accordion-section-controls")) {
      e.target.parentNode.classList.add("hovered");
    }
    e.preventDefault();
  });
  const handleDrop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e, targetItem) => {
    if (!draggingItem) return;
    const currentIndex = sections.indexOf(draggingItem);
    const targetIndex = sections.indexOf(targetItem);
    if (currentIndex !== -1 && targetIndex !== -1) {
      sections.splice(currentIndex, 1);
      sections.splice(targetIndex, 0, draggingItem);
      setAttributes({
        ...attributes,
        sections
      });
    }
  });

  //Accordion Settings Controls component
  const sectionControls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => sections.map((section, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "accordion-section-controls",
    draggable: "true",
    onDragStart: e => handleDragStart(e, section),
    onDragEnd: () => handleDragEnd(),
    onDragOver: e => handleDragOver(e),
    onDrop: e => handleDrop(e, section)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accordion-section-controls-order-settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#000000",
    width: "32px",
    height: "32px",
    viewBox: "0 0 256 256",
    id: "Flat"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M100,60.0001a8,8,0,1,1-8-8A8.00008,8.00008,0,0,1,100,60.0001Zm64,8a8,8,0,1,0-8-8A8.00008,8.00008,0,0,0,164,68.0001Zm-72,52a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,92,120.0001Zm72,0a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,164,120.0001Zm-72,68a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,92,188.0001Zm72,0a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,164,188.0001Z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accordion-section-controls-accordion-settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: `Header`,
    value: section.header,
    onChange: newHeader => updateSection(index, "header", newHeader)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
    label: `Content  ${index + 1}`,
    value: section.content,
    onChange: newContent => updateSection(index, "content", newContent)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: `Open by default?`,
    checked: section.isOpen,
    onChange: newValue => {
      toggleDefaultActiveSection(index, newValue);
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "accordion-section-controls-remove",
    isDestructive: true,
    onClick: () => removeSection(index)
  }, "Remove Section")))), [sections, updateSection, removeSection, handleDrop, updateSectionColors, updateSectionTypography]);

  //Accordion Title Typography Controls component
  const sectionTitleTypography = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "tab-title"
  }, "Title Styling"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "label"
  }, "Font Size"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FontSizePicker, {
    withReset: false,
    value: parseInt(styling.title.typography.fontSize, 10),
    onChange: size => updateSectionTypography("title", "fontSize", `${size}px`),
    label: "Title Font Size"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Title Font Family",
    value: styling.title.typography.fontFamily,
    options: [{
      label: "Default",
      value: "inherit"
    }, {
      label: "Arial",
      value: "Arial, sans-serif"
    }, {
      label: "Poppins",
      value: "Poppins, sans-serif"
    }, {
      label: "Georgia",
      value: "Georgia, serif"
    }, {
      label: "Courier New",
      value: '"Courier New", monospace'
    }],
    onChange: value => updateSectionTypography("title", "fontFamily", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Title Font Weight",
    value: styling.title.typography.fontWeight,
    options: [{
      label: "Normal",
      value: "normal"
    }, {
      label: "Bold",
      value: "bold"
    }],
    onChange: value => updateSectionTypography("title", "fontWeight", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "label"
  }, "Line Height"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FontSizePicker, {
    withReset: false,
    value: parseInt(styling.title.typography.lineHeight, 10),
    onChange: size => updateSectionTypography("title", "lineHeight", `${size}px`),
    label: "Title Line Height"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Title Text Transform",
    value: styling.title.typography.textTransform,
    options: [{
      label: "None",
      value: "none"
    }, {
      label: "Uppercase",
      value: "uppercase"
    }, {
      label: "Lowercase",
      value: "lowercase"
    }, {
      label: "Capitalize",
      value: "capitalize"
    }],
    onChange: value => updateSectionTypography("title", "textTransform", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Title Text Decoration",
    value: styling.title.typography.textDecoration,
    options: [{
      label: "None",
      value: "none"
    }, {
      label: "Underline",
      value: "underline"
    }, {
      label: "Overline",
      value: "overline"
    }, {
      label: "Line-through",
      value: "line-through"
    }],
    onChange: value => updateSectionTypography("title", "textDecoration", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Title Text Align",
    value: styling.title.typography.textAlign,
    options: [{
      label: "Left",
      value: "left"
    }, {
      label: "Center",
      value: "center"
    }, {
      label: "Right",
      value: "right"
    }, {
      label: "Justify",
      value: "justify"
    }],
    onChange: value => updateSectionTypography("title", "textAlign", value)
  })), [sections, updateSection, removeSection, handleDrop, updateSectionColors, updateSectionTypography]);

  //Accordion Contenty Typography Controls component
  const sectionContentTypography = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "tab-title"
  }, "Content Styling"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FontSizePicker, {
    withReset: false,
    value: parseInt(styling.content.typography.fontSize, 10),
    onChange: size => updateSectionTypography("content", "fontSize", `${size}px`),
    label: "Content Font Size"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Content Font Family",
    value: styling.content.typography.fontFamily,
    options: [{
      label: "Default",
      value: "inherit"
    }, {
      label: "Arial",
      value: "Arial, sans-serif"
    }, {
      label: "Poppins",
      value: "Poppins, sans-serif"
    }, {
      label: "Georgia",
      value: "Georgia, serif"
    }, {
      label: "Courier New",
      value: '"Courier New", monospace'
    }],
    onChange: value => updateSectionTypography("content", "fontFamily", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Content Font Weight",
    value: styling.content.typography.fontWeight,
    options: [{
      label: "Normal",
      value: "normal"
    }, {
      label: "Bold",
      value: "bold"
    }],
    onChange: value => updateSectionTypography("content", "fontWeight", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "label"
  }, "Line Height"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FontSizePicker, {
    withReset: false,
    value: Number.isNaN(styling.content.typography.lineHeight) ? 0 : parseInt(styling.content.typography.lineHeight, 10),
    onChange: size => updateSectionTypography("content", "lineHeight", `${size}px`)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Content Text Transform",
    value: styling.content.typography.textTransform,
    options: [{
      label: "None",
      value: "none"
    }, {
      label: "Uppercase",
      value: "uppercase"
    }, {
      label: "Lowercase",
      value: "lowercase"
    }, {
      label: "Capitalize",
      value: "capitalize"
    }],
    onChange: value => updateSectionTypography("content", "textTransform", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Content Text Decoration",
    value: styling.content.typography.textDecoration,
    options: [{
      label: "None",
      value: "none"
    }, {
      label: "Underline",
      value: "underline"
    }, {
      label: "Overline",
      value: "overline"
    }, {
      label: "Line-through",
      value: "line-through"
    }],
    onChange: value => updateSectionTypography("content", "textDecoration", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Content Text Align",
    value: styling.content.typography.textAlign,
    options: [{
      label: "Left",
      value: "left"
    }, {
      label: "Center",
      value: "center"
    }, {
      label: "Right",
      value: "right"
    }, {
      label: "Justify",
      value: "justify"
    }],
    onChange: value => updateSectionTypography("content", "textAlign", value)
  })), [sections, updateSection, removeSection, handleDrop, updateSectionColors, updateSectionTypography]);
  //Accordion component
  const accordionSections = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (sections.length > 0) {
      return sections.map((section, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: index,
        className: "accordion-section"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "accordion-section-header",
        onClick: () => toggleActiveSection(index)
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
        value: section.header,
        onChange: newHeader => updateSection(index, "header", newHeader),
        style: {
          color: styling.title.color,
          fontSize: styling.title.typography.fontSize,
          fontFamily: styling.title.typography.fontFamily,
          fontWeight: styling.title.typography.fontWeight,
          lineHeight: styling.title.typography.lineHeight,
          letterSpacing: styling.title.typography.letterSpacing,
          textTransform: styling.title.typography.textTransform,
          textDecoration: styling.title.typography.textDecoration,
          textAlign: styling.title.typography.textAlign
        }
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: activeIndex === index ? "active" : ""
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M6 15L12 9L18 15",
        stroke: "black",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }))), activeIndex === index && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "accordion-section-content"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
        tagName: "div",
        value: section.content,
        onChange: newContent => updateSection(index, "content", newContent),
        style: {
          color: styling.content.color,
          fontSize: styling.content.typography.fontSize,
          fontFamily: styling.content.typography.fontFamily,
          fontWeight: styling.content.typography.fontWeight,
          lineHeight: styling.content.typography.lineHeight,
          letterSpacing: styling.content.typography.letterSpacing,
          textTransform: styling.content.typography.textTransform,
          textDecoration: styling.content.typography.textDecoration,
          textAlign: styling.content.typography.textAlign
        }
      }))));
    } else {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Please add a section from the block settings");
    }
  }, [sections, updateSection, removeSection, handleDrop, updateSectionColors, updateSectionTypography]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: "Accordion Settings",
    initialOpen: true
  }, sectionControls, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "accordion-section-controls-add-section",
    onClick: addSection
  }, "Add Section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: "Color Settings",
    initialOpen: false,
    colorSettings: [{
      value: styling.title.color,
      onChange: color => updateSectionColors(color, "title", "color"),
      label: "Header Color"
    }, {
      value: styling.content.color,
      onChange: color => updateSectionColors(color, "content", "color"),
      label: "Content Color"
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: "Typography Settings",
    initialOpen: false
  }, sectionTitleTypography, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), sectionContentTypography)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(),
    className: "accordion-wrapper"
  }, accordionSections));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */




/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_7__.name, {
  attributes: {
    sections: {
      type: "array",
      default: [{
        header: "Accordion Section 1",
        content: "Content for Section 1",
        isOpen: true
      }, {
        header: "Accordion Section 2",
        content: "Content for Section 2",
        isOpen: false
      }, {
        header: "Accordion Section 3",
        content: "Content for Section 3",
        isOpen: false
      }]
    },
    draggingItem: {
      type: "null",
      default: null
    },
    styling: {
      type: 'object',
      default: {
        title: {
          color: "#000",
          typography: {
            fontSize: "24px",
            lineHeight: "32px",
            fontFamily: "inherit",
            fontWeight: "normal",
            textTransform: "none",
            textDecoration: "none",
            textAlign: "left"
          }
        },
        content: {
          color: "#000",
          typography: {
            fontSize: "20px",
            lineHeight: "32px",
            fontFamily: "inherit",
            fontWeight: "normal",
            textTransform: "none",
            textDecoration: "none",
            textAlign: "left"
          }
        }
      }
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
const Save = ({
  attributes
}) => {
  const {
    sections,
    styling
  } = attributes;
  // Ensure sections is a valid array
  const validSections = Array.isArray(sections) ? sections : [];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accordion-wrapper",
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps,
    // Ensure sections is a valid array

    "data-sections": JSON.stringify(validSections),
    "data-styling": JSON.stringify(styling)
  }, sections.map((section, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "accordion-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accordion-section-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, section.header)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "accordion-section-content"
  }, section.content))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/accordion","version":"0.1.0","title":"Accordion","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"accordion","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkaccordion"] = globalThis["webpackChunkaccordion"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map