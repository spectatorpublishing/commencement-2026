import credits from "../data/credits";

type CreditMember = { name: string; role: string };

export default function Credits() {
  return (
    <main style={{ minHeight: "100vh", color: "black", textAlign: "center", padding: "2rem 0" }}>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, letterSpacing: "0.05em", marginBottom: "3rem" }}>
        THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE<br />THIS ISSUE POSSIBLE
      </h1>

      <div style={{ columns: 2, columnGap: "64px", maxWidth: "900px", margin: "0 auto" }}>
        {Object.entries(credits).map(([section, members]) => (
          <div key={section} style={{ breakInside: "avoid", marginBottom: "40px" }}>
            <h2 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "12px" }}>{section}</h2>
            {(members as CreditMember[]).map((member, i) => (
              <p key={i} style={{ margin: "4px 0", fontSize: "1rem" }}>{member.name}, {member.role}</p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}