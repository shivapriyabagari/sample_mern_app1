from fastapi import FastAPI
from pydantic import BaseModel

class Student(BaseModel):
    name: str
    email: str
    age: int
    mark: float

app = FastAPI()

@app.get("/getStudents")
def get_students():
    return {"message": "get Students api called"}

@app.post("/register")
def register(stu: Student):
    return stu

@app.put("/update")
def update_profile():
    return {"message": "update profile called"}

@app.delete("/delete")
def delete_profile():
    return {"message": "delete profile called"}

@app.get("/getStudentDet/{userid}")
def get_student_det(userid: int):
    return {"user_id": userid}

@app.get("/getStudentsdetails")
def get_students_details(page: int = 1, limit: int = 10):
    return {"page": page, "limit": limit}