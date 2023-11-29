import path from 'path';

const baseConfig = {
    clearMocks: true,
    collectCoverage: true,
    coverageProvider: 'v8',
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    preset: 'ts-jest',
    resetMocks: true,
    // Reset the module registry before running each individual test
    resetModules: false,
    // Automatically restore mock state between every test
    restoreMocks: false,
    // roots: ['<rootDir>/src', '<rootDir>/tests'],
    setupFilesAfterEnv: [path.resolve(__dirname, 'setupTests.ts')],
    // setupßFilesAfterEnv: ['@testing-library/jest-dom'],
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/{tests,spec}/**/*.(test|spec).(js|jsx|ts|tsx)'],
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest'
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$'
    ],
    verbose: true,
    coveragePathIgnorePatterns: [
        '(**/.*.mock).(jsx?|tsx?)$',
        '**/node_modules/**'
    ]
};

export default baseConfig;
