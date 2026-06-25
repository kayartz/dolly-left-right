/* ============================================================
   Exp 3 — Specialty Shots · SNORRICAM
   Each card links to one YouTube clip and opens it on YouTube
   (new tab) when clicked. Edit `id` per card for its own clip.
   Caption types:
     - normal: model + (with camera movement term "term" in prompt)
     - preset: model + ( preset: <preset> )      ← e.g. Higgsfield
   `fail: true` shows a red FAIL marker after the caption.
   ============================================================ */

const YT_ID1 = "ZGgtx0sdwxE";
const YT_ID2 = "xjVGQuJ_Kzo";
const YT_ID3 = "ktcVMl6K1AU";
const YT_ID4 = "X8yCT-_fF5k";
const YT_ID5 = "GF6FJ9we8fw";
const YT_ID6 = "L5WeG9bCP2I";
const YT_ID7 = "iiAVep78NpY";
const YT_ID8 = "DUcLc1QCMPM";
const YT_ID9 = "0wrRNrxXLwQ";
const YT_ID10 = "dT01LKUjsmQ";
const YT_ID11 = "LsfAAYqnBTs";
const YT_ID12 = "GTAwrJz2zCI";
const YT_ID13 = "4stLAs_KOQc";
const YT_ID14 = "mFz-K5P9BCQ";
// shared link for all boxes

const videos = [
  { title: "CSV Dolly Left Word FAIL",          model: "Cinematic Studio Video_V1.5", term: "Dolly Left",  fail: true, id: YT_ID1 },
  { title: "CSV Dolly Right Word FAIL",   model: "Cinematic Studio Video_V1.5", term: "Dolly Right",  fail: true,    id: YT_ID2 },
  { title: "CSV DollyLeftModel",     model: "Cinematic Studio Video_V1.5 ", preset: " Dolly Left model" , fail: true, id: YT_ID3 },
  { title: "CSV DollyRightModel",          model: "Cinematic Studio Video_V1.5", preset: " Dolly Right model", fail: true, id: YT_ID4 },

  { title: "Higgsfield DoP DollyLeftModelOnly",      model: "Higgsfield DoP_", preset: " Dolly Left model",  id: YT_ID5 },
  { title: "Higgsfield DoP DollyRightModelOnly", model: "Higgsfield DoP_", preset: " Dolly Right model",  id: YT_ID6 },
   { title: "Kling2 6 DollyLeftWord", model: "Kling2.6_General Model", term: " Dolly Left ", fail: true,id: YT_ID7 },
  { title: "Kling2 6 DollyRightWord", model: "Kling2.6_General Model", term: " Dolly Right ", fail: true, id: YT_ID8 },
  
    { title: "Veo 3 1 Dolly Left FAIL",      model: "Veo 3.1 _General Model", term: "Dolly Left",fail: true,  id: YT_ID9 },
  { title: "Veo 3 1 Dolly Right FAIL", model: "Veo 3.1 _General Model", term: " Dolly Right ",fail: true, id: YT_ID10 },
   { title: "Seedance1 5 Dolly Left FAIL", model: "Seedance 1.5 _General Model", term: " Dolly Left ",fail: true, id: YT_ID11 },
  { title: "Seedance1 5 Dolly Right FAIL", model: "Seedance 1.5 _General Model", term: " Dolly Right ",fail: true, id: YT_ID12 },
  
  { title: "Minimax Hailuo2 3 Dolly Left FAIL", model: "Minimax Hailuo 2.3 _General Model", term: " Dolly Left ",fail: true, id: YT_ID13 },
  { title: "Minimax Hailuo2 3 Dolly Right FAIL", model: "Minimax Hailuo 2.3 _General Model", term: " Dolly Right ",fail: true, id: YT_ID14 },
];

const grid = document.getElementById("grid");

videos.forEach((v) => {
  const card = document.createElement("article");
  card.className = "vcard";

  const watchUrl = `https://www.youtube.com/watch?v=${v.id}`;
  const thumbUrl = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
  const failMark = v.fail ? ` <span class="failmark">FAIL</span>` : ``;

  // build the caption: preset style vs camera-movement-term style
  let caption;
  if (v.preset) {
    caption = `${v.model} ( preset: ${v.preset} )${failMark}`;
  } else {
    caption =
      `${v.model}<span class="redhint">(with camera movement term</span> ` +
      `"<span class="term">${v.term}</span>" in prompt )${failMark}`;
  }

  card.innerHTML = `
    <a class="vthumb" href="${watchUrl}" target="_blank" rel="noopener"
       style="background-image:url('${thumbUrl}');background-size:cover;background-position:center;"
       aria-label="Open on YouTube: ${v.title}">
      <div class="vbar">
        <span class="vavatar">k</span>
        <span class="vtitle">${v.title}</span>
      </div>
      <span class="vchannel">kayAI</span>
      <span class="vplay" aria-hidden="true"></span>
    </a>
    <p class="vcap">${caption}</p>
  `;

  grid.appendChild(card);
});
