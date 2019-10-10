require 'rails_helper'

RSpec.describe User, type: :model do
  #   Validations
  #   Associations
  #   Class Methods
  #   Error Messages

  let!(:user) { create(:user) }

  describe 'validations' do

    it { is_expected.to validate_presence_of(:username) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_length_of(:password).is_at_least(6) }

    # it { should validate_presence_of(:session_token) }

    let(:bad_email) { build(:user, email: 'dog') }
    context "with invalid email" do
      it "does not create new user" do
        expect(bad_email).to_not be_valid
      end
    end
  end

  describe 'assocations' do
    it { should have_many(:jobs) }
  end

  describe 'model_methods' do
    describe '.check_cred' do
      context 'when given correct credentials' do
        it 'should find the right user' do
          correct_user = User.check_cred('test_user', '111111')
          expect(correct_user).to eq(user)
        end
      end

      context 'when given invalid credentials' do
        it 'should return nil' do
          no_user = User.check_cred('ghost', 'in_the_shell')
          expect(no_user).to eq(nil)
        end
      end
    end

    describe 'instance methods' do
      it 'resets session token' do
        old_token = user.session_token
        new_token = user.reset_token!
        expect(old_token).not_to eq(new_token)
      end
    end
  end

end
