require 'rails_helper'

RSpec.describe Api::JobsController, type: :controller do

  describe 'GET #index' do
    render_views
    # Without the above directive, response.body would only be an empty string.

    let!(:job) { FactoryGirl.create(:job)}
    let!(:job_2) { create(:job, lat: 50, lng: 250, start_time: 434334) }
    context 'when there are no bounds or seating ranges' do
      before(:each) do
        get :index, { format: :json }
      end

      it { should respond_with(200) }
      it { should render_template(:index) }
      it 'renders all existing jobs' do
        rendered_response = JSON.parse(response.body)
        expect(rendered_response.length).to eq(2)
      end
    end
  end

  # describe 'POST #create' do
  #   context 'with valid params' do
  #     before(:each) do
  #       post :create, worker: {
  #         username: 'bad_mamma_jamma',
  #         password: 'supabad',
  #         email: 'mamma@jamma.com',
  #         phone_number: '4444444444',
  #         min_wage: '10'
  #       },
  #       format: :json
  #     end
  #
  #     it { should render_template(:show) }
  #     it { should respond_with(200) }
  #
  #     it 'creates the worker' do
  #       expect(Worker.exists?).to be true
  #     end
  #   end
  # end
  #
  # describe 'PATCH #update' do
  #   let! (:worker) { create(:worker) }
  #   before(:each) do
  #     patch :update, { email: 'new_email@work.com', format: :json }
  #   end
  #
  #   it { should render_template(:show) }
  #   it { should respond_with(200) }
  #   it 'should update the email address' do
  #     expect worker.email.to_not eq('test@email.com')
  #   end
  # end
  #
  #   context 'with invalid params' do
  #     before(:each) do
  #       post :create, bench: { description: 'ugly' }, format: :json
  #     end
  #
  #     it { should respond_with(422) }
  #     it 'does not create the bench' do
  #       expect(Bench.exists?).to be false
  #     end
  #   end
  # end
  #

end
