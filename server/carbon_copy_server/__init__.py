from fastapi import APIRouter

# Endpoints
from . import docs

api_router = APIRouter()
api_router.include_router(docs.router)
