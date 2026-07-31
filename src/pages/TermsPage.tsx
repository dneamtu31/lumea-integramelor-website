import { useMemo, useState } from "react";

type Lang = "ro" | "en";

function TabButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-sm font-extrabold transition",
        active
          ? "bg-brand-ink text-white"
          : "bg-black/5 text-brand-ink/80 hover:bg-black/10 hover:text-brand-ink",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-2">
      <h2 className="text-lg font-extrabold tracking-tight">{title}</h2>
      <div className="grid gap-2">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm leading-relaxed text-brand-ink/80">{children}</p>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-brand-paper px-4 py-3 text-sm text-brand-ink/80">
      <div className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-brand-red" />
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  const [lang, setLang] = useState<Lang>("en");

  const header = useMemo(() => {
    if (lang === "ro") {
      return {
        eyebrow: "Termeni și condiții",
        title: "Termeni și condiții pentru Lumea integramelor",
        updated: "Ultima actualizare",
        date: "31.07.2026",
      };
    }
    return {
      eyebrow: "Terms & Conditions",
      title: "Terms & Conditions for Lumea integramelor",
      updated: "Last updated",
      date: "July 31, 2026",
    };
  }, [lang]);

  return (
    <article className="mx-auto grid max-w-3xl gap-8">
      <header className="rounded-3xl border border-black/5 bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold text-brand-ink/60">{header.eyebrow}</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
              {header.title}
            </h1>
            <p className="mt-3 text-sm text-brand-ink/70">
              {header.updated}: <span className="font-bold">{header.date}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <TabButton active={lang === "ro"} onClick={() => setLang("ro")}>
              RO
            </TabButton>
            <TabButton active={lang === "en"} onClick={() => setLang("en")}>
              EN
            </TabButton>
          </div>
        </div>
      </header>

      <section className="grid gap-6 rounded-3xl border border-black/5 bg-white p-8">
        {lang === "ro" ? (
          <div className="grid gap-6">
            <P>
              Acești Termeni și Condiții („Termeni”) guvernează utilizarea aplicației{" "}
              <span className="font-bold">Lumea integramelor</span> („Aplicația”). Prin
              folosirea Aplicației, accepți acești Termeni.
            </P>

            <Section title="1) Descrierea aplicației">
              <P>
                Aplicația oferă jocuri de tip integrame și funcționalități asociate
                (niveluri, indicii, progres, setări, formular de contact).{" "}
                <span className="font-bold">Nu există conturi</span>, iar progresul este
                păstrat <span className="font-bold">local pe dispozitiv</span>.
              </P>
            </Section>

            <Section title="2) Licență de utilizare">
              <P>
                Îți acordăm o licență{" "}
                <span className="font-bold">neexclusivă, netransferabilă, revocabilă</span>{" "}
                de a folosi Aplicația în scop personal, necomercial, conform acestor
                Termeni.
              </P>
            </Section>

            <Section title="3) Restricții">
              <P>Nu ai voie să:</P>
              <Bullet>
                decompilezi, modifici, copiezi sau încerci să extragi codul sursă, cu
                excepția cazurilor permise de lege;
              </Bullet>
              <Bullet>
                încerci să ocolești mecanismele de securitate sau să afectezi
                funcționarea Aplicației;
              </Bullet>
              <Bullet>folosești Aplicația pentru activități ilegale sau abuzive;</Bullet>
              <Bullet>
                trimiți prin formularul de contact sau pe email conținut ilegal,
                ofensator, spam sau date ale altor persoane fără drept.
              </Bullet>
            </Section>

            <Section title="4) Proprietate intelectuală">
              <P>
                Conținutul și materialele din Aplicație (design, logo, texte, integrame,
                baze de date, cod) aparțin{" "}
                <span className="font-bold">dezvoltatorului</span> sau licențiatorilor și
                sunt protejate de legislația aplicabilă.
              </P>
            </Section>

            <Section title="5) Reclame">
              <P>
                Aplicația poate afișa reclame furnizate de terți prin{" "}
                <span className="font-bold">Google AdMob</span>. Nu garantăm
                disponibilitatea, acuratețea sau calitatea produselor/serviciilor
                promovate de terți.
              </P>
            </Section>

            <Section title="6) Formular de contact">
              <P>
                Aplicația poate oferi un formular de contact (Setări → Contactează-ne)
                pentru feedback, suport sau raportarea problemelor. Prin trimiterea unui
                mesaj, confirmi că datele pe care le introduci (în special emailul și
                conținutul mesajului) pot fi prelucrate conform Politicii de
                Confidențialitate, inclusiv prin intermediul serviciului terț{" "}
                <span className="font-bold">Formspree</span>, pentru a ne livra mesajul.
              </P>
              <P>
                Nu garantăm un timp maxim de răspuns. Putem refuza sau ignora mesaje
                abuzive, incomplete sau care nu țin de Aplicație.
              </P>
            </Section>

            <Section title="7) Achiziții în aplicație (posibile în viitor)">
              <P>
                În prezent, Aplicația{" "}
                <span className="font-bold">nu include achiziții în aplicație</span>. Dacă
                vor fi introduse (de ex. eliminare reclame, conținut/pachete premium),
                acestea vor fi procesate prin{" "}
                <span className="font-bold">Apple App Store</span> și/sau{" "}
                <span className="font-bold">Google Play</span> și vor fi supuse termenilor
                și politicilor acelor platforme (inclusiv rambursări).
              </P>
            </Section>

            <Section title="8) Disponibilitate și modificări">
              <P>
                Putem modifica, suspenda sau opri Aplicația (integral sau parțial),
                inclusiv conținutul și funcționalitățile, în orice moment.
              </P>
            </Section>

            <Section title="9) Limitarea răspunderii">
              <P>
                Aplicația este oferită „ca atare”. În măsura permisă de lege, nu garantăm
                funcționarea fără erori sau întreruperi. Nu răspundem pentru pierderi
                indirecte (inclusiv pierderea progresului salvat local) rezultate din
                utilizarea Aplicației.
              </P>
            </Section>

            <Section title="10) Confidențialitate">
              <P>
                Utilizarea Aplicației este supusă și Politicii de Confidențialitate,
                inclusiv în ceea ce privește formularul de contact și prelucrarea datelor
                asociate.
              </P>
            </Section>

            <Section title="11) Încetarea utilizării">
              <P>
                Poți înceta utilizarea oricând prin dezinstalare. Putem restricționa
                accesul dacă încalci acești Termeni.
              </P>
            </Section>

            <Section title="12) Legea aplicabilă">
              <P>
                Acești Termeni sunt guvernați de legea aplicabilă, în funcție de
                jurisdicția relevantă.
              </P>
            </Section>

            <Section title="13) Contact">
              <P>
                Ne poți contacta din aplicație (Setări → Contactează-ne) sau pe email:{" "}
                <span className="font-bold">lumeaintegramelor@protonmail.com</span>
              </P>
            </Section>
          </div>
        ) : (
          <div className="grid gap-6">
            <P>
              These Terms & Conditions (“Terms”) govern use of the{" "}
              <span className="font-bold">Lumea integramelor</span> application (“the
              App”). By using the App, you accept these Terms.
            </P>

            <Section title="1) Description of the App">
              <P>
                The App provides crossword-style games and related features (levels,
                hints, progress, settings, contact form).{" "}
                <span className="font-bold">There are no accounts</span>, and progress is
                stored <span className="font-bold">locally on your device</span>.
              </P>
            </Section>

            <Section title="2) License to use">
              <P>
                We grant you a{" "}
                <span className="font-bold">non-exclusive, non-transferable, revocable</span>{" "}
                license to use the App for personal, non-commercial purposes, in
                accordance with these Terms.
              </P>
            </Section>

            <Section title="3) Restrictions">
              <P>You may not:</P>
              <Bullet>
                decompile, modify, copy, or attempt to extract the source code, except
                where permitted by law;
              </Bullet>
              <Bullet>
                attempt to circumvent security mechanisms or interfere with the App’s
                operation;
              </Bullet>
              <Bullet>use the App for illegal or abusive activities;</Bullet>
              <Bullet>
                send via the contact form or email illegal, offensive, or spam content,
                or other people’s data without authorization.
              </Bullet>
            </Section>

            <Section title="4) Intellectual property">
              <P>
                Content and materials in the App (design, logo, text, puzzles, databases,
                code) belong to the <span className="font-bold">developer</span> or
                licensors and are protected by applicable law.
              </P>
            </Section>

            <Section title="5) Ads">
              <P>
                The App may display ads provided by third parties via{" "}
                <span className="font-bold">Google AdMob</span>. We do not guarantee the
                availability, accuracy, or quality of products/services promoted by third
                parties.
              </P>
            </Section>

            <Section title="6) Contact form">
              <P>
                The App may offer a contact form (Settings → Contact us) for feedback,
                support, or reporting issues. By sending a message, you confirm that the
                data you enter (especially your email and message content) may be
                processed under the Privacy Policy, including via the third-party service{" "}
                <span className="font-bold">Formspree</span>, to deliver the message to
                us.
              </P>
              <P>
                We do not guarantee a maximum response time. We may refuse or ignore
                abusive, incomplete, or App-unrelated messages.
              </P>
            </Section>

            <Section title="7) In-app purchases (possible in the future)">
              <P>
                Currently, the App{" "}
                <span className="font-bold">does not include in-app purchases</span>. If
                they are introduced (e.g., ad removal, premium content/packs), they will
                be processed through the{" "}
                <span className="font-bold">Apple App Store</span> and/or{" "}
                <span className="font-bold">Google Play</span> and will be subject to those
                platforms’ terms and policies (including refunds).
              </P>
            </Section>

            <Section title="8) Availability and changes">
              <P>
                We may modify, suspend, or discontinue the App (in whole or in part),
                including content and features, at any time.
              </P>
            </Section>

            <Section title="9) Limitation of liability">
              <P>
                The App is provided “as is”. To the extent permitted by law, we do not
                guarantee error-free or uninterrupted operation. We are not liable for
                indirect losses (including loss of locally saved progress) arising from
                use of the App.
              </P>
            </Section>

            <Section title="10) Privacy">
              <P>
                Use of the App is also subject to the Privacy Policy, including with
                respect to the contact form and related data processing.
              </P>
            </Section>

            <Section title="11) Termination of use">
              <P>
                You may stop using the App at any time by uninstalling it. We may
                restrict access if you breach these Terms.
              </P>
            </Section>

            <Section title="12) Governing law">
              <P>
                These Terms are governed by applicable law, depending on the relevant
                jurisdiction.
              </P>
            </Section>

            <Section title="13) Contact">
              <P>
                You can contact us from the App (Settings → Contact us) or by email:{" "}
                <span className="font-bold">lumeaintegramelor@protonmail.com</span>
              </P>
            </Section>
          </div>
        )}
      </section>
    </article>
  );
}
