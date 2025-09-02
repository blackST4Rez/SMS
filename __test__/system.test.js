import { POST, GET, DELETE } from '@/app/api/topics/route';
import { PUT } from '@/app/api/topics/[id]/route';

// Mock the dependencies
jest.mock('@/libs/monogdb');
jest.mock('@/models/topic');

describe('System Testing - API Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('complete CRUD flow for topics', async () => {
    // 1. Create a topic
    const createRequest = {
      json: jest.fn().mockResolvedValue({ title: 'System Test Student', description: 'System Test Course' })
    };

    const createResponse = await POST(createRequest);
    const createResult = await createResponse.json();
    expect(createResult.message).toBe('Student Database Created');

    // 2. Get all topics
    const getResponse = await GET();
    const getResult = await getResponse.json();
    expect(Array.isArray(getResult.topics)).toBe(true);

    // 3. Update topic - need to provide both request and params
    const updateRequest = {
      json: jest.fn().mockResolvedValue({ title: 'Updated Student', description: 'Updated Course' })
    };
    const params = { params: { id: '507f1f77bcf86cd799439011' } };

    const updateResponse = await PUT(updateRequest, params);
    const updateResult = await updateResponse.json();
    expect(updateResult.message).toBe('Student Database Updated');

    // 4. Delete topic
    const deleteRequest = {
      nextUrl: {
        searchParams: {
          get: jest.fn().mockReturnValue('507f1f77bcf86cd799439011')
        }
      }
    };

    const deleteResponse = await DELETE(deleteRequest);
    const deleteResult = await deleteResponse.json();
    expect(deleteResult.message).toBe('Student Database Deleted');
  });

  test('error handling in complete flow', async () => {
    // Test invalid data creation
    const invalidRequest = {
      json: jest.fn().mockResolvedValue({ title: '', description: '' })
    };

    const response = await POST(invalidRequest);
    const result = await response.json();
    expect(result.error).toBeDefined();
    expect(response.status).toBe(400);

    // Test invalid ID deletion - mock the Topic.findByIdAndDelete to return null
    const Topic = require('@/models/topic').default;
    Topic.findByIdAndDelete.mockResolvedValue(null);

    const invalidDeleteRequest = {
      nextUrl: {
        searchParams: {
          get: jest.fn().mockReturnValue('invalid-id')
        }
      }
    };

    const deleteResponse = await DELETE(invalidDeleteRequest);
    const deleteResult = await deleteResponse.json();
    expect(deleteResult.error).toBeDefined();
    expect(deleteResult.error).toBe('Invalid ID format');
  });
});
