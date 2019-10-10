# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  phone_number    :string
#  picture_url     :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :email, :username, uniqueness: true
  validates :email, :username, :password_digest, :session_token, presence: true
  validates :email, length: { minimum: 7 }
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_token

  has_many :jobs

  attr_reader :password

  def self.check_cred(username, password)
    u = User.find_by(username: username)
    return nil unless u
    u.is_password?(password) ? u : nil
  end

  def password=(word)
    @password = word
    self.password_digest = BCrypt::Password.create(word)
  end

  def is_password?(word)
    BCrypt::Password.new(self.password_digest).is_password?(word)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(128)
    self.save
    self.session_token
  end

  private
    def ensure_token
      self.session_token ||= SecureRandom.urlsafe_base64(128)
    end
end
