module.exports = {
  roots: ['src', 'tests'],
  modulePaths: ['src', 'tests'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/tests/__mocks__/fileMock.ts',
    '\\.(css|less|scss)$': '<rootDir>/tests/__mocks__/styleMock.ts',
  },
  setupFilesAfterEnv: ['./tests/unit/setup.ts'],
  testEnvironment: 'jsdom',
};
