const userPoints = [0, 0]
const pointsUser0 = document.getElementById("user-points-0")
const pointsUser1 = document.getElementById("user-points-1")
const form = document.getElementById("form")
const resetButton = document.getElementById("reset-button")

if(localStorage.getItem('points0') != null) {
    userPoints[0] = Number(localStorage.getItem('points0'))
}
if(localStorage.getItem('points1') != null) {
    userPoints[1] = Number(localStorage.getItem('points1'))
}
setPoints(userPoints)
if(getCookie('password') == null) {
    document.cookie = 'password' + '=' + prompt("Passwort eingeben:")
}

function addPoints(data) {
    userPoints[Number(data.user)] += Number(data.points);
}
function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    if(match) {
        return match[2];
    }
}
function setPoints(points) {
    pointsUser0.innerText = points[0]
    localStorage.setItem('points0', points[0])
    pointsUser1.innerText = points[1]
    localStorage.setItem('points1', points[1])
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    addPoints(data)
    setPoints(userPoints)
    console.log(userPoints)
})
resetButton.addEventListener("click", (e) => {
    e.preventDefault()
    document.cookie = 'password='
    document.cookie = 'password' + '=' + prompt("Passwort eingeben:")
})
