(() => {
  if (window.__companyTrafficLoaded) return;
  window.__companyTrafficLoaded = true;
  const tag = document.currentScript;
  const site = tag && tag.dataset.site;
  if (!site || navigator.doNotTrack === '1' || navigator.globalPrivacyControl || /bot|crawler|spider|headless/i.test(navigator.userAgent)) return;
  let session;
  try { session = sessionStorage.getItem('company_visit_session') || crypto.randomUUID(); sessionStorage.setItem('company_visit_session', session); } catch { session = crypto.randomUUID(); }
  function source() {
    let host = '';
    try { host = new URL(document.referrer).hostname; } catch {}
    const utm = new URLSearchParams(location.search).get('utm_source') || '';
    const value = (host + ' ' + utm).toLowerCase();
    if (/chatgpt|chat\.openai\.com/.test(value)) return 'ChatGPT';
    if (/claude\.ai|claude\.com|^claude$/.test(value)) return 'Claude';
    if (/perplexity/.test(value)) return 'Perplexity';
    if (/google\.|gemini/.test(value)) return 'Google';
    if (/bing\.|copilot/.test(value)) return 'Bing';
    return host && host !== location.hostname ? 'Other referral' : 'Direct';
  }
  let attribution = source();
  try { attribution = sessionStorage.getItem("company_visit_source") || attribution; sessionStorage.setItem("company_visit_source", attribution); } catch {}
  let lastPath = '', lastBeat = 0;
  function send(event) {
    const path = location.pathname;
    if (document.visibilityState !== 'visible' || /^\/(api|desk|admin|account|private|signin|signout|callback)(\/|-|$)/i.test(path)) return;
    const body = JSON.stringify({site,id:crypto.randomUUID(),session,path,event,source:attribution,test:new URLSearchParams(location.search).get('traffic_test')==='1'});
    fetch('https://calicostseg.com/api/company-traffic', {method:'POST',headers:{'Content-Type':'application/json'},credentials:'omit',keepalive:true,body}).catch(() => {});
  }
  function check() {
    if (document.visibilityState !== 'visible') return;
    if (lastPath !== location.pathname) {lastPath=location.pathname;send('page_view');lastBeat=Date.now();}
    else if (Date.now()-lastBeat>=60000) {send('heartbeat');lastBeat=Date.now();}
  }
  document.addEventListener('click', event => {
    const link = event.target instanceof Element && event.target.closest('a');
    const href = link && link.getAttribute('href');
    if (href?.startsWith('tel:')) send('phone_click');
    else if (href?.startsWith('mailto:')) send('email_click');
    else if (href?.startsWith('sms:')) send('text_click');
  });
  const started = new WeakSet();
  document.addEventListener('focusin', event => {const form = event.target instanceof Element && event.target.closest('form');if(form&&!started.has(form)){started.add(form);send('form_start');}});
  document.addEventListener('visibilitychange',check);
  check();setInterval(check,2000);
})();
