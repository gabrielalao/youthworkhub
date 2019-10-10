@jobs.each do |job|
  json.set! job.id do
    json.partial! 'api/jobs/job', job: job
  end
end
