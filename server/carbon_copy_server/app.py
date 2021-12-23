from fastapi import FastAPI, HTTPException, Response
from fastapi.middleware.cors import CORSMiddleware
from starlette.requests import Request

from .utils.db import db

tags_metadata = [{"name": "users", "description": "Operations with users."}]

app = FastAPI(
    title="Carbon Copy Backend",
    description="Backend for the Carbon Copy Frontend",
    version="0.1.0",
    docs_url=None,
    redoc_url=None,
    openapi_tags=tags_metadata,
)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def db_session_middleware(request: Request, call_next) -> Response:
    """Middleware for connecting to our DB

    Args:
        request (Request): Request object
        call_next (): Pass the request

    Returns:
        Response: the response
    """
    try:
        request.state.db = db.sessionmaker()
        response = await call_next(request)
    except HTTPException as e:
        raise e
    finally:
        request.state.db.close()
    return response
