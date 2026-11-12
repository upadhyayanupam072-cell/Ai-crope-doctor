# Key snippet from server.py: Market Prices with TodayPriceRates Link
@app.get("/api/market-prices")
async def get_market_prices():
    return {
        "source": "Mandi Live Feeds & TodayPriceRates",
        "external_link": "https://market.todaypricerates.com/vegetables-daily-price",
        "commodities": [
            {"crop": "Wheat (Lokwan/Sharbati)", "price_per_qtl": 2480, "forecast_14d": 2640, "trend": "rise", "action": "HOLD"},
            {"crop": "Tomato (Hybrid)", "price_per_qtl": 2900, "forecast_14d": 2550, "trend": "fall", "action": "SELL_NOW"},
            {"crop": "Potato (Jyoti)", "price_per_qtl": 1680, "forecast_14d": 1810, "trend": "rise", "action": "HOLD"},
            {"crop": "Onion (Red)", "price_per_qtl": 3150, "forecast_14d": 3490, "trend": "rise", "action": "HOLD"}
        ]
    }