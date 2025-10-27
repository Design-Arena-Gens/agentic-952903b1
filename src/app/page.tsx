const roster = [
  {
    gamertag: "Nova",
    role: "In-Game Leader",
    region: "EU",
    achievements: ["MVP – Aurora Major 2025", "3× LAN Champion"],
    strengths: ["Macro calls", "Clutch plays", "Calm leadership"],
  },
  {
    gamertag: "Blitz",
    role: "Entry Fragger",
    region: "NA",
    achievements: ["Highest K/D – Rift Masters", "Top 20 HLTV 2024"],
    strengths: ["High tempo entries", "Peak aim", "Fearless setups"],
  },
  {
    gamertag: "Sera",
    role: "Flex / Support",
    region: "KR",
    achievements: ["Utility Queen Award", "Worlds Finalist"],
    strengths: ["Utility lineups", "Space creation", "Supportive IGL reads"],
  },
  {
    gamertag: "Ghost",
    role: "Sentinel",
    region: "BR",
    achievements: ["Best Sentinel 2024", "Defuse Ace Record"],
    strengths: ["Map control", "Trap synergy", "Late lurks"],
  },
];

const schedule = [
  {
    event: "Legends Invitational – Group Stage",
    date: "Nov 28, 2025",
    opponent: "Zenith Squad",
    game: "Valorant",
    broadcast: "twitch.tv/nebulalive",
  },
  {
    event: "Global Nexus Playoffs",
    date: "Dec 12, 2025",
    opponent: "Odin Collective",
    game: "CS2",
    broadcast: "youtube.com/esl",
  },
  {
    event: "Champions League Charity Showdown",
    date: "Jan 4, 2026",
    opponent: "Vega Prime",
    game: "Overwatch 2",
    broadcast: "twitch.tv/blizzard",
  },
];

const achievements = [
  {
    title: "Aurora Major",
    season: "2025 Split 1",
    placement: "Champions",
    prize: "$350K",
  },
  {
    title: "World Pulse Finals",
    season: "2024",
    placement: "Runner-Up",
    prize: "$500K",
  },
  {
    title: "Circuit Clash",
    season: "2024 Split 2",
    placement: "Semi-Finals",
    prize: "$120K",
  },
];

const contentHighlights = [
  {
    title: "Behind the Screens: Nova's calling breakdown",
    tag: "Strategy Room",
    length: "12 min watch",
  },
  {
    title: "How Blitz preps for triple-map series",
    tag: "Mindset",
    length: "Podcast • 26 min",
  },
  {
    title: "Skill Lab: Sera's pixel-perfect lineups",
    tag: "Academy Drop",
    length: "Guided drills",
  },
];

