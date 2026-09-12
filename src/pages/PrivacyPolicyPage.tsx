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

function LinkRow({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <div className="rounded-2xl bg-brand-paper px-4 py-3 text-sm">
      <span className="font-bold text-brand-ink">{label}: </span>
      <a
        className="font-semibold text-brand-ink underline decoration-black/20 underline-offset-4 hover:decoration-black/40"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {href}
      </a>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const [lang, setLang] = useState<Lang>("en");

  const header = useMemo(() => {
    if (lang === "ro") {
      return {
        eyebrow: "Politica de confidențialitate",
        title: "Politica de confidențialitate pentru Lumea integramelor",
        updated: "Ultima actualizare",
        date: "12.09.2026",
      };
    }
    return {
      eyebrow: "Privacy Policy",
      title: "Privacy Policy for Lumea integramelor",
      updated: "Last updated",
      date: "September 12, 2026",
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
              Această Politică de Confidențialitate descrie modul în care aplicația{" "}
              <span className="font-bold">Lumea integramelor</span> („Aplicația”, „noi”)
              prelucrează anumite date atunci când o folosești.
            </P>

            <Section title="1) Operator și contact">
              <P>
                Email contact: <span className="font-bold">lumeaintegramelor@protonmail.com</span>
              </P>
              <P>Poți trimite un mesaj și din aplicație, din Setări → Contactează-ne.</P>
            </Section>

            <Section title="2) Ce date colectăm">
              <P>
                Aplicația <span className="font-bold">nu are conturi</span> și, în
                utilizarea obișnuită,{" "}
                <span className="font-bold">nu solicită date de identificare</span>{" "}
                (ex. nume, adresă, CNP). Progresul și setările sunt păstrate{" "}
                <span className="font-bold">local pe telefon</span>.
              </P>
              <P>
                Totuși, anumite date pot fi colectate, inclusiv prin servicii terțe:
              </P>
              <Bullet>
                Date salvate local (pe dispozitiv): progres, setări, preferințe (ex.
                temă), istoricul jocului (dacă există).
              </Bullet>
              <Bullet>
                Date tehnice: tip dispozitiv, versiune sistem, limbă, informații despre
                performanță, jurnale de erori (dacă sunt activate).
              </Bullet>
              <Bullet>
                Date legate de reclame (Google AdMob): identificatori pentru publicitate
                și/sau date despre interacțiunea cu reclamele (afișări, clicuri),
                informații despre dispozitiv și aplicație și alte date necesare pentru
                livrarea, măsurarea și prevenirea fraudei publicitare, conform setărilor
                utilizatorului și politicilor Google.
              </Bullet>
              <Bullet>
                Date din formularul de contact (doar dacă alegi să ne scrii): adresa de
                email pe care o introduci, conținutul mesajului și, pentru diagnostic,
                informații tehnice transmise odată cu mesajul (ex. versiunea aplicației
                și tipul de platformă: iOS/Android/web).
              </Bullet>
              <Bullet>
                Date legate de achiziții (doar dacă faci una): ce produse deții și
                identificatorii tranzacțiilor deja procesate, păstrate local pe dispozitiv.
                Plata în sine este gestionată de magazin — vezi secțiunea 6.
              </Bullet>
            </Section>

            <Section title="3) Scopurile prelucrării">
              <Bullet>Funcționarea aplicației (salvare progres și setări local).</Bullet>
              <Bullet>Îmbunătățirea aplicației (stabilitate, performanță, diagnostic).</Bullet>
              <Bullet>
                Afișarea și măsurarea reclamelor prin Google AdMob (inclusiv prevenirea
                fraudei și limitarea frecvenței).
              </Bullet>
              <Bullet>
                Răspunsul la mesajele trimise prin formularul de contact (suport,
                feedback, raportarea problemelor) și, dacă este cazul, urmărirea
                conversației pe email.
              </Bullet>
            </Section>

            <Section title="4) Reclame – Google AdMob">
              <P>
                Aplicația folosește <span className="font-bold">Google AdMob</span> pentru
                afișarea reclamelor. Google și partenerii săi pot colecta și prelucra
                date conform propriilor politici, inclusiv pentru publicitate
                personalizată sau nepersonalizată, în funcție de țară, setări și
                consimțământ (acolo unde este necesar).
              </P>
              <LinkRow label="Politica Google" href="https://policies.google.com/privacy" />
              <LinkRow
                label="Despre tehnologiile de publicitate"
                href="https://policies.google.com/technologies/ads"
              />
            </Section>

            <Section title="5) Formular de contact – Formspree">
              <P>
                Dacă folosești formularul de contact din aplicație, mesajul este transmis
                prin serviciul terț <span className="font-bold">Formspree</span>, care
                prelucrează datele pentru a ne livra conținutul (de regulă pe email) și
                pentru a opera formularul (inclusiv limitele de utilizare și măsuri
                anti-spam).
              </P>
              <P>
                Furnizarea emailului și a mesajului este{" "}
                <span className="font-bold">voluntară</span>: fără aceste date nu putem
                răspunde. Nu folosim aceste date pentru marketing și nu le vindem.
              </P>
              <LinkRow
                label="Politica Formspree"
                href="https://formspree.io/legal/privacy-policy"
              />
            </Section>

            <Section title="6) Achiziții în aplicație">
              <P>
                Dacă faci o achiziție, plata este procesată integral de{" "}
                <span className="font-bold">Apple App Store</span> sau{" "}
                <span className="font-bold">Google Play</span>. Nu primim, nu vedem și nu
                stocăm datele tale de plată (card, adresă de facturare) și nu îți
                cunoaștem identitatea din magazin.
              </P>
              <P>
                Pe dispozitiv salvăm local doar ce produse deții, pentru a activa
                beneficiile fără conexiune la internet. La pornirea aplicației întrebăm
                magazinul dacă achizițiile sunt în continuare valide, astfel încât o
                achiziție restituită sau anulată să nu rămână activă. Această verificare
                nu implică servere ale noastre.
              </P>
            </Section>

            <Section title="7) Temei legal (pentru UE/SEE – GDPR)">
              <P>În funcție de context, prelucrarea poate avea la bază:</P>
              <Bullet>Interes legitim (securitate, prevenirea fraudei, îmbunătățiri, măsurare).</Bullet>
              <Bullet>
                Consimțământ (acolo unde este cerut de lege pentru anumite forme de
                publicitate/urmărire, în funcție de mecanismele platformei și configurația
                AdMob).
              </Bullet>
              <Bullet>
                Măsuri precontractuale / interesul de a răspunde solicitării tale (când
                ne contactezi prin formular sau email) și, acolo unde este cazul,
                consimțământul tău prin trimiterea mesajului.
              </Bullet>
            </Section>

            <Section title="8) Unde sunt stocate datele">
              <Bullet>Local pe telefon: progres și setări (nu le încărcăm pe serverele noastre).</Bullet>
              <Bullet>
                Prin furnizori terți: datele asociate reclamelor pot fi procesate de Google
                (și parteneri), iar mesajele din formularul de contact pot fi procesate de
                Formspree (și, ulterior, pe emailul nostru de contact), inclusiv pe
                servere din alte țări, conform politicilor lor.
              </Bullet>
            </Section>

            <Section title="9) Cât timp păstrăm datele">
              <Bullet>
                Date locale: rămân pe dispozitiv până când ștergi aplicația sau ștergi datele aplicației.
              </Bullet>
              <Bullet>
                Date procesate de Google AdMob: conform perioadelor de retenție și politicilor Google.
              </Bullet>
              <Bullet>
                Mesaje de contact: le păstrăm atât cât este necesar pentru a răspunde și
                a gestiona solicitarea (și, dacă e cazul, pentru o perioadă rezonabilă de
                arhivă a corespondenței), apoi le ștergem sau le anonimizăm. Datele
                procesate de Formspree urmează și politicile / setările de retenție ale
                Formspree.
              </Bullet>
            </Section>

            <Section title="10) Opțiuni și control">
              <Bullet>
                Poți controla anumite opțiuni legate de reclame (de ex. publicitate personalizată) din setările dispozitivului și/sau prin mecanismele afișate de platformă/Google
                (acolo unde sunt disponibile).
              </Bullet>
              <Bullet>
                Poți elimina datele locale prin dezinstalarea aplicației (sau ștergerea datelor aplicației).
              </Bullet>
              <P>
                Pentru mesajele trimise prin formular sau email, poți solicita acces,
                rectificare sau ștergere scriindu-ne la{" "}
                <span className="font-bold">lumeaintegramelor@protonmail.com</span>, în
                limitele legii aplicabile.
              </P>
            </Section>

            <Section title="11) Securitate">
              <P>
                Aplicăm măsuri rezonabile pentru protejarea datelor. Totuși, nicio metodă de stocare sau transmitere nu este complet sigură.
              </P>
            </Section>

            <Section title="12) Modificări ale politicii">
              <P>
                Putem actualiza această Politică. Versiunea actualizată va fi disponibilă în aplicație.
              </P>
            </Section>
          </div>
        ) : (
          <div className="grid gap-6">
            <P>
              This Privacy Policy describes how the{" "}
              <span className="font-bold">Lumea integramelor</span> mobile application
              (“the App”, “we”) processes certain data when you use it.
            </P>

            <Section title="1) Controller and contact">
              <P>
                Contact email: <span className="font-bold">lumeaintegramelor@protonmail.com</span>
              </P>
              <P>
                You can also send a message from the App, via Settings → Contact us.
              </P>
            </Section>

            <Section title="2) What data we collect">
              <P>
                The App <span className="font-bold">does not have accounts</span> and, in
                ordinary use,{" "}
                <span className="font-bold">does not request identification data</span>{" "}
                (e.g., name, address, national ID). Progress and settings are stored{" "}
                <span className="font-bold">locally on your phone</span>.
              </P>
              <P>
                However, some data may be collected, including via third-party services:
              </P>
              <Bullet>
                Locally stored data (on-device): progress, settings, preferences (e.g., theme), game history (if applicable).
              </Bullet>
              <Bullet>
                Technical data: device type, OS version, language, performance information, and error logs (if enabled).
              </Bullet>
              <Bullet>
                Advertising-related data (Google AdMob): advertising identifiers and/or ad interaction data (impressions, clicks), device and app information,
                and other data required to deliver ads, measure performance, and prevent ad fraud—according to user settings and Google policies.
              </Bullet>
              <Bullet>
                Contact form data (only if you choose to write to us): the email address
                you enter, the message content, and, for diagnostics, technical
                information sent with the message (e.g., app version and platform type:
                iOS/Android/web).
              </Bullet>
              <Bullet>
                Purchase-related data (only if you make one): which products you own and
                identifiers of already processed transactions, stored locally on the
                device. The payment itself is handled by the store — see section 6.
              </Bullet>
            </Section>

            <Section title="3) Purposes of processing">
              <Bullet>Operating the App (saving progress and settings locally).</Bullet>
              <Bullet>Improving the App (stability, performance, diagnostics).</Bullet>
              <Bullet>
                Displaying and measuring ads via Google AdMob (including fraud prevention and frequency capping).
              </Bullet>
              <Bullet>
                Responding to messages sent via the contact form (support, feedback, bug
                reports) and, where applicable, following up by email.
              </Bullet>
            </Section>

            <Section title="4) Ads – Google AdMob">
              <P>
                The App uses <span className="font-bold">Google AdMob</span> to display ads. Google and its partners may collect and process data under their own policies,
                including for personalized or non-personalized advertising, depending on country, settings, and consent (where required).
              </P>
              <LinkRow label="Google Privacy Policy" href="https://policies.google.com/privacy" />
              <LinkRow label="Advertising technologies" href="https://policies.google.com/technologies/ads" />
            </Section>

            <Section title="5) Contact form – Formspree">
              <P>
                If you use the contact form in the App, your message is sent via the
                third-party service <span className="font-bold">Formspree</span>, which
                processes the data to deliver the content to us (typically by email) and
                to operate the form (including usage limits and anti-spam measures).
              </P>
              <P>
                Providing your email and message is{" "}
                <span className="font-bold">voluntary</span>: without this data we cannot
                reply. We do not use this data for marketing and we do not sell it.
              </P>
              <LinkRow
                label="Formspree Privacy Policy"
                href="https://formspree.io/legal/privacy-policy"
              />
            </Section>

            <Section title="6) In-app purchases">
              <P>
                If you make a purchase, payment is processed entirely by the{" "}
                <span className="font-bold">Apple App Store</span> or{" "}
                <span className="font-bold">Google Play</span>. We do not receive, see, or
                store your payment data (card, billing address) and we do not know your
                store identity.
              </P>
              <P>
                On the device we store locally only which products you own, to activate
                the benefits without an internet connection. When the App starts, we ask
                the store whether purchases are still valid, so that a refunded or
                cancelled purchase does not remain active. This check does not involve our
                servers.
              </P>
            </Section>

            <Section title="7) Legal basis (EU/EEA – GDPR)">
              <P>Depending on context, processing may be based on:</P>
              <Bullet>Legitimate interests (security, fraud prevention, improvements, measurement).</Bullet>
              <Bullet>
                Consent (where required by law for certain forms of advertising/tracking, depending on platform mechanisms and AdMob configuration).
              </Bullet>
              <Bullet>
                Pre-contractual measures / our interest in responding to your request
                (when you contact us via the form or email) and, where applicable, your
                consent by sending the message.
              </Bullet>
            </Section>

            <Section title="8) Where data is stored">
              <Bullet>On your phone: progress and settings (we do not upload them to our servers).</Bullet>
              <Bullet>
                Third-party providers: ad-related data may be processed by Google (and
                partners), and contact form messages may be processed by Formspree (and
                subsequently on our contact email), including on servers in other
                countries, under their policies.
              </Bullet>
            </Section>

            <Section title="9) How long we keep data">
              <Bullet>Local data: remains on your device until you uninstall the App or clear the App’s data.</Bullet>
              <Bullet>Google AdMob processed data: according to Google’s retention periods and policies.</Bullet>
              <Bullet>
                Contact messages: we keep them as long as needed to respond and handle
                the request (and, where applicable, for a reasonable correspondence
                archive period), then we delete or anonymize them. Data processed by
                Formspree also follows Formspree’s retention policies / settings.
              </Bullet>
            </Section>

            <Section title="10) Choices and control">
              <Bullet>
                You can control certain ad options (e.g., personalized ads) from your device settings and/or via platform/Google mechanisms (where available).
              </Bullet>
              <Bullet>You can remove local data by uninstalling the App (or clearing the App’s data).</Bullet>
              <P>
                For messages sent via the form or email, you may request access,
                rectification, or deletion by writing to{" "}
                <span className="font-bold">lumeaintegramelor@protonmail.com</span>, within
                the limits of applicable law.
              </P>
            </Section>

            <Section title="11) Security">
              <P>
                We apply reasonable measures to protect data. However, no method of storage or transmission is completely secure.
              </P>
            </Section>

            <Section title="12) Changes to this policy">
              <P>
                We may update this Policy from time to time. The updated version will be available in the App and on this page.
              </P>
            </Section>
          </div>
        )}
      </section>
    </article>
  );
}
