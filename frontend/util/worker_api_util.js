export const signup = (worker) => (
  $.ajax({
    url: '/api/workers',
    method: 'POST',
    data: { worker }
  })
);
export const editAccount = (worker) => (
  $.ajax({
    url: `/api/workers/${worker.id}`,
    method: 'PATCH',
    data: { worker }
  })
);
export const login = (cred) => (
  $.ajax({
    url: '/api/worker_session',
    method: 'POST',
    data: { cred }
  })
);

export const fetchWorker = (id) => (
  $.ajax({
    url: `/api/workers/${id}`
  })
)

export const fetchWorkers = () => (
  $.ajax({
    url: '/api/workers'
  })
);

export const fetchLocation = (zip) => (
  $.ajax({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${zip}`
  })
)
