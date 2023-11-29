import base from '../../jest.config.base';
import packageJSON from './package.json';

export default {
    ...base,
    coveragePathIgnorePatterns: [
        'node_modules',
        '<rootDir>/dist',
        '<rootDir>/src/*/*.story.{js,jsx,ts,tsx}'
    ],
    displayName: packageJSON.displayName
};
