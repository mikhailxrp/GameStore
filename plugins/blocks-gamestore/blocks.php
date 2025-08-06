<?php

function view_block_games_line($attributes) {

  if ( ! function_exists( 'wc_get_products' ) ) {
		return '<p>WooCommerce не активен</p>';
	}

	$args = array(
		'limit' => $attributes['count'],
		'orderby' => 'date',
		'order' => 'DESC',
		'status' => 'publish',
	);

	$products = wc_get_products( $args );

	if ( empty( $products ) ) {
		return '<p>Товары не найдены.</p>';
	}

	ob_start();

  echo '<div ' . get_block_wrapper_attributes( ) . ' >';

	echo '<div class="game-line-container"> <div class="swiper-wrapper">';

	foreach ( $products as $product ) {
		$image = $product->get_image( 'full' ); // Вывод img тега
		echo '<div class="game-item swiper-slide"> <a href="' . $product->get_permalink() . '">' . $image . ' </a> </div>';
	}

	echo '</div> </div>';

  echo '</div>';

	return ob_get_clean();
}