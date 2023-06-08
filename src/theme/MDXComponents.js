import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
// import Highlight from '@site/src/components/Highlight';
import {DownloadsButton, DownloadChordsButton} from '@site/src/components/DownloadsButton';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  DownloadsButton,
  DownloadChordsButton
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
//   chords: Chords,
};