import React, { useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fvhaqlgexwckpfdhxjfa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2aGFxbGdleHdja3BmZGh4amZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMjkyNjksImV4cCI6MjA5MTkwNTI2OX0.4qy3p3_UqMSQ9NKXfDN1VgFTDrXz4qtTeW_j_-q2EFw"
);

export default function App() {
  const [page, setPage] = useState(0);
  const [clicked, setClicked] = useState(false);

  const sendSignal = async () => {
    const { error } = await supabase
      .from("responses")
      .insert([
        {
          clicked: true,
          created_at: new Date(),
        },
      ]);

    if (error) {
      console.error(error);
      alert("Something went wrong");
    } else {
      setClicked(true);

      const audio = document.getElementById("bg-music");
      if (audio) {
        audio.play();
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f9a8d4, #fce7f3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      {/* 🎵 Music */}
      <audio id="bg-music" loop>
        <source
          src="/mine-love-mine-all-mine.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* PAGE 1 */}
      {page === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}>
            Hey Rey 💗
          </h1>

          <p style={{ marginBottom: "24px" }}>
            I know I hurt you and I’m really sorry.
          </p>

          <button
            onClick={() => setPage(1)}
            style={{
              backgroundColor: "#ec4899",
              color: "white",
              padding: "12px 24px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </motion.div>
      )}

      {/* PAGE 2 - MEMORIES */}
      {page === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
            Our Memories 🌸
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div>
              <img
                src="/photo1.png"
                style={{ borderRadius: "16px", maxWidth: "300px", width: "100%" }}
              />
              <p style={{ marginTop: "8px", fontSize: "14px", color: "#9d174d" }}>
                Best moment of my life — July 11th 💗
              </p>
            </div>

            <div>
              <img
                src="/photo2.jpg"
                style={{ borderRadius: "16px", maxWidth: "300px", width: "100%" }}
              />
            </div>

            <div>
              <img
                src="/drawing.jpg"
                style={{ borderRadius: "16px", maxWidth: "200px", width: "100%" }}
              />
              <p style={{ marginTop: "8px", fontSize: "14px", color: "#9d174d" }}>
                I love this frog thank you 💭
              </p>
            </div>
          </div>

          <p style={{ marginBottom: "24px" }}>
            Every moment with you meant everything to me.
          </p>

          <button
            onClick={() => setPage(2)}
            style={{
              backgroundColor: "#f472b6",
              color: "white",
              padding: "12px 24px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        </motion.div>
      )}

      {/* PAGE 3 - APOLOGY */}
      {page === 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
            I’m Sorry 💌
          </h2>

          <p style={{ marginBottom: "24px", maxWidth: "400px" }}>
            Rey. I'm sorry for hurting you every time when you are trying to explain how you're feeling to me. I'm sorry for not listening to your feelings. I'm sorry for making you feel like you're not worth anything. I'm sorry for hurting you. I'm sorry for saying things that I shouldn't have said to a person who's sick and who's crying because of me. I'm sorry. Rey I love you. I love you so very much. I want to change. I want to kiss you. I wanna take care of you. I wanna carry you in my arms and listen to all the problems you have about your family. I wanna take care of you. I want to be by your side. I don't wanna keep hurting you and I'm really sorry. I'm sorry for not listening. I'm sorry for making you feel this way. I really am sorry. Sorry for hurting you sweetheart.
          </p>

          <button
            onClick={() => setPage(3)}
            style={{
              backgroundColor: "#f472b6",
              color: "white",
              padding: "12px 24px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </motion.div>
      )}

      {/* PAGE 4 - FINAL */}
      {page === 3 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
            No pressure kuchu 💗
          </h2>

          <p style={{ marginBottom: "24px" }}>
            If you wanna get babied I’ll be here.
          </p>

          <button
            onClick={sendSignal}
            style={{
              backgroundColor: "#db2777",
              color: "white",
              padding: "16px 32px",
              borderRadius: "999px",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            I want to talk
          </button>

          {clicked && (
            <a
              href="mailto:siddarthr256@gmail.com"
              style={{
                marginTop: "16px",
                color: "#be185d",
                textDecoration: "underline",
                display: "block",
              }}
            >
              email me muah 💗
            </a>
          )}
        </motion.div>
      )}
    </div>
  );
}