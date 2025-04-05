export async function POST(req, { params }) {
  const boxId = params.id;
  const rewards = {
    "1": "🎉 You picked Box 1 – You won 10 XP!",
    "2": "✨ Box 2 – Surprise token incoming!",
    "3": "💎 Box 3 – You got an NFT drop!"
  };

  const message = rewards[boxId] || "❌ Invalid box selected.";

  return new Response(
    JSON.stringify({ message }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200
    }
  );
}
