import { POST, GET, DELETE } from '@/app/api/topics/route';
import { PUT, GET as GET_SINGLE } from '@/app/api/topics/[id]/route';
import Topic from '@/models/topic';
import connectMongoDB from '@/libs/monogdb';

// Mock the dependencies
jest.mock('@/libs/monogdb');
jest.mock('@/models/topic');

describe('API Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/topics', () => {
    it('should create a topic successfully', async () => {
      const mockRequest = {
        json: jest.fn().mockResolvedValue({ title: 'Test', description: 'Test Desc' })
      };

      const response = await POST(mockRequest);
      const result = await response.json();

      expect(connectMongoDB).toHaveBeenCalled();
      expect(Topic.create).toHaveBeenCalledWith({ title: 'Test', description: 'Test Desc' });
      expect(result.message).toBe('Student Database Created');
    });

    it('should return error for invalid data', async () => {
      const mockRequest = {
        json: jest.fn().mockResolvedValue({ title: '', description: '' })
      };

      const response = await POST(mockRequest);
      const result = await response.json();

      expect(result.error).toBeDefined();
      expect(response.status).toBe(400);
    });
  });

  describe('GET /api/topics', () => {
    it('should fetch all topics', async () => {
      const mockTopics = [{ title: 'Test', description: 'Test Desc' }];
      Topic.find.mockResolvedValue(mockTopics);

      const response = await GET();
      const result = await response.json();

      expect(connectMongoDB).toHaveBeenCalled();
      expect(Topic.find).toHaveBeenCalled();
      expect(result.topics).toEqual(mockTopics);
    });
  });

  describe('DELETE /api/topics', () => {
    it('should delete a topic', async () => {
      const mockRequest = {
        nextUrl: {
          searchParams: {
            get: jest.fn().mockReturnValue('507f1f77bcf86cd799439011')
          }
        }
      };

      const response = await DELETE(mockRequest);
      const result = await response.json();

      expect(connectMongoDB).toHaveBeenCalled();
      expect(Topic.findByIdAndDelete).toHaveBeenCalledWith('507f1f77bcf86cd799439011');
      expect(result.message).toBe('Student Database Deleted');
    });
  });
});
