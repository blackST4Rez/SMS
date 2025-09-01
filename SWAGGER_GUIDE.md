# Swagger API Documentation Guide

## How to Access Swagger Documentation

### 1. Start the Development Server
```bash
npm run dev
```

### 2. Access Swagger UI
Open your browser and navigate to:
```
http://localhost:3000/api/docs
```

### 3. Using the Swagger Interface

#### 🔍 Explore API Endpoints
- **GET /api/topics** - Get all student records
- **POST /api/topics** - Create a new student record
- **GET /api/topics/{id}** - Get a specific student record
- **PUT /api/topics/{id}** - Update a student record
- **DELETE /api/topics** - Delete a student record (via query parameter)

#### 🧪 Test API Endpoints Directly
1. Click on any endpoint to expand it
2. Click the "Try it out" button
3. Fill in any required parameters or request body
4. Click "Execute" to send the request
5. View the response in real-time

#### 📋 Example: Creating a Student
1. Expand the **POST /api/topics** endpoint
2. Click "Try it out"
3. In the request body, replace the example with:
```json
{
  "title": "John Doe",
  "description": "Computer Science Student"
}
```
4. Click "Execute"
5. You should see a 201 response with success message

#### 🔍 Example: Getting All Students
1. Expand the **GET /api/topics** endpoint
2. Click "Try it out"
3. Click "Execute"
4. You'll see a list of all student records in the response

## API Endpoints Documentation

### Student Management Endpoints

#### Create Student (POST /api/topics)
- **Request Body**: Requires `title` (student name) and `description` (course/details)
- **Validation**: Both fields are required, minimum 1 character
- **Response**: 201 Created with success message

#### Get All Students (GET /api/topics)
- **Response**: Array of student objects with IDs, names, courses, and timestamps

#### Get Specific Student (GET /api/topics/{id})
- **Parameter**: Student ID in the URL path
- **Validation**: ID must be a valid MongoDB ObjectId
- **Response**: Single student object or 404 if not found

#### Update Student (PUT /api/topics/{id})
- **Parameter**: Student ID in the URL path
- **Request Body**: `title` and/or `description` to update
- **Validation**: ID validation and at least one field to update
- **Response**: 200 OK with success message

#### Delete Student (DELETE /api/topics)
- **Parameter**: Student ID as query parameter (`?id=...`)
- **Validation**: ID must be a valid MongoDB ObjectId
- **Response**: 200 OK with success message

## Validation Rules

### Student Creation/Update
- `title`: Required, minimum 1 character
- `description`: Required, minimum 1 character

### ID Validation
- Must be a valid MongoDB ObjectId format
- 24-character hexadecimal string

## Error Responses

All endpoints return appropriate HTTP status codes:
- **200**: Success
- **201**: Created successfully
- **400**: Validation error (with detailed error message)
- **404**: Resource not found
- **500**: Server error

## Testing Tips

1. **Start with simple requests** - Try GET /api/topics first
2. **Test validation** - Try sending invalid data to see error messages
3. **Use real IDs** - Copy IDs from GET responses for PUT/DELETE operations
4. **Check responses** - Verify the structure matches the documented schema

## Production Notes

- The Swagger UI uses CDN-hosted resources for simplicity
- In production, you might want to host these resources locally
- The API documentation is automatically generated from code comments
