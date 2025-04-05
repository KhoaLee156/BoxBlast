export async function GET(req) {
  const host = req.headers.get("host");

  return new Response(
    JSON.stringify({
      frames: [
        {
          version: "vNext",
          title: "🎁 BoxBlast – Pick Your Box!",
          image: `https://${host}/banner.jpg`,
          buttons: [
            {
              label: "🟥 Box 1",
              action: "post",
              target: `https://${host}/api/box/1`
            },
            {
              label: "🟩 Box 2",
              action: "post",
              target: `https://${host}/api/box/2`
            },
            {
              label: "🟦 Box 3",
              action: "post",
              target: `https://${host}/api/box/3`
            }
          ],
          post_url: `https://${host}/api/box`
        }
      ]
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200
    }
  );
}
