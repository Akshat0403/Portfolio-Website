'use client';

import { useState } from 'react';
import { Copy, Mail, Phone, CheckCheck } from 'lucide-react';

import SocialIcons from '@/components/data-display/social-icons';
import Tag from '@/components/data-display/tag';
import IconButton from '@/components/general/icon-button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import useWindowSize from '@/hooks/use-window-size';
import { copyTextToClipboard } from '@/lib/utils';

let email = 'saxena.akshat0405@gmail.com';
let phone = '+91 8306148803';

type CopyValue = 'email' | 'phone';

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert('Unable to copy!');
    }
  };

  return (
    <Container id="contact" className="relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl" />
        <div className="animate-blob blob-animation-delay-4 absolute -top-20 -right-20 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Get in touch" />
        </div>
        <Typography variant="h3" className="text-center text-gray-900 dark:text-gray-100">
          Let&apos;s Work Together
        </Typography>
        <Typography variant="subtitle" className="max-w-xl text-center text-gray-500 dark:text-gray-400">
          Whether you&apos;re looking for a developer, have a project idea, or simply want to connect — my inbox is always open!
        </Typography>
      </div>

      <div className="relative flex flex-col items-center gap-8 md:gap-10">
        {/* Contact info cards */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6 w-full max-w-2xl">
          {/* Email card */}
          <div className="flex flex-1 items-center gap-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 w-full group hover:border-accent-300 dark:hover:border-accent-700 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-500 shadow-lg shadow-accent-500/30">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <Typography variant="body3" className="text-gray-500 dark:text-gray-400">
                Email
              </Typography>
              <Typography variant="body3" className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                {email}
              </Typography>
            </div>
            <IconButton
              size={width && width < 768 ? 'md' : 'md'}
              onClick={() => handleCopyClick(email, 'email')}
              showTooltip={isCopied && copiedValueType === 'email'}
              tooltipText="Copied!"
              className="shrink-0"
            >
              {isCopied && copiedValueType === 'email' ? (
                <CheckCheck className="h-4 w-4 text-accent-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </IconButton>
          </div>

          {/* Phone card */}
          <div className="flex flex-1 items-center gap-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 w-full group hover:border-accent-300 dark:hover:border-accent-700 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-accent-400 shadow-lg shadow-violet-500/30">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <Typography variant="body3" className="text-gray-500 dark:text-gray-400">
                Phone
              </Typography>
              <Typography variant="body3" className="font-semibold text-gray-900 dark:text-gray-100">
                {phone}
              </Typography>
            </div>
            <IconButton
              size={width && width < 768 ? 'md' : 'md'}
              onClick={() => handleCopyClick(phone.replace(' ', ''), 'phone')}
              showTooltip={isCopied && copiedValueType === 'phone'}
              tooltipText="Copied!"
              className="shrink-0"
            >
              {isCopied && copiedValueType === 'phone' ? (
                <CheckCheck className="h-4 w-4 text-accent-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </IconButton>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Typography className="text-center text-gray-500 dark:text-gray-400">
            Or find me on these platforms
          </Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
