import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { mediaUrl, isVideo, title, description, link, linkAnchor, slides } =
		attributes;
	return (
		<div {...useBlockProps.save()}>
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
					<source className="source-element" src={mediaUrl} type="video/mp4" />
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
				<RichText.Content tagName="h1" className="hero-title" value={title} />
				<RichText.Content
					tagName="p"
					className="hero-description"
					value={description}
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
									<img src={slide.darkImage} alt="logo" className="dark-logo" />
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
