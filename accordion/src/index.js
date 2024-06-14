/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

import { useState, useCallback, useMemo } from "@wordpress/element";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	TextControl,
	PanelBody,
	Button,
	TextareaControl,
} from "@wordpress/components";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	attributes: {
		sections: {
			type: "array",
			default: [
				{
					header: "Accordion Section 1",
					content: "Content for Section 1",
					isOpen:true
				},
				{
					header: "Accordion Section 2",
					content: "Content for Section 2",
					isOpen:false
				},
				{
					header: "Accordion Section 3",
					content: "Content for Section 3",
					isOpen:false
				},
			],
		},
		
		draggingItem: {
			type : "null",
			default:null
		}, 

		styling:{
			type:'object',
			default:{
				title:{
					color: "#000" ,
					typography:{
						fontSize:"24px" ,
                        lineHeight: "32px", 
                        fontFamily: "inherit",
                        fontWeight: "normal", 
                        textTransform: "none",
                        textDecoration: "none",
                        textAlign: "left",
					}
				},
				content:{
					 
					color: "#000" ,
					typography:{
						fontSize:"20px",
                        lineHeight: "32px", 
                        fontFamily: "inherit",
                        fontWeight: "normal", 
                        textTransform: "none",
                        textDecoration: "none",
                        textAlign: "left",

					}
				}
			}
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit, 

	/**
	 * @see ./save.js
	 */
    save:  Save
});
