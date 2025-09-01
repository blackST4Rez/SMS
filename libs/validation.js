import { z } from 'zod';

// Topic validation schema
export const topicSchema = z.object({
  title: z.string()
    .min(1, { message: "Title is required" })
    .max(100, { message: "Title must be less than 100 characters" })
    .trim(),
  description: z.string()
    .min(1, { message: "Description is required" })
    .max(500, { message: "Description must be less than 500 characters" })
    .trim()
});

// ID validation schema for MongoDB ObjectId
export const idSchema = z.string()
  .min(1, { message: "ID is required" })
  .regex(/^[0-9a-fA-F]{24}$/, { message: "Invalid ID format" });

// Validation function for request body
export const validateTopic = (data) => {
  try {
    return topicSchema.parse(data);
  } catch (error) {
    if (error.errors) {
      throw new Error(error.errors.map(err => err.message).join(', '));
    }
    throw new Error(error.message);
  }
};

// Validation function for ID parameter
export const validateId = (id) => {
  try {
    return idSchema.parse(id);
  } catch (error) {
    if (error.errors) {
      throw new Error(error.errors.map(err => err.message).join(', '));
    }
    throw new Error(error.message);
  }
};
