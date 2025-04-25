import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUser.dto";

export function getUsers(request: Request, response: Response) {
  response.json({ message: "Get all users" });
}

export function getUser(request: Request, response: Response) {
  const userId = request.params.id;
  response.json({ message: `Get user with ID: ${userId}` });
}

export function createUser(request: Request<{}, {}, CreateUserDto>, response: Response<{message: String}>) {
    console.log('Creating user with data:', request.body);
    const { email } = request.body;
    // Here you would typically save the user to the database
    response.status(201).json({ message: `User created with email: ${email}` });
}
