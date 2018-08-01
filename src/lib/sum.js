import reduce from './reduce'
import add from './add'

export const sum = reduce(add, 0)

export default sum
