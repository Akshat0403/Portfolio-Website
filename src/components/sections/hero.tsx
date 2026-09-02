import Image from 'next/image';
import { MapPin, ArrowDown } from 'lucide-react';

import AkshatHeadshot from '/public/images/Akshat.png';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Button from '@/components/general/button';
import DownloadCV from '@/components/general/download-cv';

const HeroSection = () => {
  return (
    <Container id="hero" className="relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob blob-animation-delay-0 absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl" />
        <div className="animate-blob blob-animation-delay-2 absolute top-60 -left-40 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="animate-blob blob-animation-delay-4 absolute -bottom-20 right-1/3 h-64 w-64 rounded-full bg-accent-300/15 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-12 md:flex-row md:items-center">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[310px] w-[290px] md:h-[380px] md:w-[340px]">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-400 via-violet-500 to-accent-300 p-0.5 animate-pulse-glow">
              <div className="h-full w-full rounded-2xl bg-gray" />
            </div>
            <Image
              src={AkshatHeadshot}
              alt="Headshot of Akshat Saxena"
              className="absolute inset-0.5 z-10 h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-2xl object-cover object-top shadow-2xl"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-2xl bg-gradient-to-br from-accent-400 to-violet-500 opacity-60 blur-sm -z-10" />
            <div className="absolute -top-4 -left-4 h-14 w-14 rounded-xl border-2 border-accent-300 dark:border-accent-700 -z-10" />
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-2xl flex-grow flex-col justify-center gap-7 md:order-first md:items-start md:justify-center 2xl:gap-10">
          {/* Greeting badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-200 dark:border-accent-800 bg-accent-50 dark:bg-accent-900/30 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-accent-500 animate-ping inline-block" />
            <Typography variant="body3" className="font-medium text-accent-700 dark:text-accent-300">
              Available for new projects
            </Typography>
          </div>

          <div className="flex flex-col gap-3">
            <Typography variant="h1" className="leading-tight">
              Hi, I&apos;m{' '}
              <span className="text-gradient">Akshat</span>{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography variant="subtitle" className="text-gray-600 dark:text-gray-400 leading-relaxed">
              A passionate <span className="font-semibold text-gray-800 dark:text-gray-200">Full Stack Developer</span> (React.js &amp; Node.js) focused on creating exceptional digital experiences that are fast, accessible, visually stunning, and responsive.
            </Typography>
          </div>

          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
            <MapPin className="h-4 w-4 stroke-accent-500" />
            <Typography variant="body3" className="text-gray-500">Jaipur, Rajasthan, India</Typography>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <DownloadCV />
            <a href="#work">
              <Button variant="outline" className="gap-2">
                View My Work <ArrowDown className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
