let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()

const day = document.querySelector('.calendar-dates')
const currdate = document.querySelector('.calendar-current-date')
const prenexIcons = document.querySelectorAll('.calendar-navigation span')
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getDay = (year, month, day) => new Date(year, month, day).getDay()
const getLastDate = (year, month) => new Date(year, month + 1, 0).getDate()

const manipulate = () => {
  const dayOne = getDay(year, month, 1)
  const lastDate = getLastDate(year, month)
  const dayEnd = getDay(year, month, lastDate)
  const monthLastDate = getLastDate(year, month - 1)

  let lit = ''
  for (let i = dayOne; i > 0; i--) {
    lit += `<li class="inactive">${monthLastDate - i + 1}</li>`
  }
  for (let i = 1; i <= lastDate; i++) {
    const isToday =
      i === date.getDate() &&
      month === date.getMonth() &&
      year === date.getFullYear()
        ? 'active'
        : ''
    lit += `<li class="${isToday}">${i}</li>`
  }
  for (let i = dayEnd; i < 6; i++) {
    lit += `<li class="inactive">${i - dayEnd + 1}</li>`
  }
  currdate.innerText = `${months[month]} ${year}`
  day.innerHTML = lit
}

manipulate()

prenexIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    month = icon.id === 'calendar-prev' ? month - 1 : month + 1
    if (month < 0) {
      month = 11
      year--
    } else if (month > 11) {
      month = 0
      year++
    }
    date = new Date(year, month, 1)
    manipulate()
  })
})
