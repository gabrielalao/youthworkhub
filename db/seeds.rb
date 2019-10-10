User.create(username:"Joe Shmoe",
            password:"password",
            email:"joe@shmow.com",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484531943/ihtivxsbxovc8xo6xfva.png")

User.create(username:"Grandma Jo",
            password:"111111",
            email:"grandma@jo.com",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1491795655/grandma_image.jpg")
# Add guest Worker
Worker.create(username: "Timmy",
            password: "password",
            email: "timmy@oldtimey.com",
            phone_number: '415-641-3619',
            bio: "I love riding my bike, so I make a good delivery boy. I have worked delivering newspapers and groceries. If you need anything delivered, I'm your man. I can also do yard work. I hope that I can save up enough money to buy a new bicycle soon!",
            birth_date: "2005-11-16",
            min_wage: 8,
            zip_code: "94314",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484624792/almzrlg2cjyapu3zocss.png")

# Seed some workers
Worker.create(username: "Arnold",
            password: "password",
            email: "arnie@yahoo.com",
            phone_number: '415-228-3622',
            bio: "I love skateboarding. I will entertain you with my excellent skateboarding skills. Hire me as a pro rider!",
            birth_date:"2005-11-21",
            min_wage: 10,
            zip_code:"94235",
            picture_url: "https://res.cloudinary.com/youth-work-hub/image/upload/v1484626488/dfw4azklc4beac7ecqkt.png")

Worker.create(username:"Sam",
            password:"password",
            email:"sammie@computerlovers.com",
            phone_number: '415-228-3619',
            bio:"Ever since I was eight years old I have been called a 'genius' with computers. I am actually pretty good at setting up websites, databases, and whatever else you might need. I will solve your computer problems!",
            birth_date:"2004-10-18",
            min_wage: "20",
            zip_code: "95323",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484628047/mszesro3mz8nixpw5uer.png");

Worker.create(username:"Sarah",
            password:"password",
            email:"sarah@babysitters.com",
            phone_number: '415-228-3619',
            bio:"I love reading books, and I am really looking forward to going to college. However, my family doesn't have a lot of money, so I am trying to earn money now that I can save to help me get through college. I am good with kids, so I can do babysitting or any other household work you might need.",
            birth_date:"2006-8-16",
            zip_code:"97212",
            min_wage: "12",
            picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484588140/txto2vhpouerfnfo52uh.png")


Worker.create(username: 'Ariana',
               email: 'ari@ana.com',
               password:"password",
               phone_number: '415-937-6554',
               bio: 'I like getting jobs done. Some say I am a tasker. If you need help getting some work done, I can be very effective!',
               lat: "",
               lng: "",
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484862877/bkteagiipnovhojud5tc.png',
               zip_code: '94335',
               birth_date: '2004-06-12',
               min_wage: 6)

Worker.create(username: 'Ellie',
               email: 'elliestar@gmail.com',
               phone_number: '213-565-4875',
               password:"password",
               bio: 'I am currently in college and looking to earn a little extra spending cash at convenient times. I am very good with children, so  I would be happy to work as a baby-sitter or tutor. Have a great day!',
               lat: "",
               lng: "",
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484863263/jm1algptazke1zbjltqp.png',
               zip_code: '93113',
               birth_date: '1999-07-15',
               min_wage: 12)

Worker.create(username: 'Bethany',
               email: 'beth1999@ucsf.com',
               password:"password",
               phone_number: '4156488898',
               bio: 'As a current student at USCS, I am well qualified to serve as a tutor, or as an editor to help you or your children learn. I am especially interested in history and law. I am also a responsible individual who can be trusted with child-care and pet-care.',
               lat: "",
               lng: "",
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484863534/ef23zpehw5qx62jgc57l.png',
               zip_code: '94115',
               birth_date: '1999-09-23',
               min_wage: 15)


Worker.create(username: 'Hugo',
               email: 'HugoGreenwald@yahoo.com',
               phone_number: '418-736-9937',
               password:"password",
               bio: 'I am currently a senior in high school. I take school very seriously and look forward to attending college. Obviously, college is very expensive, so I am trying to earn some extra money to help get me through. I am great in the garden, and a good strong worker for moving tasks or any other kinds of work really. Best of luck in finding a worker who suits your needs!',
               lat: "",
               lng: "",
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484864909/n3cuolvpgkaexeyu3p89.png',
               zip_code: '96151',
               birth_date: '2003-12-28',
               min_wage: 14)

Worker.create(username: 'Lucy',
               email: 'lucy4157@gmail.com',
               phone_number: '418-227-6179',
               password:"password",
               bio: 'I am a wiz in the kitchen. I have been cooking since before I can remember. If you need help cleaning or cooking, I will be a great helper. I will be looking for your job posts requesting kitchen help!',
               lat: "",
               lng: "",
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484865506/uzvwiuvmpeo1appk76oa.png',
               zip_code: '94132',
               birth_date: '2005-11-17',
               min_wage: 12)

Worker.create( username: 'Josie',
               email: 'Joejoe@yahoo.com',
               phone_number: '361-5435-4455',
               password:"password",
               bio: 'I am really into science. I hope I can be a scientist some day. For now, I mostly just read books and study. However, I also want to earn a little extra money to help my family out. Post jobs so I can help you!',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484934755/gh4knkqzjnrqlfztjmsp.png',
               zip_code: '94113',
               birth_date: '2005-03-17',
               min_wage: 9)

Worker.create( username: 'Tina',
               email: 'Tina@marvin.com',
               password:"password",
               phone_number: '441 Rennolds Dr',
               bio: 'Dancing is my life. I love dancing and hope that I can become a professional dancer some day. I know you probably don\'t want to hire me to dance, but I am also good at cleaning, and other household tasks, including baby-sitting. Hope this site works so I can earn some money!.',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484934981/vbwt83ojdsbaenrkhqav.png',
               zip_code: '94225',
               birth_date: '2004-08-15',
               min_wage: 11)

Worker.create( username: 'Maria',
               email: 'mariaStone@gmail.com',
               password:"password",
               phone_number: '4158876655',
               bio: 'Gardening is my favorite thing to do. I love gardening, and lots of people say I have a green thumb. I will help you make your garden beautiful. I look forward to helping you soon!.',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484935685/kq59qj2mm0vwdlawhwwb.png',
               zip_code: '94223',
               birth_date: '2008-12-28',
               min_wage: 7)

Worker.create( username: 'Maurice',
               email: 'mauriceJenkins@gmail.com',
               password:"password",
               phone_number: '415-883-7214',
               bio: 'I am a junior at Franklin high school. I do what I can to help out in my home. I am good at yard work and heavy lifting. I am also good at playing the guitar. I hope that I can help you accomplish jobs that you need done.',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484935958/l4fipaeeqozrovpksxi5.png',
               zip_code: '94552',
               birth_date: '2000-07-15',
               min_wage: 12)

Worker.create( username: 'Emilio',
               email: 'emilioBrown@gmail.com',
               password:"password",
               phone_number: '415-837-8865',
               bio: 'My name is Emilio. I like animals. I am very good with dogs. I can take care of your cat or dog. I can also wash them. I will do other work too. I look forward to accepting your jobs!',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484937816/bcmirku6roigrjiqhqn5.png',
               zip_code: '94332',
               birth_date: '2006-03-09',
               min_wage: 8)

Worker.create( username: 'Becky',
               email: 'rebecca_langly@gmail.com',
               password:"password",
               phone_number: '415-684-2241',
               bio: 'As a high school student, I haver certain financial needs. I am willing to do work to help pay for the things I want. Please post jobs so I can take them. I am good at science, math and art. I can do tutoring, child-care, pet-care, and other things. Have  a great day!',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484938202/tz75fu33kvzqnux1kir3.png',
               zip_code: '94334',
               birth_date: '2002-11-28',
               min_wage: 10)

Worker.create( username: 'Jessica',
               email: 'JessieWinter@yahoo.com',
               phone_number: '2768848311',
               bio: 'I am a high-school student with big dreams. In order to make my dreams come true, I will need some money, however. That\'s why I have joined up with Youth Work Hub. I look forward to doing some odd jobs to help you and earn some money. ',
               lat: '',
               lng: '',
               picture_url: 'https://res.cloudinary.com/youth-work-hub/image/upload/v1484941770/riiqnn0gyyx8cq5skrze.png',
               zip_code: '94225',
               birth_date: '2002-11-17',
               min_wage: 14)

Worker.create( username: 'Melanie',
               email: 'melanietimbers@hugo.com',
               password:"password",
               phone_number: '415-887-8645',
               bio: 'I am starting college soon and looking to make a little spending cash to help pay for that. I can be very helpful in just about any type of task. I look forward to helping you!',
               lat: '',
               lng: '',
               picture_url: '',
               zip_code: '94112',
               birth_date: '2002-10-16',
               min_wage: 12)

now = DateTime.now.beginning_of_day

Job.create!([
  #id 1
  { user_id: 1, description: 'Help my daughter with math. She is a smart girl, but her grades are not good. I think she just needs some extra practice',
      job_type: 'tutoring',
      status: 'pending',
      address: '3968 Flad Ave, St. Louis, MO 63110, USA',
      duration: 2,
      wage: 20,
      start_time: (now + 16 + (15 / 24.0)),
      cost: 40,
      lat: 38.6119542361712,
      lng: -90.2483615278946,
      worker_id: nil
    },
      #id 2
    {
      user_id: 2,
      description: 'Help me clean up after my dinner party. There will be plenty of food to eat as part of this job!',
      job_type: 'kitchen work',
      status: 'pending',
      address: '3140 Longfellow Blvd, St. Louis, MO 63104, USA',
      duration: 3,
      wage: 15,
      start_time: (now + 9 + (19 / 24.0)),
      cost: 45,
      lat: 38.6107727398449,
      lng: -90.2325202677231,
      worker_id: nil
    },
      #id 3
    {
      user_id: 1,
      description: 'Fix My website. The functionality is OK, but it needs a style make-over.',
      job_type: 'computer work',
      status: 'pending',
      address: '6017-6023 Waterman Blvd, St. Louis, MO 63112, USA',
      duration: 5,
      wage: 25,
      start_time: (now + 8 + (0.5)),
      cost: 125,
      lat: 38.6504568633347,
      lng: -90.2950433454342,
      worker_id: nil},
  #id 4 - 21
  {user_id: 1, description: "Help me add a new feature to my website. I want to add front-end data management with redux.", job_type: "computer work", address: "284 Brannan St, San Francisco, CA 94107, USA", duration: 5, wage: 30, start_time: (now - 14 + (15 / 24.0)), lat: 37.7824978759638, lng: -122.392029762268, cost: 150, status: "pending", worker_id: 3},
  {user_id: 1, description: "Rake leaves", job_type: "yard-work", address: "7425 Oxford Dr, Clayton, MO 63105, USA", duration: 3, wage: 12, start_time: (now - 21 + (14 / 24.0)), lat: 38.639989224818, lng: -90.3279146982025, cost: 36, status: "fulfilled", worker_id: 1},
  {user_id: 1, description: "Pull some weeds", job_type: "yard-work", address: "4475 W Pine Blvd, St. Louis, MO 63108, USA", duration: 3, wage: 12, start_time: (now - 14 + (14 / 24.0)), lat: 38.6410001714185, lng: -90.2571148955536, cost: 36, status: "designated", worker_id: 1},
  {user_id: 1, description: "Clean my kitchen", job_type: "cleaning", address: "3835 Hartford St, St. Louis, MO 63116, USA", duration: 2, wage: 12, start_time: (now - 5 + (15 / 24.0)), lat: 38.6024894602804, lng: -90.247454529608, cost: 24, status: "fulfilled", worker_id: 1},
  {user_id: 1, description: "Stay with my daughter, and play games with her while I go on a date with my wife.", job_type: "baby-sitting", address: "3961 Westminster Pl, St. Louis, MO 63108, USA", duration: 5, wage: 12, start_time: (now - 24 + (15 / 24.0)), lat: 38.6412446294479, lng: -90.2418247771851, cost: 60, status: "unfulfilled", worker_id: 1},
  {user_id: 1, description: "Clean my garage. There is lots of old stuff that you can have, including a 10-speed bicycle!", job_type: "cleaning", address: "1111 Ralph Terrace, Richmond Heights, MO 63117, USA", duration: 4, wage: 12, start_time: (now - 19 + (15 / 24.0)), lat: 38.6341912838815, lng: -90.3237900539917, cost: 48, status: "fulfilled", worker_id: 1},
  {user_id: 1, description: "Rake leaves from our yard", job_type: "yard-work", address: "337 Hermann St, San Francisco, CA 94117, USA", duration: 2, wage: 10, start_time: (now - 7 + (15 / 24.0)), lat: 37.7700871563722, lng: -122.430782318115, cost: 20, status: "fulfilled", worker_id: 1},
  {user_id: 1, description: "Play music for my daughters birthday party. You must be able to play a sing-along version of Happy Birthday!!!", job_type: "music", address: "6251 Delmar Blvd, University City, MO 63130, USA", duration: 2, wage: 25, start_time: (now + 36 + (16 / 24.0)), lat: 38.655746038819, lng: -90.3015989075287, cost: 50, status: "pending", worker_id: nil},
  {user_id: 1, description: "Take my grandma fishing.", job_type: "baby-sitting", address: "6306 McPherson Ave, University City, MO 63130, USA", duration: 3, wage: 10, start_time: (now + 44 + (15 / 24.0)), lat: 38.6520800565608, lng: -90.3036047133637, cost: 30, status: "pending", worker_id: nil},
  {user_id: 1, description: "Type a hand-written piece of writing that I have done into MS word.", job_type: "computer work", address: "6329 Alamo Ave, Clayton, MO 63105, USA", duration: 3, wage: 10, start_time: (now + 14 + (15 / 24.0)), lat: 38.6350066009703, lng: -90.3072562869354, cost: 30, status: "designated", worker_id: 1},
  {user_id: 1, description: "Wash my car. You will need to wash the outside, and vacuum out the inside. I have  a vacuum cleaner that works well.", job_type: "cleaning", address: "75 Arundel Pl, Clayton, MO 63105, USA", duration: 2, wage: 12, start_time: (now + 34 + (15 / 24.0)), lat: 38.640440046043, lng: -90.3104492651706, cost: 24, status: "designated", worker_id: 1},
  {user_id: 1, description: "Wash my dogs. I have two golden retrievers. They need to be washed once every week.", job_type: "pet-care", address: "6440 Cecil Ave, Clayton, MO 63105, USA", duration: 1, wage: 25, start_time: (now + 12 + (15 / 24.0)), lat: 38.6439938278967, lng: -90.3088758185466, cost: 25, status: "designated", worker_id: 1},
  {user_id: 1, description: "Take my dogs for a walk", job_type: "pet-care", address: "17 Princeton Ave, University City, MO 63130, USA", duration: 1, wage: 15, start_time: (now + 48 + (15 / 24.0)), lat: 38.6580799129571, lng: -90.3130170690644, cost: 15, status: "pending", worker_id: nil},
  {user_id: 1, description: "Make a giant card for my anniversary. My wife and I will be married for 25 years!", job_type: "art", address: "440 Oakley Dr, Clayton, MO 63105, USA", duration: 3, wage: 15, start_time: (now + 52 + (15 / 24.0)), lat: 38.6451261724334, lng: -90.3325600553802, cost: 45, status: "pending", worker_id: nil},
  {user_id: 1, description: "Fix my website so that it looks nice. The functionality is OK, but the design really needs help. It would really help if you are good with CSS.", job_type: "computer work", address: "11-13 Westmoreland Pl, St. Louis, MO 63108, USA", duration: 5, wage: 20, start_time: (now + 28 + (15 / 24.0)), lat: 38.6457366039391, lng: -90.266921473122, cost: 100, status: "pending", worker_id: nil},
  {user_id: 1, description: "Help me fix my roof", job_type: "yard-work", address: "4201 Chouteau Ave, St. Louis, MO 63110, USA", duration: 4, wage: 15, start_time: (now + 12 + (15 / 24.0)), lat: 38.6288356650514, lng: -90.2519199890997, cost: 60, status: "designated", worker_id: 1},
  {user_id: 1, description: "Take my dogs for a good walk, and then give them a bath.", job_type: "pet-care", address: "205 Topton Way, Clayton, MO 63105, USA", duration: 4, wage: 15, start_time: (now + 17 + (15 / 24.0)), lat: 38.6546151608709, lng: -90.3456613660614, cost: 60, status: "pending", worker_id: nil},
  {user_id: 1, description: "Make me a full-stack website that connects my business data with an AI backend to calculate what I need to prioritize to maximize profits.", job_type: "computer work", address: "6811 Waterman Ave, University City, MO 63130, USA", duration: 10, wage: 60, start_time: (now + 22.5), lat: 38.652916678232, lng: -90.3102646917206, cost: 600, status: "pending", worker_id: nil},
  {user_id: 1, description: "Pull weeds up out of my garden", job_type: "gardening", address: "7241 Forsyth Blvd, St. Louis, MO 63105, USA", duration: 3, wage: 12, start_time: (now + 21 + (14 / 24.0)), lat: 38.6484151073109, lng: -90.322933047107, cost: 36, status: "pending", worker_id: nil},
])
Review.create!([
  {user_id: 1, job_id: 4, rating: 5, body: "She got the job done fast"},
  {user_id: 1, job_id: 5, rating: 5, body: "Excellent work! Yard looks great..."},
  {user_id: 2, job_id: 7, rating: 5, body: "Excellent work! The kitchen looks great..."},
  {user_id: 1, job_id: 8, rating: 3, body: "Timmy arrived late. That was a bit of a problem"},
  {user_id: 1, job_id: 9, rating: 5, body: "Timmy took care of business in that garage!"},
  {user_id: 1, job_id: 10, rating: 5, body: "Timmy did a great job... I love this kid"},
])