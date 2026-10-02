import { Course } from "@/types";

export const rubyOnRails: Course = {
  id: "ruby-on-rails",
  slug: "ruby-on-rails",
  title: "Ruby on Rails Toàn tập",
  description:
    "Xây dựng web app nhanh chóng với Rails, ActiveRecord và Hotwire",
  image: "/images/rails-course.jpg",
  duration: "10 tuần",
  level: "intermediate",
  lessons: [
    {
      id: "1",
      title: "Giới thiệu Rails và Setup",
      slug: "gioi-thieu-rails",
      duration: "50 phút",
      content: `# Giới thiệu Ruby on Rails

## Rails là gì?
Rails là framework web full-stack viết bằng Ruby, nổi tiếng với triết lý "Convention over Configuration" và "Don't Repeat Yourself".

## Ưu điểm
- **Convention over Configuration**: Ít config, nhiều convention
- **ActiveRecord ORM**: ORM mạnh mẽ
- **Scaffolding**: Tạo CRUD nhanh
- **Migration**: Quản lý schema
- **Testing**: Tích hợp sẵn
- **Hotwire**: Modern frontend không cần nhiều JS

## Cài đặt

### Yêu cầu
- Ruby 3.2+
- Rails 7+
- Node.js (cho asset pipeline)
- Database (PostgreSQL khuyến nghị)

### Install Ruby
\`\`\`bash
# macOS với rbenv
brew install rbenv ruby-build
rbenv install 3.3.0
rbenv global 3.3.0

# Ubuntu
sudo apt install ruby-full
\`\`\`

### Install Rails
\`\`\`bash
gem install rails
rails --version
\`\`\`

### Tạo project
\`\`\`bash
rails new myapp --database=postgresql
cd myapp
bin/rails db:create
bin/rails server
\`\`\`

## Cấu trúc project

\`\`\`
myapp/
├── app/
│   ├── controllers/
│   ├── models/
│   ├── views/
│   ├── helpers/
│   ├── jobs/
│   ├── mailers/
│   └── assets/
├── config/
│   ├── routes.rb
│   ├── database.yml
│   └── initializers/
├── db/
│   ├── migrate/
│   ├── schema.rb
│   └── seeds.rb
├── lib/
├── public/
├── test/ (hoặc spec/)
├── Gemfile
└── Gemfile.lock
\`\`\`

## MVC Flow

\`\`\`
Request → Routes → Controller → Model → View → Response
                          ↓
                     Database
\`\`\`

## Scaffolding

### Tạo full CRUD
\`\`\`bash
rails generate scaffold Post title:string body:text published:boolean
rails db:migrate
\`\`\`

Điều này tạo ra:
- Model, Migration
- Controller với 7 actions
- Views (index, show, new, edit)
- Routes
- Tests

## Controller cơ bản

\`\`\`ruby
# app/controllers/posts_controller.rb
class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all
  end

  def show
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to @post, notice: 'Post was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      redirect_to @post, notice: 'Post was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_url, notice: 'Post was successfully destroyed.'
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :published)
  end
end
\`\`\`

## Routes

\`\`\`ruby
# config/routes.rb
Rails.application.routes.draw do
  root 'home#index'

  resources :posts
  resources :users, only: [:index, :show]

  # Nested routes
  resources :posts do
    resources :comments, only: [:create, :destroy]
  end

  # API namespace
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end

  # Custom routes
  get '/about', to: 'pages#about'
  post '/contact', to: 'pages#contact'
end
\`\`\`

## Rails Console

\`\`\`bash
bin/rails console
# hoặc ngắn gọn
bin/rails c
\`\`\`

\`\`\`ruby
# Trong console
Post.all
Post.first
Post.where(published: true)
post = Post.new(title: 'Hello')
post.save
\`\`\`

## Generators

\`\`\`bash
# Model
rails g model Product name:string price:decimal stock:integer

# Controller
rails g controller Products index show

# Migration
rails g migration AddPublishedToPosts published:boolean

# Scaffold
rails g scaffold Category name:string
\`\`\`

## Bài tập thực hành
Hãy tạo ứng dụng blog đơn giản với scaffold!`,
      exercises: [
        {
          id: "1-1",
          title: "Blog cơ bản",
          description: "Tạo blog với scaffold",
          instructions: `Tạo:
1. Post model với title, body, published
2. Scaffold full CRUD
3. Custom index view hiển thị published posts
4. Routes cho posts`,
          type: "code",
          starterCode: `# app/controllers/posts_controller.rb
class PostsController < ApplicationController
  # Viết code ở đây
end`,
          solution: `# ============= Terminal commands =============
# rails generate scaffold Post title:string body:text published:boolean
# rails db:migrate

# ============= app/models/post.rb =============
class Post < ApplicationRecord
  validates :title, presence: true, length: { minimum: 2, maximum: 200 }
  validates :body, presence: true

  scope :published, -> { where(published: true) }
  scope :recent, -> { order(created_at: :desc) }

  def to_s
    title
  end
end

# ============= app/controllers/posts_controller.rb =============
class PostsController < ApplicationController
  before_action :set_post, only: %i[show edit update destroy]

  def index
    @posts = Post.recent
  end

  def show
  end

  def new
    @post = Post.new
  end

  def edit
  end

  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to post_url(@post), notice: "Post was successfully created." }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to post_url(@post), notice: "Post was successfully updated." }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @post.destroy!

    respond_to do |format|
      format.html { redirect_to posts_url, notice: "Post was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :published)
  end
end

# ============= app/views/posts/index.html.erb =============
# <h1>Posts</h1>
# <% @posts.each do |post| %>
#   <div>
#     <h2><%= link_to post.title, post %></h2>
#     <p><%= truncate(post.body, length: 200) %></p>
#     <small><%= post.published ? "Published" : "Draft" %></small>
#   </div>
# <% end %>
# <%= link_to "New Post", new_post_path %>

# ============= config/routes.rb =============
# Rails.application.routes.draw do
#   resources :posts do
#     resources :comments, only: [:create, :destroy]
#   end
#   root "posts#index"
# end`,
        },
      ],
    },
    {
      id: "2",
      title: "ActiveRecord và Migrations",
      slug: "activerecord-migrations",
      duration: "80 phút",
      prerequisites: ["1"],
      content: `# ActiveRecord và Migrations

## Migrations

### Tạo migration
\`\`\`bash
rails g migration CreateProducts name:string price:decimal stock:integer
\`\`\`

### Migration file
\`\`\`ruby
class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description
      t.decimal :price, precision: 12, scale: 2, null: false
      t.integer :stock, default: 0, null: false
      t.references :category, null: false, foreign_key: true
      t.timestamps
    end

    add_index :products, :name
    add_index :products, [:category_id, :name], unique: true
  end
end
\`\`\`

### Migration commands
\`\`\`bash
rails db:migrate
rails db:rollback
rails db:migrate:status
rails db:reset
rails db:seed
\`\`\`

### Modify table
\`\`\`ruby
class AddPublishedToPosts < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :published_at, :datetime
    add_index :posts, :published_at

    add_reference :posts, :user, foreign_key: true

    change_column_null :posts, :title, false
    change_column_default :posts, :views, from: nil, to: 0
  end
end
\`\`\`

## Models

### Basic Model
\`\`\`ruby
class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_secure_password

  validates :name, presence: true, length: { in: 2..100 }
  validates :email, presence: true, uniqueness: { case_sensitive: false },
                    format: { with: URI::MailTo::EMAIL_REGEXP }

  before_save :downcase_email
  after_create :send_welcome_email

  scope :active, -> { where(active: true) }
  scope :recent, -> { order(created_at: :desc) }

  private

  def downcase_email
    self.email = email.downcase
  end

  def send_welcome_email
    UserMailer.welcome(self).deliver_later
  end
end
\`\`\`

## Associations

### has_many / belongs_to
\`\`\`ruby
class Author < ApplicationRecord
  has_many :books, dependent: :destroy
  has_many :reviews, through: :books
end

class Book < ApplicationRecord
  belongs_to :author
  has_many :reviews, dependent: :destroy
end

class Review < ApplicationRecord
  belongs_to :book
  belongs_to :user
end
\`\`\`

### has_one
\`\`\`ruby
class User < ApplicationRecord
  has_one :profile, dependent: :destroy
end

class Profile < ApplicationRecord
  belongs_to :user
end
\`\`\`

### has_many :through
\`\`\`ruby
class Doctor < ApplicationRecord
  has_many :appointments
  has_many :patients, through: :appointments
end

class Patient < ApplicationRecord
  has_many :appointments
  has_many :doctors, through: :appointments
end

class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient
end
\`\`\`

### Polymorphic
\`\`\`ruby
class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
end

class Post < ApplicationRecord
  has_many :comments, as: :commentable
end

class Photo < ApplicationRecord
  has_many :comments, as: :commentable
end
\`\`\`

## Querying

### Basic queries
\`\`\`ruby
# Find
User.all
User.first
User.last
User.find(1)
User.find([1, 2, 3])
User.find_by(email: 'user@example.com')
User.find_by!(email: 'user@example.com')

# Where
User.where(active: true)
User.where(age: 18..65)
User.where.not(role: 'admin')
User.where(created_at: 1.week.ago..)

# Order
User.order(:name)
User.order(created_at: :desc)
User.order(name: :asc, created_at: :desc)

# Limit và Offset
User.limit(10).offset(20)

# Select
User.select(:id, :name)

# Group và Having
Order.group(:user_id).having('count(*) > 5').count
Order.group(:status).sum(:total)

# Joins
User.joins(:posts).where(posts: { published: true })
User.left_joins(:posts).where(posts: { id: nil })

# Includes (N+1 prevention)
Post.includes(:comments, :author).all
\`\`\`

### Find or create
\`\`\`ruby
User.find_or_create_by(email: 'user@example.com') do |u|
  u.name = 'John'
end

User.find_or_initialize_by(email: 'user@example.com')

User.create_or_find_by(email: 'user@example.com')
\`\`\`

### Batch processing
\`\`\`ruby
User.find_each(batch_size: 100) do |user|
  # process user
end

User.find_in_batches(batch_size: 100) do |users|
  # process batch
end
\`\`\`

### Scopes
\`\`\`ruby
class Post < ApplicationRecord
  scope :published, -> { where(published: true) }
  scope :recent, -> { order(created_at: :desc) }
  scope :by_author, ->(author_id) { where(author_id: author_id) }
  scope :popular, -> { where('views > ?', 1000) }

  # Default scope (dùng cẩn thận)
  # default_scope { where(deleted_at: nil) }
end

Post.published.recent.by_author(1)
Post.published.where('views > ?', 100)
\`\`\`

## Callbacks

\`\`\`ruby
class Post < ApplicationRecord
  before_validation :normalize_title
  before_save :calculate_word_count
  after_save :update_search_index
  before_destroy :check_can_delete
  after_commit :send_notification, on: :create

  private

  def normalize_title
    self.title = title.strip if title.present?
  end

  def calculate_word_count
    self.word_count = body.split.size
  end

  def update_search_index
    SearchIndexJob.perform_later(self)
  end

  def check_can_delete
    throw :abort if locked?
  end

  def send_notification
    NotificationJob.perform_later(id)
  end
end
\`\`\`

## Seeds

\`\`\`ruby
# db/seeds.rb
10.times do |i|
  User.create!(
    name: "User #{i}",
    email: "user#{i}@example.com",
    password: "password123"
  )
end

User.find_each do |user|
  5.times do |i|
    user.posts.create!(
      title: "Post #{i} by #{user.name}",
      body: Faker::Lorem.paragraphs(number: 3).join("\\n\\n"),
      published: [true, false].sample
    )
  end
end
\`\`\`

\`\`\`bash
rails db:seed
rails db:reset  # drop + create + migrate + seed
\`\`\`

## Bài tập thực hành
Hãy tạo model với associations và queries!`,
      exercises: [
        {
          id: "2-1",
          title: "Blog với comments",
          description: "Tạo models với associations",
          instructions: `Tạo:
1. User model (name, email, password)
2. Post model (title, body, published, user_id)
3. Comment model (body, user_id, post_id)
4. Associations và validations
5. Scopes và queries`,
          type: "code",
          starterCode: `# app/models/user.rb
class User < ApplicationRecord
  # Viết code ở đây
end`,
          solution: `# ============= Migrations =============
# rails g model User name:string email:string password_digest:string
# rails g model Post title:string body:text published:boolean user:references
# rails g model Comment body:text user:references post:references
# rails db:migrate

# ============= app/models/user.rb =============
class User < ApplicationRecord
  has_secure_password

  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :name, presence: true, length: { in: 2..100 }
  validates :email, presence: true,
                    uniqueness: { case_sensitive: false },
                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }, if: -> { password.present? }

  before_save :downcase_email

  scope :active, -> { where(active: true) }
  scope :recent, -> { order(created_at: :desc) }

  def display_name
    name.presence || email.split('@').first
  end

  private

  def downcase_email
    self.email = email.downcase.strip
  end
end

# ============= app/models/post.rb =============
class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :title, presence: true, length: { in: 2..200 }
  validates :body, presence: true, length: { minimum: 10 }

  scope :published, -> { where(published: true) }
  scope :drafts, -> { where(published: false) }
  scope :recent, -> { order(created_at: :desc) }
  scope :by_author, ->(user_id) { where(user_id: user_id) }

  before_save :calculate_word_count

  def self.search(term)
    return all if term.blank?
    where('title ILIKE :q OR body ILIKE :q', q: "%#{term}%")
  end

  def author
    user
  end

  private

  def calculate_word_count
    self.word_count = body.to_s.split.size
  end
end

# ============= app/models/comment.rb =============
class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post, counter_cache: true

  validates :body, presence: true, length: { in: 1..1000 }

  scope :recent, -> { order(created_at: :desc) }
end

# ============= Example queries =============
# User.active.recent.limit(10)
# Post.published.recent.includes(:user, :comments)
# Post.search("rails")
# User.find_by(email: 'john@example.com').posts.published
# Post.joins(:comments).group(:id).having('COUNT(comments.id) > 5')
# Post.includes(:comments).where(comments: { user_id: 1 })`,
        },
      ],
    },
    {
      id: "3",
      title: "Views, Helpers và Hotwire",
      slug: "views-helpers-hotwire",
      duration: "75 phút",
      prerequisites: ["2"],
      content: `# Views, Helpers và Hotwire

## ERB Templates

### Layout
\`\`\`erb
<!-- app/views/layouts/application.html.erb -->
<!DOCTYPE html>
<html>
  <head>
    <title><%= content_for(:title) || "My App" %></title>
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>
    <%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
    <%= javascript_importmap_tags %>
  </head>
  <body>
    <nav>
      <%= link_to "Home", root_path %>
      <%= link_to "Posts", posts_path %>
      <% if current_user %>
        <%= link_to "Logout", logout_path, method: :delete %>
      <% end %>
    </nav>

    <% flash.each do |type, msg| %>
      <div class="flash flash-<%= type %>"><%= msg %></div>
    <% end %>

    <main>
      <%= yield %>
    </main>
  </body>
</html>
\`\`\`

### Partials
\`\`\`erb
<!-- app/views/posts/_post.html.erb -->
<div class="post" id="<%= dom_id(post) %>">
  <h2><%= link_to post.title, post %></h2>
  <p><%= truncate(post.body, length: 200) %></p>
  <p>By <%= post.user.display_name %></p>
  <p>
    <%= link_to "Edit", edit_post_path(post) %> |
    <%= link_to "Delete", post, data: { turbo_method: :delete, turbo_confirm: "Sure?" } %>
  </p>
</div>

<!-- app/views/posts/index.html.erb -->
<h1>Posts</h1>
<div id="posts">
  <%= render @posts %>
</div>

<!-- Collection rendering -->
<%= render partial: "post", collection: @posts %>
\`\`\`

## View Helpers

### Common helpers
\`\`\`erb
<%= link_to "Edit", edit_post_path(@post) %>
<%= link_to "Delete", @post, method: :delete, data: { confirm: "Sure?" } %>

<%= image_tag "logo.png", alt: "Logo", class: "logo" %>
<%= image_tag @user.avatar.variant(resize_to_limit: [100, 100]) %>

<%= form_with(model: @post) do |form| %>
  <% if form.object.errors.any? %>
    <div class="errors">
      <h3><%= pluralize(form.object.errors.count, "error") %> prohibited saving:</h3>
      <ul>
        <% form.object.errors.full_messages.each do |msg| %>
          <li><%= msg %></li>
        <% end %>
      </ul>
    </div>
  <% end %>

  <div>
    <%= form.label :title %>
    <%= form.text_field :title %>
  </div>

  <div>
    <%= form.label :body %>
    <%= form.text_area :body %>
  </div>

  <div>
    <%= form.label :published %>
    <%= form.check_box :published %>
  </div>

  <%= form.submit %>
<% end %>

<%= truncate(post.body, length: 100, separator: ' ') %>
<%= pluralize(@posts.count, "post") %>
<%= number_to_currency(1000) %>
<%= time_ago_in_words(post.created_at) %>
\`\`\`

## Custom Helpers

\`\`\`ruby
# app/helpers/posts_helper.rb
module PostsHelper
  def published_badge(post)
    if post.published?
      content_tag(:span, "Published", class: "badge badge-success")
    else
      content_tag(:span, "Draft", class: "badge badge-warning")
    end
  end

  def post_excerpt(post, length: 200)
    truncate(strip_tags(post.body), length: length)
  end

  def author_avatar(user, size: 40)
    if user.avatar.attached?
      image_tag user.avatar.variant(resize_to_fill: [size, size]), class: "avatar"
    else
      content_tag(:div, user.name[0].upcase, class: "avatar avatar-initial")
    end
  end
end
\`\`\`

## Hotwire - Turbo

### Turbo Frames
\`\`\`erb
<!-- app/views/posts/index.html.erb -->
<h1>Posts</h1>

<!-- Search form inside frame -->
<%= turbo_frame_tag "posts_search" do %>
  <%= form_with url: posts_path, method: :get, data: { turbo_frame: "posts_search" } do |f| %>
    <%= f.search_field :q, value: params[:q], placeholder: "Search..." %>
  <% end %>

  <div id="posts">
    <%= render @posts %>
  </div>
<% end %>
\`\`\`

### Turbo Streams
\`\`\`ruby
# app/controllers/posts_controller.rb
class PostsController < ApplicationController
  def create
    @post = Post.new(post_params)

    if @post.save
      respond_to do |format|
        format.turbo_stream
        format.html { redirect_to @post, notice: "Post created" }
      end
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    respond_to do |format|
      format.turbo_stream { render turbo_stream: turbo_stream.remove(@post) }
      format.html { redirect_to posts_url }
    end
  end
end
\`\`\`

\`\`\`erb
<!-- app/views/posts/create.turbo_stream.erb -->
<%= turbo_stream.prepend "posts", @post %>
<%= turbo_stream.update "new_post_form", "" %>
<%= turbo_stream.replace "flash", partial: "shared/flash" %>
\`\`\`

### Turbo Broadcasts
\`\`\`ruby
class Post < ApplicationRecord
  after_create_commit -> { broadcast_prepend_to "posts", target: "posts" }
  after_update_commit -> { broadcast_replace_to "posts" }
  after_destroy_commit -> { broadcast_remove_to "posts" }
end
\`\`\`

## Stimulus Controllers

\`\`\`javascript
// app/javascript/controllers/dropdown_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu"]
  static values = { open: Boolean }

  toggle() {
    this.menuTarget.classList.toggle("hidden")
    this.openValue = !this.openValue
  }

  hide(event) {
    if (!this.element.contains(event.target)) {
      this.menuTarget.classList.add("hidden")
      this.openValue = false
    }
  }
}
\`\`\`

\`\`\`erb
<div data-controller="dropdown" data-action="click@window->dropdown#hide">
  <button data-action="click->dropdown#toggle">Menu</button>
  <div data-dropdown-target="menu" class="hidden">
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
  </div>
</div>
\`\`\`

## Forms với FormBuilder

\`\`\`ruby
# app/views/posts/_form.html.erb
<%= form_with(model: post, class: "post-form") do |form| %>
  <%= render "shared/errors", object: post %>

  <div class="field">
    <%= form.label :title %>
    <%= form.text_field :title, class: "form-control" %>
  </div>

  <div class="field">
    <%= form.label :body %>
    <%= form.text_area :body, rows: 10, class: "form-control" %>
  </div>

  <div class="field">
    <%= form.label :category_id %>
    <%= form.collection_select :category_id, Category.all, :id, :name,
                                { prompt: "Select category" },
                                { class: "form-select" } %>
  </div>

  <div class="actions">
    <%= form.submit class: "btn btn-primary" %>
  </div>
<% end %>
\`\`\`

## Bài tập thực hành
Hãy tạo views với Turbo Frames và Stimulus!`,
      exercises: [
        {
          id: "3-1",
          title: "Interactive Posts với Hotwire",
          description: "Tạo UI tương tác với Turbo và Stimulus",
          instructions: `Tạo:
1. Turbo Frame search cho posts
2. Inline edit form
3. Real-time comments với Turbo Streams
4. Stimulus controller cho like button`,
          type: "code",
          starterCode: `# app/views/posts/index.html.erb
<h1>Posts</h1>
# Viết views ở đây`,
          solution: `# ============= Turbo Frame Search =============
# app/views/posts/index.html.erb
<%= turbo_frame_tag "posts_frame" do %>
  <h1>Posts</h1>

  <%= form_with url: posts_path, method: :get,
                data: { turbo_frame: "posts_frame", turbo_action: "advance" } do |f| %>
    <%= f.search_field :q, value: params[:q],
                       placeholder: "Search posts...",
                       data: { action: "input->form#submit" } %>
  <% end %>

  <div id="posts">
    <%= render @posts %>
  </div>
<% end %>

<%= link_to "New Post", new_post_path,
            data: { turbo_frame: "modal" },
            class: "btn btn-primary" %>

<%= turbo_frame_tag "modal" %>

# ============= Inline Edit =============
# app/views/posts/_post.html.erb
<div id="<%= dom_id(post) %>">
  <%= turbo_frame_tag dom_id(post) do %>
    <h2><%= post.title %></h2>
    <p><%= post.body %></p>
    <%= link_to "Edit", edit_post_path(post) %>
  <% end %>
</div>

# app/views/posts/edit.html.erb
<%= turbo_frame_tag dom_id(@post) do %>
  <h1>Editing post</h1>
  <%= render "form", post: @post %>
  <%= link_to "Cancel", @post %>
<% end %>

# ============= Real-time Comments =============
# app/controllers/comments_controller.rb
class CommentsController < ApplicationController
  before_action :set_post

  def create
    @comment = @post.comments.build(comment_params.merge(user: current_user))

    if @comment.save
      respond_to do |format|
        format.turbo_stream
        format.html { redirect_to @post }
      end
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = @post.comments.find(params[:id])
    @comment.destroy

    respond_to do |format|
      format.turbo_stream { render turbo_stream: turbo_stream.remove(@comment) }
      format.html { redirect_to @post }
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end

# app/views/comments/create.turbo_stream.erb
<%= turbo_stream.prepend "comments", @comment %>
<%= turbo_stream.update "comment_form", "" %>
<%= turbo_stream.replace "flash", partial: "shared/flash" %>

# app/views/posts/show.html.erb
<h1><%= @post.title %></h1>
<p><%= @post.body %></p>

<h2>Comments (<%= @post.comments.count %>)</h2>

<div id="comments">
  <%= render @post.comments %>
</div>

<%= turbo_frame_tag "comment_form" do %>
  <%= form_with(model: [@post, Comment.new]) do |f| %>
    <%= f.text_area :body, placeholder: "Your comment..." %>
    <%= f.submit "Post Comment" %>
  <% end %>
<% end %>

# ============= Like Button (Stimulus) =============
# app/javascript/controllers/like_controller.js
# import { Controller } from "@hotwired/stimulus"
#
# export default class extends Controller {
#   static targets = ["button", "count"]
#   static values = { postId: Number, liked: Boolean }
#
#   async toggle() {
#     const response = await fetch(\`/posts/\${this.postIdValue}/like\`, {
#       method: "POST",
#       headers: {
#         "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
#         "Accept": "application/json"
#       }
#     })
#
#     if (response.ok) {
#       const data = await response.json()
#       this.likedValue = data.liked
#       this.countTarget.textContent = data.count
#       this.buttonTarget.classList.toggle("liked", data.liked)
#     }
#   }
# }

# app/views/posts/_like.html.erb
# <div data-controller="like"
#      data-like-post-id-value="<%= post.id %>"
#      data-like-liked-value="<%= current_user&.liked?(post) %>">
#   <button data-action="click->like#toggle"
#           data-like-target="button"
#           class="like-btn <%= 'liked' if current_user&.liked?(post) %>">
#     ❤
#   </button>
#   <span data-like-target="count"><%= post.likes.count %></span>
# </div>`,
        },
      ],
    },
    {
      id: "4",
      title: "Authentication và Authorization",
      slug: "authentication-authorization-rails",
      duration: "70 phút",
      prerequisites: ["3"],
      content: `# Authentication và Authorization trong Rails

## Authentication

### Setup với bcrypt
\`\`\`ruby
# Gemfile
gem 'bcrypt', '~> 3.1.7'
\`\`\`

\`\`\`bash
bundle install
rails g model User name:string email:string password_digest:string
rails db:migrate
\`\`\`

### User Model
\`\`\`ruby
class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 8 }, if: -> { password.present? }

  before_save { self.email = email.downcase }

  def self.from_omniauth(auth)
    # OAuth integration
  end
end
\`\`\`

### Sessions Controller
\`\`\`ruby
class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:email].downcase)

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: "Logged in successfully"
    else
      flash.now[:alert] = "Invalid email or password"
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Logged out"
  end
end
\`\`\`

### Current User Helper
\`\`\`ruby
class ApplicationController < ActionController::Base
  helper_method :current_user, :user_signed_in?

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def user_signed_in?
    current_user.present?
  end

  def require_login
    unless user_signed_in?
      redirect_to login_path, alert: "You must be logged in"
    end
  end

  def require_admin
    unless current_user&.admin?
      redirect_to root_path, alert: "Access denied"
    end
  end
end
\`\`\`

### Routes
\`\`\`ruby
Rails.application.routes.draw do
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  resources :users, only: [:new, :create]
  resources :posts
end
\`\`\`

## Devise (Alternative)

\`\`\`ruby
# Gemfile
gem 'devise'
\`\`\`

\`\`\`bash
bundle install
rails g devise:install
rails g devise User
rails db:migrate
\`\`\`

### Devise Views
\`\`\`bash
rails g devise:views
\`\`\`

### Devise Configuration
\`\`\`ruby
# config/initializers/devise.rb
config.password_length = 8..128
config.timeout_in = 30.minutes
config.confirm_within = 3.days
\`\`\`

### Protected routes
\`\`\`ruby
class PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = current_user.posts
  end
end
\`\`\`

## Authorization với Pundit

\`\`\`ruby
# Gemfile
gem 'pundit'
\`\`\`

\`\`\`bash
bundle install
rails g pundit:install
\`\`\`

### Application Policy
\`\`\`ruby
class ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?; false; end
  def show?; false; end
  def create?; false; end
  def new?; create?; end
  def update?; false; end
  def edit?; update?; end
  def destroy?; false; end

  private

  def admin?
    user&.admin?
  end

  def owner?
    user && record.respond_to?(:user_id) && record.user_id == user.id
  end

  class Scope
    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      raise NotImplementedError
    end

    private
    attr_reader :user, :scope
  end
end
\`\`\`

### Post Policy
\`\`\`ruby
class PostPolicy < ApplicationPolicy
  def index?; true; end
  def show?; record.published? || owner? || admin?; end
  def create?; user.present?; end
  def update?; owner? || admin?; end
  def destroy?; owner? || admin?; end

  class Scope < ApplicationPolicy::Scope
    def resolve
      if user&.admin?
        scope.all
      elsif user
        scope.where(published: true).or(scope.where(user_id: user.id))
      else
        scope.where(published: true)
      end
    end
  end
end
\`\`\`

### Sử dụng trong Controller
\`\`\`ruby
class PostsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @posts = policy_scope(Post)
  end

  def show
    @post = Post.find(params[:id])
    authorize @post
  end

  def edit
    @post = Post.find(params[:id])
    authorize @post
  end

  def create
    @post = current_user.posts.build(post_params)
    authorize @post

    if @post.save
      redirect_to @post
    else
      render :new
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :published)
  end
end
\`\`\`

## Roles

### Simple enum-based roles
\`\`\`ruby
# Migration
add_column :users, :role, :string, default: 'user'
add_index :users, :role

# Model
class User < ApplicationRecord
  ROLES = %w[user moderator admin].freeze

  validates :role, inclusion: { in: ROLES }

  ROLES.each do |r|
    define_method "#{r}?" do
      role == r
    end
  end
end
\`\`\`

### Sử dụng trong views
\`\`\`erb
<% if current_user&.admin? %>
  <%= link_to "Admin", admin_path %>
<% end %>

<% if policy(@post).edit? %>
  <%= link_to "Edit", edit_post_path(@post) %>
<% end %>
\`\`\`

## JWT cho API

\`\`\`ruby
# Gemfile
gem 'jwt'
\`\`\`

\`\`\`ruby
# app/services/json_web_token.rb
class JsonWebToken
  SECRET_KEY = Rails.application.secret_key_base

  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode(token)
    decoded = JWT.decode(token, SECRET_KEY).first
    HashWithIndifferentAccess.new(decoded)
  rescue JWT::ExpiredSignature, JWT::DecodeError
    nil
  end
end

# app/controllers/api/v1/auth_controller.rb
module Api
  module V1
    class AuthController < ApplicationController
      skip_before_action :verify_authenticity_token

      def login
        user = User.find_by(email: params[:email]&.downcase)

        if user&.authenticate(params[:password])
          token = JsonWebToken.encode(user_id: user.id)
          render json: { token: token, user: user.as_json(except: :password_digest) }
        else
          render json: { error: "Invalid credentials" }, status: :unauthorized
        end
      end

      def register
        user = User.new(user_params)

        if user.save
          token = JsonWebToken.encode(user_id: user.id)
          render json: { token: token, user: user.as_json(except: :password_digest) },
                 status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :email, :password)
      end
    end
  end
end

# app/controllers/api/v1/base_controller.rb
module Api
  module V1
    class BaseController < ApplicationController
      before_action :authenticate_request
      attr_reader :current_user

      private

      def authenticate_request
        header = request.headers['Authorization']
        token = header.split(' ').last if header

        decoded = JsonWebToken.decode(token)
        @current_user = User.find(decoded[:user_id]) if decoded

        unless @current_user
          render json: { error: 'Unauthorized' }, status: :unauthorized
        end
      end
    end
  end
end
\`\`\`

## Bài tập thực hành
Hãy implement authentication + authorization!`,
      exercises: [
        {
          id: "4-1",
          title: "Auth System với Pundit",
          description: "Build auth với roles và policies",
          instructions: `Tạo:
1. Session-based authentication
2. Roles (user, admin)
3. Pundit policies cho Post
4. Protected routes
5. JWT API auth`,
          type: "code",
          starterCode: `# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  # Viết code ở đây
end`,
          solution: `# ============= ApplicationController =============
class ApplicationController < ActionController::Base
  include Pundit::Authorization

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  helper_method :current_user, :user_signed_in?

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def user_signed_in?
    current_user.present?
  end

  def require_login
    unless user_signed_in?
      session[:return_to] = request.fullpath
      redirect_to login_path, alert: "Bạn cần đăng nhập"
    end
  end

  def require_admin
    unless current_user&.admin?
      redirect_to root_path, alert: "Bạn không có quyền truy cập"
    end
  end

  def user_not_authorized
    flash[:alert] = "Bạn không có quyền thực hiện hành động này"
    redirect_to(request.referrer || root_path)
  end
end

# ============= SessionsController =============
class SessionsController < ApplicationController
  def new; end

  def create
    user = User.find_by(email: params[:email].to_s.downcase)

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to session.delete(:return_to) || root_path,
                  notice: "Đăng nhập thành công"
    else
      flash.now[:alert] = "Email hoặc mật khẩu không đúng"
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Đã đăng xuất"
  end
end

# ============= User model =============
class User < ApplicationRecord
  has_secure_password
  has_many :posts, dependent: :destroy

  ROLES = %w[user moderator admin].freeze

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false },
                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :role, inclusion: { in: ROLES }
  validates :password, length: { minimum: 8 }, if: -> { password.present? }

  before_save { self.email = email.downcase }

  ROLES.each do |r|
    define_method "#{r}?" do
      role == r
    end
  end

  def admin?
    role == 'admin'
  end
end

# ============= PostPolicy =============
class PostPolicy < ApplicationPolicy
  def index?; true; end
  def show?; record.published? || owner? || user&.admin?; end
  def create?; user.present?; end
  def update?; owner? || user&.admin?; end
  def destroy?; owner? || user&.admin?; end

  class Scope < ApplicationPolicy::Scope
    def resolve
      if user&.admin?
        scope.all
      elsif user
        scope.where(published: true).or(scope.where(user_id: user.id))
      else
        scope.where(published: true)
      end
    end
  end
end

# ============= PostsController =============
class PostsController < ApplicationController
  before_action :require_login, except: [:index, :show]
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = policy_scope(Post).recent
  end

  def show
    authorize @post
  end

  def new
    @post = Post.new
    authorize @post
  end

  def create
    @post = current_user.posts.build(post_params)
    authorize @post

    if @post.save
      redirect_to @post, notice: "Tạo bài viết thành công"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    authorize @post

    if @post.update(post_params)
      redirect_to @post, notice: "Cập nhật thành công"
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    authorize @post
    @post.destroy
    redirect_to posts_path, notice: "Đã xóa"
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :published)
  end
end

# ============= Routes =============
# Rails.application.routes.draw do
#   get 'login', to: 'sessions#new'
#   post 'login', to: 'sessions#create'
#   delete 'logout', to: 'sessions#destroy'
#   get 'signup', to: 'users#new'
#   resources :users, only: [:new, :create]
#   resources :posts
#
#   namespace :admin do
#     resources :users
#   end
#
#   namespace :api do
#     namespace :v1 do
#       post 'auth/login', to: 'auth#login'
#       post 'auth/register', to: 'auth#register'
#       resources :posts
#     end
#   end
# end`,
        },
      ],
    },
    {
      id: "5",
      title: "Testing với RSpec",
      slug: "testing-rspec",
      duration: "70 phút",
      prerequisites: ["4"],
      content: `# Testing với RSpec

## Setup

\`\`\`ruby
# Gemfile
group :development, :test do
  gem 'rspec-rails'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'shoulda-matchers'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'database_cleaner-active_record'
end
\`\`\`

\`\`\`bash
bundle install
rails generate rspec:install
\`\`\`

## Model Specs

\`\`\`ruby
# spec/models/user_spec.rb
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).case_insensitive }
    it { should have_secure_password }
  end

  describe 'associations' do
    it { should have_many(:posts).dependent(:destroy) }
  end

  describe '#admin?' do
    it 'returns true for admin users' do
      user = build(:user, role: 'admin')
      expect(user.admin?).to be true
    end

    it 'returns false for regular users' do
      user = build(:user, role: 'user')
      expect(user.admin?).to be false
    end
  end

  describe '#email' do
    it 'downcases email before save' do
      user = create(:user, email: 'JOHN@EXAMPLE.COM')
      expect(user.email).to eq('john@example.com')
    end
  end
end
\`\`\`

## Factories

\`\`\`ruby
# spec/factories/users.rb
FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.unique.email }
    password { 'password123' }
    role { 'user' }

    trait :admin do
      role { 'admin' }
    end

    trait :with_posts do
      transient do
        posts_count { 3 }
      end

      after(:create) do |user, evaluator|
        create_list(:post, evaluator.posts_count, user: user)
      end
    end
  end
end

# spec/factories/posts.rb
FactoryBot.define do
  factory :post do
    title { Faker::Lorem.sentence }
    body { Faker::Lorem.paragraphs(number: 3).join("\\n\\n") }
    published { true }
    association :user

    trait :draft do
      published { false }
    end
  end
end
\`\`\`

## Controller/Request Specs

\`\`\`ruby
# spec/requests/posts_spec.rb
require 'rails_helper'

RSpec.describe 'Posts', type: :request do
  let(:user) { create(:user) }
  let(:post_record) { create(:post, user: user) }

  describe 'GET /posts' do
    it 'returns success' do
      get posts_path
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /posts/:id' do
    it 'shows the post' do
      get post_path(post_record)
      expect(response).to have_http_status(:success)
      expect(response.body).to include(post_record.title)
    end
  end

  describe 'POST /posts' do
    context 'when signed in' do
      before { sign_in(user) }

      it 'creates a new post' do
        expect {
          post posts_path, params: {
            post: { title: 'New', body: 'Body', published: true }
          }
        }.to change(Post, :count).by(1)

        expect(response).to redirect_to(post_path(Post.last))
      end

      it 'fails with invalid params' do
        expect {
          post posts_path, params: { post: { title: '' } }
        }.not_to change(Post, :count)

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    context 'when not signed in' do
      it 'redirects to login' do
        post posts_path, params: { post: { title: 'New', body: 'Body' } }
        expect(response).to redirect_to(login_path)
      end
    end
  end
end
\`\`\`

### Authentication helper
\`\`\`ruby
# spec/support/request_helpers.rb
module RequestHelpers
  def sign_in(user)
    post login_path, params: { email: user.email, password: 'password123' }
  end
end

RSpec.configure do |config|
  config.include RequestHelpers, type: :request
end
\`\`\`

## Feature Specs (System Tests)

\`\`\`ruby
# spec/system/user_registration_spec.rb
require 'rails_helper'

RSpec.describe 'User registration', type: :system do
  before { driven_by(:rack_test) }

  it 'allows a user to register' do
    visit signup_path

    fill_in 'Name', with: 'John Doe'
    fill_in 'Email', with: 'john@example.com'
    fill_in 'Password', with: 'password123'
    fill_in 'Password confirmation', with: 'password123'

    click_button 'Sign up'

    expect(page).to have_content 'Welcome'
    expect(User.last.email).to eq('john@example.com')
  end

  it 'shows validation errors' do
    visit signup_path
    click_button 'Sign up'

    expect(page).to have_content "Name can't be blank"
  end
end

# spec/system/post_management_spec.rb
RSpec.describe 'Post management', type: :system do
  let(:user) { create(:user) }

  before do
    driven_by(:rack_test)
    visit login_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'password123'
    click_button 'Log in'
  end

  it 'creates a new post' do
    visit new_post_path
    fill_in 'Title', with: 'My First Post'
    fill_in 'Body', with: 'This is the content'
    check 'Published'
    click_button 'Create Post'

    expect(page).to have_content 'Post was successfully created'
    expect(page).to have_content 'My First Post'
  end
end
\`\`\`

## Policy Specs

\`\`\`ruby
# spec/policies/post_policy_spec.rb
require 'rails_helper'

RSpec.describe PostPolicy do
  subject { described_class }

  let(:user) { create(:user) }
  let(:other_user) { create(:user) }
  let(:admin) { create(:user, :admin) }
  let(:post) { create(:post, user: user) }

  permissions :show? do
    it 'allows owner' do
      expect(subject).to permit(user, post)
    end

    it 'allows admin' do
      expect(subject).to permit(admin, post)
    end

    it 'denies other users for unpublished' do
      draft = create(:post, :draft, user: user)
      expect(subject).not_to permit(other_user, draft)
    end
  end

  permissions :update?, :destroy? do
    it 'allows owner' do
      expect(subject).to permit(user, post)
    end

    it 'allows admin' do
      expect(subject).to permit(admin, post)
    end

    it 'denies other users' do
      expect(subject).not_to permit(other_user, post)
    end
  end
end
\`\`\`

## Job Specs

\`\`\`ruby
# spec/jobs/send_welcome_email_job_spec.rb
require 'rails_helper'

RSpec.describe SendWelcomeEmailJob, type: :job do
  include ActiveJob::TestHelper

  let(:user) { create(:user) }

  it 'queues the job' do
    expect {
      described_class.perform_later(user.id)
    }.to have_enqueued_job(described_class).with(user.id)
  end

  it 'sends an email' do
    expect {
      described_class.perform_now(user.id)
    }.to change { ActionMailer::Base.deliveries.count }.by(1)
  end
end
\`\`\`

## Test Configuration

\`\`\`ruby
# spec/rails_helper.rb
require 'spec_helper'
ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'

abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'rspec/rails'

begin
  ActiveRecord::Migration.maintain_test_schema!
rescue ActiveRecord::PendingMigrationError => e
  abort e.to_s.strip
end

RSpec.configure do |config|
  config.fixture_paths = ["#{::Rails.root}/spec/fixtures"]
  config.use_transactional_fixtures = true
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!

  # FactoryBot
  config.include FactoryBot::Syntax::Methods

  # Devise test helpers
  # config.include Devise::Test::IntegrationHelpers, type: :request
end

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
\`\`\`

## Running Tests

\`\`\`bash
bundle exec rspec
bundle exec rspec spec/models
bundle exec rspec spec/models/user_spec.rb
bundle exec rspec spec/models/user_spec.rb:15  # specific line

# Coverage
COVERAGE=true bundle exec rspec
\`\`\`

## Bài tập thực hành
Hãy viết tests cho blog app!`,
      exercises: [
        {
          id: "5-1",
          title: "Test Suite cho Blog",
          description: "Viết tests với RSpec",
          instructions: `Viết:
1. Factory cho User và Post
2. Model specs với validations
3. Request specs cho controller
4. Feature spec cho CRUD flow
5. Policy specs`,
          type: "code",
          starterCode: `# spec/factories/users.rb
FactoryBot.define do
  # Viết factory ở đây
end`,
          solution: `# ============= spec/factories/users.rb =============
FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.unique.email }
    password { 'password123' }
    role { 'user' }

    trait :admin do
      role { 'admin' }
    end

    trait :with_posts do
      transient do
        posts_count { 3 }
      end

      after(:create) do |user, evaluator|
        create_list(:post, evaluator.posts_count, user: user)
      end
    end
  end
end

# ============= spec/factories/posts.rb =============
FactoryBot.define do
  factory :post do
    title { Faker::Lorem.sentence(word_count: 5) }
    body { Faker::Lorem.paragraphs(number: 3).join("\\n\\n") }
    published { true }
    association :user

    trait :draft do
      published { false }
    end

    trait :old do
      created_at { 1.month.ago }
    end
  end
end

# ============= spec/models/user_spec.rb =============
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    subject { build(:user) }

    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).case_insensitive }
    it { should validate_length_of(:name).is_at_least(2).is_at_most(100) }
  end

  describe 'associations' do
    it { should have_many(:posts).dependent(:destroy) }
  end

  describe 'callbacks' do
    it 'downcases email before save' do
      user = create(:user, email: 'TEST@EXAMPLE.COM')
      expect(user.reload.email).to eq('test@example.com')
    end
  end

  describe 'roles' do
    it 'defaults to user role' do
      expect(create(:user).role).to eq('user')
    end

    it 'returns true for admin?' do
      expect(build(:user, :admin).admin?).to be true
    end

    it 'returns false for regular user' do
      expect(build(:user).admin?).to be false
    end
  end
end

# ============= spec/models/post_spec.rb =============
require 'rails_helper'

RSpec.describe Post, type: :model do
  describe 'validations' do
    subject { build(:post) }

    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:body) }
    it { should validate_length_of(:title).is_at_least(2).is_at_most(200) }
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:comments).dependent(:destroy) }
  end

  describe 'scopes' do
    let!(:published) { create(:post, published: true) }
    let!(:draft) { create(:post, :draft) }

    it 'returns only published posts' do
      expect(Post.published).to include(published)
      expect(Post.published).not_to include(draft)
    end

    it 'returns drafts' do
      expect(Post.drafts).to include(draft)
      expect(Post.drafts).not_to include(published)
    end

    it 'orders by recent first' do
      old = create(:post, created_at: 1.week.ago)
      expect(Post.recent.first).not_to eq(old)
    end
  end

  describe '.search' do
    let!(:rails_post) { create(:post, title: 'Learning Rails') }
    let!(:python_post) { create(:post, title: 'Python Guide') }

    it 'finds posts matching title' do
      expect(Post.search('rails')).to include(rails_post)
      expect(Post.search('rails')).not_to include(python_post)
    end

    it 'returns all when term blank' do
      expect(Post.search('').count).to eq(Post.count)
    end
  end
end

# ============= spec/requests/posts_spec.rb =============
require 'rails_helper'

RSpec.describe 'Posts API', type: :request do
  let(:user) { create(:user) }
  let(:valid_attributes) { attributes_for(:post) }

  describe 'GET /posts' do
    it 'returns success' do
      create_list(:post, 3)
      get posts_path
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST /posts' do
    context 'when authenticated' do
      before { sign_in(user) }

      it 'creates a post' do
        expect {
          post posts_path, params: { post: valid_attributes }
        }.to change(Post, :count).by(1)
      end

      it 'with invalid data returns 422' do
        expect {
          post posts_path, params: { post: { title: '' } }
        }.not_to change(Post, :count)
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    context 'when not authenticated' do
      it 'redirects to login' do
        post posts_path, params: { post: valid_attributes }
        expect(response).to redirect_to(login_path)
      end
    end
  end

  describe 'PUT /posts/:id' do
    let(:post_record) { create(:post, user: user) }
    before { sign_in(user) }

    it 'updates own post' do
      put post_path(post_record), params: { post: { title: 'Updated' } }
      expect(post_record.reload.title).to eq('Updated')
    end
  end

  describe 'DELETE /posts/:id' do
    let!(:post_record) { create(:post, user: user) }
    before { sign_in(user) }

    it 'deletes own post' do
      expect {
        delete post_path(post_record)
      }.to change(Post, :count).by(-1)
    end
  end
end

# ============= spec/system/post_flow_spec.rb =============
require 'rails_helper'

RSpec.describe 'Post workflow', type: :system do
  let(:user) { create(:user) }

  before do
    driven_by(:rack_test)
    sign_in_as(user)
  end

  it 'creates a post end-to-end' do
    visit new_post_path
    fill_in 'Title', with: 'My Post'
    fill_in 'Body', with: 'Post body content'
    check 'Published'
    click_button 'Create Post'

    expect(page).to have_content('Post was successfully created')
    expect(page).to have_content('My Post')
  end

  it 'shows validation errors' do
    visit new_post_path
    click_button 'Create Post'

    expect(page).to have_content("Title can't be blank")
  end

  def sign_in_as(user)
    visit login_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'password123'
    click_button 'Log in'
  end
end

# ============= spec/policies/post_policy_spec.rb =============
require 'rails_helper'

RSpec.describe PostPolicy do
  subject { described_class }

  let(:owner) { create(:user) }
  let(:stranger) { create(:user) }
  let(:admin) { create(:user, :admin) }
  let(:post_record) { create(:post, user: owner) }

  permissions :update?, :destroy? do
    it 'permits owner' do
      expect(subject).to permit(owner, post_record)
    end

    it 'permits admin' do
      expect(subject).to permit(admin, post_record)
    end

    it 'denies stranger' do
      expect(subject).not_to permit(stranger, post_record)
    end
  end

  permissions :show? do
    it 'permits everyone for published posts' do
      expect(subject).to permit(nil, post_record)
    end

    it 'denies stranger for drafts' do
      draft = create(:post, :draft, user: owner)
      expect(subject).not_to permit(stranger, draft)
    end
  end
end`,
        },
      ],
    },
    {
      id: "6",
      title: "Background Jobs và Action Mailer",
      slug: "background-jobs-mailer",
      duration: "60 phút",
      prerequisites: ["5"],
      content: `# Background Jobs và Action Mailer

## Active Job

### Tạo Job
\`\`\`bash
rails g job SendWelcomeEmail
\`\`\`

\`\`\`ruby
# app/jobs/send_welcome_email_job.rb
class SendWelcomeEmailJob < ApplicationJob
  queue_as :default

  retry_on StandardError, wait: :exponentially_longer, attempts: 3

  def perform(user_id)
    user = User.find(user_id)
    UserMailer.welcome(user).deliver_now
  end
end
\`\`\`

### Enqueue Job
\`\`\`ruby
SendWelcomeEmailJob.perform_later(user.id)
SendWelcomeEmailJob.set(wait: 1.hour).perform_later(user.id)
SendWelcomeEmailJob.set(wait_until: Date.tomorrow.noon).perform_later(user.id)
SendWelcomeEmailJob.set(queue: :high_priority).perform_later(user.id)
\`\`\`

### Job với arguments
\`\`\`ruby
class ProcessOrderJob < ApplicationJob
  queue_as :orders

  discard_on ActiveRecord::RecordNotFound

  def perform(order)
    # ActiveRecord objects được serialize tự động
    order.process!
  end
end

ProcessOrderJob.perform_later(order)
\`\`\`

## Action Mailer

### Generate Mailer
\`\`\`bash
rails g mailer UserMailer welcome password_reset
\`\`\`

### Mailer Class
\`\`\`ruby
# app/mailers/user_mailer.rb
class UserMailer < ApplicationMailer
  default from: 'noreply@myapp.com'

  def welcome(user)
    @user = user
    @login_url = login_url

    mail(
      to: @user.email,
      subject: "Welcome to MyApp!"
    )
  end

  def password_reset(user)
    @user = user
    @reset_url = edit_password_reset_url(user.reset_token)

    mail(to: @user.email, subject: "Reset your password")
  end
end
\`\`\`

### Views
\`\`\`erb
<!-- app/views/user_mailer/welcome.html.erb -->
<h1>Welcome, <%= @user.name %>!</h1>

<p>Thanks for signing up. We're excited to have you.</p>

<p><%= link_to "Log in here", @login_url %></p>

<p>Best regards,<br>The MyApp Team</p>

<!-- app/views/user_mailer/welcome.text.erb -->
Welcome, <%= @user.name %>!

Thanks for signing up. Log in here: <%= @login_url %>

Best regards,
The MyApp Team
\`\`\`

### Application Mailer Layout
\`\`\`erb
<!-- app/views/layouts/mailer.html.erb -->
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
      body { font-family: Arial, sans-serif; }
      .header { background: #333; color: white; padding: 20px; }
      .content { padding: 20px; }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>MyApp</h1>
    </div>
    <div class="content">
      <%= yield %>
    </div>
  </body>
</html>
\`\`\`

## Configuration

### SMTP cho development (Mailcatcher/Mailhog)
\`\`\`ruby
# config/environments/development.rb
config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  address: 'localhost',
  port: 1025
}
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
\`\`\`

### Production (Postmark, SendGrid, SES)
\`\`\`ruby
# config/environments/production.rb
config.action_mailer.delivery_method = :postmark
config.action_mailer.postmark_settings = {
  api_token: Rails.application.credentials.postmark_api_token
}
config.action_mailer.default_url_options = { host: 'myapp.com' }
\`\`\`

## Job Backends

### Sidekiq (Redis)
\`\`\`ruby
# Gemfile
gem 'sidekiq'
gem 'sidekiq-cron'

# config/application.rb
config.active_job.queue_adapter = :sidekiq
\`\`\`

\`\`\`yaml
# config/sidekiq.yml
:concurrency: 5
:queues:
  - [critical, 3]
  - [default, 2]
  - [low, 1]
\`\`\`

### Solid Queue (Rails 8 default)
\`\`\`ruby
config.active_job.queue_adapter = :solid_queue
\`\`\`

\`\`\`bash
bin/rails solid_queue:start
\`\`\`

## Recurring Jobs

### sidekiq-cron
\`\`\`ruby
# config/initializers/sidekiq.rb
schedule = {
  'daily_digest' => {
    'cron' => '0 8 * * *',
    'class' => 'DailyDigestJob',
    'queue' => 'default'
  },
  'cleanup_job' => {
    'cron' => '0 2 * * 0',
    'class' => 'CleanupJob',
    'queue' => 'low'
  }
}

Sidekiq::Cron::Job.load_from_hash(schedule)
\`\`\`

### Solid Queue recurring
\`\`\`yaml
# config/recurring.yml
production:
  daily_digest:
    class: DailyDigestJob
    schedule: every day at 8am

  cleanup:
    class: CleanupJob
    schedule: every sunday at 2am
\`\`\`

## Job Patterns

### Batch processing
\`\`\`ruby
class ProcessBatchJob < ApplicationJob
  def perform(user_ids)
    User.where(id: user_ids).find_each do |user|
      ProcessUserJob.perform_later(user.id)
    end
  end
end

# Enqueue
user_ids = User.pluck(:id)
ProcessBatchJob.perform_later(user_ids)
\`\`\`

### Job chaining
\`\`\`ruby
class ImportDataJob < ApplicationJob
  def perform(file_path)
    result = import_file(file_path)
    NotifyImportCompleteJob.perform_later(result.id)
  end
end
\`\`\`

### Idempotent jobs
\`\`\`ruby
class ChargeCustomerJob < ApplicationJob
  def perform(order_id)
    order = Order.find(order_id)
    return if order.paid?  # idempotency

    PaymentGateway.charge(order)
    order.mark_as_paid!
  end
end
\`\`\`

## Monitoring

### Sidekiq Web UI
\`\`\`ruby
# config/routes.rb
require 'sidekiq/web'
mount Sidekiq::Web => '/sidekiq'

# Với basic auth
authenticate :user, ->(u) { u.admin? } do
  mount Sidekiq::Web => '/sidekiq'
end
\`\`\`

## Mailer Preview

\`\`\`ruby
# test/mailers/previews/user_mailer_preview.rb
class UserMailerPreview < ActionMailer::Preview
  def welcome
    UserMailer.welcome(User.first)
  end

  def password_reset
    UserMailer.password_reset(User.first)
  end
end
\`\`\`

Truy cập \`/rails/mailers\` trong development.

## Test Jobs và Mailers

\`\`\`ruby
# spec/jobs/send_welcome_email_job_spec.rb
require 'rails_helper'

RSpec.describe SendWelcomeEmailJob, type: :job do
  let(:user) { create(:user) }

  it 'queues the job' do
    expect {
      described_class.perform_later(user.id)
    }.to have_enqueued_job(described_class).with(user.id)
  end

  it 'sends welcome email' do
    expect {
      described_class.perform_now(user.id)
    }.to change { ActionMailer::Base.deliveries.count }.by(1)
  end

  it 'retries on error' do
    allow(UserMailer).to receive(:welcome).and_raise(StandardError)
    expect {
      described_class.perform_now(user.id)
    }.to have_enqueued_job(described_class)
  end
end

# spec/mailers/user_mailer_spec.rb
require 'rails_helper'

RSpec.describe UserMailer, type: :mailer do
  let(:user) { create(:user) }

  describe '#welcome' do
    let(:mail) { described_class.welcome(user) }

    it 'renders the subject' do
      expect(mail.subject).to eq('Welcome to MyApp!')
    end

    it 'sends to user email' do
      expect(mail.to).to eq([user.email])
    end

    it 'sends from noreply' do
      expect(mail.from).to eq(['noreply@myapp.com'])
    end

    it 'includes user name in body' do
      expect(mail.body.encoded).to include(user.name)
    end
  end
end
\`\`\`

## Bài tập thực hành
Hãy tạo welcome email job và mailer!`,
      exercises: [
        {
          id: "6-1",
          title: "Welcome Email Flow",
          description: "Implement email workflow với jobs",
          instructions: `Tạo:
1. UserMailer với welcome email
2. SendWelcomeEmailJob
3. Trigger từ User model
4. Tests cho cả job và mailer
5. Mailer preview`,
          type: "code",
          starterCode: `# app/mailers/user_mailer.rb
class UserMailer < ApplicationMailer
  # Viết code ở đây
end`,
          solution: `# ============= UserMailer =============
class UserMailer < ApplicationMailer
  default from: 'noreply@myapp.com'

  def welcome(user)
    @user = user
    @login_url = login_url
    @support_email = 'support@myapp.com'

    mail(
      to: @user.email,
      subject: "Chào mừng #{@user.name} đến với MyApp!"
    )
  end

  def password_reset(user)
    @user = user
    @reset_token = user.signed_id(purpose: :password_reset, expires_in: 15.minutes)
    @reset_url = edit_password_reset_url(@reset_token)

    mail(to: @user.email, subject: 'Reset mật khẩu của bạn')
  end
end

# ============= SendWelcomeEmailJob =============
class SendWelcomeEmailJob < ApplicationJob
  queue_as :mailers

  retry_on StandardError, wait: :polynomially_longer, attempts: 3
  discard_on ActiveJob::DeserializationError

  def perform(user_id)
    user = User.find_by(id: user_id)
    return unless user

    UserMailer.welcome(user).deliver_now
  end
end

# ============= User model callback =============
class User < ApplicationRecord
  has_secure_password

  after_create_commit :enqueue_welcome_email

  private

  def enqueue_welcome_email
    SendWelcomeEmailJob.perform_later(id)
  end
end

# ============= Views =============
# app/views/user_mailer/welcome.html.erb
# <h1>Chào mừng <%= @user.name %>!</h1>
# <p>Cảm ơn bạn đã đăng ký tài khoản tại MyApp.</p>
# <p><%= link_to "Đăng nhập ngay", @login_url %></p>
# <p>Cần hỗ trợ? Liên hệ <%= @support_email %></p>

# app/views/user_mailer/welcome.text.erb
# Chào mừng <%= @user.name %>!
#
# Cảm ơn bạn đã đăng ký tài khoản tại MyApp.
# Đăng nhập tại: <%= @login_url %>
#
# Cần hỗ trợ? Liên hệ <%= @support_email %>

# ============= Preview =============
# test/mailers/previews/user_mailer_preview.rb
class UserMailerPreview < ActionMailer::Preview
  def welcome
    user = User.first || User.new(name: 'Preview User', email: 'preview@example.com')
    UserMailer.welcome(user)
  end
end

# ============= Tests =============
# spec/mailers/user_mailer_spec.rb
require 'rails_helper'

RSpec.describe UserMailer, type: :mailer do
  let(:user) { create(:user) }

  describe '#welcome' do
    let(:mail) { described_class.welcome(user) }

    it 'sends to the user email' do
      expect(mail.to).to eq([user.email])
    end

    it 'has correct subject' do
      expect(mail.subject).to include('Chào mừng')
    end

    it 'includes user name' do
      expect(mail.body.encoded).to include(user.name)
    end

    it 'includes login URL' do
      expect(mail.body.encoded).to include(login_url)
    end
  end
end

# spec/jobs/send_welcome_email_job_spec.rb
require 'rails_helper'

RSpec.describe SendWelcomeEmailJob, type: :job do
  let(:user) { create(:user) }

  it 'enqueues the job' do
    expect {
      described_class.perform_later(user.id)
    }.to have_enqueued_job(described_class).with(user.id)
  end

  it 'sends welcome email' do
    expect {
      described_class.perform_now(user.id)
    }.to change { ActionMailer::Base.deliveries.count }.by(1)

    mail = ActionMailer::Base.deliveries.last
    expect(mail.to).to eq([user.email])
  end

  it 'discards gracefully when user missing' do
    expect {
      described_class.perform_now(999_999)
    }.not_to raise_error
  end
end

# spec/models/user_spec.rb (bonus)
# describe 'callbacks' do
#   it 'enqueues welcome email after create' do
#     expect {
#       create(:user)
#     }.to have_enqueued_job(SendWelcomeEmailJob)
#   end
# end`,
        },
      ],
    },
  ],
};
