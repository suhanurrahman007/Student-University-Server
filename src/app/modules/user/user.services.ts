import config from "../../config";
import { TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.role = "student"

  userData.password = password || (config.default_password as string)

  userData.id = '2030100001'

  const result = await UserModel.create(userData);

  if (Object.keys(result).length) {
    studentData.id = result.id;
    studentData.user = result._id

    const newStudent = await StudentModel.create(studentData)
    return newStudent
  } 
  return result;
};

export const UserServices = {
  createStudentIntoDB,
}
