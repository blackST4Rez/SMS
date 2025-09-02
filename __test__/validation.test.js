import { validateTopic, validateId } from '@/libs/validation';

describe('Validation Functions', () => {
  describe('validateTopic', () => {
    it('should validate correct topic data', () => {
      const validData = { title: 'Test Title', description: 'Test Description' };
      expect(() => validateTopic(validData)).not.toThrow();
    });

    it('should throw error for missing title', () => {
      const invalidData = { title: '', description: 'Test Description' };
      expect(() => validateTopic(invalidData)).toThrow('Title is required');
    });

    it('should throw error for title too long', () => {
      const longTitle = 'a'.repeat(101);
      const invalidData = { title: longTitle, description: 'Test Description' };
      expect(() => validateTopic(invalidData)).toThrow('Title must be less than 100 characters');
    });

    it('should throw error for missing description', () => {
      const invalidData = { title: 'Test Title', description: '' };
      expect(() => validateTopic(invalidData)).toThrow('Description is required');
    });

    it('should throw error for description too long', () => {
      const longDescription = 'a'.repeat(501);
      const invalidData = { title: 'Test Title', description: longDescription };
      expect(() => validateTopic(invalidData)).toThrow('Description must be less than 500 characters');
    });
  });

  describe('validateId', () => {
    it('should validate correct MongoDB ObjectId', () => {
      const validId = '507f1f77bcf86cd799439011';
      expect(() => validateId(validId)).not.toThrow();
    });

    it('should throw error for empty ID', () => {
      expect(() => validateId('')).toThrow('ID is required');
    });

    it('should throw error for invalid ID format', () => {
      const invalidId = 'invalid-id-format';
      expect(() => validateId(invalidId)).toThrow('Invalid ID format');
    });

    it('should throw error for ID that is too short', () => {
      const shortId = '123';
      expect(() => validateId(shortId)).toThrow('Invalid ID format');
    });
  });
});
