from fastapi import APIRouter, status, HTTPException
from typing import Dict, Any

router = APIRouter()


@router.get("/plans")
async def list_subscription_plans() -> Dict[str, Any]:
    return {
        "status": "success",
        "plans": [
            {
                "id": "free",
                "name": "Free Student",
                "price": 0,
                "billing": "forever",
                "features": ["10 AI queries/day", "Public courses", "Basic stats"],
            },
            {
                "id": "pro_monthly",
                "name": "Pro Scholar (Monthly)",
                "price": 15.00,
                "billing": "monthly",
                "features": ["Unlimited AI queries", "Quiz generator", "All courses"],
            },
            {
                "id": "pro_annual",
                "name": "Pro Scholar (Annual)",
                "price": 144.00,
                "billing": "annual",
                "features": ["Unlimited AI queries", "Quiz generator", "20% discount"],
            },
        ],
    }


@router.get("/current")
async def get_current_subscription() -> Dict[str, Any]:
    return {
        "status": "success",
        "subscription": {
            "plan_id": "pro_annual",
            "plan_name": "Pro Scholar",
            "status": "active",
            "current_period_end": "2027-08-28T00:00:00Z",
            "cancel_at_period_end": False,
        },
    }


@router.post("/cancel")
async def cancel_subscription() -> Dict[str, Any]:
    return {
        "status": "success",
        "message": "Subscription will be canceled at the end of current billing period",
    }
