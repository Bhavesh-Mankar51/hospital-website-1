import { useEffect, useMemo, useRef, useState } from "react";

const treatments = [
  {
    id: 1,
    title: "Severe Acne Transformation",
    duration: "6 months",
    category: "Acne Treatment",
    rating: 4.9,
    reviews: 124,
    before: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
    after: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    id: 2,
    title: "Moderate Acne Treatment",
    duration: "3 months",
    category: "Acne Treatment",
    rating: 4.8,
    reviews: 98,
    before: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    after: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
  },
  {
    id: 3,
    title: "Cystic Acne Recovery",
    duration: "9 months",
    category: "Advanced Care",
    rating: 5.0,
    reviews: 76,
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    after: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=600&q=80",
  },
  {
    id: 4,
    title: "Hormonal Acne Treatment",
    duration: "4 months",
    category: "Hormonal Care",
    rating: 4.7,
    reviews: 112,
    before: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
    after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 5,
    title: "Rosacea Management",
    duration: "5 months",
    category: "Rosacea",
    rating: 4.9,
    reviews: 89,
    before: "https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=600&q=80",
    after: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
  },
];

const steps = [
  { icon: "🩺", title: "Consultation", desc: "Personalized skin assessment" },
  { icon: "🧪", title: "Diagnosis", desc: "Advanced skin analysis" },
  { icon: "💊", title: "Treatment", desc: "Tailored treatment plan" },
  { icon: "✨", title: "Results", desc: "Visible transformation" },
];

const testimonials = [
  { name: "Priya S.", text: "My skin transformed completely in just 3 months!", stars: 5 },
  { name: "Rahul M.", text: "Best dermatology clinic I've ever visited.", stars: 5 },
  { name: "Ananya K.", text: "The results exceeded all my expectations.", stars: 5 },
];

