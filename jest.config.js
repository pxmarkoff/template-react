module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>src/rtl.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__test__/mocks/style.js',
    '\\.(gif|ttf|eot|svg|jpg|png|jpeg)$': '<rootDir>/__test__/mocks/file.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
