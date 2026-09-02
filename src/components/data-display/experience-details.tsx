import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';
import { ExternalLink } from 'lucide-react';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-6 p-6 md:p-8 md:flex-row md:gap-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/5">
      <div className="max-md:order-1 md:w-1/4 flex flex-col items-start gap-3">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={logoAlt}
          className="max-w-[130px] h-auto"
        />
        <a
          href="/files/Akshat%20Saxena_Experience.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-600 dark:text-accent-400 hover:underline hover:text-accent-700 transition-colors"
        >
          <span>View Certificate</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
      <div className="flex flex-col gap-3 max-md:order-3 md:w-2/4">
        <Typography variant="subtitle" className="font-bold text-gray-900 dark:text-gray-100">
          {position}
        </Typography>
        <ul className="flex list-disc list-outside ml-4 flex-col gap-2 md:gap-1.5 text-gray-600 dark:text-gray-400">
          {summary?.map((sentence, index) => (
            <li key={index}>
              <Typography variant="body2" className="text-gray-600 dark:text-gray-400">
                {sentence}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-md:order-2 md:w-1/4">
        <Typography className="text-sm font-medium text-gray-500 dark:text-gray-400 md:text-right">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
            startDate
          )}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                endDate
              )
            : 'NA'}
        </Typography>
      </div>
    </Card>
  );
};

export default ExperienceDetails;