function StarRating({ rating }) {
  return (
    <span style={{ color: "#f59e0b", fontSize: 13 }}>
      {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
    </span>
  );
}

function labelStyle(side) {
  return {
    position: "absolute",
    top: 12,
    [side]: 14,
    background: side === "left" ? "rgba(30,30,30,0.75)" : "#10b981",
    color: "#fff",
    fontSize: 11,
    fontWeight: 800,
    borderRadius: 8,
    padding: "5px 12px",
    letterSpacing: "1px",
    backdropFilter: "blur(4px)",
    textTransform: "uppercase",
  };
}

export default function BeforeAfterGallery() {
  const [selected, setSelected] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const thumbsScrollRef = useRef(null);
  const thumbRefs = useRef([]);

  const current = useMemo(() => treatments[selected], [selected]);

  useEffect(() => {
    const el = thumbRefs.current[selected];
    const container = thumbsScrollRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const scrollLeftPos = container.scrollLeft + (elRect.left - containerRect.left) - (containerRect.width / 2) + (elRect.width / 2);
    container.scrollTo({ left: scrollLeftPos, behavior: "smooth" });
  }, [selected]);

  useEffect(() => {
    if (!previewOpen) return;
    const onKeyDown = (e) => { if (e.key === "Escape") setPreviewOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [previewOpen]);

  const goPrev = () => setSelected((p) => Math.max(p - 1, 0));
  const goNext = () => setSelected((p) => Math.min(p + 1, treatments.length - 1));

  return (
    <div style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0fdfa 100%)", minHeight: "100vh", padding: "48px 16px" }}>

      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <span style={{ background: "#d1fae5", color: "#059669", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 20, letterSpacing: 1, textTransform: "uppercase" }}>
          Real Results
        </span>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: "#064e3b", margin: "12px 0 8px", letterSpacing: -0.5 }}>
          Before & After Transformations
        </h2>
      </div>

      {/* Main 3-column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr 220px", gap: 24, maxWidth: 1200, margin: "0 auto", alignItems: "start" }}>

        {/* LEFT PANEL */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Treatment Info Card */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "18px 16px", boxShadow: "0 2px 16px rgba(16,185,129,0.08)", border: "1px solid #d1fae5" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#10b981", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
              Current Treatment
            </div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#064e3b", marginBottom: 6 }}>{current.title}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
              <StarRating rating={current.rating} />
              <span style={{ fontSize: 12, color: "#6b7280" }}>({current.reviews})</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderTop: "1px solid #f0fdf4"}}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#10b981" }}>{current.duration}</div>
                <div style={{ fontSize: 10, color: "#9ca3af", fontWeight: 600 }}>Duration</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#10b981" }}>98%</div>
                <div style={{ fontSize: 10, color: "#9ca3af", fontWeight: 600 }}>Success</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#10b981" }}>5K+</div>
                <div style={{ fontSize: 10, color: "#9ca3af", fontWeight: 600 }}>Patients</div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "18px 16px", boxShadow: "0 2px 16px rgba(16,185,129,0.08)", border: "1px solid #d1fae5" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#10b981", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
              Our Process
            </div>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i < steps.length - 1 ? 12 : 0 }}>
                <div style={{ width: 34, height: 34, background: "#d1fae5", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
                  {step.icon}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#064e3b" }}>{step.title}</div>
                  <div style={{ fontSize: 10.5, color: "#9ca3af" }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button style={{ background: "linear-gradient(135deg, #10b981, #059669)", color: "#fff", border: "none", borderRadius: 12, padding: "14px 16px", fontWeight: 700, fontSize: 14, cursor: "pointer", width: "100%", boxShadow: "0 4px 14px rgba(16,185,129,0.35)" }}>
            Book Consultation →
          </button>
        </div>

        {/* CENTER — Main Gallery */}
        <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 8px 40px rgba(16,185,129,0.12)", overflow: "hidden", padding: "20px 20px 16px" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 14 }}>
            <span style={{ background: "#d1fae5", color: "#059669", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>{current.category}</span>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#064e3b", marginTop: 6 }}>{current.title}</div>
            <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
              ⏱ Treatment Duration: <strong style={{ color: "#10b981" }}>{current.duration}</strong>
            </div>
          </div>

          {/* Before/After Images */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(30,80,120,0.13)" }}>
            <div style={{ position: "relative", background: "#fff" }}>
              <img src={current.before} alt="Before" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              <span style={labelStyle("left")}>Before</span>
            </div>
            <div style={{ position: "relative", background: "#fff", borderLeft: "1px solid rgba(0,0,0,0.06)" }}>
              <img src={current.after} alt="After" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              <span style={labelStyle("right")}>After</span>
              <button onClick={() => setPreviewOpen(true)} style={{ position: "absolute", bottom: 12, right: 12, background: "rgba(255,255,255,0.95)", border: "none", borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer", color: "#059669", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                🔍 Preview
              </button>
            </div>
          </div>

          {/* Dot indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, margin: "14px 0 10px" }}>
            {treatments.map((_, i) => (
              <button key={i} onClick={() => setSelected(i)} style={{ width: i === selected ? 24 : 8, height: 8, borderRadius: 4, background: i === selected ? "#10b981" : "#d1fae5", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>

          {/* Thumbnails */}
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }} ref={thumbsScrollRef}>
            {treatments.map((t, i) => (
              <button key={t.id} ref={(node) => { thumbRefs.current[i] = node; }} onClick={() => setSelected(i)} style={{ flexShrink: 0, width: 80, background: "none", border: i === selected ? "2px solid #10b981" : "2px solid transparent", borderRadius: 10, overflow: "hidden", cursor: "pointer", padding: 0, transition: "border 0.2s" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <img src={t.before} alt="" style={{ width: "100%", height: 44, objectFit: "cover" }} />
                  <img src={t.after} alt="" style={{ width: "100%", height: 44, objectFit: "cover" }} />
                </div>
                <div style={{ fontSize: 9, fontWeight: 700, color: i === selected ? "#059669" : "#6b7280", padding: "4px 2px", textAlign: "center", background: i === selected ? "#f0fdf4" : "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {t.title}
                </div>
              </button>
            ))}
          </div>

          {/* Prev/Next */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
            <button onClick={goPrev} disabled={selected === 0} style={{ background: selected === 0 ? "#f3f4f6" : "#10b981", color: selected === 0 ? "#9ca3af" : "#fff", border: "none", borderRadius: 10, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: selected === 0 ? "not-allowed" : "pointer" }}>
              ← Prev
            </button>
            <button onClick={goNext} disabled={selected === treatments.length - 1} style={{ background: selected === treatments.length - 1 ? "#f3f4f6" : "#10b981", color: selected === treatments.length - 1 ? "#9ca3af" : "#fff", border: "none", borderRadius: 10, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: selected === treatments.length - 1 ? "not-allowed" : "pointer" }}>
              Next →
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Testimonials */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "18px 16px", boxShadow: "0 2px 16px rgba(16,185,129,0.08)", border: "1px solid #d1fae5" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#10b981", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
              Patient Reviews
            </div>
            {testimonials.map((t, i) => (
              <div key={i} style={{ marginBottom: i < testimonials.length - 1 ? 12 : 0, paddingBottom: i < testimonials.length - 1 ? 12 : 0, borderBottom: i < testimonials.length - 1 ? "1px solid #f0fdf4" : "none" }}>
                <StarRating rating={t.stars} />
                <div style={{ fontSize: 12, color: "#374151", margin: "4px 0 3px", fontStyle: "italic" }}>"{t.text}"</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#10b981" }}>— {t.name}</div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          {/* <div style={{ background: "#fff", borderRadius: 16, padding: "18px 16px", boxShadow: "0 2px 16px rgba(16,185,129,0.08)", border: "1px solid #d1fae5" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#10b981", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
              Why Choose Us
            </div>
            {["Board-certified dermatologists", "FDA-approved treatments", "Personalized skin plans", "Ongoing support & care"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
                <div style={{ width: 18, height: 18, background: "#d1fae5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#059669", fontWeight: 800, flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: 12, color: "#374151", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div> */}

          {/* Contact Card */}
          <div style={{ background: "linear-gradient(135deg, #064e3b, #065f46)", borderRadius: 16, padding: "18px 16px", color: "#fff" }}>
            <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>Ready to Transform?</div>
            <div style={{ fontSize: 11, color: "#a7f3d0", marginBottom: 14 }}>Book a free skin consultation with our experts today.</div>
            <button style={{ background: "#10b981", color: "#fff", border: "none", borderRadius: 10, padding: "10px 16px", fontWeight: 700, fontSize: 12, cursor: "pointer", width: "100%" }}>
              📞 Call Now
            </button>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {previewOpen && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setPreviewOpen(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, backdropFilter: "blur(4px)" }}>
          <div style={{ background: "#fff", borderRadius: 20, maxWidth: 700, width: "90%", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid #f0fdf4" }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 16, color: "#064e3b" }}>{current.title}</div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>Duration: <strong style={{ color: "#10b981" }}>{current.duration}</strong></div>
              </div>
              <button onClick={() => setPreviewOpen(false)} style={{ background: "#f3f4f6", border: "none", borderRadius: 8, width: 32, height: 32, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div style={{ position: "relative" }}>
                <img src={current.before} alt="Before" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", display: "block" }} />
                <span style={labelStyle("left")}>Before</span>
              </div>
              <div style={{ position: "relative", borderLeft: "1px solid rgba(0,0,0,0.06)" }}>
                <img src={current.after} alt="After" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", display: "block" }} />
                <span style={labelStyle("right")}>After</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}