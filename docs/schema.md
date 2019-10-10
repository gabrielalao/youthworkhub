# Database Schema
`Users Table`:
  - `id`
  - `name`
  - `email`
  - `phone_number`
  - `picture_url`
  - `password_digest`
  - `session_token`

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
phone_number    | string    |
picture_url     | string    | unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

  `Jobs Table`:
   - `id`
   - `user_id`
   - `job_type`
   - `description`
   - `location`
   - `duration` (in hours as integers)
   - `wage` (in dollars per hour)
   - `time` (exact date and time for start of job)
   - `cost` (set automatically upon confirmation of job posting)
   - `status` (fulfilled', 'unfulfilled', 'pending', or 'designated')
   - `worker_id` (set upon designation)

## Jobs
 column name | data type | details
 ------------|-----------|-----------------------
 id          | integer   | not null, primary key
 user_id     | string    | not null, foreign key (references user who posted job), indexed
 description | text      | not null
 location    | string    | not null, (address)
 duration    | integer   | not null, number of hours
 wage        | integer   | not null, dollars per hour
 start_time  | date      | not null, start time of job
 location    | PostGis   | not null, lat/lng for location
 cost        | integer   | not null, total cost in dollars (wage * duration)
 status      | string    | not null, only: 'pending','designated','fulfilled','unfullfilled'
 worker_id   | integer   | empty until 'designated' or 'fulfilled'


   `Worker Table`:
    - `id`
    - `email`
    - `name`
    - `phone_number`
    - `bio`
    <!-- - `skills` - like tags (limited number of possibilities) -->
    - `date_of_birth`
    - `zip_code`
    - `lat`
    - `lng`
    - `min_wage` (in dollars per hour)

## Workers
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
email        | string    | not null, indexed, unique
name         | string    | not null, indexed, unique
phone_number | string    |
bio          | text      | not null
skills       | text      | csv list of skills that Worker claims
date_of_birth| date      | not null
zip_code     | integer   | not null
lat          | float     | not null
lat          | float     | not null
min_wage     | integer   | in dollars per hour
