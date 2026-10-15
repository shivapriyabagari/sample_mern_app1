from fastapi import APIRouter
from models import Student

stu_router = APIRouter(prefix="/student", tags=["Student"])

@stu_router.get("/getStudents")
def get_students():
    return {"message": "get student method called"}

@stu_router.post("/addstudent")
def add_student():
    return {"message": "add student method called"}
