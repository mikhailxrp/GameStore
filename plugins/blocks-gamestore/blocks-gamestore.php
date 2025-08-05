<?php
/**
 * Plugin Name:       Blocks Gamestore
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks-gamestore
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
};

add_filter('block_categories_all', function($categories){
	return array_merge($categories, [
		[
			'slug' => 'gamestore',
			'title' => 'Gamestore'
		]
		]);
});

function create_block_blocks_gamestore_block_init() {
	register_block_type( __DIR__ . '/build/block-header' );
}
add_action( 'init', 'create_block_blocks_gamestore_block_init' );
