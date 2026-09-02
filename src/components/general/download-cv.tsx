"use client";

import Button from "@/components/general/button";

const DownloadCV = () => {
  return (
    <a href="/files/Akshat_Saxena_Resume.pdf" download="Akshat_Saxena_Resume.pdf">
      <Button>Download CV</Button>
    </a>
  );
};

export default DownloadCV;
