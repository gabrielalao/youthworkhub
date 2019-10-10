import React from 'react';

import classnames from 'classnames';

const MissionStatement = () => (
  <div className="mission-statement">
    <p>Post odd jobs on Youth Work Hub to Help young people in your community
      earn, learn, and grow... and get help with odd jobs that you need
      to have finished.
      </p>
    <h3>Help the youth, and get your jobs done!</h3>
    <p>
      Youth Work Hub is a non-profit organization dedicated to enhancing
      communities by hooking young people up with odd jobs in their communities.
    </p>
    <p>
      Do you need someone to mow your lawn? How about getting a baby-sitter
      or a tutor for your children? Sign up as an employer on Youth Work
      Hub and post those jobs!
    </p>
  </div>
);

const Testimonials = () => {
  const testimons = [
    {title: "My Summer Was Way Better Because of Youth Work Hub!",
      text: "Last summer was boring for me. My parents work, so I had to spend most of my time alone at home. This summer, I found a job through Youth Work Hub. Working helped me learn a lot, meet some very interesting people, and earn money. I am excited because I was able to buy my own cell phone. Thanks to the people at Youth Work Hub for helping me have  a great summer!",
      user: "Liana",
      picture_url:
      "http://res.cloudinary.com/youth-work-hub/image/upload/v1484521265/4.28.16-5-Reasons-Youth-Volunteers-Make-Better-Hires_st8ul5.png"
    },

    {title: "We Got Much Needed Help",
      user: "Debrah Rennolds",
      text: "Our Campaign was having a lot of trouble reaching diverse members of our community. We found some great workers to help us bridge the gap on Youth Work Hub. We have been very impressed with their work ethic. These bright young men and women represent our future!",
      picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484287815/YouthBuild-Guest-post-1_vaby6h.jpg"
    },

    {title: "Saving Money For College",
      text: "I know college is very expensive. My mom has reminded me a lot that it will cost a lot of money, and that I should try not to get into debt. She is still paying of her college loans! So, for the past two summers I have been earning money mowing lawns. Youth Work Hub has made it easy to find clients!",
      user: "Martin",
      picture_url: "http://res.cloudinary.com/youth-work-hub/image/upload/v1484288385/lawnmower1_ip9bas.jpg"
    }
  ];

  const classes = classnames({'testimonial': true, 'clearfix': true});
  return (
    <div className="testimonials">
      {testimons.map((tes, id) => (
        <div className={classes} key={id}>
          <h4>{tes.title}</h4>
          <img src={tes.picture_url} />
          <p>{tes.text}</p>
          <p className="attribution">-{tes.user}</p>
        </div>
      ))}
    </div>
  );
};

const HomePage = () => (
  <div className="home">
    <div className='headline'>
      <h1>Build Your Community</h1>
    </div>
    <div className="home-body">
      <MissionStatement />
      <Testimonials />
    </div>

  </div>
);

export default HomePage;
