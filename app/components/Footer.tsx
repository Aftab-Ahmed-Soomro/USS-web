"use client";

const companyLinks = ["About USS", "Our Projects", "Our Team", "Contact", "Book a Call"];

const offices = [
  {
    country: "UAE",
    lines: ["Flowork Offices, Business Park 4,", "Dubai Hills, United Arab Emirates"],
  },
  {
    country: "USA",
    lines: ["Office 1175, Peachtree St NE, #", "Atlanta, GA 30361, United States"],
  },
  {
    country: "UK",
    lines: ["Office 4, Green Dragon House", "London, CR0 1FS, United Kingdom"],
  },
];

const socials = [
  { label: "Facebook", icon: "f", href: "#" },
  { label: "LinkedIn", icon: "in", href: "#" },
];

export function Footer() {
  return (
    <>
      <style>{`
        .uss-footer {
          background-color: #000;
          color: #ffffff;
          padding: 56px 48px 28px 48px;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          box-sizing: border-box;
        }

        .uss-footer-inner {
          max-width: 1150px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 72px;
        }

        /* ── Top grid ── */
        .uss-footer-grid {
          display: grid;
          grid-template-columns: minmax(0, 400px) minmax(0, 200px) minmax(0, 350px) auto;
          justify-content: space-between;
          gap: 40px;
          align-items: start;
        }

        .uss-socials-wrapper {
          align-self: flex-end;
          padding-bottom: 6px;
        }

        /* ── Left column ── */
        .uss-logo {
          font-size: 42px;
          font-weight: 700;
          letter-spacing: 1.68px;
          line-height: 1;
          margin: 0 0 16px 0;
          font-family: 'Inter', sans-serif;
        }

        .uss-email-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }

        .uss-at-icon {
          width: 26px;
          height: 26px;
          // border-radius: 50%;
          // background-color: #e04e14;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 500;
          color: #e04e14;
          flex-shrink: 0;
          line-height: 1;
        }

        .uss-email-link {
          color: #ffffff;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 400;
        }

        .uss-email-link:hover {
          color: #e04e14;
        }

        .uss-newsletter-label {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 14px 0;
          color: #ffffff;
          line-height: 1.3;
        }

        .uss-subscribe-form {
          display: flex;
          gap: 0;
          height: 44px;
          max-width: 390px;
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
        }

        .uss-subscribe-input {
          flex: 1;
          min-width: 0;
          background: transparent;
          border: none;
          outline: none;
          padding: 0 20px;
          font-size: 14px;
          color: #fff;
          font-family: inherit;
        }

        .uss-subscribe-input::placeholder {
          color: #fff;
        }

        .uss-subscribe-btn {
          height: 44px;
          padding: 0 28px;
          background-color: #e04e14;
          color: #ffffff;
          font-size: 14px;
          font-weight: 400;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          font-family: inherit;
          transition: background-color 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
          margin: -1px;
        }

        .uss-subscribe-btn:hover {
          background-color: #ff6120;
        }

        /* ── Middle column (Company links) ── */
        .uss-col-heading {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: capitalize;
          color: #FF5500;
          margin: 0 0 22px 0;
          line-height: 1;
        }

        .uss-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .uss-nav-list a {
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          font-size: 13px;
          font-weight: 400;
          transition: color 0.2s;
        }

        .uss-nav-list a:hover {
          color: #e04e14;
        }

        /* ── Right column (Office locations) ── */
        .uss-offices-list {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .uss-office-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .uss-pin-icon {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          margin-top: 4px;
          color: #e04e14;
        }

        .uss-office-country {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          min-width: 36px;
          line-height: 1.2;
          flex-shrink: 0;
          margin-top: 4px;
margin-top: 4px;
        }

        .uss-office-address {
          font-size: 10px;
          font-weight: 400;
          color: #fff;
          line-height: 1.75;
        }

        /* ── Bottom bar ── */
        .uss-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .uss-copyright {
          font-size: 12px;
          color: #fff;
          font-weight: 400;
          margin: 0;
          line-height: 1;
        }

        .uss-socials {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .uss-social-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #fff;
          border: 1px solid rgba(255,255,255,0.12);
          color: #000;
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background-color 0.2s;
          font-family: inherit;
          line-height: 1;
        }

        .uss-social-btn:hover {
          background-color: #2a2a2a;
          border-color: rgba(255,255,255,0.3);
          color: #e04e14;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .uss-footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .uss-footer-left {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 580px) {
          .uss-footer {
            padding: 48px 20px 24px 20px;
          }
          .uss-footer-grid {
            grid-template-columns: 1fr;
          }
          .uss-footer-left {
            grid-column: auto;
          }
        }
      `}</style>

      <footer className="uss-footer">
        <div className="uss-footer-inner">

          {/* ── Top section ── */}
          <div className="uss-footer-grid">

            {/* Left: Logo + email + newsletter */}
            <div className="uss-footer-left">
              <h2 className="uss-logo">USS</h2>

              <div className="uss-email-row">
                <span className="uss-at-icon">@</span>
                <a href="mailto:contact@unitedstrategicsolutions.com" className="uss-email-link">
                  contact@unitedstrategicsolutions.com
                </a>
              </div>

              <p className="uss-newsletter-label">Subscribe to our newsletter</p>

              <div className="uss-subscribe-form">
                <label htmlFor="footer-email" className="sr-only">Your email</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your email"
                  className="uss-subscribe-input"
                />
                <button type="submit" className="uss-subscribe-btn">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Middle: Company links */}
            <nav aria-label="Footer company navigation">
              <h3 className="uss-col-heading">Company</h3>
              <ul className="uss-nav-list">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: Office locations */}
            <div>
              <h3 className="uss-col-heading">Locations</h3>
              <div className="uss-offices-list">
                {offices.map((office) => (
                  <div key={office.country} className="uss-office-row">
                    {/* Pin icon */}
                    <div className="flex justify-center items-center gap-3">
                      <img className="w-4 h-4" src="/assets/location-icon.png" alt="" />

                    <span className="uss-office-country">{office.country}</span>
                    </div>

                    <span className="uss-office-address">
                      {office.lines.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < office.lines.length - 1 && <br />}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Far Right: Socials */}
            <div className="uss-socials-wrapper">
              <div className="uss-socials">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="uss-social-btn"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="uss-bottom-bar">
            <p className="uss-copyright">
              © 2025 United Strategic Solutions. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}