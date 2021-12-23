from datetime import datetime
from typing import Optional

import sqlalchemy as sa
from carbon_copy_server.utils.db import get_db
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.sql import func
from sqlmodel import Field, SQLModel

router = APIRouter()


class Prediction(SQLModel, table=True):
    __tablename__: str = "predictions"

    id: Optional[int] = Field(default=None, primary_key=True)
    encoded_prediction: str
    hash: str
    date: Optional[datetime] = Field(
        default=None, sa_column_kwargs={"server_default": func.now()}
    )


@router.get("/predictions/{hash}")
async def get_prediction(hash: str, db: Session = Depends(get_db)) -> Prediction:
    try:
        prediction = db.query(Prediction).filter(Prediction.hash == hash).first()
        if not prediction:
            raise HTTPException(status_code=404, detail="Prediction not found!")
    except Exception as e:
        raise e
    else:
        return prediction


class PostPrediction(SQLModel):
    encoded_prediction: str
    hash: str


@router.post("/predictions")
async def post_prediction(prediction: PostPrediction, db: Session = Depends(get_db)):
    prediction_row = Prediction(
        encoded_prediction=prediction.encoded_prediction, hash=prediction.hash
    )
    try:
        db.add(prediction_row)
        db.commit()
    except Exception as e:
        raise e
    return 201
