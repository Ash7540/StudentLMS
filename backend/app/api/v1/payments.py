from fastapi import APIRouter
from typing import Dict, Any
from app.schemas.payment import CheckoutRequest, CheckoutResponse

router = APIRouter()


@router.post("/checkout", response_model=CheckoutResponse)
async def create_checkout_session(payload: CheckoutRequest) -> CheckoutResponse:
    return CheckoutResponse(
        checkout_url=f"https://checkout.studylms.edu/pay?plan={payload.plan_id}&session=cs_123",
        payment_id="pay_998877",
    )


@router.post("/webhook")
async def payment_webhook(event_data: Dict[str, Any]) -> Dict[str, Any]:
    return {"status": "success", "event_processed": True}


@router.get("/history")
async def get_payment_history() -> Dict[str, Any]:
    return {
        "status": "success",
        "transactions": [
            {
                "id": "tx_001",
                "amount": 144.00,
                "currency": "USD",
                "plan": "Pro Scholar (Annual)",
                "date": "2026-08-26",
                "status": "succeeded",
            }
        ],
    }
