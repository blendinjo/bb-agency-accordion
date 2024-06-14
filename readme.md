# Custom Accordion Block

This project provides a custom Gutenberg block for WordPress that functions as an accordion. It includes accessibility features, ARIA attributes, and keyboard navigation support.

## Table of Contents

- [Installation](#installation)
- [Building the Block](#building-the-block)
- [Usage](#usage)
- [Customization](#customization)
- [Keyboard Navigation](#keyboard-navigation)
- [Accessibility Features](#accessibility-features)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Installation

Follow these steps to install and activate the custom accordion block in your WordPress theme.

### Prerequisites

- Ensure you have Node.js and npm installed.
- Ensure you have a WordPress installation running.

### Steps

1. **Clone the Repository**: Clone this repository into your WordPress theme's directory.
	 ```bash
    cd /path/to/your/wordpress/wp-content/plugins
    git clone https://github.com/blendinjo/bb-agency-accordion.git
    ``` 
2. **Navigate to the Plugin Directory**: 
 ```bash 
    cd accordion
 ```
3. **Install Dependencies**:
```bash
	npm install 
```

4. **Build the Block**:
 ```bash 
    npm run build
```
5. **Activate the Block**:

	 
	 1.  Activate the plugin through the 'Plugins' screen in WordPress


## Building the Block

During development, you can use the following command to build the block:

```bash
npm run build
```
For continuous development, use: 

```bash
npm start
```

## Usage

After activation, the custom accordion block will be available in the Gutenberg editor.

### Adding a Block

1.  Open the WordPress editor.
2.  Click on the '+' icon to add a new block.
3.  Search for 'Accordion'.
4.  Add the block to your page or post.

### Editing Sections

-   Click on the section headers or content areas to edit them.
-    Drag and drop the rows to change the order.
-   Use the provided controls in the block inspector to customize typography and styles.

## Customization

You can customize the block's styling using the provided options in the block inspector:

-   Font Family
-   Font Size
-   Font Weight
-   Line Height
-   Text Transform
-   Text Decoration
-   Text Align
-   Color

## Keyboard Navigation

The accordion supports keyboard navigation for accessibility:

-   **Tab**: Navigate through headers.
-   **Enter/Space**: Toggle the expanded state of the section.

## Accessibility Features

-   **ARIA Roles and Attributes**: Includes roles and properties like `role="button"`, `aria-expanded`, `aria-controls`, and `aria-labelledby`.
-   **Keyboard Navigation**: Fully supports keyboard navigation for toggling sections.

## Troubleshooting

### Common Issues

-   **Block Validation Failed**: Ensure the structure of the saved content matches the rendered output.
-   **Styles Not Applied**: Verify that the styles are correctly defined and applied in the block editor and front-end.

### Debugging Tips

-   Check the browser console for errors.
-   Ensure all dependencies are correctly installed. 

## License

This project is licensed under the MIT License. See the LICENSE file for details.  
 ```
This version uses Markdown exclusively, with formatting suitable for GitHub repositories or Markdown editors. Adjust the content as needed for your specific project details and structure.
g``