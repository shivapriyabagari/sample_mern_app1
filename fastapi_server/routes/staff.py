from fastapi import APIRouter
from models import staff

staff_router = APIRouter(prefix="/staff", tags=["Staff"])

@staff_router.get("/getStaffs")
def get_staffs():
    return {"message": "get staff method called"}

@staff_router.post("/addstaff")
def add_staff():
    return {"message": "add staff method called"}
