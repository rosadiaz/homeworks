class CommentsController < ApplicationController
  def create
    @post = Post.find params[:post_id]
    @comment = Comment.new comment_params
    @comment.post = @post
    
    if @comment.save
      redirect_to post_path(@post)
    else
      @comment = @post.comment.order(created_at: :desc)
      render "posts/show"
    end
  end

  def destroy
    # @answer = Answer.find params[:id]
    @answer.destroy

    redirect_to question_path(@answer.question.id)
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
