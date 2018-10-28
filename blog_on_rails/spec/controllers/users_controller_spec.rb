require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "#new" do
    it "renders sign-up page" do
      get(:new)
      expect(response).to render_template(:new)  
    end
    it "stores user info in an instance of User" do
      get(:new)
      expect(assigns(:user)).to be_a_new(User)
    end
  end
  describe "#create" do
    context "with valid user" do
      it "adds new user to db" do
        
      end
      it "redirects to blog index"
    end
    context "with INvalid user" do
      it "does not add new user to db"
      it "renders sign_up page"
      it "stores invalid info to an instance of User"
    end
  end 
end
