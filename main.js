// Add ordinal suffixes to any positive integer
// https://stackoverflow.com/a/39466341
function nth(n) {
  return ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'
}

function since(date = '03/11/20') {
  const LEAP_YEAR_OFFSET = 1
  let then = new Date(date)
  let now = new Date()

  let difference_in_time = now.getTime() - then.getTime() 
  let difference_in_days = Math.round(difference_in_time / (1000 * 3600 * 24))
  difference_in_days = difference_in_days - LEAP_YEAR_OFFSET 

  let suffix = nth(difference_in_days)

  return {
    days: difference_in_days,
    suffix: suffix
  }
}

function twURL(text, url = 'https://itsmarch.wtf') {
  let baseurl = 'https://twitter.com/intent/tweet'
  let text_component = encodeURIComponent(text)
  let url_component = encodeURIComponent(url)
  return `${baseurl}?text=${text_component}&url=${url_component}`
}

document.documentElement.dataset.loading = 'true'

let { days, suffix } = since()

document.querySelector('#since').innerHTML = days + suffix
document.querySelector('#days').innerHTML = days
document.querySelector('#share').href = twURL(`It's March ${days + suffix}*`)

/**
 * 
 * @param {String} x 
 * @param {String} y 
 */

function makeKim(x, y) {
  const el = document.createElement("img")
  el.src = "/kim-cursor.png"
  el.className = "kim"

  el.style.setProperty("--y-pos", y)
  el.style.setProperty("--x-pos", x)

  document.body.appendChild(el)

  setTimeout(() => {
    document.body.removeChild(el)
  }, 500);
}

document.addEventListener("mousemove", (e) => {
  let count = 0
  if (count > 12) return

  const el = document.createElement("img")
  el.src = "./kim-cursor.png"
  el.className = "kim"

  
  el.style.setProperty("--x-pos", `${e.pageX}px`)
  el.style.setProperty("--y-pos", `${e.pageY}px`)
  document.body.appendChild(el)

  count++

  setTimeout(() => {
    document.body.removeChild(el)
    count--
  }, 500);
})