const stats = [
  { label: "Major Finals", value: "6" },
  { label: "LAN Win Rate", value: "74%" },
  { label: "Fanbase", value: "3.2M" },
  { label: "Scrim Hours / Week", value: "82" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-3xl sm:h-[24rem] sm:w-[24rem]" />
        <div className="absolute bottom-0 left-1/2 h-56 w-[32rem] -translate-x-1/2 rounded-[120px] bg-cyan-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08]" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-500 text-lg font-bold text-white shadow-[0_0_18px_rgba(56,189,248,0.45)]">
              NT
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">
                Nebula Titans
              </p>
              <p className="text-base font-semibold text-slate-100">
                Elite Esports Collective
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-9 text-sm font-medium text-slate-200 md:flex">
            <a className="transition hover:text-cyan-300" href="#roster">
              Roster
            </a>
            <a className="transition hover:text-cyan-300" href="#schedule">
              Schedule
            </a>
            <a className="transition hover:text-cyan-300" href="#achievements">
              Trophies
            </a>
            <a className="transition hover:text-cyan-300" href="#academy">
              Academy
            </a>
            <a className="transition hover:text-cyan-300" href="#contact">
              Join Us
            </a>
          </nav>
          <a
            className="hidden items-center gap-2 rounded-full border border-cyan-400/60 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:text-white md:inline-flex"
            href="#contact"
          >
            Book a Scrim
          </a>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white shadow-[0_0_24px_rgba(76,29,149,0.25)] md:hidden"
            type="button"
            aria-label="Open navigation"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pb-24 lg:flex lg:items-center lg:gap-16 lg:pt-24">
          <div className="flex-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.42em] text-cyan-200">
              #RiseWithNebula
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              Live
            </p>
            <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Precision, power, and <span className="text-cyan-300">team DNA</span>{" "}
              built for the global stage.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              The Nebula Titans roster blends world champions with rising prodigies.
              From triple-map gauntlets to high-pressure LAN finals, we thrive in the
              brightest lights of esports.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.45)] transition hover:scale-[1.015]"
                href="#contact"
              >
                Join the Academy
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.75 12h14.5m0 0-5.75-5.75M19.25 12l-5.75 5.75"
                  />
                </svg>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                href="#schedule"
              >
                Watch next match
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              </a>
            </div>
          </div>
          <div className="mt-12 w-full max-w-xl flex-1 lg:mt-0">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(15,118,110,0.25)]">
              <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-slate-300/70">
                <span>Performance Matrix</span>
                <span>Live Sync</span>
              </div>
              <div className="mt-10 grid gap-5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400/70">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        {stat.value}
                      </p>
                    </div>
                    <div className="h-12 w-12 rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-500/30 via-fuchsia-500/10 to-transparent" />
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/10 to-transparent px-6 py-4">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                  Power Play
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Titans secured 7-0 streak in reverse-sweep series this season,
                  now ranked <strong>#2 worldwide</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="roster"
          className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28"
          aria-labelledby="roster-heading"
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-200/80">
              Core Lineup
            </p>
            <h2
              id="roster-heading"
              className="text-3xl font-semibold text-white sm:text-4xl"
            >
              Roster engineered for clutch dominance.
            </h2>
            <p className="max-w-2xl text-base text-slate-300/90">
              Our multi-title squad blends different regions and playstyles under one
              unified system. Every player trains across roles, reinforcing resilient
              map control and synergy under pressure.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {roster.map((player) => (
              <article
                key={player.gamertag}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-7 transition hover:border-cyan-300/40 hover:bg-slate-900/65"
              >
                <div className="absolute -right-16 top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/30" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                      {player.role}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {player.gamertag}
                    </h3>
                    <p className="text-sm text-slate-400">Region • {player.region}</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold uppercase text-slate-200">
                    {player.gamertag.slice(0, 2)}
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400/70">
                      Signature Achievements
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-200/80">
                      {player.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400/70">
                      Competitive Edge
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      {player.strengths.map((strength) => (
                        <span
                          key={strength}
                          className="rounded-full border border-white/5 bg-white/10 px-3 py-1 text-slate-200/80"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="schedule"
          className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28"
          aria-labelledby="schedule-heading"
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-200/80">
              Upcoming Battles
            </p>
            <h2
              id="schedule-heading"
              className="text-3xl font-semibold text-white sm:text-4xl"
            >
              Catch the Titans live in the arena.
            </h2>
            <p className="max-w-2xl text-base text-slate-300/90">
              Our tactical analysts prep unique map plans each matchup. Bookmark the
              broadcast links to follow the plays as they unfold in real time.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {schedule.map((match) => (
              <article
                key={match.event}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-900/80 p-7 transition hover:border-cyan-400/40"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                  {match.game}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{match.event}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{match.opponent}</p>
                <div className="mt-6 space-y-4 text-sm text-slate-200/80">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Date</span>
                    <span className="font-medium text-white">{match.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Broadcast</span>
                    <a
                      className="font-medium text-cyan-300 transition hover:text-cyan-200"
                      href={`https://${match.broadcast}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {match.broadcast}
                    </a>
                  </div>
                  <button
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white transition hover:border-cyan-400/40"
                    type="button"
                  >
                    Set reminder
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 7.5v10.75a1 1 0 0 0 1 1h8.5a1 1 0 0 0 1-1V7.5M9 3.75h6m-2.25 0V6"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="achievements"
          className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28"
          aria-labelledby="achievements-heading"
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-200/80">
              Trophy Room
            </p>
            <h2
              id="achievements-heading"
              className="text-3xl font-semibold text-white sm:text-4xl"
            >
              Dominating the international circuit.
            </h2>
            <p className="max-w-2xl text-base text-slate-300/90">
              Elevating our playbook with data, coaching, and relentless grinding,
              the Titans continue to shatter expectations on the biggest stages.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {achievements.map((trophy) => (
              <article
                key={trophy.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-slate-200 transition hover:border-cyan-400/40"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  {trophy.season}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">{trophy.title}</h3>
                <p className="mt-2 text-sm text-slate-300/80">{trophy.placement}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
                  Prize Pool
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">{trophy.prize}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400/70">
                  Key Highlight
                </p>
                <p className="mt-2 text-sm text-slate-200/75">
                  Full-map dominance with adaptive comps, 87% retake success rate, and
                  the fastest opening round conversions in the event.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="academy"
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[46px] border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-900/30 px-6 pb-16 pt-16 shadow-[0_0_80px_rgba(34,211,238,0.2)] sm:px-10"
          aria-labelledby="academy-heading"
        >
          <div className="absolute -right-20 top-24 h-52 w-52 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -left-10 bottom-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-200/80">
                Academy & Community
              </p>
              <h2
                id="academy-heading"
                className="mt-4 text-3xl font-semibold text-white sm:text-4xl"
              >
                Unlock pro-level systems crafted for aspiring titans.
              </h2>
              <p className="mt-4 max-w-xl text-base text-slate-300/90">
                Titans Academy is a hybrid coaching model that pairs VOD breakdowns,
                live scrim labs, and analytics-driven training cycles. Join weekly
                sessions with coaches to sharpen your mechanics and macro IQ.
              </p>
              <ul className="mt-8 grid gap-4 text-sm text-slate-200/80 sm:grid-cols-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  Personalized aim, utility, and IGL development tracks.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  Tactical whiteboard reviews with the pro roster every Friday.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  Performance dashboard with heatmaps, stats, and weekly goals.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  Fast-track pipeline for amateur rosters into Titans challengers.
                </li>
              </ul>
              <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
                <a
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-slate-900 transition hover:bg-slate-200"
                  href="#contact"
                >
                  Apply for Trials
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.25 18 18m0 0V9m0 9H9"
                    />
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white transition hover:border-white/50"
                  href="https://discord.gg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join Community
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                Content Hub
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Fresh drops every week to fuel your climb.
              </h3>
              <div className="mt-6 space-y-5">
                {contentHighlights.map((content) => (
                  <div
                    key={content.title}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-300/40"
                  >
                    <p className="text-[10px] uppercase tracking-[0.4em] text-fuchsia-200/80">
                      {content.tag}
                    </p>
                    <p className="mt-2 text-base font-medium text-white">
                      {content.title}
                    </p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.28em] text-slate-400/70">
                      {content.length}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-400/20 to-transparent px-5 py-4 text-sm text-slate-200">
                Grab pro configs, scrim templates, and VOD packs straight to your
                inbox with our weekly briefing.
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto mt-20 max-w-6xl px-6 pb-24 lg:pb-32"
          aria-labelledby="contact-heading"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-200/80">
                Community Pulse
              </p>
              <h2
                id="contact-heading"
                className="mt-4 text-3xl font-semibold text-white sm:text-4xl"
              >
                Subscribe to the Titans briefing.
              </h2>
              <p className="mt-4 max-w-xl text-base text-slate-300/90">
                Weekly intel, roster updates, and exclusive first-in-line registration
                for show matches and Academy scrims. No spam, only power-ups.
              </p>
              <form className="mt-8 flex flex-col gap-4 sm:flex-row">
                <input
                  className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  required
                />
                <button
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.35)] transition hover:scale-[1.01]"
                  type="submit"
                >
                  Join Briefing
                </button>
              </form>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-200">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                Partner & Talent Inquiries
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400/70">
                    Email
                  </p>
                  <p className="mt-2 font-medium text-white">
                    contact@nebulatitans.gg
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400/70">
                    Headquarters
                  </p>
                  <p className="mt-2">
                    Hyperlane Training Center, Neon District, Copenhagen
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400/70">
                    Socials
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em]">
                    <a className="rounded-full border border-white/5 px-3 py-1.5 transition hover:border-cyan-300/40" href="https://twitch.tv/nebulalive" target="_blank" rel="noreferrer">
                      Twitch
                    </a>
                    <a className="rounded-full border border-white/5 px-3 py-1.5 transition hover:border-cyan-300/40" href="https://x.com/nebulatitans" target="_blank" rel="noreferrer">
                      X
                    </a>
                    <a className="rounded-full border border-white/5 px-3 py-1.5 transition hover:border-cyan-300/40" href="https://youtube.com" target="_blank" rel="noreferrer">
                      YouTube
                    </a>
                    <a className="rounded-full border border-white/5 px-3 py-1.5 transition hover:border-cyan-300/40" href="https://instagram.com" target="_blank" rel="noreferrer">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-500 sm:flex-row sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Nebula Titans Esports. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a className="transition hover:text-cyan-300" href="#">
              Privacy
            </a>
            <a className="transition hover:text-cyan-300" href="#">
              Terms
            </a>
            <a className="transition hover:text-cyan-300" href="#">
              Brand Kit
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
