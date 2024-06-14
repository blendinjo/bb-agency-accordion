import { useState } from "@wordpress/element";
import { createRoot } from "react-dom/client";
const Accordion = ({ sections, styling }) => {
	const [activeIndex, setActiveIndex] = useState(
		sections.findIndex((section) => {
			if (section.isOpen) return section;
		}),
	);
	const toggleSection = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};


	const handleKeyDown = (index, event) => {
		if (event.key === 'Enter' || event.key === ' ') {
		  toggleSection(index);
		}
	  };
	return (
		<div className="accordion">
			{sections.map((section, index) => (
				<div key={index} className="accordion-section">
					{/* Accordion Header */}
					<div
						className="accordion-section-header"
						onClick={() => toggleSection(index)}
						tabIndex="0"
						role="button"
						aria-expanded={activeIndex === index}
						aria-controls={`accordion-content-${index}`}
						id={`accordion-header-${index}`}
						onKeyDown={(event) => handleKeyDown(index, event)}
					>
						<p
							style={{
								color: styling.title.color,
								fontSize: styling.title.typography.fontSize,
								fontFamily: styling.title.typography.fontFamily,
								fontWeight: styling.title.typography.fontWeight,
								lineHeight: styling.title.typography.lineHeight,
 								textTransform: styling.title.typography.textTransform,
								textDecoration: styling.title.typography.textDecoration,
								textAlign: styling.title.typography.textAlign,
							}}
						>
							{section.header}
						</p>
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
					{/* Accordion Content */}
					<p
						className="accordion-section-content" 
						role="region"
						aria-labelledby={`accordion-header-${index}`}
						id={`accordion-content-${index}`}
						style={{
							color: styling.content.color,
							fontSize: styling.content.typography.fontSize,
							fontFamily: styling.content.typography.fontFamily,
							fontWeight: styling.content.typography.fontWeight,
							lineHeight: styling.content.typography.lineHeight,
 							textTransform: styling.content.typography.textTransform,
							textDecoration: styling.content.typography.textDecoration,
							textAlign: styling.content.typography.textAlign,
							display: activeIndex === index ? "block" : "none",
						}}
					>
						{section.content}
					</p>
				</div>
			))}
		</div>
	);
};

// Find all divs with class 'accordion' and render the React component into each one
document.querySelectorAll(".accordion-wrapper").forEach((accordionElement) => {
	try {
		const sections = JSON.parse(accordionElement.getAttribute("data-sections"));
		const styling = JSON.parse(accordionElement.getAttribute("data-styling"));

		if (sections) {
			const root = createRoot(accordionElement);
			root.render(<Accordion sections={sections} styling={styling} />);
		}
	} catch (e) {
		console.error("Failed to parse sections JSON:", e);
	}
});
