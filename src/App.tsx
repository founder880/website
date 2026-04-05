import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzIULg4a-xpY17FjCkkyGt73aOF8dMFAbb4Rl-Seh4omxUmavt7hWPOg7bmU9BtwCNWOg/exec";

const handleNotify = async () => {
  console.log("🔥 Button clicked");

  if (!email || !email.includes("@")) {
    setMessage("❌ Please enter a valid email");
    return;
  }

  try {
    setLoading(true);
    setMessage("");

    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // important for Google
      body: JSON.stringify({ email }),
    });

    setMessage("🎉 You're on the list!");
    setEmail("");

  } catch (err) {
    console.error(err);
    setMessage("❌ Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4">
      <div className="text-center max-w-xl w-full">
        <h1 className="text-5xl font-bold mb-4">Stacktech Consulting</h1>
        <h2 className="text-2xl mb-3 opacity-90">Coming Soon</h2>

        <p className="mb-8 opacity-80">
          We're building something amazing. Stay tuned for cutting-edge
          technology solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              console.log("Typing:", e.target.value);
              setEmail(e.target.value);
            }}
            className="px-4 py-3 rounded-lg text-black w-full sm:w-80 outline-none"
          />

          <button
            onClick={handleNotify}
            disabled={loading}
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Notify Me"}
          </button>
        </div>

        {message && (
          <p className="mt-5 bg-white/20 px-4 py-2 rounded-lg text-sm">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}