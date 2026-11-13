import { Arrow, Asterisk } from "./Icons";
export default function IdentityCard() {
  return (
    <div
      className="identity-stage"
      aria-label="Konsep kartu identitas dengan kedalaman CSS, foto belum tersedia"
    >
      <div className="identity-card">
        <div className="card-slot" />
        <div className="id-top">
          <span>PW / IDENTITY</span>
          <span aria-hidden="true">
            <Asterisk />
          </span>
        </div>
        <div className="id-photo">
          <span className="id-monogram" aria-hidden="true">
            pw.
          </span>
          <span className="id-photo-label">FOTO BELUM TERSEDIA</span>
        </div>
        <div className="id-bottom">
          <span className="eyebrow">DESIGN & DIGITAL</span>
          <p>
            Prawira
            <br />
            Hutagalung<span>.</span>
          </p>
          <div className="id-rule">
            <span>Social Media & Graphic Design</span>
            <span aria-hidden="true">
              <Arrow />
            </span>
          </div>
        </div>
      </div>
      <div className="identity-caption">
        <span className="short-line" /> DIGITAL IDENTITY / CSS STUDY
      </div>
    </div>
  );
}
