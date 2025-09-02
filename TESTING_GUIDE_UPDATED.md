# Student Management System - Testing Guide

## Overview
This guide explains how to test the implemented features: Zod validation, Jest testing, and Swagger documentation.

## 1. Testing Zod Validation

### Validation Rules Implemented:
- **Title**: Required, max 100 characters
- **Description**: Required, max 500 characters
- **ID**: Must be valid MongoDB ObjectId format

### Testing Validation:
```bash
# Run validation tests
npm test __tests__/validation.test.js
```

### Manual Validation Testing:
1. Start the development server:
```bash
npm run dev
```

2. Test with invalid data using curl or Postman:
```bash
# Test missing title
curl -X POST http://localhost:3000/api/topics \
  -H "Content-Type: application/json" \
  -d '{"title":"", "description":"Test Description"}'

# Test title too long
curl -X POST http://localhost:3000/api/topics \
  -H "Content-Type: application/json" \
  -d '{"title":"'$(printf '%0.101s' {1..101})'", "description":"Test Description"}'

# Test missing description
curl -X POST http://localhost:3000/api/topics \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Title", "description":""}'
```

## 2. Testing with Jest

### Running All Tests:
```bash
npm test
```

### Running Specific Test Files:
```bash
# Run validation tests only
npm test __tests__/validation.test.js

# Run API tests only
npm test __tests__/api.test.js

# Run system tests only
npm test __tests__/system.test.js
```

### Test Coverage:
- **Validation Tests**: Test Zod schemas and validation functions
- **API Tests**: Test POST, GET, DELETE operations with mocked database
- **System Tests**: Test complete CRUD flow for topics and error handling scenarios
- **Error Handling**: Tests ensure proper error responses

## 3. Testing Swagger Documentation

### Accessing Swagger UI:
1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:3000/api/docs
```

### Testing API Endpoints through Swagger:
1. In Swagger UI, expand each endpoint
2. Click "Try it out"
3. Fill in the required parameters
4. Click "Execute" to test the endpoint

### Expected Endpoints in Swagger:
- POST /api/topics - Create student record
- GET /api/topics - Get all students
- DELETE /api/topics - Delete student by ID
- PUT /api/topics/{id} - Update student record
- GET /api/topics/{id} - Get single student

## 4. System Testing

### Running System Tests:
```bash
# Run system tests
npm test __tests__/system.test.js
```

### System Testing Scenarios:
- Complete CRUD flow for topics
- Error handling scenarios for invalid data and IDs

## 5. Manual API Testing

### Using curl:
```bash
# Create a student
curl -X POST http://localhost:3000/api/topics \
  -H "Content-Type: application/json" \
  -d '{"title":"John Doe", "description":"Computer Science Student"}'

# Get all students
curl http://localhost:3000/api/topics

# Delete a student (replace {id} with actual ID)
curl -X DELETE "http://localhost:3000/api/topics?id={id}"
```

### Using Postman:
1. Import the Swagger JSON from `http://localhost:3000/api/docs`
2. Test each endpoint with valid and invalid data
3. Verify responses and error handling

## 6. Frontend Testing

### Testing the UI:
1. Start the development server:
```bash
npm run dev
```

2. Open `http://localhost:3000` in your browser
3. Test adding students with:
   - Valid data (should succeed)
   - Invalid data (should show validation errors)
   - Empty fields (should show required field errors)

### Testing Validation in Frontend:
- Try submitting empty fields
- Try submitting very long text
- Verify error messages are displayed

## 7. Common Test Scenarios

### Success Scenarios:
- Create student with valid data
- Retrieve list of students
- Delete existing student
- Update student information

### Error Scenarios:
- Create student with missing required fields
- Create student with field length violations
- Delete student with invalid ID format
- Update student with invalid data

## 8. Troubleshooting

### Common Issues:
1. **MongoDB Connection**: Ensure MongoDB is running and connection string is correct
2. **Validation Errors**: Check error messages in API responses
3. **Test Failures**: Run tests with `--verbose` flag for detailed output

### Debug Mode:
```bash
# Run tests with verbose output
npm test -- --verbose

# Run specific test with debug output
npm test __tests__/validation.test.js -- --verbose
```

## 9. Best Practices

### Testing Best Practices:
- Always test both success and error cases
- Test edge cases (minimum/maximum values)
- Test with different data types
- Verify error messages are user-friendly

### Validation Best Practices:
- Validate input data at API level
- Provide clear error messages
- Handle both client-side and server-side validation

### Documentation Best Practices:
- Keep Swagger documentation updated
- Include examples for all endpoints
- Document error responses
