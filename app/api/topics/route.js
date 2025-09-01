import connectMongoDB from "@/libs/monogdb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
import { validateTopic } from "@/libs/validation";

/**
 * @swagger
 * /api/topics:
 *   post:
 *     summary: Create a new student record
 *     description: Creates a new student record in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 description: Student name or title
 *                 example: "John Doe"
 *               description:
 *                 type: string
 *                 description: Student description or details
 *                 example: "Computer Science Student"
 *     responses:
 *       201:
 *         description: Student record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Student Database Created"
 *       400:
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Title is required, Description is required"
 */

export async function POST(request) {
    try {
        const { title, description } = await request.json();
        validateTopic({ title, description });
        await connectMongoDB();
        await Topic.create({ title, description });
        return NextResponse.json({ message: "Student Database Created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

/**
 * @swagger
 * /api/topics:
 *   get:
 *     summary: Get all student records
 *     description: Retrieves a list of all student records from the database
 *     responses:
 *       200:
 *         description: List of student records retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 topics:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "507f1f77bcf86cd799439011"
 *                       title:
 *                         type: string
 *                         example: "John Doe"
 *                       description:
 *                         type: string
 *                         example: "Computer Science Student"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 */

export async function GET(){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics})
}