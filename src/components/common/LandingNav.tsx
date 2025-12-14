import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function LandingNav() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div>
        {/* left: logo + nav links */}
        <div>
          {/* logo placeholder */}
          <button onClick={() => navigate("/")}>
            <Sparkles />
          </button>

          {/* primary nav */}
          <nav>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/about")}>About</button>
            <button onClick={() => navigate("/resources")}>Resources</button>
            <span>PROVEN PROGRESS</span>
          </nav>
        </div>

        {/* right: login dropdown */}
        <div>
          <button onClick={() => setOpen((o) => !o)}>Login</button>
        </div>
      </div>
    </header>
  );
}
