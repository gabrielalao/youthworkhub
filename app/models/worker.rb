# == Schema Information
#
# Table name: workers
#
#  id              :integer          not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  username        :string           not null
#  phone_number    :string
#  bio             :text
#  birth_date      :date
#  zip_code        :string
#  lat             :float
#  lng             :float
#  min_wage        :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  picture_url     :string
#

class Worker < ActiveRecord::Base
  validates :username,
            :email,
            :password_digest,
            :session_token,
            presence: true

  validate :has_zip_or_gps

  validates :email, length: { minimum: 7 }
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_token

  has_many :jobs
  has_many :reviews, through: :jobs

  attr_reader :password

  def self.check_cred(username, password)
    w = Worker.find_by(username: username)
    return nil unless w
    w.is_password?(password) ? w : nil
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

  def has_zip_or_gps
    if zip_code.blank? && (lat.blank? || lng.blank?)
      errors.add(:base, "Please provide either gps coords or zipcode")
    end
  end

  private

    def ensure_token
      self.session_token ||= SecureRandom.urlsafe_base64(128)
    end
end
