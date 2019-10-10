require 'rails_helper'

RSpec.describe Review, type: :model do
  let!(:review) { build(:review) }

  describe 'validations' do
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:job_id) }
    it { should validate_presence_of(:rating) }
    it { should validate_presence_of(:body) }
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:job) }
  end

end
