import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Student Management System API',
      version: '1.0.0',
      description: 'API documentation for the Student Management System',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Topic: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'The auto-generated ID of the topic',
            },
            title: {
              type: 'string',
              description: 'Title of the topic',
              example: 'Mathematics',
            },
            description: {
              type: 'string',
              description: 'Description of the topic',
              example: 'Advanced calculus and algebra',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Creation timestamp',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Last update timestamp',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Error message',
            },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: {
                    type: 'string',
                    description: 'Field that failed validation',
                  },
                  message: {
                    type: 'string',
                    description: 'Validation error message',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['./app/api/**/*.js'], // Path to the API routes
};

export const swaggerSpec = swaggerJSDoc(options);
