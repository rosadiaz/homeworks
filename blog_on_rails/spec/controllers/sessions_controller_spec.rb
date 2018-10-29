require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
  describe "#new" do 
    it "renders new session template" do
      get(:new)
      expect(response).to render_template(:new)  
    end
    it "stores user in an instance of User" do
      get(:new)
      expect(assigns(:user)).to be_a(User)
    end
  end
  describe "#create" do
    before do
      @user = FactoryBot.create(:user, password: "password")  
    end
    context "WITH valid params" do
      before do
        post(:create, params: { user: {email: @user.email, password: "password"} })
      end
      it "stores user id in the session" do
        expect(session[:user_id]).to eq(@user.id)
      end
      it "redirects to post index root" do
        expect(response).to redirect_to(root_path)
      end
    end
    context "with OUT valid params" do
      context "if user does not exist" do
        it "renders new session" do
          post(:create, params: { user: {email: "non@existing.email"} })
          expect(response).to render_template(:new)
        end
        it "saves user params in an instance of User" do
          post(:create, params: { user: {email: "non@existing.email"} })
          expect(assigns(:user)).to be_a(User)
        end
      end
      context "if user exists in db" do
        before do
          post(:create, params: { user: {email: @user.email, password: "wrong_password"} })
        end
        context "if password is wrong" do
          it "saves user params in an instance of User" do
            expect(assigns(:user)).to be_a(User)
          end
          it "does not store user id in the session" do
            expect(session[:user_id]).to eq(nil)  
          end
          it "renders new session template" do
            expect(response).to render_template(:new)  
          end
        end
      end
    end
  end
  describe "#destroy" do
  end
end
