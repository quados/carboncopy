from fastapi import APIRouter

from . import predictions

backend_router = APIRouter()
backend_router.include_router(predictions.router, tags=["predictions"])
