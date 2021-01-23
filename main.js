// Add ordinal suffixes to any positive integer
// https://stackoverflow.com/a/39466341
function nth(n) {
  return ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'
}

function since(date = '03/15/20') {
  let then = new Date(date)
  let now = new Date()

  let difference_in_time = now.getTime() - then.getTime()
  let difference_in_days = Math.round(difference_in_time / (1000 * 3600 * 24))

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
