@workers.each do |worker|
  json.set! worker.id do
    json.partial! 'api/workers/worker', worker: worker
  end
end
