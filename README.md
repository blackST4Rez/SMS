# 🎓 Student Management System

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, full-stack Student Management System built with Next.js, featuring comprehensive CRUD operations for managing topics, integrated with MongoDB, and equipped with robust testing, API documentation, and validation.

![Project Logo](./public/next.svg) <!-- Replace with actual logo if available -->

## 🚀 Features

- **📚 Topic Management**: Full CRUD operations (Create, Read, Update, Delete) for student topics
- **🔍 Search & Filter**: Efficient topic searching and filtering capabilities
- **📱 Responsive Design**: Mobile-friendly interface with modern UI components
- **🗄️ Database Integration**: Seamless MongoDB integration for data persistence
- **✅ Validation**: Comprehensive input validation for data integrity
- **📖 API Documentation**: Interactive Swagger UI for API exploration
- **🧪 Testing Suite**: Extensive unit and integration tests with Jest
- **🎨 Modern UI**: Clean, intuitive interface with custom components (Navbar, TopicList, etc.)
- **⚡ Performance**: Optimized with Next.js for fast loading and SEO

## 🛠️ Tech Stack

| Category       | Technologies                                                                 |
|----------------|------------------------------------------------------------------------------|
| 🖥️ **Frontend**   | Next.js, React, JavaScript, CSS (Tailwind/PostCSS)                          |
| ⚙️ **Backend**    | Next.js API Routes, Node.js                                                 |
| 🗄️ **Database**   | MongoDB                                                                     |
| 🧪 **Testing**    | Jest, Testing Library                                                        |
| ✅ **Validation** | Validation with Zod                                                 |
| 📖 **Documentation** | Swagger UI                                                                |
| 🚀 **Deployment** | Vercel (recommended)                                                        |

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/SMS.git
   cd SMS
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Usage

### Adding a Student
1. Navigate to the "Add Student" page
2. Fill in the required fields
3. Click "Add Student" to save

### Editing a Topic
1. From the topic list, click the edit button
2. Modify the topic details
3. Save changes

### Viewing Topics
- Click on delete icon.
- Select YES on the dialog box.

### Viewing Topics
- Browse all topics on the main page
- Use search functionality to find specific topics

### API Usage
The application provides RESTful API endpoints:
- `GET /api/topics` - Retrieve all topics
- `POST /api/topics` - Create a new topic
- `GET /api/topics/[id]` - Get a specific topic
- `PUT /api/topics/[id]` - Update a topic
- `DELETE /api/topics/[id]` - Delete a topic

## 📚 API Documentation

Explore the API endpoints interactively using Swagger UI:
- Access at: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
- View detailed endpoint documentation and test requests

For more details, see [SWAGGER_GUIDE.md](./SWAGGER_GUIDE.md)

## 🧪 Testing

Run the test suite to ensure everything is working correctly:

```bash
npm run test
# or
yarn test
# or
pnpm test
```

The project includes:
- Unit tests for components and utilities
- Integration tests for API routes
- System tests for end-to-end functionality

For comprehensive testing instructions, see [TESTING_GUIDE_UPDATED.md](./TESTING_GUIDE_UPDATED.md)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Database powered by [MongoDB](https://www.mongodb.com)
- Testing with [Jest](https://jestjs.io)
- API documentation with [Swagger](https://swagger.io)
- Validation with [Zod](https://zod.dev)

---

**Made with ❤️ using Next.js**

