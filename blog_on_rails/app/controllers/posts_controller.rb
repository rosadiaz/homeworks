class PostsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
    @posts = Post.all.order(id: :desc)
  end
  def show
    @post = Post.find params[:id]
    @comment = Comment.new
    @comments = @post.comments.order(created_at: :desc)
  end

  def new
    @post = Post.new
  end
  def create
    @post = Post.new post_params
    if @post.save
      redirect_to post_path(@post.id)
    else
      render :new
    end
  end

  def destroy
    @post = Post.find params[:id]
    @post.destroy
    redirect_to posts_path
  end

  def edit
    @post = Post.find params[:id]
  end
  def update
    @post = Post.find params[:id]
    if @post.update post_params
      redirect_to post_path(@post.id)
    else
      render :edit
    end

  end



  private
  def post_params
    params.require(:post).permit(:title, :body)
  end

end
