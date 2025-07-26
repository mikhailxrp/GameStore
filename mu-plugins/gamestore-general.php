<?php
/**
 * Plugin Name: Gamestore General
 * Plugin URI: https://md-art.ru
 * Description: Core Code for Gamestore.
 * Version: 1.0
 * Author: W-D-M
 * Author URI: https://md-art.ru
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

//  Отключаю виджеты на главной странице админ панели сайта
// Так можно отключать и виджеты от сторонних плагинов только нужно сначала узнать их id в исходном коде плагина
 function gamestore_remove_dashborad_widgets() {
  global $wp_meta_boxes;

  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
  unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_drafts']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
  unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
  unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
  unset($wp_meta_boxes['dashboard']['normal']['high']['rank_math_dashboard_widget']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_site_health']);
  
 }

//  хук к которому цепляемся для отключения виджетов
 add_action( 'wp_dashboard_setup', 'gamestore_remove_dashborad_widgets');