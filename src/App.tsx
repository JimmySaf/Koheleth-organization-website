import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function ChristianOrganizationWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animate Navbar on Scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // REUSABLE CLASSES
 
  const navLink =
    'relative transition duration-300 hover:text-yellow-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full';

  const primaryButton =
    'rounded-full bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-500/30';

  const secondaryButton =
    'rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-yellow-400/40';

  const sectionTag =
    'mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400';

  const sectionTitle =
    'text-4xl font-bold leading-tight md:text-5xl';

  // EVENTS
 
  const events = [
    {
      title: 'Ngerenya Conference',
      date: 'August 20, 2026',
      location: 'Ngerenya, Kilifi-Kenya',
    },

    {
      title: 'Koheleth Anniversary',
      date: 'May 5, 2026',
      location: 'Kilifi, Kenya',
    },

    {
      title: 'First Gathering',
      date: 'June, 2025',
      location: 'Barani, Kilifi',
    },
  ];


  // SERMONS

  const sermons = [
    {
      title: 'Winning Souls',
      speaker: 'Minister Frankline',
    },

    {
      title: 'Exercising Your Authority as Believers',
      speaker: 'Minister Humphrey',
    },

    {
      title: 'The Power of the Cross',
      speaker: 'Minister Frankline',
    },

    {
      title: 'Grace Alone',
      speaker: 'Minister Steven',
    },
    {
      title: 'The Work of Ministry',
      speaker: 'Minister Daniel Bandika',
    },
    {
      title: 'Redemption through the Blood',
      speaker: 'Minister Frankline Hamisi',
    },
  ];
