/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc', id: 'index'
    },
    {
      type: 'category',
      label: '開発者用',
      link: {
        type: 'generated-index',
        title: '開発者用',
        slug: '/developer',
      },
      items: [
        'developer/rfi',
        'developer/rfp',
        'developer/requirement',
        'developer/design',
        'developer/detail-design',
        'developer/test',
        'developer/test-results',
        'developer/wbs',
        'developer/problem-manage',
      ]
    },
    {
      type: 'category',
      label: 'ユーザー用',
      link: {
        type: 'generated-index',
        title: 'ユーザー用',
        slug: '/user',
      },
      items: [
        'user/instruction-manual'
      ]
    },
  ],
};

export default sidebars;
