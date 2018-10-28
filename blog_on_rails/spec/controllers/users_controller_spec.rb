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
        before_count = User.count
        post(:create, params: {user: FactoryBot.attributes_for(:user)})
        after_count = User.count
        expect(after_count).to eq(before_count + 1)
      end
      it "redirects to blog index" do
        post(:create, params: {user: FactoryBot.attributes_for(:user)})
        expect(response).to redirect_to(root_path)
      end
    end
    context "with INvalid user" do
      # it "does not add new user to db" do
      #   before_count = User.count
      #   post(:create, params: {user: FactoryBot.attributes_for(:user, email: nil)})
      #   after_count = User.count
      #   expect(after_count).to eq(before_count)
      # end
      it "renders sign_up page" do
        post(:create, params: {user: FactoryBot.attributes_for(:user, email: nil)})
        expect(response).to render_template(:new)
      end
      it "stores invalid info to an instance of User" do
        post(:create, params: {user: FactoryBot.attributes_for(:user, email: nil)})
        expect(assigns(:user)).to be_a_new(User)
      end
    end
  end 
end
