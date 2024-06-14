/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import { useState, useCallback, useMemo } from "@wordpress/element";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";
import {
	TextControl,
	PanelBody,
	Button,
	TextareaControl,
	ToggleControl,
	FontSizePicker,
	SelectControl,
} from "@wordpress/components";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
const Edit = ({ attributes, setAttributes }) => {
	const { sections, draggingItem, styling } = attributes;
	const [activeIndex, setActiveIndex] = useState(
		sections.findIndex((section) => {
			if (section.isOpen) return section;
		}),
	);

	// Toggle visibility of content section
	const toggleActiveSection = useCallback((index) => {
		setActiveIndex(activeIndex === index ? null : index);
	});

	// Toggle Default Opened Accordion
	const toggleDefaultActiveSection = useCallback((index, value) => {
		if (!value) return;

		const newSections = sections.map((section, i) =>
			i === index
				? { ...section, isOpen: value }
				: { ...section, isOpen: false },
		);

		setAttributes({ ...attributes, sections: newSections });
	});

	const addSection = useCallback(() => {
		const newSections = [
			...sections,
			{ header: "New Section", content: "New Content" },
		];
		setAttributes({ ...attributes, sections: newSections });
	});

	const removeSection = useCallback((index) => {
		const newSections = sections.filter((_, i) => i !== index);
		setAttributes({ ...attributes, sections: newSections });
	});

	const updateSection = useCallback((index, key, value) => {
		const newSections = sections.map((section, i) =>
			i === index ? { ...section, [key]: value } : section,
		);
		setAttributes({ ...attributes, sections: newSections });
	});

	const updateSectionColors = useCallback((value, key, type) => {
		setAttributes({
			styling: {
				...styling,
				[key]: {
					...styling[key],
					[type]: value,
				},
			},
		});
	}); 
	const updateSectionTypography = useCallback((type, key, value) => {
		setAttributes({
			styling: {
				...styling,
				[type]: {
					...styling[type],
					typography: {
						...styling[type].typography,
						[key]: value,
					},
				},
			},
		});
	});

	//Add Drag & Drop functionality in the Editor
	const handleDragStart = useCallback((e, item) => {
		setAttributes({ draggingItem: item });
		e.dataTransfer.setData("text/plain", "");
	});

	const handleDragEnd = useCallback(() => {
		Array.from(document.getElementsByClassName("hovered")).forEach((el) =>
			el.classList.remove("hovered"),
		);
		setAttributes({ ...attributes, draggingItem: null });
	});

	const handleDragOver = useCallback((e) => {
		//remove previous hovered element
		Array.from(document.getElementsByClassName("hovered")).forEach((el) =>
			el.classList.remove("hovered"),
		);

		//Add hovered styling to the drop down element
		if (e.target.parentNode.classList.contains("accordion-section-controls")) {
			e.target.parentNode.classList.add("hovered");
		}
		e.preventDefault();
	});

	const handleDrop = useCallback((e, targetItem) => {
		if (!draggingItem) return;

		const currentIndex = sections.indexOf(draggingItem);
		const targetIndex = sections.indexOf(targetItem);

		if (currentIndex !== -1 && targetIndex !== -1) {
			sections.splice(currentIndex, 1);
			sections.splice(targetIndex, 0, draggingItem);
			setAttributes({ ...attributes, sections });
		}
	});

	//Accordion Settings Controls component
	const sectionControls = useMemo(
		() =>
			sections.map((section, index) => (
				<div
					key={index}
					className="accordion-section-controls"
					draggable="true"
					onDragStart={(e) => handleDragStart(e, section)}
					onDragEnd={() => handleDragEnd()}
					onDragOver={(e) => handleDragOver(e)}
					onDrop={(e) => handleDrop(e, section)}
				>
					<div className="accordion-section-controls-order-settings">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#000000"
							width="32px"
							height="32px"
							viewBox="0 0 256 256"
							id="Flat"
						>
							<path d="M100,60.0001a8,8,0,1,1-8-8A8.00008,8.00008,0,0,1,100,60.0001Zm64,8a8,8,0,1,0-8-8A8.00008,8.00008,0,0,0,164,68.0001Zm-72,52a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,92,120.0001Zm72,0a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,164,120.0001Zm-72,68a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,92,188.0001Zm72,0a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,164,188.0001Z" />
						</svg>
					</div>
					<div className="accordion-section-controls-accordion-settings">
						<TextControl
							label={`Header`}
							value={section.header}
							onChange={(newHeader) =>
								updateSection(index, "header", newHeader)
							}
						/>
						<TextareaControl
							label={`Content  ${index + 1}`}
							value={section.content}
							onChange={(newContent) =>
								updateSection(index, "content", newContent)
							}
						/>
						<ToggleControl
							label={`Open by default?`}
							checked={section.isOpen}
							onChange={(newValue) => {
								toggleDefaultActiveSection(index, newValue);
							}}
						/>
						<Button
							className="accordion-section-controls-remove"
							isDestructive
							onClick={() => removeSection(index)}
						>
							Remove Section
						</Button>
					</div>
				</div>
			)),
		[
			sections,
			updateSection,
			removeSection,
			handleDrop,
			updateSectionColors,
			updateSectionTypography,
		],
	);

	//Accordion Title Typography Controls component
	const sectionTitleTypography = useMemo(
		() => (
			<>
				<p className="tab-title">Title Styling</p>
<p className="label">Font Size</p>
				<FontSizePicker
					withReset={false}
					value={parseInt(styling.title.typography.fontSize, 10)}
					onChange={(size) =>
						updateSectionTypography("title", "fontSize", `${size}px`)
					}
					label="Title Font Size"
				/>
				<SelectControl
					label="Title Font Family"
					value={styling.title.typography.fontFamily}
					options={[
						{ label: "Default", value: "inherit" },
						{ label: "Arial", value: "Arial, sans-serif" },
						{ label: "Poppins", value: "Poppins, sans-serif" },
						{ label: "Georgia", value: "Georgia, serif" },
						{ label: "Courier New", value: '"Courier New", monospace' },
					]}
					onChange={(value) =>
						updateSectionTypography("title", "fontFamily", value)
					}
				/>
				<SelectControl
					label="Title Font Weight"
					value={styling.title.typography.fontWeight}
					options={[
						{ label: "Normal", value: "normal" },
						{ label: "Bold", value: "bold" },
					]}
					onChange={(value) =>
						updateSectionTypography("title", "fontWeight", value)
					}
				/>

<p className="label">Line Height</p>
				<FontSizePicker
					withReset={false}
					value={parseInt(styling.title.typography.lineHeight, 10)}
					onChange={(size) =>
						updateSectionTypography("title", "lineHeight", `${size}px`)
					}
					label="Title Line Height"
				/> 
				<SelectControl
					label="Title Text Transform"
					value={styling.title.typography.textTransform}
					options={[
						{ label: "None", value: "none" },
						{ label: "Uppercase", value: "uppercase" },
						{ label: "Lowercase", value: "lowercase" },
						{ label: "Capitalize", value: "capitalize" },
					]}
					onChange={(value) =>
						updateSectionTypography("title", "textTransform", value)
					}
				/>
				<SelectControl
					label="Title Text Decoration"
					value={styling.title.typography.textDecoration}
					options={[
						{ label: "None", value: "none" },
						{ label: "Underline", value: "underline" },
						{ label: "Overline", value: "overline" },
						{ label: "Line-through", value: "line-through" },
					]}
					onChange={(value) =>
						updateSectionTypography("title", "textDecoration", value)
					}
				/>
				<SelectControl
					label="Title Text Align"
					value={styling.title.typography.textAlign}
					options={[
						{ label: "Left", value: "left" },
						{ label: "Center", value: "center" },
						{ label: "Right", value: "right" },
						{ label: "Justify", value: "justify" },
					]}
					onChange={(value) =>
						updateSectionTypography("title", "textAlign", value)
					}
				/>
			</>
		),
		[
			sections,
			updateSection,
			removeSection,
			handleDrop,
			updateSectionColors,
			updateSectionTypography,
		],
	);

	//Accordion Contenty Typography Controls component
	const sectionContentTypography = useMemo(
		() => (
			<>
				<p className="tab-title">Content Styling</p>

				<FontSizePicker
					withReset={false}
					value={parseInt(styling.content.typography.fontSize, 10)}
					onChange={(size) =>
						updateSectionTypography("content", "fontSize", `${size}px`)
					}
					label="Content Font Size"
				/>
				<SelectControl
					label="Content Font Family"
					value={styling.content.typography.fontFamily}
					options={[
						{ label: "Default", value: "inherit" },
						{ label: "Arial", value: "Arial, sans-serif" },
						{ label: "Poppins", value: "Poppins, sans-serif" },
						{ label: "Georgia", value: "Georgia, serif" },
						{ label: "Courier New", value: '"Courier New", monospace' },
					]}
					onChange={(value) =>
						updateSectionTypography("content", "fontFamily", value)
					}
				/>
				<SelectControl
					label="Content Font Weight"
					value={styling.content.typography.fontWeight}
					options={[
						{ label: "Normal", value: "normal" },
						{ label: "Bold", value: "bold" },
					]}
					onChange={(value) =>
						updateSectionTypography("content", "fontWeight", value)
					}
				/>

				<p className="label">Line Height</p>
				<FontSizePicker
					withReset={false}
					value={Number.isNaN(styling.content.typography.lineHeight) ?  0 : parseInt(styling.content.typography.lineHeight, 10)}
					onChange={(size) =>
						updateSectionTypography("content", "lineHeight", `${size}px`)
					} 
				/> 
				<SelectControl
					label="Content Text Transform"
					value={styling.content.typography.textTransform}
					options={[
						{ label: "None", value: "none" },
						{ label: "Uppercase", value: "uppercase" },
						{ label: "Lowercase", value: "lowercase" },
						{ label: "Capitalize", value: "capitalize" },
					]}
					onChange={(value) =>
						updateSectionTypography("content", "textTransform", value)
					}
				/>
				<SelectControl
					label="Content Text Decoration"
					value={styling.content.typography.textDecoration}
					options={[
						{ label: "None", value: "none" },
						{ label: "Underline", value: "underline" },
						{ label: "Overline", value: "overline" },
						{ label: "Line-through", value: "line-through" },
					]}
					onChange={(value) =>
						updateSectionTypography("content", "textDecoration", value)
					}
				/>
				<SelectControl
					label="Content Text Align"
					value={styling.content.typography.textAlign}
					options={[
						{ label: "Left", value: "left" },
						{ label: "Center", value: "center" },
						{ label: "Right", value: "right" },
						{ label: "Justify", value: "justify" },
					]}
					onChange={(value) =>
						updateSectionTypography("content", "textAlign", value)
					}
				/>
			</>
		),
		[
			sections,
			updateSection,
			removeSection,
			handleDrop,
			updateSectionColors,
			updateSectionTypography,
		],
	);
	//Accordion component
	const accordionSections = useMemo(() => {
		if (sections.length > 0) {
			return sections.map((section, index) => (
				<div key={index} className="accordion-section">
					<div
						className="accordion-section-header"
						onClick={() => toggleActiveSection(index)}
					>
						<TextControl
							value={section.header}
							onChange={(newHeader) =>
								updateSection(index, "header", newHeader)
							}
							style={{
								color: styling.title.color,
								fontSize: styling.title.typography.fontSize,
								fontFamily: styling.title.typography.fontFamily,
								fontWeight: styling.title.typography.fontWeight,
								lineHeight: styling.title.typography.lineHeight,
								letterSpacing: styling.title.typography.letterSpacing,
								textTransform: styling.title.typography.textTransform,
								textDecoration: styling.title.typography.textDecoration,
								textAlign: styling.title.typography.textAlign,
							}}
						/>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={activeIndex === index ? "active" : ""}
						>
							<path
								d="M6 15L12 9L18 15"
								stroke="black"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					{activeIndex === index && (
						<div className="accordion-section-content">
							<TextareaControl
								tagName="div"
								value={section.content}
								onChange={(newContent) =>
									updateSection(index, "content", newContent)
								}
								style={{
									color: styling.content.color,
									fontSize: styling.content.typography.fontSize,
									fontFamily: styling.content.typography.fontFamily,
									fontWeight: styling.content.typography.fontWeight,
									lineHeight: styling.content.typography.lineHeight,
									letterSpacing: styling.content.typography.letterSpacing,
									textTransform: styling.content.typography.textTransform,
									textDecoration: styling.content.typography.textDecoration,
									textAlign: styling.content.typography.textAlign,
								}}
							/>
						</div>
					)}
				</div>
			));
		} else {
			return <p>Please add a section from the block settings</p>;
		}
	}, [
		sections,
		updateSection,
		removeSection,
		handleDrop,
		updateSectionColors,
		updateSectionTypography,
	]);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Accordion Settings" initialOpen={true}>
					{sectionControls}
					<Button
						className="accordion-section-controls-add-section"
						onClick={addSection}
					>
						Add Section
					</Button>
				</PanelBody>
				<PanelColorSettings
					title="Color Settings"
					initialOpen={false}
					colorSettings={[
						{
							value: styling.title.color,
							onChange: (color) => updateSectionColors(color, "title", "color"),
							label: "Header Color",
						},
						{
							value: styling.content.color,
							onChange: (color) =>
								updateSectionColors(color, "content", "color"),

							label: "Content Color",
						},
					]}
				/>
				<PanelBody title="Typography Settings" initialOpen={false}>
					{sectionTitleTypography}
					<hr />
					{sectionContentTypography}
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()} className="accordion-wrapper">
				{accordionSections}
			</div>
		</>
	);
};

export default Edit;
