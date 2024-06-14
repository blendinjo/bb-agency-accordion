/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor"; 

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
const Save = ({ attributes }) => {
	const { sections,styling } = attributes; 
	// Ensure sections is a valid array
	const validSections = Array.isArray(sections) ? sections : [];
	return (
		<div
			className="accordion-wrapper"
			{...useBlockProps}
			// Ensure sections is a valid array

			data-sections={JSON.stringify(validSections)}
			data-styling={JSON.stringify(styling)}
		>
			{/* Accordion Sections */}
			{sections.map((section, index) => (
				<div key={index} className="accordion-section">
					{/* Accordion Header */}
					<div className="accordion-section-header">
						<p>{section.header}</p> 
					</div>
					{/* Accordion Content */}
					<p className="accordion-section-content">{section.content}</p>
				</div>
			))}
		</div>
	);
};

export default Save;
