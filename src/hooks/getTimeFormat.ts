export function getTimeFormat(time: string): string {
    const Time = time.split(' ')[0]
    let res = ``
    time.split(' ')[1] === 'AM'
        ? Time.split(':')[0] === '12' ?res = `00:${Time.split(':')[1]}` : res = Time
        : res = `${parseInt(Time.split(':')[0]) + 12}:${Time.split(':')[1]}`
    return res
}