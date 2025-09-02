// Test setup for Next.js API routes
process.env.MONGODB_URI = 'mongodb://localhost:27017/test-student-management';

// Mock NextResponse for API routes
jest.mock('next/server', () => ({
  NextResponse: {
    json: (data, options = {}) => ({
      json: () => Promise.resolve(data),
      status: options.status || 200,
      headers: options.headers || {},
    }),
  },
}));

// Mock MongoDB connection
jest.mock('@/libs/monogdb', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(),
}));

// Mock Mongoose models
jest.mock('@/models/topic', () => ({
  __esModule: true,
  default: {
    create: jest.fn().mockResolvedValue({ _id: '507f1f77bcf86cd799439011' }),
    find: jest.fn().mockResolvedValue([]),
    findByIdAndDelete: jest.fn().mockResolvedValue({}),
    findByIdAndUpdate: jest.fn().mockResolvedValue({}),
    findOne: jest.fn().mockResolvedValue({}),
  },
}));

// Add a simple test to satisfy Jest requirement
test('setup file', () => {
  expect(true).toBe(true);
});
