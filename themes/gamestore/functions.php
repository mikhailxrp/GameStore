<?php

function gamestore_styles() {
	wp_enqueue_style(
		'gamestore-general',
		get_template_directory_uri() . '/assets/css/gamestore-general.css',
		[],
		wp_get_theme()->get( 'Version' )
	);

	wp_enqueue_script('gamestore-main', get_template_directory_uri() . '/assets/js/gamestore-main.js', [], wp_get_theme()->get( 'Version' ), true);

	// swiper
	wp_enqueue_style(
		'swiper-bundle',
		get_template_directory_uri() . '/assets/css/swiper-bundle.min.css',
		[],
		wp_get_theme()->get( 'Version' )
	);

	wp_enqueue_script('swiper-bundle', get_template_directory_uri() . '/assets/js/swiper-bundle.min.js', [], wp_get_theme()->get( 'Version' ), true);
}
add_action( 'wp_enqueue_scripts', 'gamestore_styles' );



function gamestore_google_font() {
	$font_url = '';
	$font = 'Urbanist'; 
	$font_extra = 'ital,wght@0,400;0,700;1,400;1,700'; 


	if ('off' !== _x('on', 'Google font: on or off', 'gamestore')) {
			$query_args = array(
					'family' => urldecode($font . ':' . $font_extra), 
					'subset' => urldecode('latin,latin-ext'), 
					'display' => urldecode('swap'), 
			);
			$font_url = add_query_arg($query_args, '//fonts.googleapis.com/css2');
	}

	return $font_url;
}

function gamestore_google_fonts_script(){
	wp_enqueue_style( 'gamestore-google-fonts', gamestore_google_font(), array(), '1.0.0' );
}

add_action( 'wp_enqueue_scripts', 'gamestore_google_fonts_script' );

// отключение переводов
add_filter('load_textdomain_mofile', function($mofile, $domain) {
	if ($domain === 'woocommerce') return false;
	return $mofile;
}, 10, 2);

// Отключение расширений
add_filter( 'woocommerce_disable_marketplace_suggestions', '__return_true' ); // Убирает рекламу расширений
add_filter( 'woocommerce_admin_features', '__return_empty_array' ); // Полностью отключает аналитику

// REST-API отключение
add_filter( 'woocommerce_rest_api_enabled', '__return_false' );