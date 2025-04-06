export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">🎮 BoxBlast</h1>
      <p className="text-lg text-gray-600">Choose a box and see what you win!</p>
      <p className="mt-2 text-sm text-gray-400">Frame endpoint: <code>/api/frame</code></p>
    </main>
  );
}
