from fastapi import APIRouter

router = APIRouter()


@router.get("/plans")
async def get_subscription_plans():
    return {
        "plans": [
            {"id": "free", "name": "Free Tier", "price": 0},
            {"id": "pro_monthly", "name": "Pro Monthly", "price": 19.99},
        ]
    }


@router.post("/checkout")
async def create_checkout_session():
    return {"checkout_url": "https://checkout.example.com/stub"}
