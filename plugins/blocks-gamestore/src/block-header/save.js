import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { memberLink, cartLink } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="inner-header">
				<InnerBlocks.Content />
				<div className="right-section">
					<div className="header-search right-section-btn">
						<svg
							width="36.000000"
							height="36.000000"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<clipPath id="clip7_5200">
									<rect
										id="2199092_search_find_glass_magnifier_zoom_icon 1"
										rx="0.000000"
										width="23.000000"
										height="23.000000"
										transform="translate(6.500000 6.500000)"
										fill="white"
										fill-opacity="0"
									/>
								</clipPath>
							</defs>
							<rect
								id="search-normal"
								rx="0.000000"
								width="35.000000"
								height="35.000000"
								transform="translate(0.500000 0.500000)"
								fill="#FFFFFF"
								fill-opacity="0"
							/>
							<rect
								id="2199092_search_find_glass_magnifier_zoom_icon 1"
								rx="0.000000"
								width="23.000000"
								height="23.000000"
								transform="translate(6.500000 6.500000)"
								fill="#FFFFFF"
								fill-opacity="0"
							/>
							<g clip-path="url(#clip7_5200)">
								<path
									id="Vector"
									d="M28.29 27.66L23.6 22.95C26.97 19.2 26.7 13.43 22.95 10.04C19.2 6.66 13.43 6.95 10.04 10.71C6.66 14.46 6.95 20.22 10.71 23.6C14.18 26.76 19.5 26.76 22.98 23.6L27.68 28.31L28.29 27.66ZM16.83 25.04C12.29 25.04 8.6 21.35 8.6 16.83C8.6 12.27 12.29 8.6 16.83 8.6C21.35 8.6 25.04 12.29 25.04 16.83C25.04 21.35 21.35 25.04 16.83 25.04Z"
									fill="var(--action-main-svg)"
									fill-opacity="0.640000"
									fill-rule="nonzero"
								/>
								<path
									id="Vector"
									d="M16.83 9.83L16.83 10.73C20.18 10.73 22.91 13.46 22.91 16.83L23.82 16.83C23.82 12.96 20.7 9.83 16.83 9.83Z"
									fill="var(--action-main-svg-svg)"
									fill-opacity="0.640000"
									fill-rule="nonzero"
								/>
							</g>
						</svg>
					</div>
					<div className="header-mode-switcher right-section-btn">
						<svg
							width="36.000000"
							height="36.000000"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs />
							<rect
								id="IconButton / switch theme"
								rx="17.500000"
								width="35.000000"
								height="35.000000"
								transform="translate(0.500000 0.500000)"
								fill="#FFFFFF"
								fill-opacity="0"
							/>
							<path
								id="Vector"
								d="M21 24L21 12"
								stroke="var(--action-main-svg)"
								stroke-opacity="0.640000"
								stroke-width="1.000000"
								stroke-linejoin="round"
								stroke-linecap="round"
							/>
							<path
								id="Vector"
								d="M9 18L12 18"
								stroke="var(--action-main-svg)"
								stroke-opacity="0.640000"
								stroke-width="1.000000"
								stroke-linejoin="round"
								stroke-linecap="round"
							/>
							<path
								id="Vector"
								d="M12.5 9.51L14.63 11.64"
								stroke="var(--action-main-svg)"
								stroke-opacity="0.640000"
								stroke-width="1.000000"
								stroke-linejoin="round"
								stroke-linecap="round"
							/>
							<path
								id="Vector"
								d="M21 6L21 9"
								stroke="var(--action-main-svg)"
								stroke-opacity="0.640000"
								stroke-width="1.000000"
								stroke-linejoin="round"
								stroke-linecap="round"
							/>
							<path
								id="Vector"
								d="M21 30L21 27"
								stroke="var(--action-main-svg)"
								stroke-opacity="0.640000"
								stroke-width="1.000000"
								stroke-linejoin="round"
								stroke-linecap="round"
							/>
							<path
								id="Vector"
								d="M12.5 26.48L14.63 24.35"
								stroke="var(--action-main-svg)"
								stroke-opacity="0.640000"
								stroke-width="1.000000"
								stroke-linejoin="round"
								stroke-linecap="round"
							/>
							<path
								id="Vector"
								d="M21 24C17.68 24 15 21.31 15 18C15 14.68 17.68 12 21 12C24.31 12 27 14.68 27 18C27 21.31 24.31 24 21 24Z"
								stroke="var(--action-main-svg)"
								stroke-opacity="0.640000"
								stroke-width="1.000000"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					{cartLink && (
						<div className="header-cart-link right-section-btn">
							<a href={cartLink}>
								<svg
									width="36.000000"
									height="36.000000"
									viewBox="0 0 36 36"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										rx="17.500000"
										width="35.000000"
										height="35.000000"
										transform="translate(0.500000 0.500000)"
										fill="#FFFFFF"
										fill-opacity="0"
									/>
									<path
										d="M7.71 14.57L9.42 26.57L26.57 26.57L28.28 14.57"
										stroke="var(--action-main-svg)"
										stroke-opacity="0.640000"
										stroke-width="1.000000"
										stroke-linejoin="round"
										stroke-linecap="round"
									/>
									<path
										d="M12.85 16.28L14.57 9.42"
										stroke="var(--action-main-svg)"
										stroke-opacity="0.640000"
										stroke-width="1.000000"
										stroke-linejoin="round"
										stroke-linecap="round"
									/>
									<path
										d="M23.14 16.28L21.42 9.42"
										stroke="var(--action-main-svg)"
										stroke-opacity="0.640000"
										stroke-width="1.000000"
										stroke-linejoin="round"
										stroke-linecap="round"
									/>
									<path
										d="M6 14.57L30 14.57"
										stroke="var(--action-main-svg)"
										stroke-opacity="0.640000"
										stroke-width="1.000000"
										stroke-linejoin="round"
										stroke-linecap="round"
									/>
								</svg>
							</a>
						</div>
					)}

					{memberLink && (
						<div className="header-member-link">
							<a href={memberLink}>Member Area</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
