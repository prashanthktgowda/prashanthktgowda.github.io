/**
 * main.js — Renders portfolio from DATA config
 * All content comes from assets/js/data.js
 */

/* ── Wait for DOM ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderExperience();
  renderEducation();
  renderSkills();
  renderProjects();
  renderContact();
  renderFooter();
  initCursor();
  initScrollReveal();
  initMobileDrawer();
  initNavHighlight();
});

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

function renderNav() {
  const { name, initials } = DATA.personal;
  const sections = ['experience', 'education', 'skills', 'projects', 'contact'];

  document.getElementById('nav-logo').innerHTML =
    `${initials} <span>/ portfolio</span>`;

  const linksContainer = document.getElementById('nav-links');
  const drawerContainer = document.getElementById('mobile-drawer');

  sections.forEach(sec => {
    const label = sec.charAt(0).toUpperCase() + sec.slice(1);
    linksContainer.innerHTML += `<a href="#${sec}">${label}</a>`;
    drawerContainer.innerHTML += `<a href="#${sec}" class="drawer-link">${label}</a>`;
  });
}

function renderHero() {
  const p = DATA.personal;

  // Available badge
  if (p.available) {
    document.getElementById('hero-available').style.display = 'inline-flex';
  }

  // Name
  const nameParts = p.name.split(' ');
  const firstName = nameParts[0];
  const rest = nameParts.slice(1).join(' ');
  document.getElementById('hero-name').innerHTML =
    `${firstName}<br><span class="accent">${rest}</span><span class="italic"> — Engineer</span>`;

  // Role (pulled from current experience)
  const current = DATA.experience.find(e => e.current);
  document.getElementById('hero-role').innerHTML = current
    ? `<strong>${current.role} @ ${current.company}</strong><br>Backend · AI/ML · System Design · ${p.location}`
    : `<strong>${p.tagline}</strong><br>${p.location}`;

  // Bio
  document.getElementById('hero-bio').textContent = p.bio;

  // CTAs
  document.getElementById('hero-cta').innerHTML = `
    <a href="mailto:${p.email}" class="btn btn-primary">Get in Touch</a>
    <a href="#projects" class="btn btn-outline">View Projects</a>
  `;

  // Terminal card
  renderTerminal(p, current);
}

function renderTerminal(p, current) {
  const stack = DATA.skills.flatMap(s => s.tags).slice(0, 7);
  const stackStr = stack.map(s => `<span class="t-str">"${s}"</span>`).join(', ');
  const joinedDate = current ? 'Feb 23, 2026' : 'N/A';

  document.getElementById('terminal-body').innerHTML = `
    <span class="t-dim">{</span><br>
    &nbsp;&nbsp;<span class="t-key">"name"</span>: <span class="t-str">"${p.name}"</span>,<br>
    &nbsp;&nbsp;<span class="t-key">"role"</span>: <span class="t-str">"${current ? current.role : p.tagline}"</span>,<br>
    &nbsp;&nbsp;<span class="t-key">"company"</span>: <span class="t-str">"${current ? current.company : ''}"</span>,<br>
    &nbsp;&nbsp;<span class="t-key">"joined"</span>: <span class="t-str">"${joinedDate}"</span>,<br>
    &nbsp;&nbsp;<span class="t-key">"stack"</span>: <span class="t-dim">[</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;${stackStr}<br>
    &nbsp;&nbsp;<span class="t-dim">]</span>,<br>
    &nbsp;&nbsp;<span class="t-key">"passion"</span>: <span class="t-str">"Building things that scale"</span>,<br>
    &nbsp;&nbsp;<span class="t-key">"impact"</span>: <span class="t-str">"$2M cost savings"</span><br>
    <span class="t-dim">}</span><span class="t-cursor"></span>
  `;
}

function renderExperience() {
  const container = document.getElementById('exp-list');

  DATA.experience.forEach((job, i) => {
    const badgeHtml = job.current
      ? `<span class="badge badge-cyan" style="margin-bottom:0.9rem;">Current Role</span><br>`
      : '';

    container.innerHTML += `
      <div class="exp-item reveal" style="transition-delay:${i * 0.1}s">
        <div class="exp-timeline">
          <div class="exp-period">${job.period.replace(' – ', '<br>')}</div>
        </div>
        <div class="exp-content">
          ${badgeHtml}
          <div class="exp-company">${job.company}</div>
          <div class="exp-role">${job.role} · ${job.location}</div>
          <ul class="exp-bullets">
            ${job.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  });
}

function renderEducation() {
  const container = document.getElementById('edu-grid');
  const icons = ['🎓', '📚', '🏫'];

  DATA.education.forEach((edu, i) => {
    container.innerHTML += `
      <div class="edu-card reveal" style="transition-delay:${i * 0.12}s">
        <div class="edu-icon">${icons[i] || '🎓'}</div>
        <div class="edu-degree">${edu.degree}</div>
        <div class="edu-institution">${edu.institution}</div>
        <div class="edu-meta">
          <span>${edu.period}</span>
          <span class="edu-score">${edu.score}</span>
        </div>
      </div>
    `;
  });
}

function renderSkills() {
  const container = document.getElementById('skills-grid');

  DATA.skills.forEach((skill, i) => {
    const tagsHtml = skill.tags.map(t => `<span class="chip chip-muted">${t}</span>`).join('');
    container.innerHTML += `
      <div class="skill-card reveal" style="transition-delay:${i * 0.08}s">
        <div class="skill-icon">${skill.icon}</div>
        <div class="skill-category">${skill.category}</div>
        <div class="chips">${tagsHtml}</div>
      </div>
    `;
  });
}

function renderProjects() {
  // Stats row
  const statsContainer = document.getElementById('stats-row');
  DATA.stats.forEach(s => {
    statsContainer.innerHTML += `
      <div class="stat">
        <span class="stat-num">${s.value}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `;
  });

  // Project cards
  const container = document.getElementById('projects-grid');
  DATA.projects.forEach((proj, i) => {
    const techHtml = proj.tech.map(t => `<span class="chip">${t}</span>`).join('');
    const githubBtn = proj.github
      ? `<a href="${proj.github}" target="_blank" class="btn btn-outline" style="padding:0.5rem 1rem;font-size:0.62rem;">
           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
           View Code
         </a>`
      : '';

    container.innerHTML += `
      <div class="project-card reveal" style="transition-delay:${i * 0.15}s">
        <div class="project-num">${proj.number}</div>
        <span class="badge badge-gold">${proj.badge}</span>
        <div class="project-title">${proj.title}</div>
        <p class="project-desc">${proj.desc}</p>
        <div class="project-footer">
          <div class="chips">${techHtml}</div>
          ${githubBtn}
        </div>
      </div>
    `;
  });
}

function renderContact() {
  const p = DATA.personal;

  const links = [
    {
      href: `mailto:${p.email}`,
      label: p.email,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
    },
    {
      href: `tel:${p.phone.replace(/[^+\d]/g, '')}`,
      label: p.phone,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
    },
    {
      href: p.linkedin,
      label: 'LinkedIn',
      target: '_blank',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`
    },
    {
      href: p.github,
      label: 'GitHub',
      target: '_blank',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`
    },
  ];

  document.getElementById('contact-links').innerHTML = links
    .map(l => `<a href="${l.href}" ${l.target ? `target="${l.target}"` : ''} class="contact-link">${l.icon}${l.label}</a>`)
    .join('');
}

function renderFooter() {
  const p = DATA.personal;
  document.getElementById('footer-left').textContent = `© ${new Date().getFullYear()} ${p.name}`;
  document.getElementById('footer-right').textContent = `Built with precision · ${p.location}`;
}

/* ============================================================
   INTERACTIONS
   ============================================================ */

function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = -200, my = -200;
  let rx = -200, ry = -200;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  // Smooth ring follow
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const interactives = 'a, button, .skill-card, .project-card, .stat, .edu-card, .contact-link';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactives)) ring.classList.add('hovering');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactives)) ring.classList.remove('hovering');
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initMobileDrawer() {
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('mobile-drawer');

  hamburger.addEventListener('click', () => {
    drawer.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  });

  drawer.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('#nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.style.color = '');
        const active = document.querySelector(`#nav-links a[href="#${e.target.id}"]`);
        if (active) active.style.color = 'var(--cyan)';
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}
