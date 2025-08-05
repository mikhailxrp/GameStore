<?php
// This file is generated. Do not modify it manually.
return array(
	'block-contact' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gamestore/block-contact',
		'version' => '0.1.0',
		'title' => 'Block Contact',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-gamestore',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-games-line' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gamestore/block-games-line',
		'version' => '0.1.0',
		'title' => 'Block Games Line',
		'category' => 'gamestore',
		'icon' => 'columns',
		'description' => 'Dynamic Animated Line with Games.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-gamestore',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-header' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gamestore/block-header',
		'version' => '0.1.0',
		'title' => 'Header',
		'category' => 'gamestore',
		'icon' => 'layout',
		'description' => 'Site Header Block.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'memberLink' => array(
				'type' => 'string'
			),
			'cartLink' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'blocks-gamestore',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gamestore/block-hero',
		'version' => '0.1.0',
		'title' => 'Hero Block',
		'category' => 'gamestore',
		'icon' => 'category',
		'description' => 'Main block on the home page.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.hero-title'
			),
			'description' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.hero-description'
			),
			'link' => array(
				'type' => 'string',
				'source' => 'attribute',
				'attribute' => 'href',
				'selector' => 'a'
			),
			'linkAnchor' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'a'
			),
			'mediaUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'isVideo' => array(
				'type' => 'boolean',
				'default' => true
			),
			'slides' => array(
				'type' => 'array',
				'selector' => '.hero-slides',
				'default' => array(
					
				)
			)
		),
		'textdomain' => 'blocks-gamestore',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
