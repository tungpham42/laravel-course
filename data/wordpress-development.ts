import { Course } from "@/types";

export const wordpressDevelopment: Course = {
  id: "wordpress-development",
  slug: "wordpress",
  title: "WordPress Development",
  description: "Phát triển theme và plugin WordPress chuyên nghiệp",
  image: "/images/wordpress-course.jpg",
  duration: "8 tuần",
  level: "beginner",
  lessons: [
    {
      id: "1",
      title: "Giới thiệu WordPress và Setup",
      slug: "gioi-thieu-wordpress",
      duration: "45 phút",
      content: `# Giới thiệu WordPress

## WordPress là gì?
WordPress là CMS (Content Management System) phổ biến nhất, chiếm hơn 40% website toàn cầu. Được viết bằng PHP và MySQL.

## Hai loại WordPress
- **WordPress.org (Self-hosted)**: Bạn tự host, có thể chỉnh sửa code, cài plugin/theme tùy ý
- **WordPress.com**: Hosting managed, giới hạn tính năng

## Cài đặt WordPress

### Yêu cầu
- PHP 7.4+
- MySQL 5.7+ hoặc MariaDB 10.3+
- Apache/Nginx

### Cài đặt nhanh với wp-env (Docker)
\`\`\`bash
npm install -g @wordpress/env
mkdir my-wp && cd my-wp
wp-env start
# Admin: http://localhost:8888/wp-admin (admin/password)
# Site:  http://localhost:8888
\`\`\`

### Local by Flywheel / LocalWP
\`\`\`bash
# Download từ localwp.com
# Tạo site mới với giao diện trực quan
\`\`\`

### Cài đặt thủ công
\`\`\`bash
# Download WordPress
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz
mv wordpress mysite
cd mysite

# Configure wp-config.php
cp wp-config-sample.php wp-config.php

# Sau đó mở http://localhost/mysite để chạy installer
\`\`\`

## WP-CLI

\`\`\`bash
# Install WP-CLI
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp

# Common commands
wp core download
wp core install --url=example.com --title="My Site" --admin_user=admin --admin_password=pass --admin_email=admin@example.com
wp plugin list
wp theme list
wp post list
wp user list
\`\`\`

## Cấu trúc thư mục

\`\`\`
wordpress/
├── wp-admin/          # Admin dashboard
├── wp-content/        # Custom code
│   ├── themes/        # Themes
│   ├── plugins/       # Plugins
│   ├── uploads/       # Uploaded files
│   └── mu-plugins/    # Must-use plugins
├── wp-includes/       # Core code
├── wp-config.php      # Configuration
└── .htaccess          # Apache rules
\`\`\`

## wp-config.php

\`\`\`php
<?php
// Database
define('DB_NAME', 'wordpress');
define('DB_USER', 'root');
define('DB_PASSWORD', 'password');
define('DB_HOST', 'localhost');
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');

// Authentication keys
define('AUTH_KEY',         'put-your-unique-phrase-here');
define('SECURE_AUTH_KEY',  'put-your-unique-phrase-here');
define('LOGGED_IN_KEY',    'put-your-unique-phrase-here');
define('NONCE_KEY',        'put-your-unique-phrase-here');
define('AUTH_SALT',        'put-your-unique-phrase-here');
define('SECURE_AUTH_SALT', 'put-your-unique-phrase-here');
define('LOGGED_IN_SALT',   'put-your-unique-phrase-here');
define('NONCE_SALT',       'put-your-unique-phrase-here');

$table_prefix = 'wp_';

// Debug
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);

// Memory
define('WP_MEMORY_LIMIT', '256M');

// Disable file edit from admin
define('DISALLOW_FILE_EDIT', true);

// Auto-updates
define('WP_AUTO_UPDATE_CORE', 'minor');

if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}
require_once ABSPATH . 'wp-settings.php';
\`\`\`

## Hooks cơ bản

### Actions
\`\`\`php
// Thêm code khi theme setup
add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
});

// Thêm vào footer
add_action('wp_footer', function () {
    echo '<p>Custom footer content</p>';
});
\`\`\`

### Filters
\`\`\`php
// Sửa title
add_filter('the_title', function ($title) {
    return strtoupper($title);
});

// Sửa content
add_filter('the_content', function ($content) {
    return $content . '<p>Thanks for reading!</p>';
});
\`\`\`

## Bài tập thực hành
Hãy cài đặt WordPress và tạo child theme đầu tiên!`,
      exercises: [
        {
          id: "1-1",
          title: "Cài đặt và cấu hình WordPress",
          description: "Setup WordPress development environment",
          instructions: `1. Cài đặt WordPress local
2. Tạo database và cấu hình wp-config.php
3. Tạo child theme với style.css và functions.php
4. Thêm một custom hook đơn giản`,
          type: "code",
          starterCode: `<?php
// wp-content/themes/my-theme/functions.php

// Viết code ở đây`,
          solution: `<?php
// wp-content/themes/my-theme/style.css
/*
Theme Name: My Custom Theme
Theme URI: https://example.com/my-theme
Author: Your Name
Author URI: https://example.com
Description: Custom WordPress theme
Version: 1.0.0
License: GPL v2 or later
Text Domain: my-theme
*/

// wp-content/themes/my-theme/functions.php
<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Theme setup
 */
function my_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('automatic-feed-links');
    add_theme_support('html5', [
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
    ]);
    add_theme_support('custom-logo', [
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ]);

    // Register navigation menus
    register_nav_menus([
        'primary' => __('Primary Menu', 'my-theme'),
        'footer'  => __('Footer Menu', 'my-theme'),
    ]);

    // Set content width
    $GLOBALS['content_width'] = 1200;
}
add_action('after_setup_theme', 'my_theme_setup');

/**
 * Enqueue assets
 */
function my_theme_assets() {
    $version = wp_get_theme()->get('Version');

    wp_enqueue_style(
        'my-theme-style',
        get_stylesheet_uri(),
        [],
        $version
    );

    wp_enqueue_script(
        'my-theme-script',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        $version,
        true
    );
}
add_action('wp_enqueue_scripts', 'my_theme_assets');

/**
 * Register widget areas
 */
function my_theme_widgets_init() {
    register_sidebar([
        'name'          => __('Sidebar', 'my-theme'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'my-theme'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ]);
}
add_action('widgets_init', 'my_theme_widgets_init');

/**
 * Custom hook example
 */
add_action('wp_footer', function () {
    if (defined('WP_DEBUG') && WP_DEBUG) {
        echo '<!-- My Theme v' . wp_get_theme()->get('Version') . ' -->';
    }
});

/**
 * Custom filter example
 */
add_filter('excerpt_length', function ($length) {
    return 25;
});

add_filter('excerpt_more', function ($more) {
    return '...';
});`,
        },
      ],
    },
    {
      id: "2",
      title: "Theme Development",
      slug: "theme-development",
      duration: "80 phút",
      prerequisites: ["1"],
      content: `# Theme Development

## Template Hierarchy

\`\`\`
Front Page:
  front-page.php → home.php → index.php

Single Post:
  single-post.php → single.php → singular.php → index.php

Page:
  page-{slug}.php → page-{id}.php → page.php → singular.php → index.php

Category:
  category-{slug}.php → category-{id}.php → category.php → archive.php → index.php

Tag, Author, Date, Custom Post Type
  Similar hierarchy to category
\`\`\`

## Cấu trúc theme cơ bản

\`\`\`
my-theme/
├── style.css              # Required
├── functions.php
├── index.php              # Required
├── header.php
├── footer.php
├── sidebar.php
├── single.php
├── page.php
├── archive.php
├── search.php
├── 404.php
├── screenshot.png
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── template-parts/
│   ├── content.php
│   ├── content-single.php
│   └── content-page.php
└── inc/
    ├── customizer.php
    ├── template-tags.php
    └── custom-functions.php
\`\`\`

## header.php

\`\`\`php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="site-branding">
            <?php if (has_custom_logo()): ?>
                <?php the_custom_logo(); ?>
            <?php else: ?>
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <?php bloginfo('name'); ?>
                </a>
            <?php endif; ?>
        </div>

        <nav class="site-nav">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'menu',
                'fallback_cb'    => false,
            ]);
            ?>
        </nav>
    </div>
</header>
\`\`\`

## footer.php

\`\`\`php
<footer class="site-footer">
    <div class="container">
        <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. 
           <?php esc_html_e('All rights reserved.', 'my-theme'); ?>
        </p>

        <?php
        wp_nav_menu([
            'theme_location' => 'footer',
            'container'      => false,
            'menu_class'     => 'footer-menu',
            'depth'          => 1,
        ]);
        ?>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
\`\`\`

## index.php

\`\`\`php
<?php get_header(); ?>

<main class="site-main container">
    <?php if (have_posts()): ?>
        <div class="posts-grid">
            <?php while (have_posts()): the_post(); ?>
                <?php get_template_part('template-parts/content', get_post_type()); ?>
            <?php endwhile; ?>
        </div>

        <?php
        the_posts_pagination([
            'mid_size'  => 2,
            'prev_text' => __('&laquo; Previous', 'my-theme'),
            'next_text' => __('Next &raquo;', 'my-theme'),
        ]);
        ?>
    <?php else: ?>
        <p><?php esc_html_e('No posts found.', 'my-theme'); ?></p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
\`\`\`

## template-parts/content.php

\`\`\`php
<article id="post-<?php the_ID(); ?>" <?php post_class('post-card'); ?>>
    <?php if (has_post_thumbnail()): ?>
        <a href="<?php the_permalink(); ?>" class="post-thumbnail">
            <?php the_post_thumbnail('medium_large'); ?>
        </a>
    <?php endif; ?>

    <div class="post-content">
        <header class="entry-header">
            <?php the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '">', '</a></h2>'); ?>

            <div class="entry-meta">
                <time datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                    <?php echo esc_html(get_the_date()); ?>
                </time>
                <span class="author">by <?php the_author_posts_link(); ?></span>
            </div>
        </header>

        <div class="entry-summary">
            <?php the_excerpt(); ?>
        </div>

        <a href="<?php the_permalink(); ?>" class="read-more">
            <?php esc_html_e('Read more', 'my-theme'); ?> &rarr;
        </a>
    </div>
</article>
\`\`\`

## single.php

\`\`\`php
<?php get_header(); ?>

<main class="site-main container">
    <?php while (have_posts()): the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('single-post'); ?>>
            <header class="entry-header">
                <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
                
                <div class="entry-meta">
                    <time datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                        <?php echo esc_html(get_the_date()); ?>
                    </time>
                    <span>by <?php the_author_posts_link(); ?></span>
                    
                    <?php if (has_category()): ?>
                        <span class="categories">
                            <?php the_category(', '); ?>
                        </span>
                    <?php endif; ?>
                </div>
            </header>

            <?php if (has_post_thumbnail()): ?>
                <div class="post-thumbnail">
                    <?php the_post_thumbnail('large'); ?>
                </div>
            <?php endif; ?>

            <div class="entry-content">
                <?php the_content(); ?>
                
                <?php
                wp_link_pages([
                    'before' => '<nav class="page-links">' . __('Pages:', 'my-theme'),
                    'after'  => '</nav>',
                ]);
                ?>
            </div>

            <footer class="entry-footer">
                <?php the_tags('<div class="tags">', ', ', '</div>'); ?>
            </footer>
        </article>

        <?php
        the_post_navigation([
            'prev_text' => '<span class="nav-label">Previous</span><span class="nav-title">%title</span>',
            'next_text' => '<span class="nav-label">Next</span><span class="nav-title">%title</span>',
        ]);

        if (comments_open() || get_comments_number()) {
            comments_template();
        }
        ?>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
\`\`\`

## Functions.php essentials

\`\`\`php
<?php

// Prevent direct access
if (!defined('ABSPATH')) exit;

// Theme constants
define('MY_THEME_VERSION', '1.0.0');
define('MY_THEME_DIR', get_template_directory());
define('MY_THEME_URI', get_template_directory_uri());

// Include files
require_once MY_THEME_DIR . '/inc/template-tags.php';
require_once MY_THEME_DIR . '/inc/customizer.php';

/**
 * Theme setup
 */
function my_theme_setup() {
    load_theme_textdomain('my-theme', MY_THEME_DIR . '/languages');

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', [
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ]);
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');
    add_theme_support('editor-styles');

    // Image sizes
    add_image_size('my-theme-featured', 1200, 600, true);
    add_image_size('my-theme-thumbnail', 600, 400, true);

    register_nav_menus([
        'primary' => __('Primary Menu', 'my-theme'),
        'footer'  => __('Footer Menu', 'my-theme'),
    ]);
}
add_action('after_setup_theme', 'my_theme_setup');

/**
 * Enqueue scripts and styles
 */
function my_theme_scripts() {
    wp_enqueue_style(
        'my-theme-style',
        get_stylesheet_uri(),
        [],
        MY_THEME_VERSION
    );

    wp_enqueue_style(
        'my-theme-main',
        MY_THEME_URI . '/assets/css/main.css',
        ['my-theme-style'],
        MY_THEME_VERSION
    );

    wp_enqueue_script(
        'my-theme-script',
        MY_THEME_URI . '/assets/js/main.js',
        [],
        MY_THEME_VERSION,
        true
    );

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'my_theme_scripts');

/**
 * Register widget areas
 */
function my_theme_widgets_init() {
    register_sidebar([
        'name'          => __('Sidebar', 'my-theme'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'my-theme'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ]);

    register_sidebar([
        'name'          => __('Footer Column 1', 'my-theme'),
        'id'            => 'footer-1',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ]);
}
add_action('widgets_init', 'my_theme_widgets_init');
\`\`\`

## Template tags

\`\`\`php
<?php // app/inc/template-tags.php ?>

/**
 * Display post meta
 */
function my_theme_post_meta() {
    printf(
        '<div class="entry-meta">
            <time datetime="%1$s">%2$s</time>
            <span class="author">%3$s</span>
        </div>',
        esc_attr(get_the_date('c')),
        esc_html(get_the_date()),
        sprintf(
            '<a href="%1$s">%2$s</a>',
            esc_url(get_author_posts_url(get_the_author_meta('ID'))),
            esc_html(get_the_author())
        )
    );
}

/**
 * Get the post thumbnail URL
 */
function my_theme_get_thumbnail_url($size = 'full') {
    if (!has_post_thumbnail()) {
        return get_theme_file_uri('/assets/images/placeholder.jpg');
    }
    return get_the_post_thumbnail_url(get_the_ID(), $size);
}

/**
 * Breadcrumbs
 */
function my_theme_breadcrumbs() {
    if (is_front_page()) return;

    echo '<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>';
    echo '<li><a href="' . esc_url(home_url('/')) . '">Home</a></li>';

    if (is_single()) {
        $categories = get_the_category();
        if (!empty($categories)) {
            echo '<li><a href="' . esc_url(get_category_link($categories[0]->term_id)) . '">'
                . esc_html($categories[0]->name) . '</a></li>';
        }
        echo '<li aria-current="page">' . esc_html(get_the_title()) . '</li>';
    } elseif (is_page()) {
        echo '<li aria-current="page">' . esc_html(get_the_title()) . '</li>';
    } elseif (is_category()) {
        echo '<li aria-current="page">' . esc_html(single_cat_title('', false)) . '</li>';
    }

    echo '</ol></nav>';
}
\`\`\`

## Custom Post Types và Taxonomies

\`\`\`php
/**
 * Register custom post type: Portfolio
 */
function my_theme_register_cpt() {
    register_post_type('portfolio', [
        'labels' => [
            'name'          => __('Portfolio', 'my-theme'),
            'singular_name' => __('Project', 'my-theme'),
            'add_new'       => __('Add New', 'my-theme'),
            'add_new_item'  => __('Add New Project', 'my-theme'),
            'edit_item'     => __('Edit Project', 'my-theme'),
            'view_item'     => __('View Project', 'my-theme'),
            'search_items'  => __('Search Projects', 'my-theme'),
            'not_found'     => __('No projects found', 'my-theme'),
        ],
        'public'        => true,
        'has_archive'   => true,
        'menu_icon'     => 'dashicons-portfolio',
        'menu_position' => 20,
        'supports'      => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'rewrite'       => ['slug' => 'projects'],
        'show_in_rest'  => true, // Gutenberg support
    ]);

    register_taxonomy('portfolio_category', 'portfolio', [
        'labels' => [
            'name'          => __('Project Categories', 'my-theme'),
            'singular_name' => __('Project Category', 'my-theme'),
        ],
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite'      => ['slug' => 'project-category'],
    ]);

    register_taxonomy('portfolio_tag', 'portfolio', [
        'labels' => [
            'name'          => __('Project Tags', 'my-theme'),
            'singular_name' => __('Project Tag', 'my-theme'),
        ],
        'hierarchical' => false,
        'show_in_rest' => true,
    ]);
}
add_action('init', 'my_theme_register_cpt');
\`\`\`

## Customizer

\`\`\`php
<?php // app/inc/customizer.php ?>

function my_theme_customize_register($wp_customize) {
    // Add section
    $wp_customize->add_section('my_theme_options', [
        'title'    => __('Theme Options', 'my-theme'),
        'priority' => 30,
    ]);

    // Footer text setting
    $wp_customize->add_setting('footer_text', [
        'default'           => '© ' . date('Y') . ' ' . get_bloginfo('name'),
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'refresh',
    ]);

    $wp_customize->add_control('footer_text', [
        'label'   => __('Footer Text', 'my-theme'),
        'section' => 'my_theme_options',
        'type'    => 'text',
    ]);

    // Primary color
    $wp_customize->add_setting('primary_color', [
        'default'           => '#0073aa',
        'sanitize_callback' => 'sanitize_hex_color',
    ]);

    $wp_customize->add_control(
        new WP_Customize_Color_Control($wp_customize, 'primary_color', [
            'label'   => __('Primary Color', 'my-theme'),
            'section' => 'colors',
        ])
    );
}
add_action('customize_register', 'my_theme_customize_register');

/**
 * Output customizer CSS
 */
function my_theme_customizer_css() {
    $primary = get_theme_mod('primary_color', '#0073aa');
    ?>
    <style>
        :root {
            --primary-color: <?php echo esc_attr($primary); ?>;
        }
        a, button, .button {
            color: var(--primary-color);
        }
    </style>
    <?php
}
add_action('wp_head', 'my_theme_customizer_css');
\`\`\`

## Bài tập thực hành
Hãy tạo complete theme với custom post type!`,
      exercises: [
        {
          id: "2-1",
          title: "Portfolio Theme",
          description: "Tạo theme với custom post type",
          instructions: `Tạo:
1. Custom post type "Portfolio"
2. Templates cho single/archive portfolio
3. Template tags
4. Customizer options
5. Widget areas`,
          type: "code",
          starterCode: `<?php
// functions.php
// Viết code ở đây`,
          solution: `<?php
// ============= functions.php =============
if (!defined('ABSPATH')) exit;

function portfolio_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'gallery', 'caption']);
    add_theme_support('custom-logo', [
        'height' => 100,
        'width'  => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ]);

    register_nav_menus([
        'primary' => __('Primary Menu', 'portfolio-theme'),
        'footer'  => __('Footer Menu', 'portfolio-theme'),
    ]);

    add_image_size('portfolio-hero', 1600, 800, true);
    add_image_size('portfolio-card', 600, 400, true);
}
add_action('after_setup_theme', 'portfolio_theme_setup');

function portfolio_theme_assets() {
    wp_enqueue_style('portfolio-style', get_stylesheet_uri(), [], '1.0.0');
}
add_action('wp_enqueue_scripts', 'portfolio_theme_assets');

/**
 * Register Portfolio Custom Post Type
 */
function portfolio_register_cpt() {
    register_post_type('portfolio', [
        'labels' => [
            'name'          => __('Portfolios', 'portfolio-theme'),
            'singular_name' => __('Project', 'portfolio-theme'),
            'add_new_item'  => __('Add New Project', 'portfolio-theme'),
            'edit_item'     => __('Edit Project', 'portfolio-theme'),
            'all_items'     => __('All Projects', 'portfolio-theme'),
            'not_found'     => __('No projects found', 'portfolio-theme'),
        ],
        'public'        => true,
        'has_archive'   => true,
        'menu_icon'     => 'dashicons-portfolio',
        'menu_position' => 5,
        'supports'      => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'rewrite'       => ['slug' => 'projects'],
        'show_in_rest'  => true,
    ]);

    register_taxonomy('portfolio_type', 'portfolio', [
        'labels' => [
            'name'          => __('Project Types', 'portfolio-theme'),
            'singular_name' => __('Project Type', 'portfolio-theme'),
        ],
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite'      => ['slug' => 'project-type'],
    ]);
}
add_action('init', 'portfolio_register_cpt');

/**
 * Add meta boxes for portfolio details
 */
function portfolio_add_meta_boxes() {
    add_meta_box(
        'portfolio_details',
        __('Project Details', 'portfolio-theme'),
        'portfolio_meta_box_render',
        'portfolio',
        'side',
        'default'
    );
}
add_action('add_meta_boxes', 'portfolio_add_meta_boxes');

function portfolio_meta_box_render($post) {
    wp_nonce_field('portfolio_meta', 'portfolio_meta_nonce');

    $client_url = get_post_meta($post->ID, '_portfolio_client_url', true);
    $project_date = get_post_meta($post->ID, '_portfolio_date', true);
    ?>
    <p>
        <label for="portfolio_client_url">
            <?php esc_html_e('Client URL:', 'portfolio-theme'); ?>
        </label>
        <input type="url"
               id="portfolio_client_url"
               name="portfolio_client_url"
               value="<?php echo esc_attr($client_url); ?>"
               style="width: 100%;">
    </p>
    <p>
        <label for="portfolio_date">
            <?php esc_html_e('Project Date:', 'portfolio-theme'); ?>
        </label>
        <input type="date"
               id="portfolio_date"
               name="portfolio_date"
               value="<?php echo esc_attr($project_date); ?>"
               style="width: 100%;">
    </p>
    <?php
}

function portfolio_save_meta($post_id) {
    if (!isset($_POST['portfolio_meta_nonce']) ||
        !wp_verify_nonce($_POST['portfolio_meta_nonce'], 'portfolio_meta')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    if (isset($_POST['portfolio_client_url'])) {
        update_post_meta(
            $post_id,
            '_portfolio_client_url',
            esc_url_raw($_POST['portfolio_client_url'])
        );
    }

    if (isset($_POST['portfolio_date'])) {
        update_post_meta(
            $post_id,
            '_portfolio_date',
            sanitize_text_field($_POST['portfolio_date'])
        );
    }
}
add_action('save_post_portfolio', 'portfolio_save_meta');

/**
 * Template tags
 */
function portfolio_get_client_url($post_id = null) {
    return get_post_meta($post_id ?: get_the_ID(), '_portfolio_client_url', true);
}

function portfolio_get_date($post_id = null) {
    return get_post_meta($post_id ?: get_the_ID(), '_portfolio_date', true);
}

// ============= archive-portfolio.php =============
<?php get_header(); ?>

<main class="portfolio-archive container">
    <header class="page-header">
        <h1><?php post_type_archive_title(); ?></h1>
        <?php the_archive_description('<div class="archive-description">', '</div>'); ?>
    </header>

    <?php if (have_posts()): ?>
        <div class="portfolio-grid">
            <?php while (have_posts()): the_post(); ?>
                <article <?php post_class('portfolio-card'); ?>>
                    <a href="<?php the_permalink(); ?>">
                        <?php if (has_post_thumbnail()): ?>
                            <?php the_post_thumbnail('portfolio-card'); ?>
                        <?php endif; ?>
                        <h2 class="portfolio-title"><?php the_title(); ?></h2>
                        <?php the_excerpt(); ?>
                    </a>
                </article>
            <?php endwhile; ?>
        </div>

        <?php the_posts_pagination(); ?>
    <?php else: ?>
        <p><?php esc_html_e('No projects yet.', 'portfolio-theme'); ?></p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>

// ============= single-portfolio.php =============
<?php get_header(); ?>

<main class="portfolio-single container">
    <?php while (have_posts()): the_post(); ?>
        <article <?php post_class(); ?>>
            <header class="entry-header">
                <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
            </header>

            <?php if (has_post_thumbnail()): ?>
                <div class="portfolio-hero">
                    <?php the_post_thumbnail('portfolio-hero'); ?>
                </div>
            <?php endif; ?>

            <div class="portfolio-details">
                <?php $url = portfolio_get_client_url(); ?>
                <?php if ($url): ?>
                    <p><strong>Client:</strong>
                        <a href="<?php echo esc_url($url); ?>" target="_blank" rel="noopener">
                            <?php echo esc_html($url); ?>
                        </a>
                    </p>
                <?php endif; ?>

                <?php $date = portfolio_get_date(); ?>
                <?php if ($date): ?>
                    <p><strong>Date:</strong>
                        <?php echo esc_html(date_i18n(get_option('date_format'), strtotime($date))); ?>
                    </p>
                <?php endif; ?>
            </div>

            <div class="entry-content">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>

// ============= Customizer =============
add_action('customize_register', function ($wp_customize) {
    $wp_customize->add_section('portfolio_options', [
        'title'    => __('Portfolio Options', 'portfolio-theme'),
        'priority' => 30,
    ]);

    $wp_customize->add_setting('portfolio_items_per_page', [
        'default'           => 9,
        'sanitize_callback' => 'absint',
    ]);

    $wp_customize->add_control('portfolio_items_per_page', [
        'label'   => __('Items per page', 'portfolio-theme'),
        'section' => 'portfolio_options',
        'type'    => 'number',
        'input_attrs' => ['min' => 3, 'max' => 30],
    ]);
});`,
        },
      ],
    },
    {
      id: "3",
      title: "Plugin Development",
      slug: "plugin-development",
      duration: "90 phút",
      prerequisites: ["2"],
      content: `# Plugin Development

## Cấu trúc plugin

\`\`\`
my-plugin/
├── my-plugin.php          # Main file với plugin header
├── readme.txt
├── uninstall.php
├── includes/
│   ├── class-my-plugin.php
│   ├── class-admin.php
│   └── class-shortcodes.php
├── admin/
│   ├── css/
│   ├── js/
│   └── views/
├── public/
│   ├── css/
│   ├── js/
│   └── views/
└── languages/
\`\`\`

## Plugin header

\`\`\`php
<?php
/**
 * Plugin Name:       My Plugin
 * Plugin URI:        https://example.com/my-plugin
 * Description:       A custom WordPress plugin
 * Version:           1.0.0
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Author:            Your Name
 * Author URI:        https://example.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-plugin
 * Domain Path:       /languages
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Constants
define('MY_PLUGIN_VERSION', '1.0.0');
define('MY_PLUGIN_FILE', __FILE__);
define('MY_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('MY_PLUGIN_URL', plugin_dir_url(__FILE__));
define('MY_PLUGIN_BASENAME', plugin_basename(__FILE__));

// Autoloader hoặc includes
require_once MY_PLUGIN_DIR . 'includes/class-my-plugin.php';

// Activation/Deactivation hooks
register_activation_hook(__FILE__, ['My_Plugin', 'activate']);
register_deactivation_hook(__FILE__, ['My_Plugin', 'deactivate']);

// Initialize
function my_plugin_init() {
    My_Plugin::instance();
}
add_action('plugins_loaded', 'my_plugin_init');
\`\`\`

## Main Plugin Class

\`\`\`php
<?php
// includes/class-my-plugin.php

class My_Plugin {
    private static $instance = null;

    public static function instance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        $this->define_hooks();
        $this->load_dependencies();
    }

    private function define_hooks() {
        add_action('init', [$this, 'register_post_types']);
        add_action('admin_menu', [$this, 'add_admin_menu']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_assets']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_public_assets']);
        add_shortcode('my_plugin', [$this, 'render_shortcode']);
        add_action('wp_ajax_my_plugin_action', [$this, 'handle_ajax']);
    }

    private function load_dependencies() {
        require_once MY_PLUGIN_DIR . 'includes/class-admin.php';
        require_once MY_PLUGIN_DIR . 'includes/class-shortcodes.php';
    }

    public function enqueue_admin_assets($hook) {
        if (strpos($hook, 'my-plugin') === false) {
            return;
        }

        wp_enqueue_style(
            'my-plugin-admin',
            MY_PLUGIN_URL . 'admin/css/admin.css',
            [],
            MY_PLUGIN_VERSION
        );

        wp_enqueue_script(
            'my-plugin-admin',
            MY_PLUGIN_URL . 'admin/js/admin.js',
            ['jquery'],
            MY_PLUGIN_VERSION,
            true
        );

        wp_localize_script('my-plugin-admin', 'myPlugin', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce'   => wp_create_nonce('my_plugin_nonce'),
        ]);
    }

    public function enqueue_public_assets() {
        wp_enqueue_style(
            'my-plugin-public',
            MY_PLUGIN_URL . 'public/css/public.css',
            [],
            MY_PLUGIN_VERSION
        );

        wp_enqueue_script(
            'my-plugin-public',
            MY_PLUGIN_URL . 'public/js/public.js',
            [],
            MY_PLUGIN_VERSION,
            true
        );
    }

    public function add_admin_menu() {
        add_menu_page(
            __('My Plugin', 'my-plugin'),
            __('My Plugin', 'my-plugin'),
            'manage_options',
            'my-plugin',
            [$this, 'render_admin_page'],
            'dashicons-admin-generic',
            30
        );

        add_submenu_page(
            'my-plugin',
            __('Settings', 'my-plugin'),
            __('Settings', 'my-plugin'),
            'manage_options',
            'my-plugin-settings',
            [$this, 'render_settings_page']
        );
    }

    public function render_admin_page() {
        if (!current_user_can('manage_options')) {
            wp_die(__('Access denied', 'my-plugin'));
        }
        include MY_PLUGIN_DIR . 'admin/views/dashboard.php';
    }

    public function render_settings_page() {
        include MY_PLUGIN_DIR . 'admin/views/settings.php';
    }

    public function render_shortcode($atts) {
        $atts = shortcode_atts([
            'title' => 'Default Title',
            'limit' => 5,
        ], $atts, 'my_plugin');

        ob_start();
        include MY_PLUGIN_DIR . 'public/views/shortcode.php';
        return ob_get_clean();
    }

    public function handle_ajax() {
        check_ajax_referer('my_plugin_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_send_json_error(['message' => 'Unauthorized']);
        }

        $action = sanitize_text_field($_POST['action_type'] ?? '');

        switch ($action) {
            case 'save_settings':
                update_option('my_plugin_option', sanitize_text_field($_POST['value']));
                wp_send_json_success(['message' => 'Saved']);
                break;
            default:
                wp_send_json_error(['message' => 'Invalid action']);
        }
    }

    public static function activate() {
        // Create database table
        global $wpdb;
        $table_name = $wpdb->prefix . 'my_plugin_data';
        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table_name (
            id bigint(20) NOT NULL AUTO_INCREMENT,
            user_id bigint(20) NOT NULL,
            data longtext NOT NULL,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY user_id (user_id)
        ) $charset_collate;";

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql);

        // Set default options
        add_option('my_plugin_version', MY_PLUGIN_VERSION);

        // Flush rewrite rules
        flush_rewrite_rules();
    }

    public static function deactivate() {
        flush_rewrite_rules();
        // Không xóa data khi deactivate
    }
}
\`\`\`

## Admin Page

\`\`\`php
<!-- admin/views/dashboard.php -->
<div class="wrap my-plugin-admin">
    <h1><?php echo esc_html(get_admin_page_title()); ?></h1>

    <div class="my-plugin-stats">
        <div class="stat-card">
            <h3><?php esc_html_e('Total Items', 'my-plugin'); ?></h3>
            <p class="stat-value"><?php echo esc_html($total_items ?? 0); ?></p>
        </div>
    </div>

    <form id="my-plugin-form" method="post">
        <?php wp_nonce_field('my_plugin_save', 'my_plugin_nonce'); ?>

        <table class="form-table">
            <tr>
                <th scope="row">
                    <label for="my_plugin_setting"><?php esc_html_e('Setting', 'my-plugin'); ?></label>
                </th>
                <td>
                    <input type="text"
                           id="my_plugin_setting"
                           name="my_plugin_setting"
                           value="<?php echo esc_attr(get_option('my_plugin_setting', '')); ?>"
                           class="regular-text">
                </td>
            </tr>
        </table>

        <?php submit_button(); ?>
    </form>

    <button id="my-plugin-ajax-btn" class="button button-primary">
        <?php esc_html_e('Test AJAX', 'my-plugin'); ?>
    </button>
</div>
\`\`\`

## Admin JavaScript

\`\`\`javascript
// admin/js/admin.js
jQuery(function ($) {
    $('#my-plugin-ajax-btn').on('click', function () {
        const $btn = $(this);

        $btn.prop('disabled', true).text('Loading...');

        $.ajax({
            url: myPlugin.ajaxUrl,
            type: 'POST',
            data: {
                action: 'my_plugin_action',
                nonce: myPlugin.nonce,
                action_type: 'save_settings',
                value: 'test value'
            },
            success: function (response) {
                if (response.success) {
                    alert(response.data.message);
                } else {
                    alert('Error: ' + response.data.message);
                }
            },
            error: function () {
                alert('AJAX error');
            },
            complete: function () {
                $btn.prop('disabled', false).text('Test AJAX');
            }
        });
    });
});
\`\`\`

## Settings API

\`\`\`php
class My_Plugin_Admin {
    public function __construct() {
        add_action('admin_init', [$this, 'register_settings']);
    }

    public function register_settings() {
        register_setting('my_plugin_settings', 'my_plugin_options', [
            'type'              => 'array',
            'sanitize_callback' => [$this, 'sanitize_options'],
            'default'           => [
                'enabled' => true,
                'text'    => '',
                'color'   => '#0073aa',
            ],
        ]);

        add_settings_section(
            'my_plugin_general',
            __('General Settings', 'my-plugin'),
            [$this, 'section_callback'],
            'my_plugin_settings'
        );

        add_settings_field(
            'enabled',
            __('Enable feature', 'my-plugin'),
            [$this, 'render_checkbox'],
            'my_plugin_settings',
            'my_plugin_general',
            ['label_for' => 'enabled', 'field' => 'enabled']
        );

        add_settings_field(
            'text',
            __('Text', 'my-plugin'),
            [$this, 'render_text_input'],
            'my_plugin_settings',
            'my_plugin_general',
            ['label_for' => 'text', 'field' => 'text']
        );
    }

    public function sanitize_options($input) {
        return [
            'enabled' => !empty($input['enabled']),
            'text'    => sanitize_text_field($input['text'] ?? ''),
            'color'   => sanitize_hex_color($input['color'] ?? '#0073aa'),
        ];
    }

    public function section_callback() {
        echo '<p>' . esc_html__('Configure the plugin behavior.', 'my-plugin') . '</p>';
    }

    public function render_checkbox($args) {
        $options = get_option('my_plugin_options', []);
        $field = $args['field'];
        ?>
        <input type="checkbox"
               id="<?php echo esc_attr($field); ?>"
               name="my_plugin_options[<?php echo esc_attr($field); ?>]"
               value="1"
               <?php checked(!empty($options[$field])); ?>>
        <?php
    }

    public function render_text_input($args) {
        $options = get_option('my_plugin_options', []);
        $field = $args['field'];
        ?>
        <input type="text"
               id="<?php echo esc_attr($field); ?>"
               name="my_plugin_options[<?php echo esc_attr($field); ?>]"
               value="<?php echo esc_attr($options[$field] ?? ''); ?>"
               class="regular-text">
        <?php
    }
}
\`\`\`

## Custom Database Table

\`\`\`php
class My_Plugin_DB {
    public static function get_table() {
        global $wpdb;
        return $wpdb->prefix . 'my_plugin_data';
    }

    public static function create(array $data): int|false {
        global $wpdb;
        $result = $wpdb->insert(
            self::get_table(),
            [
                'user_id'    => $data['user_id'],
                'data'       => maybe_serialize($data['data']),
                'created_at' => current_time('mysql'),
            ],
            ['%d', '%s', '%s']
        );
        return $result ? $wpdb->insert_id : false;
    }

    public static function get(int $id): ?object {
        global $wpdb;
        $table = self::get_table();
        return $wpdb->get_row(
            $wpdb->prepare("SELECT * FROM $table WHERE id = %d", $id)
        );
    }

    public static function get_by_user(int $user_id): array {
        global $wpdb;
        $table = self::get_table();
        return $wpdb->get_results(
            $wpdb->prepare(
                "SELECT * FROM $table WHERE user_id = %d ORDER BY created_at DESC",
                $user_id
            )
        );
    }

    public static function delete(int $id): bool {
        global $wpdb;
        return (bool) $wpdb->delete(
            self::get_table(),
            ['id' => $id],
            ['%d']
        );
    }
}
\`\`\`

## Shortcode

\`\`\`php
class My_Plugin_Shortcodes {
    public function __construct() {
        add_shortcode('my_plugin', [$this, 'render']);
        add_shortcode('my_plugin_form', [$this, 'render_form']);
    }

    public function render($atts): string {
        $atts = shortcode_atts([
            'title' => __('My Plugin', 'my-plugin'),
            'limit' => 5,
        ], $atts, 'my_plugin');

        $items = My_Plugin_DB::get_by_user(get_current_user_id());
        $items = array_slice($items, 0, (int) $atts['limit']);

        ob_start();
        ?>
        <div class="my-plugin-shortcode">
            <h3><?php echo esc_html($atts['title']); ?></h3>
            <?php if ($items): ?>
                <ul>
                    <?php foreach ($items as $item): ?>
                        <li><?php echo esc_html($item->id); ?> - 
                            <?php echo esc_html($item->created_at); ?></li>
                    <?php endforeach; ?>
                </ul>
            <?php else: ?>
                <p><?php esc_html_e('No items found.', 'my-plugin'); ?></p>
            <?php endif; ?>
        </div>
        <?php
        return ob_get_clean();
    }

    public function render_form(): string {
        ob_start();
        ?>
        <form class="my-plugin-form" method="post">
            <?php wp_nonce_field('my_plugin_submit', 'my_plugin_nonce'); ?>
            <input type="text" name="my_data" required>
            <button type="submit"><?php esc_html_e('Submit', 'my-plugin'); ?></button>
        </form>
        <?php
        return ob_get_clean();
    }
}
\`\`\`

## REST API Endpoints

\`\`\`php
add_action('rest_api_init', function () {
    register_rest_route('my-plugin/v1', '/items', [
        [
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => 'my_plugin_get_items',
            'permission_callback' => function () {
                return is_user_logged_in();
            },
        ],
        [
            'methods'             => WP_REST_Server::CREATABLE,
            'callback'            => 'my_plugin_create_item',
            'permission_callback' => function () {
                return current_user_can('edit_posts');
            },
            'args' => [
                'title' => [
                    'required'          => true,
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                    'validate_callback' => function ($value) {
                        return strlen($value) >= 2;
                    },
                ],
            ],
        ],
    ]);
});

function my_plugin_get_items(WP_REST_Request $request): WP_REST_Response {
    $items = My_Plugin_DB::get_by_user(get_current_user_id());
    return new WP_REST_Response($items, 200);
}

function my_plugin_create_item(WP_REST_Request $request): WP_REST_Response {
    $id = My_Plugin_DB::create([
        'user_id' => get_current_user_id(),
        'data'    => ['title' => $request->get_param('title')],
    ]);

    if (!$id) {
        return new WP_REST_Response(['error' => 'Failed to create'], 500);
    }

    return new WP_REST_Response(['id' => $id], 201);
}
\`\`\`

## Uninstall

\`\`\`php
<?php
// uninstall.php
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

global $wpdb;

// Drop custom tables
$wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}my_plugin_data");

// Delete options
delete_option('my_plugin_version');
delete_option('my_plugin_settings');
delete_option('my_plugin_options');

// Delete user meta
delete_metadata('user', 0, 'my_plugin_user_setting', '', true);

// Delete posts (nếu plugin tạo CPT)
$posts = get_posts([
    'post_type'   => 'my_cpt',
    'numberposts' => -1,
    'post_status' => 'any',
]);
foreach ($posts as $post) {
    wp_delete_post($post->ID, true);
}
\`\`\`

## Bài tập thực hành
Hãy tạo plugin đầy đủ với admin page, shortcode và REST API!`,
      exercises: [
        {
          id: "3-1",
          title: "Custom Plugin: Book Manager",
          description: "Tạo plugin quản lý sách",
          instructions: `Tạo plugin Book Manager với:
1. Plugin header và main class
2. Custom database table
3. Admin page để CRUD books
4. Shortcode hiển thị books
5. REST API endpoints
6. AJAX for delete`,
          type: "code",
          starterCode: `<?php
/**
 * Plugin Name: Book Manager
 * Description: Quản lý sách
 * Version: 1.0.0
 * Author: Your Name
 * Text Domain: book-manager
 */

// Viết code ở đây`,
          solution: `<?php
/**
 * Plugin Name: Book Manager
 * Plugin URI:  https://example.com/book-manager
 * Description: Quản lý sách với admin UI và REST API
 * Version:     1.0.0
 * Author:      Your Name
 * Text Domain: book-manager
 * Requires at least: 6.0
 * Requires PHP: 7.4
 */

if (!defined('ABSPATH')) exit;

define('BM_VERSION', '1.0.0');
define('BM_FILE', __FILE__);
define('BM_DIR', plugin_dir_path(__FILE__));
define('BM_URL', plugin_dir_url(__FILE__));

// ============= Main Plugin Class =============
class Book_Manager {
    private static ?self $instance = null;

    public static function instance(): self {
        return self::$instance ??= new self();
    }

    private function __construct() {
        register_activation_hook(BM_FILE, [$this, 'activate']);
        register_deactivation_hook(BM_FILE, [$this, 'deactivate']);

        add_action('plugins_loaded', [$this, 'init']);
    }

    public function init(): void {
        add_action('admin_menu', [$this, 'add_admin_menu']);
        add_action('admin_enqueue_scripts', [$this, 'admin_assets']);
        add_action('wp_enqueue_scripts', [$this, 'public_assets']);
        add_action('wp_ajax_bm_delete_book', [$this, 'ajax_delete_book']);
        add_action('wp_ajax_bm_save_book', [$this, 'ajax_save_book']);
        add_action('rest_api_init', [$this, 'register_rest_routes']);
        add_shortcode('book_list', [$this, 'render_shortcode']);
    }

    public function activate(): void {
        global $wpdb;
        $table = $wpdb->prefix . 'books';
        $charset = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            title varchar(255) NOT NULL,
            author varchar(255) NOT NULL,
            isbn varchar(20) DEFAULT NULL,
            year int(4) DEFAULT NULL,
            description text,
            cover_url varchar(500) DEFAULT NULL,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY author (author),
            KEY year (year)
        ) $charset;";

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql);

        add_option('bm_version', BM_VERSION);
    }

    public function deactivate(): void {
        // Không xóa data
    }

    public function add_admin_menu(): void {
        add_menu_page(
            __('Books', 'book-manager'),
            __('Book Manager', 'book-manager'),
            'manage_options',
            'book-manager',
            [$this, 'render_admin_page'],
            'dashicons-book',
            25
        );

        add_submenu_page(
            'book-manager',
            __('Add New Book', 'book-manager'),
            __('Add New', 'book-manager'),
            'manage_options',
            'book-manager-new',
            [$this, 'render_edit_page']
        );

        add_submenu_page(
            'book-manager',
            __('Settings', 'book-manager'),
            __('Settings', 'book-manager'),
            'manage_options',
            'book-manager-settings',
            [$this, 'render_settings_page']
        );
    }

    public function admin_assets(string $hook): void {
        if (strpos($hook, 'book-manager') === false) return;

        wp_enqueue_style('bm-admin', BM_URL . 'admin.css', [], BM_VERSION);
        wp_enqueue_script('bm-admin', BM_URL . 'admin.js', ['jquery'], BM_VERSION, true);

        wp_localize_script('bm-admin', 'bmData', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce'   => wp_create_nonce('bm_nonce'),
            'restUrl' => rest_url('book-manager/v1'),
            'restNonce' => wp_create_nonce('wp_rest'),
        ]);
    }

    public function public_assets(): void {
        wp_enqueue_style('bm-public', BM_URL . 'public.css', [], BM_VERSION);
    }

    public function render_admin_page(): void {
        $books = self::get_all_books();
        ?>
        <div class="wrap bm-wrap">
            <h1 class="wp-heading-inline"><?php esc_html_e('Books', 'book-manager'); ?></h1>
            <a href="<?php echo esc_url(admin_url('admin.php?page=book-manager-new')); ?>"
               class="page-title-action">
                <?php esc_html_e('Add New', 'book-manager'); ?>
            </a>

            <?php if (isset($_GET['saved'])): ?>
                <div class="notice notice-success is-dismissible">
                    <p><?php esc_html_e('Book saved successfully.', 'book-manager'); ?></p>
                </div>
            <?php endif; ?>

            <table class="wp-list-table widefat fixed striped">
                <thead>
                    <tr>
                        <th><?php esc_html_e('ID', 'book-manager'); ?></th>
                        <th><?php esc_html_e('Title', 'book-manager'); ?></th>
                        <th><?php esc_html_e('Author', 'book-manager'); ?></th>
                        <th><?php esc_html_e('Year', 'book-manager'); ?></th>
                        <th><?php esc_html_e('Actions', 'book-manager'); ?></th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (empty($books)): ?>
                        <tr><td colspan="5"><?php esc_html_e('No books yet.', 'book-manager'); ?></td></tr>
                    <?php else: foreach ($books as $book): ?>
                        <tr data-id="<?php echo esc_attr($book->id); ?>">
                            <td><?php echo esc_html($book->id); ?></td>
                            <td><strong><?php echo esc_html($book->title); ?></strong></td>
                            <td><?php echo esc_html($book->author); ?></td>
                            <td><?php echo esc_html($book->year); ?></td>
                            <td>
                                <a href="<?php echo esc_url(add_query_arg([
                                    'page' => 'book-manager-new',
                                    'id'   => $book->id
                                ], admin_url('admin.php'))); ?>" class="button button-small">
                                    <?php esc_html_e('Edit', 'book-manager'); ?>
                                </a>
                                <button type="button"
                                        class="button button-small bm-delete"
                                        data-id="<?php echo esc_attr($book->id); ?>">
                                    <?php esc_html_e('Delete', 'book-manager'); ?>
                                </button>
                            </td>
                        </tr>
                    <?php endforeach; endif; ?>
                </tbody>
            </table>
        </div>
        <?php
    }

    public function render_edit_page(): void {
        $id = isset($_GET['id']) ? (int) $_GET['id'] : 0;
        $book = $id ? self::get_book($id) : null;

        if (isset($_POST['bm_save']) && check_admin_referer('bm_save_book')) {
            $data = [
                'title'       => sanitize_text_field($_POST['title']),
                'author'      => sanitize_text_field($_POST['author']),
                'isbn'        => sanitize_text_field($_POST['isbn']),
                'year'        => (int) $_POST['year'],
                'description' => sanitize_textarea_field($_POST['description']),
                'cover_url'   => esc_url_raw($_POST['cover_url']),
            ];

            if ($id) {
                self::update_book($id, $data);
            } else {
                self::create_book($data);
            }

            wp_safe_redirect(add_query_arg('saved', '1', admin_url('admin.php?page=book-manager')));
            exit;
        }
        ?>
        <div class="wrap bm-wrap">
            <h1><?php echo $id ? esc_html__('Edit Book', 'book-manager') : esc_html__('Add New Book', 'book-manager'); ?></h1>

            <form method="post">
                <?php wp_nonce_field('bm_save_book'); ?>

                <table class="form-table">
                    <tr>
                        <th><label for="title"><?php esc_html_e('Title', 'book-manager'); ?> *</label></th>
                        <td><input type="text" id="title" name="title" class="regular-text"
                                   value="<?php echo esc_attr($book->title ?? ''); ?>" required></td>
                    </tr>
                    <tr>
                        <th><label for="author"><?php esc_html_e('Author', 'book-manager'); ?> *</label></th>
                        <td><input type="text" id="author" name="author" class="regular-text"
                                   value="<?php echo esc_attr($book->author ?? ''); ?>" required></td>
                    </tr>
                    <tr>
                        <th><label for="isbn"><?php esc_html_e('ISBN', 'book-manager'); ?></label></th>
                        <td><input type="text" id="isbn" name="isbn" class="regular-text"
                                   value="<?php echo esc_attr($book->isbn ?? ''); ?>"></td>
                    </tr>
                    <tr>
                        <th><label for="year"><?php esc_html_e('Year', 'book-manager'); ?></label></th>
                        <td><input type="number" id="year" name="year" min="1000" max="<?php echo date('Y'); ?>"
                                   value="<?php echo esc_attr($book->year ?? date('Y')); ?>"></td>
                    </tr>
                    <tr>
                        <th><label for="description"><?php esc_html_e('Description', 'book-manager'); ?></label></th>
                        <td><textarea id="description" name="description" rows="5" class="large-text"><?php
                            echo esc_textarea($book->description ?? '');
                        ?></textarea></td>
                    </tr>
                    <tr>
                        <th><label for="cover_url"><?php esc_html_e('Cover URL', 'book-manager'); ?></label></th>
                        <td><input type="url" id="cover_url" name="cover_url" class="regular-text"
                                   value="<?php echo esc_attr($book->cover_url ?? ''); ?>"></td>
                    </tr>
                </table>

                <?php submit_button(
                    $id ? __('Update Book', 'book-manager') : __('Create Book', 'book-manager'),
                    'primary',
                    'bm_save'
                ); ?>
            </form>
        </div>
        <?php
    }

    public function render_settings_page(): void {
        if (isset($_POST['bm_settings']) && check_admin_referer('bm_settings_nonce')) {
            update_option('bm_settings', [
                'items_per_page' => absint($_POST['items_per_page']),
                'show_covers'    => !empty($_POST['show_covers']),
            ]);
            echo '<div class="notice notice-success"><p>Settings saved.</p></div>';
        }

        $settings = wp_parse_args(get_option('bm_settings', []), [
            'items_per_page' => 10,
            'show_covers'    => true,
        ]);
        ?>
        <div class="wrap">
            <h1><?php esc_html_e('Book Manager Settings', 'book-manager'); ?></h1>
            <form method="post">
                <?php wp_nonce_field('bm_settings_nonce'); ?>
                <table class="form-table">
                    <tr>
                        <th><label for="items_per_page"><?php esc_html_e('Items per page', 'book-manager'); ?></label></th>
                        <td><input type="number" id="items_per_page" name="items_per_page"
                                   value="<?php echo esc_attr($settings['items_per_page']); ?>" min="1" max="100"></td>
                    </tr>
                    <tr>
                        <th><?php esc_html_e('Show covers', 'book-manager'); ?></th>
                        <td>
                            <label>
                                <input type="checkbox" name="show_covers" value="1"
                                    <?php checked($settings['show_covers']); ?>>
                                <?php esc_html_e('Display book covers', 'book-manager'); ?>
                            </label>
                        </td>
                    </tr>
                </table>
                <?php submit_button(__('Save Settings', 'book-manager'), 'primary', 'bm_settings'); ?>
            </form>
        </div>
        <?php
    }

    public function render_shortcode(array $atts): string {
        $atts = shortcode_atts([
            'limit'   => 10,
            'author'  => '',
            'orderby' => 'title',
        ], $atts, 'book_list');

        $books = self::get_all_books([
            'limit'   => (int) $atts['limit'],
            'author'  => sanitize_text_field($atts['author']),
            'orderby' => sanitize_key($atts['orderby']),
        ]);

        ob_start();
        ?>
        <div class="bm-shortcode">
            <?php if (empty($books)): ?>
                <p><?php esc_html_e('No books found.', 'book-manager'); ?></p>
            <?php else: ?>
                <ul class="bm-book-list">
                    <?php foreach ($books as $book): ?>
                        <li class="bm-book-item">
                            <strong><?php echo esc_html($book->title); ?></strong>
                            <?php if ($book->author): ?>
                                <span class="bm-author"><?php echo esc_html($book->author); ?></span>
                            <?php endif; ?>
                            <?php if ($book->year): ?>
                                <span class="bm-year">(<?php echo esc_html($book->year); ?>)</span>
                            <?php endif; ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </div>
        <?php
        return ob_get_clean();
    }

    public function ajax_delete_book(): void {
        check_ajax_referer('bm_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_send_json_error(['message' => 'Unauthorized'], 403);
        }

        $id = (int) ($_POST['id'] ?? 0);
        if (!$id) {
            wp_send_json_error(['message' => 'Invalid ID'], 400);
        }

        if (self::delete_book($id)) {
            wp_send_json_success(['message' => 'Book deleted']);
        } else {
            wp_send_json_error(['message' => 'Delete failed'], 500);
        }
    }

    public function register_rest_routes(): void {
        register_rest_route('book-manager/v1', '/books', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'rest_get_books'],
                'permission_callback' => '__return_true',
            ],
            [
                'methods'             => WP_REST_Server::CREATABLE,
                'callback'            => [$this, 'rest_create_book'],
                'permission_callback' => function () {
                    return current_user_can('manage_options');
                },
                'args' => [
                    'title'  => ['required' => true, 'type' => 'string'],
                    'author' => ['required' => true, 'type' => 'string'],
                ],
            ],
        ]);

        register_rest_route('book-manager/v1', '/books/(?P<id>\\d+)', [
            'methods'             => WP_REST_Server::DELETABLE,
            'callback'            => [$this, 'rest_delete_book'],
            'permission_callback' => function () {
                return current_user_can('manage_options');
            },
        ]);
    }

    public function rest_get_books(WP_REST_Request $request): WP_REST_Response {
        $books = self::get_all_books(['limit' => (int) ($request->get_param('limit') ?: 20)]);
        return new WP_REST_Response($books, 200);
    }

    public function rest_create_book(WP_REST_Request $request): WP_REST_Response {
        $id = self::create_book([
            'title'  => sanitize_text_field($request->get_param('title')),
            'author' => sanitize_text_field($request->get_param('author')),
            'isbn'   => sanitize_text_field($request->get_param('isbn') ?? ''),
            'year'   => (int) ($request->get_param('year') ?? 0),
        ]);

        if (!$id) {
            return new WP_REST_Response(['error' => 'Failed'], 500);
        }

        return new WP_REST_Response(self::get_book($id), 201);
    }

    public function rest_delete_book(WP_REST_Request $request): WP_REST_Response {
        $id = (int) $request['id'];
        if (!self::delete_book($id)) {
            return new WP_REST_Response(['error' => 'Not found'], 404);
        }
        return new WP_REST_Response(['deleted' => true], 200);
    }

    // ============= CRUD =============
    private static function table(): string {
        global $wpdb;
        return $wpdb->prefix . 'books';
    }

    public static function get_all_books(array $args = []): array {
        global $wpdb;
        $args = wp_parse_args($args, [
            'limit'   => 100,
            'author'  => '',
            'orderby' => 'created_at',
            'order'   => 'DESC',
        ]);

        $orderby = in_array($args['orderby'], ['title', 'author', 'year', 'created_at'], true)
            ? $args['orderby'] : 'created_at';
        $order = strtoupper($args['order']) === 'ASC' ? 'ASC' : 'DESC';
        $limit = (int) $args['limit'];
        $table = self::table();

        if ($args['author']) {
            return $wpdb->get_results($wpdb->prepare(
                "SELECT * FROM $table WHERE author = %s ORDER BY $orderby $order LIMIT %d",
                $args['author'], $limit
            ));
        }

        return $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM $table ORDER BY $orderby $order LIMIT %d",
            $limit
        ));
    }

    public static function get_book(int $id): ?object {
        global $wpdb;
        $table = self::table();
        return $wpdb->get_row($wpdb->prepare("SELECT * FROM $table WHERE id = %d", $id));
    }

    public static function create_book(array $data): int|false {
        global $wpdb;
        $result = $wpdb->insert(
            self::table(),
            [
                'title'       => $data['title'],
                'author'      => $data['author'],
                'isbn'        => $data['isbn'] ?? '',
                'year'        => $data['year'] ?? null,
                'description' => $data['description'] ?? '',
                'cover_url'   => $data['cover_url'] ?? '',
                'created_at'  => current_time('mysql'),
            ],
            ['%s', '%s', '%s', '%d', '%s', '%s', '%s']
        );

        return $result ? $wpdb->insert_id : false;
    }

    public static function update_book(int $id, array $data): bool {
        global $wpdb;
        return (bool) $wpdb->update(
            self::table(),
            [
                'title'       => $data['title'],
                'author'      => $data['author'],
                'isbn'        => $data['isbn'] ?? '',
                'year'        => $data['year'] ?? null,
                'description' => $data['description'] ?? '',
                'cover_url'   => $data['cover_url'] ?? '',
            ],
            ['id' => $id],
            ['%s', '%s', '%s', '%d', '%s', '%s'],
            ['%d']
        );
    }

    public static function delete_book(int $id): bool {
        global $wpdb;
        return (bool) $wpdb->delete(self::table(), ['id' => $id], ['%d']);
    }
}

Book_Manager::instance();

// ============= uninstall.php =============
/*
if (!defined('WP_UNINSTALL_PLUGIN')) exit;
global $wpdb;
$wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}books");
delete_option('bm_version');
delete_option('bm_settings');
*/`,
        },
      ],
    },
    {
      id: "4",
      title: "Gutenberg Blocks và REST API",
      slug: "gutenberg-blocks-rest-api",
      duration: "85 phút",
      prerequisites: ["3"],
      content: `# Gutenberg Blocks và REST API

## Block Editor Basics

### Setup plugin cho blocks
\`\`\`bash
npx @wordpress/create-block my-blocks
cd my-blocks
npm start
\`\`\`

### Block registration
\`\`\`javascript
// src/block.json
{
    "$schema": "https://schemas.wp.org/trunk/block.json",
    "apiVersion": 3,
    "name": "my-plugin/hero",
    "version": "1.0.0",
    "title": "Hero Section",
    "category": "design",
    "icon": "cover-image",
    "description": "A hero section with title, subtitle, and button",
    "keywords": ["hero", "banner", "header"],
    "supports": {
        "html": false,
        "align": ["wide", "full"],
        "color": {
            "background": true,
            "text": true
        },
        "spacing": {
            "padding": true
        }
    },
    "attributes": {
        "title": {
            "type": "string",
            "default": "Welcome"
        },
        "subtitle": {
            "type": "string",
            "default": ""
        },
        "buttonText": {
            "type": "string",
            "default": "Learn More"
        },
        "buttonUrl": {
            "type": "string",
            "default": ""
        },
        "backgroundImage": {
            "type": "object",
            "default": null
        }
    },
    "textdomain": "my-plugin",
    "editorScript": "file:./index.js",
    "editorStyle": "file:./index.css",
    "style": "file:./style-index.css"
}
\`\`\`

### Edit component
\`\`\`jsx
// src/edit.js
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    RichText,
    MediaUpload,
    MediaUploadCheck,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    Button,
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const {
        title,
        subtitle,
        buttonText,
        buttonUrl,
        backgroundImage,
    } = attributes;

    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Button Settings', 'my-plugin')}>
                    <TextControl
                        label={__('Button URL', 'my-plugin')}
                        value={buttonUrl}
                        onChange={(value) => setAttributes({ buttonUrl: value })}
                    />
                </PanelBody>

                <PanelBody title={__('Background', 'my-plugin')}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => setAttributes({
                                backgroundImage: { id: media.id, url: media.url }
                            })}
                            allowedTypes={['image']}
                            value={backgroundImage?.id}
                            render={({ open }) => (
                                <Button onClick={open} variant="secondary">
                                    {backgroundImage
                                        ? __('Replace Image', 'my-plugin')
                                        : __('Choose Image', 'my-plugin')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>

                    {backgroundImage && (
                        <Button
                            onClick={() => setAttributes({ backgroundImage: null })}
                            variant="link"
                            isDestructive
                        >
                            {__('Remove Image', 'my-plugin')}
                        </Button>
                    )}
                </PanelBody>
            </InspectorControls>

            <div
                {...blockProps}
                style={{
                    backgroundImage: backgroundImage
                        ? \`url(\${backgroundImage.url})\`
                        : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="hero-overlay">
                    <RichText
                        tagName="h1"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder={__('Enter title...', 'my-plugin')}
                        className="hero-title"
                    />

                    <RichText
                        tagName="p"
                        value={subtitle}
                        onChange={(value) => setAttributes({ subtitle: value })}
                        placeholder={__('Enter subtitle...', 'my-plugin')}
                        className="hero-subtitle"
                    />

                    <div className="hero-button">
                        <RichText
                            tagName="span"
                            value={buttonText}
                            onChange={(value) => setAttributes({ buttonText: value })}
                            className="button-text"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
\`\`\`

### Save component
\`\`\`jsx
// src/save.js
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const {
        title,
        subtitle,
        buttonText,
        buttonUrl,
        backgroundImage,
    } = attributes;

    const blockProps = useBlockProps.save({
        style: {
            backgroundImage: backgroundImage
                ? \`url(\${backgroundImage.url})\`
                : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
    });

    return (
        <div {...blockProps}>
            <div className="hero-overlay">
                <RichText.Content tagName="h1" value={title} className="hero-title" />
                <RichText.Content tagName="p" value={subtitle} className="hero-subtitle" />
                {buttonText && (
                    <a href={buttonUrl || '#'} className="hero-button">
                        <RichText.Content tagName="span" value={buttonText} />
                    </a>
                )}
            </div>
        </div>
    );
}
\`\`\`

### Block registration trong PHP
\`\`\`php
<?php
// my-plugin.php

function my_plugin_register_blocks() {
    register_block_type(__DIR__ . '/build/hero');
    register_block_type(__DIR__ . '/build/pricing-table');
}
add_action('init', 'my_plugin_register_blocks');

function my_plugin_enqueue_editor_assets() {
    wp_enqueue_script(
        'my-plugin-blocks',
        plugins_url('build/index.js', __FILE__),
        ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'],
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );
}
add_action('enqueue_block_editor_assets', 'my_plugin_enqueue_editor_assets');
\`\`\`

## Dynamic Blocks (PHP render)

\`\`\`php
// blocks/latest-books/block.json
{
    "name": "my-plugin/latest-books",
    "title": "Latest Books",
    "category": "widgets",
    "icon": "book",
    "attributes": {
        "count": { "type": "number", "default": 5 },
        "showExcerpt": { "type": "boolean", "default": true }
    },
    "render": "file:./render.php"
}

// blocks/latest-books/render.php
<?php
$count = $attributes['count'] ?? 5;
$show_excerpt = $attributes['showExcerpt'] ?? true;

$books = Book_Manager::get_all_books(['limit' => $count]);

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'latest-books-block',
]);
?>
<div <?php echo $wrapper_attributes; ?>>
    <h2><?php esc_html_e('Latest Books', 'my-plugin'); ?></h2>
    <ul>
        <?php foreach ($books as $book): ?>
            <li>
                <strong><?php echo esc_html($book->title); ?></strong>
                <span>by <?php echo esc_html($book->author); ?></span>
                <?php if ($show_excerpt && $book->description): ?>
                    <p><?php echo esc_html(wp_trim_words($book->description, 20)); ?></p>
                <?php endif; ?>
            </li>
        <?php endforeach; ?>
    </ul>
</div>
\`\`\`

## Custom Block Variations

\`\`\`jsx
// src/variations.js
import { registerBlockVariation } from '@wordpress/blocks';

registerBlockVariation('my-plugin/hero', {
    name: 'hero-dark',
    title: 'Dark Hero',
    description: 'Hero with dark background',
    attributes: {
        backgroundColor: '#000000',
        textColor: '#ffffff',
    },
    isDefault: false,
});
\`\`\`

## Block Patterns

\`\`\`php
// register-patterns.php
add_action('init', function () {
    register_block_pattern_category('my-plugin', [
        'label' => __('My Plugin Patterns', 'my-plugin'),
    ]);

    register_block_pattern('my-plugin/hero-cta', [
        'title'       => __('Hero with CTA', 'my-plugin'),
        'description' => __('A hero section with call to action button', 'my-plugin'),
        'categories'  => ['my-plugin', 'call-to-action'],
        'content'     => '
            <!-- wp:my-plugin/hero -->
            <div class="wp-block-my-plugin-hero">
                <div class="hero-overlay">
                    <h1 class="hero-title">Build Amazing Things</h1>
                    <p class="hero-subtitle">Get started with our platform today</p>
                    <a href="#" class="hero-button"><span>Get Started</span></a>
                </div>
            </div>
            <!-- /wp:my-plugin/hero -->
        ',
    ]);
});
\`\`\`

## REST API Integration

\`\`\`javascript
// Trong block editor
import apiFetch from '@wordpress/api-fetch';

export default function Edit({ attributes, setAttributes }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiFetch({ path: '/wp/v2/posts?per_page=5' })
            .then(posts => {
                setBooks(posts);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    // ...
}
\`\`\`

## Block Transforms

\`\`\`javascript
// Từ paragraph sang hero
transforms: {
    from: [
        {
            type: 'block',
            blocks: ['core/paragraph'],
            transform: ({ content }) => {
                return createBlock('my-plugin/hero', {
                    title: content.replace(/<[^>]+>/g, ''),
                });
            },
        },
    ],
    to: [
        {
            type: 'block',
            blocks: ['core/paragraph'],
            transform: ({ title, subtitle }) => {
                return createBlock('core/paragraph', {
                    content: \`<h1>\${title}</h1><p>\${subtitle}</p>\`,
                });
            },
        },
    ],
}
\`\`\`

## Block Toolbar và Contextual Controls

\`\`\`jsx
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { formatBold } from '@wordpress/icons';

export default function Edit({ attributes, setAttributes }) {
    return (
        <>
            <BlockControls>
                <AlignmentToolbar
                    value={attributes.textAlign}
                    onChange={(value) => setAttributes({ textAlign: value })}
                />
                <ToolbarGroup>
                    <ToolbarButton
                        icon={formatBold}
                        label="Toggle bold"
                        onClick={() => setAttributes({ bold: !attributes.bold })}
                    />
                </ToolbarGroup>
            </BlockControls>

            {/* block content */}
        </>
    );
}
\`\`\`

## Inner Blocks

\`\`\`jsx
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

const TEMPLATE = [
    ['core/heading', { level: 2, placeholder: 'Section title' }],
    ['core/paragraph', { placeholder: 'Section content' }],
];

export default function Edit() {
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        template: TEMPLATE,
        allowedBlocks: ['core/heading', 'core/paragraph', 'core/image'],
    });

    return <div {...innerBlocksProps} />;
}
\`\`\`

## WP REST API

### Đăng ký custom endpoint

\`\`\`php
add_action('rest_api_init', function () {
    register_rest_route('my-plugin/v1', '/books', [
        [
            'methods'             => 'GET',
            'callback'            => 'my_plugin_rest_get_books',
            'permission_callback' => '__return_true',
            'args' => [
                'per_page' => [
                    'default'           => 10,
                    'sanitize_callback' => 'absint',
                ],
                'author' => [
                    'sanitize_callback' => 'sanitize_text_field',
                ],
            ],
        ],
        [
            'methods'             => 'POST',
            'callback'            => 'my_plugin_rest_create_book',
            'permission_callback' => function () {
                return current_user_can('edit_posts');
            },
        ],
    ]);

    register_rest_route('my-plugin/v1', '/books/(?P<id>\\d+)', [
        'methods'             => 'DELETE',
        'callback'            => 'my_plugin_rest_delete_book',
        'permission_callback' => function () {
            return current_user_can('delete_posts');
        },
    ]);
});

function my_plugin_rest_get_books(WP_REST_Request $request): WP_REST_Response {
    $books = Book_Manager::get_all_books([
        'limit'  => $request->get_param('per_page'),
        'author' => $request->get_param('author') ?? '',
    ]);

    $response = new WP_REST_Response($books, 200);
    $response->header('X-Total-Count', count($books));
    return $response;
}

function my_plugin_rest_create_book(WP_REST_Request $request): WP_REST_Response|WP_Error {
    $title = $request->get_param('title');
    $author = $request->get_param('author');

    if (empty($title) || empty($author)) {
        return new WP_Error(
            'missing_data',
            __('Title and author are required.', 'my-plugin'),
            ['status' => 400]
        );
    }

    $id = Book_Manager::create_book([
        'title'  => sanitize_text_field($title),
        'author' => sanitize_text_field($author),
        'isbn'   => sanitize_text_field($request->get_param('isbn') ?? ''),
        'year'   => (int) ($request->get_param('year') ?? 0),
    ]);

    if (!$id) {
        return new WP_Error(
            'create_failed',
            __('Failed to create book.', 'my-plugin'),
            ['status' => 500]
        );
    }

    return new WP_REST_Response(Book_Manager::get_book($id), 201);
}

function my_plugin_rest_delete_book(WP_REST_Request $request): WP_REST_Response|WP_Error {
    $id = (int) $request['id'];

    if (!Book_Manager::get_book($id)) {
        return new WP_Error(
            'book_not_found',
            __('Book not found.', 'my-plugin'),
            ['status' => 404]
        );
    }

    Book_Manager::delete_book($id);
    return new WP_REST_Response(['deleted' => true], 200);
}
\`\`\`

### Custom post type REST support

\`\`\`php
register_post_type('book', [
    'public'       => true,
    'show_in_rest' => true,   // Enable REST API
    'rest_base'    => 'books',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'     => ['title', 'editor', 'thumbnail', 'custom-fields'],
    'taxonomies'   => ['genre', 'author'],
]);

// Custom REST field
add_action('rest_api_init', function () {
    register_rest_field('book', 'rating', [
        'get_callback' => function ($post_array) {
            return (float) get_post_meta($post_array['id'], 'rating', true);
        },
        'update_callback' => function ($value, $post) {
            update_post_meta($post->ID, 'rating', (float) $value);
        },
        'schema' => [
            'type'    => 'number',
            'minimum' => 0,
            'maximum' => 5,
        ],
    ]);
});
\`\`\`

## Bài tập thực hành
Hãy tạo custom Gutenberg block và REST API!`,
      exercises: [
        {
          id: "4-1",
          title: "Custom Gutenberg Block",
          description: "Tạo block để hiển thị sách mới nhất",
          instructions: `Tạo:
1. Dynamic block "Latest Books"
2. Attributes cho count và layout
3. Server-side rendering
4. REST API integration
5. Block patterns`,
          type: "code",
          starterCode: `// src/index.js
import { registerBlockType } from '@wordpress/blocks';

// Viết code ở đây`,
          solution: `// ============= block.json =============
{
    "$schema": "https://schemas.wp.org/trunk/block.json",
    "apiVersion": 3,
    "name": "my-plugin/latest-books",
    "version": "1.0.0",
    "title": "Latest Books",
    "category": "widgets",
    "icon": "book-alt",
    "description": "Display the latest books",
    "keywords": ["books", "list", "latest"],
    "supports": {
        "html": false,
        "align": ["wide", "full"],
        "spacing": {
            "padding": true,
            "margin": true
        }
    },
    "attributes": {
        "count": {
            "type": "number",
            "default": 5
        },
        "columns": {
            "type": "number",
            "default": 3
        },
        "showExcerpt": {
            "type": "boolean",
            "default": true
        },
        "showAuthor": {
            "type": "boolean",
            "default": true
        },
        "orderBy": {
            "type": "string",
            "default": "created_at"
        }
    },
    "textdomain": "my-plugin",
    "editorScript": "file:./index.js",
    "editorStyle": "file:./index.css",
    "style": "file:./style-index.css",
    "render": "file:./render.php"
}

// ============= src/index.js =============
import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';

registerBlockType(metadata.name, {
    edit: Edit,
});

// ============= src/edit.js =============
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    RangeControl,
    ToggleControl,
    SelectControl,
    Placeholder,
    Spinner,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

export default function Edit({ attributes, setAttributes }) {
    const { count, columns, showExcerpt, showAuthor, orderBy } = attributes;
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        apiFetch({
            path: \`/my-plugin/v1/books?per_page=\${count}&orderby=\${orderBy}\`,
        })
            .then(setBooks)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [count, orderBy]);

    const blockProps = useBlockProps({
        className: \`latest-books columns-\${columns}\`,
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Display Settings', 'my-plugin')}>
                    <RangeControl
                        label={__('Number of books', 'my-plugin')}
                        value={count}
                        onChange={(value) => setAttributes({ count: value })}
                        min={1}
                        max={20}
                    />

                    <RangeControl
                        label={__('Columns', 'my-plugin')}
                        value={columns}
                        onChange={(value) => setAttributes({ columns: value })}
                        min={1}
                        max={4}
                    />

                    <SelectControl
                        label={__('Order by', 'my-plugin')}
                        value={orderBy}
                        options={[
                            { label: __('Date', 'my-plugin'), value: 'created_at' },
                            { label: __('Title', 'my-plugin'), value: 'title' },
                            { label: __('Author', 'my-plugin'), value: 'author' },
                        ]}
                        onChange={(value) => setAttributes({ orderBy: value })}
                    />

                    <ToggleControl
                        label={__('Show excerpt', 'my-plugin')}
                        checked={showExcerpt}
                        onChange={(value) => setAttributes({ showExcerpt: value })}
                    />

                    <ToggleControl
                        label={__('Show author', 'my-plugin')}
                        checked={showAuthor}
                        onChange={(value) => setAttributes({ showAuthor: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                {loading ? (
                    <div className="loading">
                        <Spinner />
                        <p>{__('Loading books...', 'my-plugin')}</p>
                    </div>
                ) : books.length === 0 ? (
                    <Placeholder
                        label={__('Latest Books', 'my-plugin')}
                        instructions={__('No books found. Add some books first.', 'my-plugin')}
                    />
                ) : (
                    <div className="books-grid">
                        {books.map((book) => (
                            <div key={book.id} className="book-card">
                                <h3 className="book-title">{book.title}</h3>
                                {showAuthor && (
                                    <p className="book-author">{book.author}</p>
                                )}
                                {showExcerpt && book.description && (
                                    <p className="book-excerpt">
                                        {book.description.substring(0, 100)}...
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

// ============= blocks/latest-books/render.php =============
<?php
$count = $attributes['count'] ?? 5;
$columns = $attributes['columns'] ?? 3;
$show_excerpt = $attributes['showExcerpt'] ?? true;
$show_author = $attributes['showAuthor'] ?? true;
$order_by = $attributes['orderBy'] ?? 'created_at';

$books = Book_Manager::get_all_books([
    'limit'   => $count,
    'orderby' => $order_by,
]);

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => "latest-books columns-{$columns}",
]);
?>
<div <?php echo $wrapper_attributes; ?>>
    <?php if (empty($books)): ?>
        <p class="no-books"><?php esc_html_e('No books found.', 'my-plugin'); ?></p>
    <?php else: ?>
        <div class="books-grid">
            <?php foreach ($books as $book): ?>
                <div class="book-card">
                    <h3 class="book-title"><?php echo esc_html($book->title); ?></h3>
                    <?php if ($show_author): ?>
                        <p class="book-author"><?php echo esc_html($book->author); ?></p>
                    <?php endif; ?>
                    <?php if ($show_excerpt && !empty($book->description)): ?>
                        <p class="book-excerpt">
                            <?php echo esc_html(wp_trim_words($book->description, 20)); ?>
                        </p>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</div>

// ============= style.css =============
// .latest-books .books-grid {
//     display: grid;
//     gap: 1.5rem;
// }
//
// .latest-books.columns-1 .books-grid { grid-template-columns: 1fr; }
// .latest-books.columns-2 .books-grid { grid-template-columns: repeat(2, 1fr); }
// .latest-books.columns-3 .books-grid { grid-template-columns: repeat(3, 1fr); }
// .latest-books.columns-4 .books-grid { grid-template-columns: repeat(4, 1fr); }
//
// .book-card {
//     background: #fff;
//     padding: 1.5rem;
//     border-radius: 8px;
//     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// }
//
// .book-title { margin: 0 0 0.5rem; }
// .book-author { color: #666; font-style: italic; }`,
        },
      ],
    },
    {
      id: "5",
      title: "Security, Performance và Deployment",
      slug: "security-performance-deployment",
      duration: "70 phút",
      prerequisites: ["4"],
      content: `# Security, Performance và Deployment

## Security Best Practices

### Sanitize inputs
\`\`\`php
// Text field
$text = sanitize_text_field($_POST['text']);

// Email
$email = sanitize_email($_POST['email']);

// URL
$url = esc_url_raw($_POST['url']);

// Textarea
$content = sanitize_textarea_field($_POST['content']);

// HTML content
$html = wp_kses_post($_POST['html']);

// Custom allowed HTML
$html = wp_kses($_POST['html'], [
    'a' => ['href' => [], 'title' => []],
    'strong' => [],
    'em' => [],
]);

// File name
$filename = sanitize_file_name($_FILES['file']['name']);
\`\`\`

### Escape outputs
\`\`\`php
// HTML text
echo esc_html($text);

// HTML attribute
echo esc_attr($attribute);

// URL
echo esc_url($url);

// JavaScript
echo esc_js($js_string);

// Textarea
echo esc_textarea($textarea);

// With translation
echo esc_html__('Text', 'my-plugin');

// printf patterns
printf(
    '<a href="%s" title="%s">%s</a>',
    esc_url($url),
    esc_attr($title),
    esc_html($link_text)
);
\`\`\`

### Nonces
\`\`\`php
// Form
<form method="post">
    <?php wp_nonce_field('my_action', 'my_nonce'); ?>
    <input type="text" name="data">
    <button type="submit">Save</button>
</form>

// Verify
if (!isset($_POST['my_nonce']) ||
    !wp_verify_nonce($_POST['my_nonce'], 'my_action')) {
    wp_die('Security check failed');
}

// Ajax
wp_localize_script('my-script', 'myData', [
    'nonce' => wp_create_nonce('my_ajax_nonce'),
]);

// Verify trong ajax handler
check_ajax_referer('my_ajax_nonce', 'nonce');
\`\`\`

### Capability checks
\`\`\`php
if (!current_user_can('manage_options')) {
    wp_die('Access denied');
}

if (!current_user_can('edit_post', $post_id)) {
    wp_die('You cannot edit this post');
}

// Trong AJAX
if (!current_user_can('edit_posts')) {
    wp_send_json_error('Unauthorized', 403);
}
\`\`\`

### SQL Injection
\`\`\`php
// Không tốt
$wpdb->query("SELECT * FROM table WHERE id = $id");

// Tốt - dùng prepare
$wpdb->prepare("SELECT * FROM table WHERE id = %d", $id);

// Với LIKE
$wpdb->prepare("SELECT * FROM table WHERE name LIKE %s",
    '%' . $wpdb->esc_like($term) . '%');

// Full query
$results = $wpdb->get_results($wpdb->prepare(
    "SELECT * FROM {$wpdb->prefix}books WHERE author = %s AND year > %d",
    $author, $year
));
\`\`\`

### File uploads
\`\`\`php
if (!function_exists('wp_handle_upload')) {
    require_once ABSPATH . 'wp-admin/includes/file.php';
}

$allowed_types = ['image/jpeg', 'image/png', 'application/pdf'];

$uploaded = wp_handle_upload($_FILES['file'], [
    'test_form' => false,
    'mimes'     => [
        'jpg|jpeg' => 'image/jpeg',
        'png'      => 'image/png',
        'pdf'      => 'application/pdf',
    ],
]);

if (isset($uploaded['error'])) {
    wp_die($uploaded['error']);
}

// Insert to media library
$attachment = [
    'post_mime_type' => $uploaded['type'],
    'post_title'     => sanitize_file_name(basename($uploaded['file'])),
    'post_content'   => '',
    'post_status'    => 'inherit',
];

$attach_id = wp_insert_attachment($attachment, $uploaded['file']);
require_once ABSPATH . 'wp-admin/includes/image.php';
$metadata = wp_generate_attachment_metadata($attach_id, $uploaded['file']);
wp_update_attachment_metadata($attach_id, $metadata);
\`\`\`

## Performance Optimization

### Caching
\`\`\`php
// Transients
$data = get_transient('my_plugin_expensive_data');

if (false === $data) {
    $data = expensive_operation();
    set_transient('my_plugin_expensive_data', $data, HOUR_IN_SECONDS);
}

// Cache invalidation
delete_transient('my_plugin_expensive_data');

// Object cache (Redis/Memcached)
wp_cache_set('my_key', $value, 'my_group', 3600);
$value = wp_cache_get('my_key', 'my_group');

// Cache WP_Query
$query = new WP_Query([
    'post_type'      => 'post',
    'posts_per_page' => 10,
    'no_found_rows'  => true,           // Nếu không cần pagination
    'update_post_meta_cache' => false,   // Nếu không cần meta
    'update_post_term_cache' => false,   // Nếu không cần terms
]);
\`\`\`

### Query optimization
\`\`\`php
// Không tốt - N+1 queries
foreach ($posts as $post) {
    $author = get_the_author_meta('display_name', $post->post_author);
}

// Tốt - preload
$author_ids = wp_list_pluck($posts, 'post_author');
$authors = get_users(['include' => array_unique($author_ids)]);

// Meta query optimization
$query = new WP_Query([
    'post_type'  => 'book',
    'meta_query' => [
        'relation' => 'AND',
        [
            'key'     => 'price',
            'value'   => 100,
            'compare' => '<=',
            'type'    => 'NUMERIC',
        ],
    ],
    'meta_key'   => 'price',
    'orderby'    => 'meta_value_num',
]);
\`\`\`

### Enqueue assets properly
\`\`\`php
// Chỉ load khi cần
function my_plugin_enqueue() {
    // Chỉ load trên page cụ thể
    if (!is_page('contact')) {
        return;
    }

    wp_enqueue_script(
        'my-plugin-contact',
        plugins_url('js/contact.js', __FILE__),
        [],
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'my_plugin_enqueue');

// Async/Defer
add_filter('script_loader_tag', function ($tag, $handle) {
    if ('my-plugin-analytics' !== $handle) {
        return $tag;
    }
    return str_replace(' src', ' async src', $tag);
}, 10, 2);
\`\`\`

### Database indexes
\`\`\`php
// Trong activation
$sql = "CREATE TABLE {$wpdb->prefix}books (
    id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    author varchar(255) NOT NULL,
    year int(4) DEFAULT NULL,
    PRIMARY KEY (id),
    KEY author (author),
    KEY year (year),
    KEY title_author (title(100), author(100))
) $charset_collate;";
\`\`\`

## Deployment

### Version control
\`\`\`bash
# .gitignore
wp-config.php
wp-content/uploads/
wp-content/upgrade/
wp-content/cache/
*.log
.env
node_modules/
vendor/
\`\`\`

### WP-CLI deploy
\`\`\`bash
# Sync files
rsync -avz --exclude='.git' --exclude='node_modules' \\
    ./ user@server:/var/www/html/wp-content/plugins/my-plugin/

# SSH and run commands
ssh user@server
cd /var/www/html
wp plugin activate my-plugin
wp cache flush
\`\`\`

### CI/CD với GitHub Actions
\`\`\`yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install deps
        run: npm ci

      - name: Build assets
        run: npm run build

      - name: Deploy via SSH
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: \${{ secrets.SSH_KEY }}
          REMOTE_HOST: \${{ secrets.HOST }}
          REMOTE_USER: \${{ secrets.USER }}
          SOURCE: "./"
          TARGET: "/var/www/html/wp-content/plugins/my-plugin/"
          EXCLUDE: "/node_modules/, /.git/, /src/"
\`\`\`

### Backup strategies
\`\`\`bash
# Backup database
wp db export backup-$(date +%Y%m%d).sql

# Restore
wp db import backup-20240101.sql

# Backup files
tar -czf backup-files-$(date +%Y%m%d).tar.gz wp-content/

# Automated backup script
#!/bin/bash
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Database
wp db export "$BACKUP_DIR/db_$DATE.sql" --path=/var/www/html

# Files
tar -czf "$BACKUP_DIR/files_$DATE.tar.gz" -C /var/www/html wp-content

# Cleanup old backups (keep 30 days)
find "$BACKUP_DIR" -type f -mtime +30 -delete
\`\`\`

### Security hardening
\`\`\`php
// wp-config.php
define('DISALLOW_FILE_EDIT', true);
define('DISALLOW_FILE_MODS', true); // Disable plugin/theme installation via admin
define('FORCE_SSL_ADMIN', true);
define('WP_AUTO_UPDATE_CORE', 'minor');

// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

// Remove WP version
remove_action('wp_head', 'wp_generator');
add_filter('the_generator', '__return_empty_string');

// Disable file editing
add_filter('wp_headers', function ($headers) {
    unset($headers['X-Pingback']);
    return $headers;
});

// Limit login attempts (dùng plugin như Limit Login Attempts)

// Force strong passwords
add_action('user_profile_update_errors', function ($errors, $update, $user) {
    if (!empty($_POST['pass1'])) {
        $strength = 0;
        if (strlen($_POST['pass1']) >= 12) $strength++;
        if (preg_match('/[A-Z]/', $_POST['pass1'])) $strength++;
        if (preg_match('/[0-9]/', $_POST['pass1'])) $strength++;
        if (preg_match('/[^A-Za-z0-9]/', $_POST['pass1'])) $strength++;

        if ($strength < 3) {
            $errors->add('weak_password', 'Password must be stronger.');
        }
    }
}, 10, 3);
\`\`\`

### .htaccess security
\`\`\`apache
# Protect wp-config.php
<files wp-config.php>
    order allow,deny
    deny from all
</files>

# Protect .htaccess
<files ~ "^.*\\.([Hh][Tt][Aa])">
    order allow,deny
    deny from all
    satisfy all
</files>

# Disable directory listing
Options -Indexes

# Protect wp-includes
<IfModule mod_rewrite.c>
    RewriteRule ^wp-admin/includes/ - [F,L]
    RewriteRule !^wp-includes/ - [S=3]
    RewriteRule ^wp-includes/[^/]+\\.php$ - [F,L]
    RewriteRule ^wp-includes/js/tinymce/langs/.+\\.php - [F,L]
    RewriteRule ^wp-includes/theme-compat/ - [F,L]
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
\`\`\`

## Bài tập thực hành
Hãy bảo mật và optimize plugin!`,
      exercises: [
        {
          id: "5-1",
          title: "Secure và Optimize Plugin",
          description: "Bảo mật và tối ưu plugin Book Manager",
          instructions: `Implement:
1. Nonce cho tất cả forms và AJAX
2. Sanitize inputs và escape outputs
3. Capability checks
4. Caching với transients
5. Database indexes
6. CI/CD workflow`,
          type: "code",
          starterCode: `<?php
// Security và performance improvements
// Viết code ở đây`,
          solution: `<?php
// ============= Security trong Book Manager =============

// 1. ADMIN PAGE với nonces
public function render_edit_page(): void {
    $id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

    if (!current_user_can('manage_options')) {
        wp_die(__('Access denied.', 'book-manager'));
    }

    $book = $id ? self::get_book($id) : null;

    if (isset($_POST['bm_save'])) {
        // Verify nonce
        if (!isset($_POST['bm_nonce']) ||
            !wp_verify_nonce($_POST['bm_nonce'], 'bm_save_book_' . $id)) {
            wp_die(__('Security check failed.', 'book-manager'));
        }

        // Sanitize all inputs
        $data = [
            'title'       => sanitize_text_field(wp_unslash($_POST['title'] ?? '')),
            'author'      => sanitize_text_field(wp_unslash($_POST['author'] ?? '')),
            'isbn'        => sanitize_text_field(wp_unslash($_POST['isbn'] ?? '')),
            'year'        => (int) ($_POST['year'] ?? 0),
            'description' => sanitize_textarea_field(wp_unslash($_POST['description'] ?? '')),
            'cover_url'   => esc_url_raw(wp_unslash($_POST['cover_url'] ?? '')),
        ];

        // Validate
        if (empty($data['title']) || empty($data['author'])) {
            add_settings_error('bm', 'missing', __('Title and author are required.', 'book-manager'));
        } elseif ($data['year'] && ($data['year'] < 1000 || $data['year'] > (int) date('Y') + 1)) {
            add_settings_error('bm', 'year', __('Invalid year.', 'book-manager'));
        } else {
            if ($id) {
                self::update_book($id, $data);
            } else {
                self::create_book($data);
            }

            // Invalidate cache
            self::clear_cache();

            wp_safe_redirect(add_query_arg('saved', '1',
                admin_url('admin.php?page=book-manager')));
            exit;
        }
    }
    ?>
    <div class="wrap">
        <h1><?php echo esc_html($id ? 'Edit Book' : 'Add New Book'); ?></h1>

        <?php settings_errors('bm'); ?>

        <form method="post">
            <?php wp_nonce_field('bm_save_book_' . $id, 'bm_nonce'); ?>

            <table class="form-table">
                <tr>
                    <th>
                        <label for="title"><?php esc_html_e('Title', 'book-manager'); ?> <span class="required">*</span></label>
                    </th>
                    <td>
                        <input type="text"
                               id="title"
                               name="title"
                               class="regular-text"
                               value="<?php echo esc_attr($book->title ?? ''); ?>"
                               required
                               maxlength="255">
                    </td>
                </tr>
                <tr>
                    <th><label for="author"><?php esc_html_e('Author', 'book-manager'); ?> *</label></th>
                    <td>
                        <input type="text" id="author" name="author" class="regular-text"
                               value="<?php echo esc_attr($book->author ?? ''); ?>"
                               required maxlength="255">
                    </td>
                </tr>
                <tr>
                    <th><label for="isbn"><?php esc_html_e('ISBN', 'book-manager'); ?></label></th>
                    <td>
                        <input type="text" id="isbn" name="isbn" class="regular-text"
                               value="<?php echo esc_attr($book->isbn ?? ''); ?>"
                               maxlength="20">
                    </td>
                </tr>
                <tr>
                    <th><label for="year"><?php esc_html_e('Year', 'book-manager'); ?></label></th>
                    <td>
                        <input type="number" id="year" name="year"
                               min="1000" max="<?php echo esc_attr(date('Y') + 1); ?>"
                               value="<?php echo esc_attr($book->year ?? date('Y')); ?>">
                    </td>
                </tr>
                <tr>
                    <th><label for="description"><?php esc_html_e('Description', 'book-manager'); ?></label></th>
                    <td>
                        <textarea id="description" name="description" rows="5" class="large-text"><?php
                            echo esc_textarea($book->description ?? '');
                        ?></textarea>
                    </td>
                </tr>
                <tr>
                    <th><label for="cover_url"><?php esc_html_e('Cover URL', 'book-manager'); ?></label></th>
                    <td>
                        <input type="url" id="cover_url" name="cover_url" class="regular-text"
                               value="<?php echo esc_url($book->cover_url ?? ''); ?>">
                    </td>
                </tr>
            </table>

            <?php submit_button($id ? __('Update Book', 'book-manager') : __('Create Book', 'book-manager'), 'primary', 'bm_save'); ?>
        </form>
    </div>
    <?php
}

// 2. AJAX DELETE với capability + nonce
public function ajax_delete_book(): void {
    // Verify nonce
    check_ajax_referer('bm_nonce', 'nonce');

    // Check capability
    if (!current_user_can('manage_options')) {
        wp_send_json_error(['message' => 'Unauthorized'], 403);
    }

    $id = isset($_POST['id']) ? absint($_POST['id']) : 0;

    if (!$id) {
        wp_send_json_error(['message' => 'Invalid ID'], 400);
    }

    if (!self::get_book($id)) {
        wp_send_json_error(['message' => 'Book not found'], 404);
    }

    if (self::delete_book($id)) {
        self::clear_cache();
        wp_send_json_success(['message' => 'Book deleted']);
    }

    wp_send_json_error(['message' => 'Delete failed'], 500);
}

// 3. CACHING với transients
class Book_Manager_Cache {
    const GROUP = 'book_manager';
    const TTL   = 300; // 5 minutes

    public static function get_books(array $args = []): array {
        $key = 'bm_books_' . md5(serialize($args));
        $cached = wp_cache_get($key, self::GROUP);

        if (false !== $cached) {
            return $cached;
        }

        $books = Book_Manager::get_all_books($args);
        wp_cache_set($key, $books, self::GROUP, self::TTL);

        return $books;
    }

    public static function clear(): void {
        wp_cache_flush_group(self::GROUP);
    }
}

// 4. DATABASE OPTIMIZATION
public static function activate(): void {
    global $wpdb;
    $table = $wpdb->prefix . 'books';
    $charset = $wpdb->get_charset_collate();

    // Composite indexes for common queries
    $sql = "CREATE TABLE $table (
        id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
        title varchar(255) NOT NULL,
        author varchar(255) NOT NULL,
        isbn varchar(20) DEFAULT NULL,
        year smallint(4) unsigned DEFAULT NULL,
        description text,
        cover_url varchar(500) DEFAULT NULL,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        KEY author_year (author(100), year),
        KEY year_desc (year DESC),
        KEY created_at (created_at DESC),
        UNIQUE KEY isbn_unique (isbn)
    ) $charset;";

    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    dbDelta($sql);

    add_option('bm_version', BM_VERSION);
    add_option('bm_db_version', '1.0.0');

    // Schedule cleanup
    if (!wp_next_scheduled('bm_cleanup_cache')) {
        wp_schedule_event(time(), 'hourly', 'bm_cleanup_cache');
    }
}

// 5. ENABLE OBJECT CACHE cho custom tables
public static function get_all_books(array $args = []): array {
    $cache_key = 'bm_all_' . md5(serialize($args));
    $cached = wp_cache_get($cache_key, 'book_manager');

    if (false !== $cached) {
        return $cached;
    }

    global $wpdb;
    $args = wp_parse_args($args, [
        'limit'   => 100,
        'author'  => '',
        'orderby' => 'created_at',
        'order'   => 'DESC',
    ]);

    $allowed_orderby = ['title', 'author', 'year', 'created_at'];
    $orderby = in_array($args['orderby'], $allowed_orderby, true)
        ? $args['orderby'] : 'created_at';
    $order = strtoupper($args['order']) === 'ASC' ? 'ASC' : 'DESC';
    $limit = max(1, min(1000, (int) $args['limit']));
    $table = self::table();

    if (!empty($args['author'])) {
        $results = $wpdb->get_results($wpdb->prepare(
            "SELECT id, title, author, year, description, cover_url, created_at
             FROM $table
             WHERE author = %s
             ORDER BY $orderby $order
             LIMIT %d",
            sanitize_text_field($args['author']),
            $limit
        ));
    } else {
        $results = $wpdb->get_results($wpdb->prepare(
            "SELECT id, title, author, year, description, cover_url, created_at
             FROM $table
             ORDER BY $orderby $order
             LIMIT %d",
            $limit
        ));
    }

    wp_cache_set($cache_key, $results, 'book_manager', 300);

    return $results;
}

// 6. GitHub Actions CI/CD
/*
name: Build and Deploy Book Manager

on:
  push:
    branches: [main]
  release:
    types: [published]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: '8.2'
          tools: composer, phpunit

      - name: Validate composer
        run: composer validate --strict

      - name: Install dependencies
        run: composer install --prefer-dist --no-progress

      - name: Run PHP CodeSniffer
        run: vendor/bin/phpcs

      - name: Run PHPStan
        run: vendor/bin/phpstan analyse

      - name: Run tests
        run: vendor/bin/phpunit

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4

      - name: Deploy to production
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: \${{ secrets.SSH_PRIVATE_KEY }}
          ARGS: "-rltgoDzvO --delete"
          SOURCE: "./"
          REMOTE_HOST: \${{ secrets.REMOTE_HOST }}
          REMOTE_USER: \${{ secrets.REMOTE_USER }}
          TARGET: \${{ secrets.REMOTE_TARGET }}
          EXCLUDE: "/.git/, /node_modules/, /tests/"
*/

// 7. SECURITY HEADERS cho admin
add_action('admin_init', function () {
    if (!headers_sent()) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('Referrer-Policy: strict-origin-when-cross-origin');
    }
});

// 8. SECURITY: Hide version
add_filter('script_loader_src', 'bm_remove_version_query', 9999);
add_filter('style_loader_src', 'bm_remove_version_query', 9999);

function bm_remove_version_query(string $src): string {
    if (strpos($src, 'ver=' . BM_VERSION) !== false) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}

// 9. Disable XML-RPC cho plugin security
add_filter('xmlrpc_enabled', '__return_false');

// 10. Rate limiting cho AJAX
function bm_rate_limit(string $action, int $max_requests = 30, int $window = 60): bool {
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $user_id = get_current_user_id();
    $key = "bm_rate_{$action}_{$user_id}_{$ip}";

    $count = (int) get_transient($key);

    if ($count >= $max_requests) {
        return false;
    }

    set_transient($key, $count + 1, $window);
    return true;
}

add_action('wp_ajax_bm_save_book', function () {
    if (!bm_rate_limit('save_book', 20, 60)) {
        wp_send_json_error(['message' => 'Too many requests'], 429);
    }

    // ... existing logic
}, 5);`,
        },
      ],
    },
  ],
};
