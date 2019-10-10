json.partial! 'api/jobs/job', job: @job
review = @job.review
if review
  json.review do
    json.set! json.partial! 'api/reviews/review', review: review
  end
end
