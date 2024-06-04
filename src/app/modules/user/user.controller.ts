/* eslint-disable no-console */
import { Request, Response } from "express";
import { UserServices } from "./user.services";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password ,student: studentData } = req.body;
    const result = await UserServices.createStudentIntoDB(password, studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserController = {
    createStudent
}