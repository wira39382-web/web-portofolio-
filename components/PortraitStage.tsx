import Image from "next/image";
import media from "@/content/media.json";
export default function PortraitStage() {
  const portrait = media.portrait as string | null;
  return (
    <div className={`portrait-frame ${portrait ? "has-portrait" : ""}`}>
      <div className="portrait-top">
        <span>PERSONAL PORTRAIT</span>
        <span>PW / 01</span>
      </div>
      {portrait ? (
        <Image
          className="portrait-image"
          src={portrait}
          alt="Prawira Wibawa Hutagalung"
          fill
          sizes="(max-width:640px) 100vw, 45vw"
        />
      ) : (
        <>
          <span className="portrait-mark" aria-hidden="true">
            Prawira<span>.</span>
          </span>
          <span className="portrait-vertical" aria-hidden="true">
            THE PERSON BEHIND THE WORK
          </span>
          <div className="portrait-caption">
            <p>
              Foto personal
              <br />
              akan ditambahkan
              <small>Portrait asli Prawira · segera dilengkapi</small>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
