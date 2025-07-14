'use client';
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share';

export default function ShareButton() {
  if (typeof window === 'undefined') return;

  const url = window.location.href;
  return (
    <div className="flex w-full gap-1">
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <RedditShareButton url={url}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
}
