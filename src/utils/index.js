export const decodeEmoji = str => {
  var ret
  try {
    ret = decodeURIComponent(atob(str).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''))
  } catch (e) {
    ret = decodeURIComponent(str)
  }
  return ret || str
}

export const parseHTML = (str) => {
  if (!str) return ''
  str = decodeEmoji(str).replace(/\&lt;/g, '<').replace(/\&gt;/g, '>')
  str = str.replace(/&nbsp;/g, ' ').replace(/\\=\"\"/g, '')
  str = str.replace(/\<img/g, '<img class="rich-img"')
  return str
}