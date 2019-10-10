require 'rails_helper'
require 'Job'

RSpec.describe Job, type: :model do
  subject(:job) { build(:job) }

  describe 'validations' do
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:wage) }
    it { should validate_presence_of(:start_time) }
    it { should validate_presence_of(:cost) }
    it { should validate_inclusion_of(:job_type).in_array(Job::JOB_TYPES) }
    it { should_not allow_value("play").for(:job_type) }
  end

  describe 'assocations' do
    it { should belong_to(:user) }
    it { should have_one(:review) }
  end

end
