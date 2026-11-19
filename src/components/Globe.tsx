// Decorative rotating globe: pure SVG + CSS animation, no images or JS, so it costs almost nothing to load.
export function Globe() {
  const stars: [number, number, number, number, string][] = [
    [96, 150, 11, 0, "#FFB27A"], [512, 120, 9, -1, "#FF5A1F"], [548, 440, 12, -2, "#FFB27A"],
    [70, 470, 8, -0.5, "#E5322D"], [420, 52, 7, -1.6, "#FFB27A"], [190, 548, 7, -2.4, "#FF5A1F"],
  ];
  return (
    <div className="globe">
      <svg viewBox="0 0 600 600" role="img" aria-label="Rotating globe encircled by Davin Media services: web and apps, training, recruiting, digital marketing">
        <defs>
          <radialGradient id="sph" cx="36%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#4A2210" /><stop offset="55%" stopColor="#150D0B" /><stop offset="100%" stopColor="#0B0C10" />
          </radialGradient>
          <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFB27A" /><stop offset="55%" stopColor="#FF5A1F" /><stop offset="100%" stopColor="#E5322D" />
          </linearGradient>
          <path id="ringpath" d="M300,300 m-268,0 a268,268 0 1,1 536,0 a268,268 0 1,1 -536,0" />
        </defs>
        <g className="spin-rev">
          <text fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#BDB7B3" letterSpacing="2">
            <textPath href="#ringpath" textLength="1660" lengthAdjust="spacing">
              WEB &amp; APPS · TRAINING · RECRUITING · DIGITAL MARKETING · WEB &amp; APPS · TRAINING · RECRUITING · DIGITAL MARKETING ·
            </textPath>
          </text>
        </g>
        <g className="spin">
          <circle cx="300" cy="300" r="232" fill="none" stroke="#FF5A1F" strokeOpacity="0.55" strokeWidth="1.2" strokeDasharray="3 9" />
          <circle cx="532" cy="300" r="7" fill="#FF5A1F" />
          <circle cx="68" cy="300" r="4" fill="#E5322D" />
        </g>
        <circle cx="300" cy="300" r="192" fill="url(#sph)" stroke="url(#rim)" strokeWidth="2.5" />
        <g fill="none" stroke="#FF8A5C" strokeOpacity="0.5" strokeWidth="1">
          <ellipse cx="300" cy="300" rx="190" ry="34" />
          <ellipse cx="300" cy="205" rx="165" ry="30" />
          <ellipse cx="300" cy="395" rx="165" ry="30" />
          <ellipse cx="300" cy="136" rx="95" ry="17" />
          <ellipse cx="300" cy="464" rx="95" ry="17" />
        </g>
        <g fill="none" stroke="#FF8A5C" strokeOpacity="0.55" strokeWidth="1">
          {[0, -3, -6, -9].map((d) => (
            <ellipse key={d} className="mer" cx="300" cy="300" rx="190" ry="190" style={{ animationDelay: `${d}s` }} />
          ))}
        </g>
        <g fill="#FFB27A">
          <circle cx="246" cy="236" r="3" /><circle cx="352" cy="214" r="2.5" /><circle cx="388" cy="318" r="3" />
          <circle cx="262" cy="372" r="2.5" /><circle cx="318" cy="418" r="2" /><circle cx="214" cy="304" r="2" />
        </g>
        <circle className="pulse" cx="336" cy="288" r="8" fill="#FF5A1F" />
        <circle cx="336" cy="288" r="5.5" fill="#FFB27A" stroke="#0B0C10" strokeWidth="1.5" />
        <text x="350" y="276" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="500" fill="#F4F1EE" letterSpacing="1.5">ABUJA</text>
        {stars.map(([x, y, r, delay, fill]) => (
          <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
            <path className="tw" style={{ animationDelay: `${delay}s` }} d={`M0-${r} Q0 0 ${r} 0 Q0 0 0 ${r} Q0 0 -${r} 0 Q0 0 0 -${r}Z`} fill={fill} />
          </g>
        ))}
      </svg>
    </div>
  );
}
