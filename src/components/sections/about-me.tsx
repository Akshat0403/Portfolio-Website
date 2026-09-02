import Image from 'next/image';

import AkshatPhoto from '/public/images/Akshat.png';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gradient-to-b from-gray-50 to-gray dark:from-gray-900 dark:to-gray" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row md:items-center">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[400px] w-[340px] md:h-[480px] md:w-[400px] lg:h-[520px] lg:w-[440px]">
            {/* Gradient glow behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-400/30 via-violet-400/20 to-accent-300/10 blur-2xl" />
            <Image
              src={AkshatPhoto}
              alt="Photo of Akshat Saxena"
              className="relative z-10 h-full w-full rounded-2xl object-cover object-top shadow-2xl border border-gray-200 dark:border-gray-700"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-2xl bg-gradient-to-br from-accent-400 to-violet-500 opacity-25 blur-xl -z-10" />
            <div className="absolute -top-3 -left-3 h-16 w-16 rounded-xl border-2 border-accent-300 dark:border-accent-700 opacity-60" />
            {/* Experience badge */}
            <div className="absolute bottom-6 -right-6 flex items-center gap-2 rounded-2xl border border-accent-200 dark:border-accent-800 bg-gray dark:bg-gray-900 px-4 py-3 shadow-lg shadow-accent-500/10 z-20">
              <div className="text-2xl">💻</div>
              <div>
                <Typography variant="body3" className="font-bold text-gray-900 dark:text-gray-100">Full Stack Dev</Typography>
                <Typography variant="body3" className="text-gray-500 text-xs">React • Node • Next.js</Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-5">
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-accent-500 to-violet-500" />
          <Typography variant="h3" className="text-gray-900 dark:text-gray-100">
            Curious about me? Here you have it:
          </Typography>
          <Typography className="leading-relaxed">
            I&apos;m a passionate full stack developer specializing in{' '}
            <span className="font-semibold text-accent-600 dark:text-accent-400">React.js &amp; Node.js</span>,
            based in Jaipur, Rajasthan. I love bringing technical and visual
            aspects of digital products to life — user experience, pixel-perfect
            design, and clean, performant code are things I genuinely care about.
          </Typography>
          <Typography className="leading-relaxed">
            My journey in web development has taken me through building AI-powered
            platforms, collaborative real-time tools, and full-featured applications
            using modern technologies like{' '}
            <span className="font-semibold text-gray-800 dark:text-gray-200">Next.js, TypeScript, Supabase, Firebase</span>,
            and more.
          </Typography>
          <Typography className="leading-relaxed">
            I&apos;m a progressive thinker who enjoys working on products end-to-end —
            from ideation all the way to deployment. When I&apos;m not coding, you can
            find me exploring new tech, contributing to open source, or building
            side projects.{' '}
            You can check out my work on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
              className="font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-700"
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography className="font-medium text-gray-800 dark:text-gray-200">
            Some quick bits about me:
          </Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-10">
            <ul className="flex list-none flex-col gap-2">
              {[
                '🎓 B.Tech in Computer Science',
                '⚡ Full Stack Developer',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-base">{item.split(' ')[0]}</span>
                  <Typography variant="body2" className="text-gray-700 dark:text-gray-300">
                    {item.split(' ').slice(1).join(' ')}
                  </Typography>
                </li>
              ))}
            </ul>
            <ul className="flex list-none flex-col gap-2">
              {[
                '🚀 Avid Learner',
                '🌟 Open Source Enthusiast',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-base">{item.split(' ')[0]}</span>
                  <Typography variant="body2" className="text-gray-700 dark:text-gray-300">
                    {item.split(' ').slice(1).join(' ')}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <Typography className="leading-relaxed">
            I&apos;m always open to new opportunities and collaborations. Feel free to
            reach out — I promise I don&apos;t bite! 😄
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
