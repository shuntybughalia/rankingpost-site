import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export const runtime = "nodejs";
// This prevents the build error by ensuring the route is handled at request time
export const dynamic = "force-dynamic"; 

type BlogInput = {
  title?: string;
  excerpt?: string;
  content?: string;
};

export async function GET() {
  try {
    const db = await getDb();
    if (!db) throw new Error("Database connection failed");

    const blogs = await db.collection("blogs")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BlogInput;
    const { title, excerpt, content } = body;

    if (!title || !excerpt || !content) {
      return NextResponse.json(
        { message: "Title, excerpt and content are required" },
        { status: 400 }
      );
    }

    const db = await getDb();
    const collection = db.collection("blogs");

    const now = new Date();

    const blog = {
      title,
      excerpt,
      content,
      createdAt: now,
      updatedAt: now,
    };

    const result = await collection.insertOne(blog);

    return NextResponse.json(
      { ...blog, _id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog", error);
    return NextResponse.json(
      { message: "Failed to create blog" },
      { status: 500 }
    );
  }
}

