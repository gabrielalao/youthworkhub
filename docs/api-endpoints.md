# API Endpoints

## HTML API

### Root

- `GET /` - loads the static parts of the page inclduding the bundle script and scss

## JSON API

### Users

- `POST /api/users` - for user sign-up
- `PATCH /api/users` - to edit a user's profile

### Session

- `POST /api/session` - to login
- `DELETE /api/session` - to logout

### workers

- `GET /api/workers` - returns an object with keys as worker_id and value as worker object
- `POST /api/workers` - add a new worker to the set
- `GET /api/workers/:id` - sets current_worker slice of state to worker with id = :id
- `PATCH /api/workers/:id` - update worker's details
- `DELETE /api/workers/:id` - remove worker from the list

- `GET  /api/workers/:id/reviews` - Shows a list of reviews of this worker (BONUS)

### Jobs

- `GET /api/jobs` - Shows all jobs with the user_id equal to current_user.id
- `POST /api/jobs` - Add a new job to the Jobs Table
- `GET /api/jobs/:id` - Set current_job details to the Job record with id = :id
- `DELETE /api/jobs/:id` - Only available for 'pending' jobs
- `GET /api/jobs/:id/review` - Shows the review that matches this job

### Review (BONUS)

- `GET /api/jobs/:id/review` - Shows job review
- `POST /api/jobs/:id/review` - Adds a review for a job
- `PATCH api/jobs/:id/review` - Edits a job review
