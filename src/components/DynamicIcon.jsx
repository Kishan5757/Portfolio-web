import React from 'react';
import * as Icons from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, TwitterIcon } from './Icons';

export default function DynamicIcon({ name, className = 'w-5 h-5', ...props }) {
  if (name === 'Github' || name === 'GitHub') {
    return <GithubIcon className={className} {...props} />;
  }
  if (name === 'Linkedin' || name === 'LinkedIn') {
    return <LinkedinIcon className={className} {...props} />;
  }
  if (name === 'LeetCode' || name === 'Leetcode') {
    return <LeetCodeIcon className={className} {...props} />;
  }
  if (name === 'Twitter' || name === 'X') {
    return <TwitterIcon className={className} {...props} />;
  }

  const IconComponent = Icons[name] || Icons.Code2;
  return <IconComponent className={className} {...props} />;
}
