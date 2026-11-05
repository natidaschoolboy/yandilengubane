document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#menu-icon');
  const nav = document.querySelector('.navlist');
  const links = [...document.querySelectorAll('.navlist a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  if (menu && nav) {
    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      menu.classList.toggle('bx-x', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    };
    menu.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    links.forEach(link => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') { setOpen(false); menu.focus(); } });
    document.addEventListener('click', (ev) => { if (!nav.contains(ev.target) && !menu.contains(ev.target)) setOpen(false); });
    window.matchMedia('(min-width: 769px)').addEventListener('change', (ev) => { if(ev.matches) setOpen(false); });
  }
  const onScroll = () => {
    let active = 'home';
    for (const section of sections) {
      if (window.scrollY + 145 >= section.offsetTop) active = section.id;
    }
    for (const link of links) {
      const current = link.getAttribute('href') === `#${active}`;
      link.classList.toggle('active', current);
      if (current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };
  window.addEventListener('scroll', onScroll, {passive: true});
  onScroll();
});
