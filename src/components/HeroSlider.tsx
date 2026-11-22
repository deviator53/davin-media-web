"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Globe } from "./Globe";

const SLIDES = 2;
const DELAY = 8000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [calm, setCalm] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setCalm(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const go = useCallback(
    (n: number) => setIndex(((n % SLIDES) + SLIDES) % SLIDES),
    [],
  );

  // Restarting this effect on every index change also restarts the progress bar in step.
  useEffect(() => {
    if (paused || calm) return;
    timer.current = setTimeout(() => go(index + 1), DELAY);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, paused, calm, go]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Featured"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="wrap" style={{ position: "relative" }}>
        <div className="slides" aria-live={paused ? "polite" : "off"}>
          {/* Slide 1 */}
          <div
            className={`slide${index === 0 ? " active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label="1 of 2"
            aria-hidden={index !== 0}
          >
            <div className="slide-inner">
              <div className="s1-copy">
                <p className="eyebrow">Abuja, Nigeria · Digital studio</p>
                <h1 className="h-display s1-h">
                  Building brands that <span className="accent">stand out</span>
                </h1>
                <p className="lead">
                  Websites and apps, tech training, talent recruitment and
                  digital marketing from one team, built for businesses and
                  people who want to grow.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "16px 28px",
                  }}
                >
                  <Link
                    href="/contact"
                    className="btn"
                    tabIndex={index === 0 ? 0 : -1}
                  >
                    Start a project
                  </Link>
                  <Link
                    href="/services"
                    className="link-u"
                    tabIndex={index === 0 ? 0 : -1}
                  >
                    See what we do
                  </Link>
                </div>
              </div>
              <div className="s1-art">
                <Globe />
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`slide${index === 1 ? " active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label="2 of 2"
            aria-hidden={index !== 1}
          >
            <div className="s2">
              <div className="s2-col">
                <div>
                  <div className="h-display s2-h">Create</div>
                  <div
                    className="serif-i s2-i"
                    style={{ paddingLeft: "0.6em" }}
                  >
                    without
                  </div>
                </div>
                <div
                  style={{ display: "grid", gap: 24, justifyItems: "start" }}
                >
                  <p className="lead" style={{ maxWidth: 360, fontSize: 17 }}>
                    From the first sketch to launch day, we design, build, train
                    and promote so your ideas reach the people they are meant
                    for.
                  </p>
                  <Link
                    href="/contact"
                    className="btn"
                    tabIndex={index === 1 ? 0 : -1}
                  >
                    Start a project
                  </Link>
                </div>
              </div>

              <div className="portrait">
                <div className="arch">
                  <Image
                    src="/images/hero-portrait.webp"
                    alt="Woman in futuristic glasses lit by orange light"
                    fill
                    sizes="(max-width: 600px) 90vw, 420px"
                    priority={false}
                  />
                  <div className="fade" />
                  <svg
                    viewBox="0 0 400 540"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="trg" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#E5322D" stopOpacity="0" />
                        <stop offset="50%" stopColor="#FF5A1F" />
                        <stop
                          offset="100%"
                          stopColor="#FFB27A"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      fill="none"
                      stroke="url(#trg)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path
                        className="trail"
                        d="M-20 470 C90 380 120 220 210 150 S360 80 430 40"
                      />
                      <path
                        className="trail"
                        style={{ animationDelay: "-2s" }}
                        d="M-20 520 C110 430 160 300 240 230 S370 140 430 110"
                      />
                      <path
                        className="trail"
                        style={{ animationDelay: "-4s" }}
                        d="M30 540 C130 470 190 360 260 300 S380 220 430 190"
                      />
                      <path
                        className="trail"
                        style={{ animationDelay: "-1s" }}
                        d="M-20 380 C80 330 130 180 200 110 S330 40 430 0"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="s2-col right">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <div className="h-display s2-h">Limits</div>
                  <div
                    className="serif-i s2-i"
                    style={{ paddingRight: "0.3em" }}
                  >
                    boundaries
                  </div>
                </div>
                <ul className="svc-list">
                  <li>Website &amp; App Development</li>
                  <li>Professional Training</li>
                  <li>Printing &amp; Design</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-controls">
          <div style={{ display: "flex", gap: 14 }}>
            <button
              type="button"
              className="ctl"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
            >
              ←
            </button>
            <button
              type="button"
              className="ctl"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
            >
              →
            </button>
          </div>
          <div className="dots">
            <span>01</span>
            <button
              type="button"
              className={`dot${index === 0 ? " on" : ""}${paused ? " paused" : ""}`}
              aria-label="Go to slide 1: Building brands that stand out"
              aria-current={index === 0}
              onClick={() => go(0)}
            >
              <i />
            </button>
            <button
              type="button"
              className={`dot${index === 1 ? " on" : ""}${paused ? " paused" : ""}`}
              aria-label="Go to slide 2: Create without limits"
              aria-current={index === 1}
              onClick={() => go(1)}
            >
              <i />
            </button>
            <span>02</span>
          </div>
        </div>
      </div>
    </section>
  );
}
