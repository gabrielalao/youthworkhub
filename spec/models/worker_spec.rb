require 'rails_helper'

RSpec.describe Worker, type: :model do
  subject(:worker) { build(:worker)}

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:email) }
  end

  describe 'assocations' do
    it { should have_many(:jobs) }
    it { should have_many(:reviews) }
  end

end
