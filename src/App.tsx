import React, { useRef } from 'react';
import adunke from './assets/adunke.png';
import avatar from './assets/avatar-eke.png';
import awa from './assets/awa.png';
import chubby from './assets/chubby.png';
import daniel from './assets/daniel.png';
import dumebi from './assets/dumebi.png';
import ekeImageOne from './assets/eke-1.jpg';
import jessica from './assets/jessica.png';
import obaloluwa from './assets/obaloluwa.png';
import ridwan from './assets/ridwan.png';
import seyi from './assets/seyi.png';
import pelumi from './assets/user.png';
import wole from './assets/wole.png';
import CommentsStory from './components/CommentsStory';
import VideoStory from './components/VideoStory';
import Calandar from './icons/Calandar';
import Play from './icons/Play';
import './styles/index.css';

function App() {
  const parentContainerRef = useRef<HTMLDivElement>(null);

  const goToNextVideo = () => {
    if (parentContainerRef.current) {
      parentContainerRef.current.scrollTo({
        top: parentContainerRef.current.scrollTop + window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="text-center h-screen max-w-lg mx-auto scroll-snap overflow-y-auto"
      ref={parentContainerRef}>
      <section className="h-screen flex flex-col items-center snap">
        <div className="flex items-center space-x-4 mt-10">
          <span className="relative text-small before:absolute before:-top-2 before:bg-white before:h-[0.125rem] before:w-5 after:absolute after:-bottom-2 after:left-0 after:bg-white after:h-[0.125rem] after:w-5">
            EKE
          </span>
          <img
            src={avatar}
            alt="Eke's avatar"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="relative text-small before:absolute before:-top-2 before:right-0 before:bg-white before:h-[0.125rem] before:w-5 after:absolute after:-bottom-2 after:right-0 after:bg-white after:h-[0.125rem] after:w-5">
            0210
          </span>
        </div>

        <h1 className="text-[3.5rem] max-w-[9ch] leading-[3.25rem] mt-12">
          World Eke day
        </h1>
        <hr className="w-14 h-[0.125rem] gradient mt-7" />
        <div className="flex items-center space-x-3 mt-6">
          <Calandar className="text-lg" />
          <span className="text-small">2ND OCTOBER</span>
        </div>
        <img
          src={ekeImageOne}
          alt="Eke wearing a black native shirt"
          width={211}
          height={209}
          className="mt-[4.875rem] rounded-[.625rem]"
        />
        <button
          className="h-14 flex items-center space-x-[.625rem] rounded-[3.125rem] mt-[4.75rem] gradient px-8"
          onClick={goToNextVideo}>
          <Play className="text-lg" />
          <span className="text-lg">Play Videos</span>
        </button>
      </section>

      <VideoStory
        goToNextVideo={goToNextVideo}
        url="https://res.cloudinary.com/tonerolima/video/upload/v1633130095/birthday-wishes-for-eke/PXL_20210927_200630302_1.mp4"
      />
      <CommentsStory
        goToNextSection={goToNextVideo}
        comments={birthdayWishes.slice(0, 2)}
      />
      <VideoStory
        goToNextVideo={goToNextVideo}
        url="https://res.cloudinary.com/tonerolima/video/upload/v1633100942/birthday-wishes-for-eke/Otas.mp4"
      />
      <CommentsStory
        goToNextSection={goToNextVideo}
        comments={birthdayWishes.slice(2, 4)}
      />
      <VideoStory
        goToNextVideo={goToNextVideo}
        url="https://res.cloudinary.com/tonerolima/video/upload/v1633103649/birthday-wishes-for-eke/chid.mp4"
      />
      <CommentsStory
        goToNextSection={goToNextVideo}
        comments={birthdayWishes.slice(4, 6)}
      />
      <VideoStory
        goToNextVideo={goToNextVideo}
        url="https://res.cloudinary.com/tonerolima/video/upload/v1633101848/birthday-wishes-for-eke/tony.mp4"
      />
      <CommentsStory
        goToNextSection={goToNextVideo}
        comments={birthdayWishes.slice(6, 8)}
      />
      <VideoStory
        goToNextVideo={goToNextVideo}
        url="https://res.cloudinary.com/tonerolima/video/upload/v1633130432/birthday-wishes-for-eke/CF.mp4"
      />
      <CommentsStory goToNextSection={goToNextVideo} comments={birthdayWishes.slice(8)} />
      <VideoStory
        goToNextVideo={goToNextVideo}
        url="https://res.cloudinary.com/tonerolima/video/upload/v1633103644/birthday-wishes-for-eke/Yemi.mp4"
      />

      <section className="h-screen px-5 snap flex flex-col py-[6.6875rem]">
        <p className="text-[3.5rem] leading-[3.25rem] font-medium whitespace-pre-wrap text-left">
          <span className="text-[#455463]">We all wish you many</span> happy returns.
          <br />
          <br />
          Long life <span className="text-[#455463]">and</span> prosperity.
        </p>
        <hr className="mt-auto" />
        <p className="mt-4 text-[#667B8F]">Courtesy: all Risevest employees</p>
        <p className="text-[#667B8F]">&copy; 2021</p>
      </section>
    </div>
  );
}

const birthdayWishes = [
  {
    name: 'Dumebi',
    comment:
      'Happy birthday to my super cool oga, Eke. Get your much-needed break, have a fun day cos you deserve it, boss. You’re the best.',
    image: dumebi,
  },
  {
    name: 'Chubby',
    comment: `
    You're a visionary, a great leader and a big inspiration!
    I wish you all the very best in your new year, more growth and more life to you.
    Take out this moment to let loose and celebrate yourself because you deserve it.
    Happy Birthday Eke !
    `,
    image: chubby,
  },
  {
    name: 'Daniel Benjamin',
    comment: 'Happy birthday Eke, wishing you an amazing year ahead',
    image: daniel,
  },
  {
    name: 'Wole',
    comment: `Happy birthday, Eke!
    You’re a great and intelligent man and you ensure everyone around you delivers at their best capacity. I pray this year and beyond brings joy and prosperity in all spheres and there’s a tremendous and positive RISE to all that concerns you.
    Happy birthday, boss.
    `,
    image: wole,
  },
  {
    name: 'Obaloluwa',
    comment: `Two things I immediately picked up from the boss himself.
    He truly wants to help and he has ambitious goals that inspire everyone around him.
    May God bless the work of your hand
    Congrats Eke!
    `,
    image: obaloluwa,
  },
  {
    name: 'pelumi',
    comment: `Happy birthday to you Eke!
    Many happy returns of the day in good health and wealth.
    You've been a great boss and a role model, your leadership skill is admirable and well respected.
    Keep rising! God bless you, God bless Rise
    `,
    image: pelumi,
  },
  {
    name: 'Jessica A.',
    comment: `Happy birthday Eke, wishing you more years of celebration and success as you mark your day. May God bless you with all the happiness your heart can take. Have a blessed day `,
    image: jessica,
  },
  {
    name: 'Adunke',
    comment: `Dear Eke, thank you sincerely for everything that you do! I am so lucky to work for you and to be able to call you a friend. Here’s wishing you a prosperous year, filled with all your heart’s desires. HAPPY BIRTHDAY!!!`,
    image: adunke,
  },
  {
    name: 'Ridwan',
    comment: `Meeting you has been one of the highlights of my life. Knowing you are, and always want to be there for me, is one thing I will always appreciate. Thanks for being a mentor. Thanks for being a friend. Thanks for being a brother. Thanks for being a father. Thanks for being you. I'm thankful for everything.
    I wish you all the goodness life has to offer. May all your wishes and dreams come true. Happy birthday to you Eke. Long life and many happy $returns. 
    `,
    image: ridwan,
  },
  {
    name: 'Awa',
    comment: `Eke is not just the best CEO in the world, he is also an all round fantastic human being. I pray all his good heart desires come to pass and that he has an amazing year!`,
    image: awa,
  },
  {
    name: 'Seyi',
    comment: `Keep being the best that God has made you be. I wish you a happy birthday. Send me your account number. I have something for you. `,
    image: seyi,
  },
];

export default App;
