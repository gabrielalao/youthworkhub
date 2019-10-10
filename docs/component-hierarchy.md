## Component Hierarchy

**LoginFormContainer**
 - Login Form
 - Signup Form
 - Logout Button

**AppContainer**
 - Home (Mission Statement)
  * Navbar
   -LoginFormContainer

**WorkersListContainer**
 - WorkerIndex
  * WorkersIndexItem

**WorkersShowContainer**
 -ViewWorker
  + message worker button (BONUS)
  + request worker button (BONUS)

**WorkerReviewsContainer**
 -Average Review score
 -ReviewsIndex (lists all of the reviews for this worker)

**JobsListContainer** (restrict with onEnter hook)
 - JobsIndex
  + JobIndexItem

**JobShowContainer** (restrict with onEnter hook)
 -JobView
  + review (BONUS)

**NewJobContainer** (restrict with onEnter hook)
 - NewJobForm
 - EditJobForm

**NewReviewContainer** (only available to Job poster)
 - ReviewFormContainer
  + ReviewForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "LoginFormContainer" |
| "/sign-in" | "LoginFormContainer" |
| "/" | "AppContainer" |
| "/workers" | "WorkersListContainer" |
| "/workers/:workerId" | "WorkersShowContainer" |
| "/workers/:workerId/reviews" | "WorkerReviewsContainer" |
| "/jobs" | "JobsListContainer"
| "/jobs/:jobId" | "JobShowContainer"
| "/jobs/new" | "NewJobContainer" |
| "/jobs/:jobId/edit" | "NewJobContainer" |
| "/jobs/:jobId/review" | "NewReviewContainer" |
