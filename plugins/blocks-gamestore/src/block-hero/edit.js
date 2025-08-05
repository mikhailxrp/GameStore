import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	Button,
} from "@wordpress/components";

import "./editor.scss";

const SlideItem = ({ slide, index, onImageChange, onRemove }) => {
	return (
		<div>
			<div className="slide-item-image">
				<p>Light version logo</p>
				{slide.lightImage && (
					<div className="image-box">
						<img src={slide.lightImage} alt="slide" />
					</div>
				)}
				<MediaPlaceholder
					icon="format-image"
					onSelect={(media) => onImageChange(media.url, index, "lightImage")}
					onSelectURL={(url) => onImageChange(url, index, "lightImage")}
					labels={{
						title: "Slide Light Image",
						instructions:
							"Upload an Light Image version or select one from your media library",
					}}
					accept="image/*"
					allowedTypes={["image"]}
					multiple={false}
				/>
				<Button
					className="components-button is-destructive"
					onClick={() => onRemove(index)}
				>
					Remove
				</Button>
			</div>

			<div className="slide-item-image">
				<p>Dark version logo</p>
				{slide.darkImage && (
					<div className="image-box">
						<img src={slide.darkImage} alt="slide" />
					</div>
				)}
				<MediaPlaceholder
					icon="format-image"
					onSelect={(media) => onImageChange(media.url, index, "darkImage")}
					onSelectURL={(url) => onImageChange(url, index, "darkImage")}
					labels={{
						title: "Slide Light Image",
						instructions:
							"Upload an Light Image version or select one from your media library",
					}}
					accept="image/*"
					allowedTypes={["image"]}
					multiple={false}
				/>
				<Button
					className="components-button is-destructive"
					onClick={() => onRemove(index)}
				>
					Remove
				</Button>
			</div>
		</div>
	);
};

export default function Edit({ attributes, setAttributes }) {
	const { title, description, link, linkAnchor, mediaUrl, isVideo, slides } =
		attributes;

	const onSlideChange = (updatedSlide, index) => {
		const updateSlides = [...slides];
		updateSlides[index] = updatedSlide;
		setAttributes({ slides: updateSlides });
	};

	const addSlide = () => {
		const newSlide = { lightImage: "", darkImage: "" };
		const updateSlides = [...slides, newSlide];
		setAttributes({ slides: updateSlides });
	};

	const removeSlide = (index) => {
		const updateSlides = [...slides];
		updateSlides.splice(index, 1);
		setAttributes({ slides: updateSlides });
	};

	const handleImageChange = (url, index, imageType) => {
		const updateSlide = { ...slides[index], [imageType]: url };
		onSlideChange(updateSlide, index);
	};

	const ToggleMediaType = () => {
		setAttributes({ isVideo: !isVideo, mediaUrl: "" });
	};
	return (
		<>
			<InspectorControls>
				<PanelBody title="Hero Settings">
					<TextControl
						label="Title block"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<TextareaControl
						label="Description"
						value={description}
						onChange={(value) => setAttributes({ description: value })}
					/>
					<TextControl
						label="Button URL"
						value={link}
						onChange={(value) => setAttributes({ link: value })}
					/>
					<TextControl
						label="Button value"
						value={linkAnchor}
						onChange={(value) => setAttributes({ linkAnchor: value })}
					/>
					<ToggleControl
						label="Turn on video (off - image)"
						checked={isVideo}
						onChange={ToggleMediaType}
					/>
					{mediaUrl && isVideo && (
						<video muted controls>
							<source src={mediaUrl} type="video/mp4" />
						</video>
					)}

					{mediaUrl && !isVideo && (
						<img src={mediaUrl} alt="media" style={{ maxWidth: "100%" }} />
					)}

					<MediaUpload
						onSelect={(media) => setAttributes({ mediaUrl: media.url })}
						allowedTypes={[isVideo ? "video" : "image"]}
						render={({ open }) => (
							<button className="components-button is-secondary" onClick={open}>
								upload image or video{isVideo ? "video" : "image"}
							</button>
						)}
					/>
				</PanelBody>

				<PanelBody title="Hero Slides-logos">
					{slides.map((slide, index) => (
						<SlideItem
							slide={slide}
							index={index}
							key={index}
							onImageChange={handleImageChange}
							onRemove={removeSlide}
						/>
					))}
					<Button className="components-button is-secondary" onClick={addSlide}>
						Add slide
					</Button>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				{mediaUrl && isVideo && (
					<video
						muted
						controls
						className="video-bg"
						loop="loop"
						autoPlay=""
						playsInline
						width="100%"
						height="100%"
					>
						<source
							className="source-element"
							src={mediaUrl}
							type="video/mp4"
						/>
					</video>
				)}

				{mediaUrl && !isVideo && (
					<img
						src={mediaUrl}
						className="image-bg"
						alt="media"
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
				)}

				<div className="hero-mask"></div>
				<div className="hero-content">
					<RichText
						tagName="h1"
						className="hero-title"
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					<RichText
						tagName="p"
						className="hero-description"
						value={description}
						onChange={(description) => setAttributes({ description })}
					/>
					<a href={link} className="hero-button shadow">
						{linkAnchor}
					</a>
				</div>
				{slides && (
					<div className="hero-slider">
						<div className="slider-container">
							<div className="swiper-wrapper">
								{slides.map((slide, index) => (
									<div className="swiper-slide slide-item" key={index}>
										<img
											src={slide.lightImage}
											alt="logo"
											className="light-logo"
										/>
										<img
											src={slide.darkImage}
											alt="logo"
											className="dark-logo"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
