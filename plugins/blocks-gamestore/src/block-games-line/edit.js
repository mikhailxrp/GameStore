import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";
import placeholder from "./img/placeholder-block-image.jpg";

export default function Edit({ attributes, setAttributes }) {
	const { count } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title="Block Games Line Settings">
					<TextControl
						label="Number of products displayed in the block"
						value={count}
						onChange={(value) => setAttributes({ count: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="block-games-line">
					<img src={placeholder} alt="Placeholder" />
				</div>
			</div>
		</>
	);
}
