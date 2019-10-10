{
  session: {
    currentUser: {
      id: 1,
      username: "Joe Shmow"
    }
    errors: []
  },
  Jobs: {
    1: {
      id: 1,
      user_id: 3,
      job_type: "child care",
      description: "We need someone to look after our son Michael on Saturday evening from 6pm until 11pm. He goes to be at 9, so you can watch TV or do your homework from 9-11!",
      location: "380 Arlington St. San Francisco CA, 94131",
      duration: 5,
      location: { lat: 122.3232, lng: 38.32322 }
      wage: 10,
      time: 1443432843783978,
      cost: 50,
      status: "designated",
      worker_id: 131
    }
   2: {
     ...
   }
  },
  workers: {
    1: {
      id: 1,
      email: "eddieHaskel@beaver.com",
      phone_number: 2314423322,
      bio: "I always want to do as much work as I can in order to earn money to help my poor, sick mother. She has been ill for some time, and I really hope she will get better soon. By providing work for me, you are helping me to help her. Thanks for your consideration!"
      skills: "gardening, cleaning, heavy lifting"
      zip_code: 87204,
      min_wage: 8
    }
    2: {
      id: 2,
      email: "Willis@differentStrokes.com",
      phone_number: 4183282389,
      bio: "My kid brother and I have had a pretty rough childhood. We have moved around a few times. Luckily we were adopted a few years ago, and our living situation has improved a lot. I know not to take anything for granted, and so I am very excited to earn real money doing work for all of you good people."
      skills: "gardening, cleaning, heavy lifting, child care"
      zip_code: 42132,
      min_wage: 10
    }
    ...
 },
 modals: {
   loginModal: false,
   userModal: false,
   jobModal: false
 }
}