const leaders = [
  {
    name: "Franklin Charo",
    role: "Chairperson",
    image: "/leaders/frankline.jpeg",
  },
  {
    name: "Humphrey Thuva",
    role: "Director",
    image: "/leaders/humphrey2.jpg",
  },
  {
    name: "Steven Mwanengo",
    role: "Coordinator",
    image: "/leaders/.png",
  },
  {
    name: "Daniel Bandika",
    role: "Ministry Advisor",
    image: "/leaders/daniel.jpeg",
  },
   {
    name: "Charles Kahingo",
    role: "Ministry Advisor",
    image: "/leaders/.jpeg",
  },
];
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">

     
      {/* NAVBAR */}

      <nav
        className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
          scrolled
            ? 'border-yellow-400/20 bg-slate-950/95 shadow-lg shadow-black/30 backdrop-blur-xl'
            : 'border-white/10 bg-slate-950/70 backdrop-blur-lg'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo + Name */}
          <div className="flex items-center gap-3">

            {/* Animated Logo */}
            <img
              src="/logo.jpeg"
              alt="Koheleth Logo"
              className="logo-animation h-14 w-14 rounded-full border border-yellow-400/40 object-cover shadow-lg shadow-yellow-500/20"
            />

            {/* Name + Motto */}
            <div className="flex flex-col leading-tight">

              <h1 className="text-2xl font-extrabold tracking-wide text-yellow-400">
                KOHELETH
              </h1>

              <p className="text-sm tracking-wide text-yellow-300">
                International Fellowship
              </p>

            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">

            <a href="#" className={navLink}>
              Home
            </a>

            <a href="#about" className={navLink}>
              About
            </a>

            <a href="#sermons" className={navLink}>
              Sermons
            </a>

            <a href="#events" className={navLink}>
              Events
            </a>

            <a href="#contact" className={navLink}>
              Contact
            </a>

          </div>

          {/* Mobile Button */}
          <button
            className="rounded-lg p-2 transition hover:bg-white/10 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950 md:hidden">
            <div className="flex flex-col space-y-5 px-6 py-6">

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg transition hover:text-yellow-400"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg transition hover:text-yellow-400"
              >
                About
              </a>

              <a
                href="#sermons"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg transition hover:text-yellow-400"
              >
                Sermons
              </a>

              <a
                href="#events"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg transition hover:text-yellow-400"
              >
                Events
              </a>

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg transition hover:text-yellow-400"
              >
                Contact
              </a>

            </div>
          </div>
        )}
      </nav>

      
      {/* HERO SECTION */}
  
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 text-center">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-green-950 to-slate-900" />

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            International Christian Organization
          </p>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Transforming Lives Through Christ
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
            Empowering believers, raising disciples, and impacting communities
            globally through teaching, preaching the Word of God, and spiritual
            growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button className={primaryButton}>
              Join The Mission
            </button>

            <button className={secondaryButton}>
              Join Fellowship
            </button>

          </div>

          {/* Scripture */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">

            <p className="text-lg italic text-slate-200">
              “ For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many”
            </p>

            <span className="mt-3 block text-yellow-400">
              — Mark 10:45
            </span>

          </div>
        </div>
      </section>

{/* ABOUT SECTION */}
<section
  id="about"
  className="mx-auto max-w-7xl px-6 py-28"
>
  {/* Heading */}
  <div className="text-center mb-20">
    <p className={sectionTag}>
      About KOHELETH
    </p>

    <h2 className={sectionTitle}>
      Building A Generation For Christ
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
      KOHELETH exists to raise disciples,
      equip believers and impact communities
      through Preaching, Teaching, 
      leadership development and missions.
    </p>
  </div>

  {/* Vision + Mission + Fellowship */}
  <div className="grid gap-10 lg:grid-cols-2">

    {/* LEFT SIDE */}
    <div className="space-y-8">

      {/* Vision */}
      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-500/10">

        <h3 className="mb-4 text-2xl font-bold text-yellow-400">
          Our Vision
        </h3>

        <p className="leading-relaxed text-slate-300">
          To equip young ministers for the work of ministry.
        </p>

      </div>

      {/* Mission */}
      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-500/10">

        <h3 className="mb-4 text-2xl font-bold text-yellow-400">
          Our Mission
        </h3>

        <p className="leading-relaxed text-slate-300">
          To raise more labourers in the Kingdom.
        </p>

</div>
   {/* Motto */}
<div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-500/10">
        <h3 className="mb-4 text-2xl font-bold text-yellow-400">
          Our Motto
        </h3>

        <p className="leading-relaxed text-slate-300">
          We are saved to Serve.
        </p>
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div>

      <div className="mb-8">
        <h3 className="text-3xl font-bold">
          Weekly Fellowships
        </h3>

        <p className="mt-3 text-slate-400">
          Join us every week for prayer,
          preaching and spiritual growth.
        </p>
      </div>

      <div className="space-y-8">

        {/* Wednesday */}
        <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-6 backdrop-blur-md">
          <p className="mb-2 text-sm tracking-widest text-yellow-400 uppercase">
            Wednesday
          </p>

          <h4 className="text-2xl font-bold">
            Midweek Fellowship
          </h4>

          <p className="mt-2 text-slate-300">
            Bible Study and Prayer.
          </p>

          <div className="mt-4 inline-block rounded-full bg-yellow-500/10 px-4 py-2 text-yellow-400">
            9:00 PM – 10:30 PM EAT
          </div>
        </div>

        {/* Friday */}
        <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-6 backdrop-blur-md">
          <p className="mb-2 text-sm tracking-widest text-yellow-400 uppercase">
            Friday
          </p>

          <h4 className="text-2xl font-bold">
            Revival Fellowship
          </h4>

          <p className="mt-2 text-slate-300">
            Fellowship, Teaching and Kingdom Impact.
          </p>

          <div className="mt-4 inline-block rounded-full bg-yellow-500/10 px-4 py-2 text-yellow-400">
            9:00 PM – 10:30 PM EAT
          </div>
        </div>

        {/* Sunday */}
        <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-6 backdrop-blur-md">
          <p className="mb-2 text-sm tracking-widest text-yellow-400 uppercase">
            Sunday
          </p>

          <h4 className="text-2xl font-bold">
            Sunday Fellowship
          </h4>

          <p className="mt-2 text-slate-300">
            Fellowship, Teaching and Kingdom Impact.
          </p>

          <div className="mt-4 inline-block rounded-full bg-yellow-500/10 px-4 py-2 text-yellow-400">
            9:00 PM – 10:30 PM EAT
          </div>
        </div>

      </div>

    </div>

  </div>


  {/* Fellowship Banner */}
  <div className="mt-16 rounded-[40px] border border-yellow-400/20 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-blue-500/10 p-10 text-center backdrop-blur-md">

    <h3 className="mb-4 text-3xl font-bold">
      Join Our Fellowship Family
    </h3>

    <p className="mx-auto max-w-3xl text-slate-300">
      Become part of a vibrant community of believers
      devoted to prayer, worship, discipleship and
      Kingdom advancement.
    </p>

  </div>
</section>
{/* LEADERS SECTION */}
<section className="mt-24 overflow-hidden">

  <div className="text-center mb-14">

    <p className={sectionTag}>
      Leadership Team
    </p>

    <h2 className={sectionTitle}>
      Meet Our Leaders
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
      God has raised faithful servants who continue to
      guide, mentor and equip believers for Kingdom impact.
    </p>

  </div>

  {/* Marquee Container */}
  <div className="leader-marquee">

    <div className="leader-track">

      {[...leaders, ...leaders].map((leader, index) => (
        <div
          key={index}
          className="leader-card group"
        >

         <div className="overflow-hidden rounded-3xl">
  <img
    src={leader.image}
    alt={leader.name}
    className="h-96 w-full object-cover object-center transition duration-700 group-hover:scale-110"
  />
</div>

          <h3 className="mt-5 text-xl font-bold">
            {leader.name}
          </h3>

          <p className="mt-2 text-yellow-400">
            {leader.role}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>
{/*   Sermons */}
      <section
  id="sermons"
  className="relative overflow-hidden py-28"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/sermon-bg.png')",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-slate-950/85" />

  {/* Glow */}
  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">

      <p className={sectionTag}>
        Sermons & Teachings
      </p>

      <h2 className={sectionTitle}>
        Spirit-Filled Messages
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-300">
        Be inspired, transformed and strengthened through
        powerful teachings from God's Word.
      </p>

    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {sermons.map((sermon, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-500/20"
        >

          <div className="relative overflow-hidden">

            <div className="h-60 bg-gradient-to-br from-yellow-600/30 via-amber-500/20 to-slate-900" />

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-2xl text-slate-900 shadow-lg transition duration-500 group-hover:scale-110">
              
              </div>

            </div>

          </div>

          <div className="p-6">

            <span className="text-sm uppercase tracking-widest text-yellow-400">
              Message
            </span>

            <h3 className="mt-3 mb-3 text-2xl font-bold">
              {sermon.title}
            </h3>

            <p className="mb-6 text-slate-300">
              {sermon.speaker}
            </p>

            <button className="rounded-full bg-yellow-400 px-5 py-3 font-medium text-slate-900 transition-all duration-300 hover:bg-yellow-300 hover:scale-105">
              Review Teaching
            </button>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>
      
      {/* EVENTS */}
     
      <section
        id="events"
        className="bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className={sectionTag}>
              Upcoming Events
            </p>

            <h2 className={sectionTitle}>
              Join Our Gatherings
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {events.map((event, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-500/10"
              >

                <p className="mb-3 text-sm text-yellow-400">
                  {event.date}
                </p>

                <h3 className="mb-4 text-2xl font-semibold">
                  {event.title}
                </h3>

                <p className="mb-6 text-slate-300">
                  {event.location}
                </p>

                <button className={secondaryButton}>
                  Learn More
                </button>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* DONATION */}
      
      <section className="mx-auto max-w-5xl px-6 py-24">

        <div className="rounded-[40px] border border-yellow-400/20 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 p-12 text-center backdrop-blur-md">

          <p className={sectionTag}>
            Support The Mission
          </p>

          <h2 className={`${sectionTitle} mb-6`}>
            Help Us Reach More Lives
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Your support enables missions, outreach programs, more events,
            and discipleship training across nations.
          </p>

          <button className={primaryButton}>
            Support
          </button>

        </div>
      </section>


      {/* CONTACT */}
      
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-2">

            {/* Contact Text */}
            <div>

              <p className={sectionTag}>
                Contact Us
              </p>

            

              <p className="text-lg text-slate-300">
                Reach out for prayer, partnership, missions, events, or any
                ministry support.
              </p>

{/* CONTACT INFO */}
<div className="mt-12">

  <div className="rounded-[35px] border border-yellow-400/20 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 p-8 backdrop-blur-md">

    <div className="mb-8 text-center">

      <h3 className="text-3xl font-bold">
        Connect With KOHELETH
      </h3>

      <p className="mt-3 text-slate-300">
        We would love to hear from you. Reach out for fellowship,
        prayer requests, ministry partnerships, missions and general inquiries.
      </p>

    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {/* Phone */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">

        <div className="mb-3 text-3xl">
          
        </div>

        <h4 className="font-semibold text-yellow-400">
          Call Us
        </h4>

        <p className="mt-2 text-slate-300">
          +254 746 010 497
        </p>

      </div>

      {/* Email */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">

        <div className="mb-3 text-3xl">
          
        </div>

        <h4 className="font-semibold text-yellow-400">
          Email
        </h4>

        <p className="mt-2 text-slate-300 break-all">
          info@koheleth.org
        </p>

      </div>

      {/* Location
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">

        <div className="mb-3 text-3xl">
          
        </div>

        <h4 className="font-semibold text-yellow-400">
          Location
        </h4>

        <p className="mt-2 text-slate-300">
          Kilifi County, Kenya
        </p>

      </div> */ }

      {/* Fellowship */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">

        <div className="mb-3 text-3xl">
          
        </div>

        <h4 className="font-semibold text-yellow-400">
          Online Fellowship
        </h4>

        <p className="mt-2 text-slate-300">
          Google Meet
        </p>

      </div>

            </div>
    </div>

    {/* Bottom Row */}
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">

      <h4 className="mb-3 text-xl font-semibold text-yellow-400">
        Weekly Fellowship Schedule
      </h4>

      <p className="text-slate-300">
        Wednesday • Friday • Sunday
      </p>

      <p className="mt-2 text-lg font-medium text-white">
        9:00 PM EAT – 10:30 PM EAT
      </p>

    </div>

  </div>

</div>
            {/* Contact Form */}
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-yellow-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-yellow-400"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-yellow-400"
              />

              <button className="w-full rounded-full bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300">
                Send Message
              </button>

            </form>

          </div>
        </div>
      </section>

     
      {/* FOOTER */}
 
      <footer className="border-t border-white/10 bg-slate-950 px-6 py-14">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>

            <div className="mb-4 flex items-center gap-3">

              <img
                src="/logo.jpeg"
                alt="Logo"
                className="h-12 w-12 rounded-full border border-yellow-400/30 object-cover"
              />

              <div>
                <h2 className="text-2xl font-bold text-yellow-400">
                  KOHELETH
                </h2>

                <p className="text-sm text-slate-400">
                  International Fellowsip
                </p>
              </div>
            </div>

            <p className="leading-relaxed text-slate-400">
              Transforming lives globally through the Gospel of Jesus Christ,
              discipleship, and missions.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">

              <a href="#" className="transition hover:text-yellow-400">
                Home
              </a>

              <a href="#about" className="transition hover:text-yellow-400">
                About Us
              </a>

              <a href="#sermons" className="transition hover:text-yellow-400">
                Sermons
              </a>

              <a href="#events" className="transition hover:text-yellow-400">
                Events
              </a>

              <a href="#contact" className="transition hover:text-yellow-400">
                Contact
              </a>

            </div>
          </div>

          {/* Follow Us */}
          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">

              <a href="https://www.facebook.com/profile.php?id=61577094690160" className="transition hover:text-yellow-400">
                Facebook
              </a>

              <a href="https://chat.whatsapp.com/Jbc2PomfBovHLwJlAGnR2F?mlu=2&s=cl&p=a" className="transition hover:text-yellow-400">
                Whatsapp
              </a>

              <a href="#" className="transition hover:text-yellow-400">
                YouTube
              </a>

              <a href="#" className="transition hover:text-yellow-400">
                TikTok
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-slate-500">

          <p>
            © 2026 Sajims Company. All rights reserved.
          </p>

        </div>
      </footer>
    </div>
  );
}