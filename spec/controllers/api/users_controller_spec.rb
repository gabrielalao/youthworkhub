require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do

  describe 'POST #create' do
    context 'with valid params' do
      before(:each) do
        post :create, user: {
          username: 'superman',
          password: 'louis_lane',
          email: 'super@man.com',
        },
        format: :json
      end

      it { should render_template(:show) }
      it { should respond_with(200) }

      it 'creates the user' do
        expect(User.exists?).to be true
      end
    end
  end

  describe 'PATCH #update' do
    let! (:user) { create(:user) }
    before(:each) do
      #post :create, user
      patch :edit, { email: 'different@email.com', format: :json }
    end

    it { should render_template(:show) }
    it { should respond_with(200) }
    it 'should update the email address' do
      expect user.email.to_not eq('test@email.com')
    end
  end
end
