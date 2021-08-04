module.exports = (installmets) => {
    const DAY_IN_MILISECONDS = 86400000 
    const MONTH = 30
    const NULL = 0
    let date = ''

    !installmets ? 
    date = new Date(Date.now() + (DAY_IN_MILISECONDS * (MONTH * NULL)))
    :
    date = new Date(Date.now() + (DAY_IN_MILISECONDS * (MONTH * installmets)))

    return date
}