FactoryGirl.define do
  factory :worker do
    username 'test_worker'
    email 'worker@work.com'
    phone_number '777-777-7777'
    password '222222'
    zip_code '94131'
  end

  factory :invalid_worker, parent: :worker do
    email 'dog'
  end
end
