import credits from "../data/credits";

type CreditMember = { name: string; role: string };

export default function Credits() {
  return (
    <main className="credits-page">
      <h1 className="credits-title">
        THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE
      </h1>

      <div className="credits-grid">
        {Object.entries(credits).map(([section, members]) => (
          <div key={section} className="credits-section">
            <h2 className="credits-section-title">{section}</h2>
            {(members as CreditMember[]).map((member, i) => (
              <p key={i} className="credits-member">
                {member.name}, {member.role}
              </p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}