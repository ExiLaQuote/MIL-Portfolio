// OPENING SCENES

// LANDING PAGE
window.onload = function() {document.querySelector("#headerVid").play()}
function landVid() {document.querySelector("#headerVid").play()}

// SHIFTING PAGES
function tab1() {tabAll(); document.querySelector("#sec1").style.transform = "translate(0vw, 0vh)"}
function tab2() {tabAll(); document.querySelector("#sec2").style.transform = "translate(0vw, 0vh)"}
function tab3() {tabAll(); document.querySelector("#sec3").style.transform = "translate(0vw, 0vh)"}
function tab4() {tabAll(); document.querySelector("#sec4").style.transform = "translate(0vw, 0vh)"}

function tabAll() {
  document.querySelector("#sec0").style.display = "none"
  document.querySelectorAll(".section").forEach(n => {n.style.transform = "translate(120vw, 0vh)"})
  document.querySelector("#sec0").style.display = "flex"
}

// URL REDIRECTING
const midURLarr = ["https://angpagtawidsakawad.wixsite.com/kable/copy-of-game-changer",
"https://angpagtawidsakawad.wixsite.com/kable/copy-of-game-changer-1",
"https://angpagtawidsakawad.wixsite.com/kable/split"]
function midURL(n) {n-=1; window.open(`${midURLarr[n]}`)}

let gallURLarr = ["https://www.youtube.com/watch?v=mtn6RCzvQ68", 
"https://www.youtube.com/watch?v=gK9m30bTqao", 
"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8423669",
"https://www.youtube.com/watch?v=gCLM4LmuNSQ",
"https://www.insidehighered.com/audio/2021/03/09/ep-40-higher-ed%E2%80%99s-new-digital-divide",
"https://www.pids.gov.ph/details/news/in-the-news/addressing-the-education-crisis",
"https://www.youtube.com/watch?v=rSWbgNAgAE8",
"https://www.youtube.com/watch?v=oWJHzI-poGM",
"http://e-asianwomen.org/_common/do.php?a=full&b=12&bidx=2514&aidx=28634"]
function gallURL(n) {n-=1; window.open(`${gallURLarr[n]}`)}

let artURLarr = ["https://www.change.org/p/i-support-accessible-bayan-making-accessible-websites-apps-for-pwds-in-the-philippines",
"https://www.asianjournal.com/philippines/across-the-islands/pwds-in-ph-continue-to-face-discrimination/",
"https://www.cnnphilippines.com/news/2020/12/3/ncda-persons-with-disabilities-accessibility.html",
"https://wethinkdigital.fb.com/learning/ph/",
"https://www.unicef.org/philippines/press-releases/filipino-children-continue-missing-education-opportunities-another-year-school",
"https://interaksyon.philstar.com/politics-issues/2022/08/08/224499/crisis-in-education-pinoys-fret-over-philippines-high-learning-poverty-rate/",
"https://www.facebook.com/GirlUpPhilippines/",
"https://www.usnews.com/news/best-countries/articles/2022-01-13/digital-divide-is-greatest-difference-between-younger-older-generations",
"https://www.weforum.org/agenda/2022/08/womens-education-digital-divide/"]
function artURL(n) {n-=1; window.open(`${artURLarr[n]}`)}

function siteURL() {window.open("https://angpagtawidsakawad.wixsite.com/kable")}

// MEMBER CAPTIONS
function captionSlide() {}
// pass in html number which one. then just assign new css