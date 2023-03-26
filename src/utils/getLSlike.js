export default function getLSlike () {
    const tracks = JSON.parse(localStorage.getItem('likes'))
    return tracks
}