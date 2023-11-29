import base from './jest.config.base';

export default {
    ...base,
    projects: ['<rootDir>/packages/*/jest.config.js'],
    coverageDirectory: '<rootDir>/coverage/',
    coveragePathIgnorePatterns: [
        'node_modules',
        '**/node_modules/**',
        '<rootDir>/packages/**/dist',
        '<rootDir>/packages/**/*.story.{js,jsx,ts,tsx}'
    ],
    moduleDirectories: ['**/node_modules/**', 'packages/**/src']
};
