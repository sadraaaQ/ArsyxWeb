import { useLanguage } from "../hooks/useLanguage";
import sadraImg from "../assets/Team/SadraJokar.webp";
import ariaImg from "../assets/Team/Aria.webp";

const memberImages = {
  "Sadra Jokar": sadraImg,
  "Aria Alahpanah": ariaImg,
};

function Team() {
  const { t } = useLanguage();
  const members = t("team.members");

  return (
    <section className="team" id="team">
      <div className="container">

        <div className="section-header">
          <div>
            <p className="section-label">
              {t("team.label")}
            </p>

            <h2 className="section-title">
              {t("team.title")} <span>{t("team.titleHighlight")}</span>
            </h2>
          </div>

          <p className="section-description">
            {t("team.description")}
          </p>
        </div>

        <div className="team-grid">
          {members.map((member) => (
            <article
              className="team-member"
              key={member.number}
            >
              <div className="team-member-top">
                <span className="team-number">
                  {member.number}
                </span>

                <span className="team-arrow">
                  ↗
                </span>
              </div>

              <div className="team-photo">
                {memberImages[member.name] ? (
                  <img
                    src={memberImages[member.name]}
                    alt={member.name}
                    className="team-photo-img"
                  />
                ) : (
                  <div className="team-photo-placeholder">
                    {t("team.photo")}
                  </div>
                )}
              </div>

              <div className="team-info">
                <h3>{member.name}</h3>

                <span className="team-role">
                  {member.role}
                </span>

                <p>
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Team;
