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
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  adventOfCodeSidebar: [
    'introduction',
    'setup',
    {
      "2021 Puzzles": [
        'puzzles/day1',
        'puzzles/day2',
        'puzzles/day3',
        'puzzles/day4',
        'puzzles/day5',
        'puzzles/day6',
        'puzzles/day7',
        'puzzles/day8',
        'puzzles/day9',
        'puzzles/day10',
        'puzzles/day11',
        'puzzles/day12',
        'puzzles/day13',
        'puzzles/day14',
        'puzzles/day15',
        'puzzles/day16',
        'puzzles/day17',
        'puzzles/day18',
        'puzzles/day19',
        'puzzles/day20',
        'puzzles/day21',
        'puzzles/day22',
        'puzzles/day23',
        'puzzles/day24',
        'puzzles/day25'
      ]
    },
  ]
};

module.exports = sidebars;
