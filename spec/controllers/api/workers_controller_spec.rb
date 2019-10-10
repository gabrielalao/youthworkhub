require 'rails_helper'

RSpec.describe Api::WorkersController, type: :controller do

  describe 'POST #create' do
    context 'with valid params' do
      before(:each) do
        post :create, worker: {
          username: 'bad_mamma_jamma',
          password: 'supabad',
          email: 'mamma@jamma.com',
          phone_number: '4444444444',
          min_wage: '10'
        },
        format: :json
      end

      it { should render_template(:show) }
      it { should respond_with(200) }

      it 'creates the worker' do
        expect(Worker.exists?).to be true
      end
    end
  end

  describe 'PATCH #update' do
    let! (:worker) { create(:worker) }
    before(:each) do
      patch :update, { email: 'new_email@work.com', format: :json }
    end

    it { should render_template(:show) }
    it { should respond_with(200) }
    it 'should update the email address' do
      expect worker.email.to_not eq('test@email.com')
    end
  end

end
