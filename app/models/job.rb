# == Schema Information
#
# Table name: jobs
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  description :text             not null
#  job_type    :string           not null
#  address     :string
#  duration    :integer
#  wage        :integer          not null
#  start_time  :datetime         not null
#  lat         :float
#  lng         :float
#  cost        :integer          not null
#  status      :string           default("pending")
#  worker_id   :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class Job < ActiveRecord::Base

  JOB_TYPES = ["art",
               "baby-sitting",
               "cleaning",
               "computer work",
               "gardening",
               "kitchen work",
               "lawn-mowing",
               "music",
               "pet-care",
               "tutoring",
               "yard-work"]

  validates :user_id,
            :description,
            :job_type,
            :wage,
            :start_time,
            :cost, presence: true
            
  validates :job_type, inclusion: { in: JOB_TYPES }

  validate :has_address_or_gps

  belongs_to :user

  has_one :review

  def self.in_bounds(bounds)
    # Assuming North America
    Job.where("lat <= ? AND lat >= ? AND lng <= ? AND lng >= ?",
                bounds[:northEast][:lat],
                bounds[:southWest][:lat],
                bounds[:northEast][:lng],
                bounds[:southWest][:lng])
  end

  def has_address_or_gps
    if address.blank? && (lat.blank? || lng.blank?)
      errors.add(:base, "Please provide either gps coords or an address for this job.")
    end
  end
end
