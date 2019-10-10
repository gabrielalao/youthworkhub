YouthWorkHub

# YouthWorkHub

[YouthWorkHub Live][heroku]

[heroku]: https://youth-work-hub.herokuapp.com/#/

[Trello Link][trello]

[trello]: https://trello.com/b/y6VRF3va

YouthWorkHub is a full-stack web application inspired by TaskRabbit. It
provides a platform for people to find young people to help with domestic
work types of odd jobs. This web application uses Ruby on Rails with Postgres for its backend, and React/Redux for its front end.

## Minimum Viable Product

- [ ] Hosting on Heroku
- [ ] Login, and guest/demo login
- [ ] Account creation and update
- [ ] Post Jobs
- [ ] View Jobs Index (only jobs posted by currentUser)
- [ ] View Workers Index
- [ ] View Individual Worker's Show page
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Setup Rails Backend and implement front-end Authorization (2 days)

**Objective:** Users can create accounts, Log-in, and Log-out

### Phase 2: Navbar and Header Sections (1 day)

**Objective:** Navigation available to switch between three views. Only 'home' and 'workers index' are available to users who are not logged in.

### Phase 3: Home Page (1 day)

**Objective:** The home page shows the site's mission statement and some testimonials.

### Phase 3: Job Model (3 days)

**Objective:** Jobs can be created, edited and destroyed. Confirmation dialogue box appears to confirm job posting after initial 'submit'.

### Phase 4: Worker Model (2 day)

**Objective:** Worker profiles can be viewed through index or show views.

### Phase 5: Review of Job performance (1 day)

**objective:** Users can post review of a worker's job performance. This requires a Review model and data table for Reviews

### Phase 6: - Add recent reviews and average review score to Worker's Show Page (1 day)

**objective:** Data from the reviews table will be pulled into the Worker's show page to provide useful information about past performance.

### Bonus Features (TBD)
- [ ] Mock Payment Processing
- [ ] Worker Sign Up

## Feature Details

### User Signup/Login/Logout
Users must be logged in to post jobs. Without logging in, users may still visit the home page, and the 'available workers' list.

### Post Jobs
Logged in users can post new jobs. This uses a form to collect the relevant data. The form includes a drop-down menu from which to select the job_type, text input for title, text-area for job description, numerical selection for hourly wage, and number of hours. A final dialog box appears to confirm job posting because the user will be charged if a worker accepts the job.

### View Jobs (List View and Show View)
Logged in users can view all of the jobs they have ever posted. The list view of all jobs will show the job-type, date, and completion status. Each job will link to a show view that includes all of the information about the job. If the job has been fulfilled, the name of the worker who did the job will show and link to that worker's show page.

### View Workers (List View and Show View)
Workers have a profiles. The list view will show all workers with name, pic, and first text of bio. The list will be clickable, and link to the workers' show view. The show view will include a picture, full bio.  

Logged-in viewers will also have a 'contact' link that can be used to message a worker.
Logged-in viewers with an available job post can click a 'request' button to specifically request one worker for the job.
Add a schedule to keep track of workers' availability.

## Resources

### User Table Signup and Authentication
 Site visitors may view the home page and worker listing without logging in. Once logged in, users will have access to a 'post job' form that allows them to post a new job. User information will be stored in a Users data table:

`Users Table`:
  - `id`
  - `name`
  - `email`
  - `phone_number`
  - `picture_url`
  - `password_digest`
  - `session_token`

 Guest login will allow users to access logged in features without filling in the form to join.

### Jobs Table for Job Postings
 Logged in users will gain access to a listing of their posted jobs. The basic list view will be in chronological order. In addition to the data from the form, jobs will have a status of 'fulfilled', 'unfulfilled', 'pending', or 'designated'.

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

### Workers Table
 The workers resource will maintain data about each worker. For the initial phase of this project, the workers will remain static, but future enhancements may allow worker signup.

 `Worker Table`:
  - `id`
  - `email`
  - `phone_number`
  - `bio`
  - `skills` - like tags (limited number of possibilities) (BONUS)
  - `date_of_birth`
  - `zip_code`
  - `min_wage` (in dollars per hour)
  - `time` (exact date and time for start of job)
  - `cost` (set automatically upon confirmation of job posting)
  - `status` (fulfilled', 'unfulfilled', 'pending', or 'designated')
  - `worker_id` (set upon designation)

## React Components

### Header
  Includes Logo and the 'Login Dialogue'

### Login Dialogue
  Appears in upper right corner. Contains logout button if logged in. Contains links to login when not logged in.

### Login Form
  Contains highly visible 'guest login' button. Also includes inputs for username and password. A link will also be provided for sign-up.

### Sign-up Form
  Same as login form but includes more fields, such as email and phone number. Also includes 'guest login' link.

### Navbar
  Contains a list of links to: 'Home', 'Workers', 'My Jobs', 'Profile'

### User's Profile
  Show basic user's information including email, and phone number. Provide link to edit profile.

### User's Profile Edit Form
  Same as sign-up form, but no link to guest-login.

### Workers List
  Shows a ul that lists all of the workers. Each item includes a thumbnail image, zip_code, and first 25 chars of bio. Each item will have an onClick property that links to the corresponding Show view.

### Worker Show
  Detail view of worker includes larger image, full bio, zip_code, and (eventually) average review score, and list of Reviews

### New Job Form
  Allows logged in users to post new jobs. Form includes drop-down menu of job-types, text-area for job description, inputs for start_time, duration, and hourly wage.

### Confirm Job Dialogue box
  Requires users to confirm before posting new job to database. Includes total cost, start_time, and end_time for user to review.

### Jobs List
  List all of the jobs posted by current user in chronological order. Only show job_type, date, first twenty-five chars of description, and status in list. List items are clickable and link to the Show view for each job.

### Jobs Show
  The show view for each job has all of the information including the job description, and a link to a worker's view page if the job has been designated or fulfilled. As a bonus feature, a link to post or edit a review of the worker's performance will be added to the job's show view.

## Bonus Features
 review of workers (customers can leave comments and ratings). This would require a 'Reviews' resource that would join workers with customers.

 Worker listing shows average rating score and list of reviews. This enhancement can pull data from the Reviews table to add useful information to the Worker's show page.

 worker schedules (updated as jobs are accepted). This would require a new 'Schedules' resource that would have a one to one association to Workers.

## Implementation Timeline
This time schedule will help keep the project moving forward.

### Phase 1 Signup/Login/Logout (days 1 and 2)
2 Days
Day 1: Get User resource set up. Implement login/logout functionality. Set up header element to contain logo and Login component.
Day 2: Add form for new User creation and editing User details.

### Phase 2 Worker Resource Index/Show (days 3 and 4)
2 Days
Day 1: Implement Workers table. Build relevant React components for Worker Index and Show viewers
Day 2: Add seed data with at least five fictional Workers, and style to Index and Show views to look good with actual photos, and content.

### Phase 3 Jobs Resource Index/Show (days 5 and 6)
2 Days
Day 1: Build React Components for Jobs Index and Show views. Add styles to make these look good.
Day 2: Add form for New Job Posting, as well as confirmation Dialogue box.

### Phase 4 Home Page and Navbar (day 7)
1 Day
Create mission statement and testimonial content for home page.
Add Navbar with links to Home, Workers, and Jobs.

### Phase 5 Job Reviews (days 8 and 9)
2 Days
Day 1: Add Reviews Table to database. Create form for user to post review.
Day 2: Add average score and Review list to Workers' Index and Show views.



## Trello link
[Trello]: https://trello.com/b/y6VRF3va/youth-work-hub
